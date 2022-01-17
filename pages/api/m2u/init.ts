import type { NextApiRequest, NextApiResponse } from "next";

async function requestInit() {
  // Header params
  const appVersion = "8.6";
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
  const minSupportedVersion = 1.1; // this version and above is supporte
  const updateShortcut = minSupportedVersion > clientVersion;

  if (updateShortcut === true) {
    return res.status(403).json({
      updateShortcut,
      message:
        "You're running an older awwallet which has outdated.\nTo continue using awwallet, please update to the latest version. Visit wwww.awwallet.vercel.app/update",
    });
  }

  const init_result = await requestInit();
  return res.status(200).json(init_result);
}
