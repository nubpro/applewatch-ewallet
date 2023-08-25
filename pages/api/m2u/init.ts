import type { NextApiRequest, NextApiResponse } from "next";

class ErrorResponse extends Error {
  statusCode: number;
  body: { message: string };

  constructor(message = "Internal server error", statusCode = 500) {
    super(message);
    const body = {
      message: message + "\n\n(Please report this issue on awwallet group)",
      updateShortcut: false,
    };

    this.body = body;
    this.statusCode = statusCode;
  }
}

export const CURRENT_APPVERSION: string = "10.0";

export async function requestInit(appVersion = CURRENT_APPVERSION) {
  // Header params
  const platformVersion = "6.0.0";
  const userAgent = "M2U%20MY/1.0 CFNetwork/1312 Darwin/21.0.0";

  const headers = {
    Host: "m2umobile.maybank2u.com.my:443",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-wl-app-version": appVersion,
    "x-wl-platform-version": platformVersion,
    "Accept-Language": "en-GB,en;q=0.9",
    "User-Agent": userAgent,
    Cookie: "", // clear cookie
  };

  const url =
    "https://m2umobile.maybank2u.com.my/RMBPMY/apps/services/api/RMBP/iphone/init";

  const res = await fetch(url, {
    method: "POST",
    headers,
  });

  if (res.status === 403) {
    // Forbidden
    throw new ErrorResponse("Service is unavailable", 503);
  } else if (res.status !== 401) {
    // 401 is all good and that is the expected response
    // dont even bother with 200, 200's body is empty
    throw new ErrorResponse("M2U init not returning 401");
  }

  const raw = await res.text();
  const cleaned = raw.replace("/*-secure-", "").replace("*/", "");
  const data = JSON.parse(cleaned);

  const cookies = res.headers.get("set-cookie")?.replace(/,/g, ";");
  const instanceId = data["challenges"]["wl_antiXSRFRealm"]["WL-Instance-Id"];
  const deviceToken =
    data["challenges"]["wl_deviceNoProvisioningRealm"]["token"];

  return {
    cookies,
    instanceId,
    deviceToken,
    appVersion,
    platformVersion,
    userAgent,
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const clientVersion = Number(req.query.v) || 1.0;
  const minSupportedVersion = 1.1; // this version and above is supported
  const updateShortcut = minSupportedVersion > clientVersion;

  if (updateShortcut === true) {
    return res.status(403).json({
      updateShortcut,
      message:
        "You're running an older awwallet which has outdated.\nTo continue using awwallet, please update to the latest version. Visit wwww.awwallet.vercel.app/update",
    });
  }

  try {
    const init_result = await requestInit();
    return res.status(200).json(init_result);
  } catch (error) {
    console.error(error);
    if (error instanceof ErrorResponse) {
      return res.status(error.statusCode).json(error.body);
    }

    // default error
    return res.status(500).json(new ErrorResponse().body);
  }
}
