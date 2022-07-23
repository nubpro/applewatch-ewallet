import handler, { requestInit, CURRENT_APPVERSION } from "./init";
import { createMocks } from "node-mocks-http";

describe("/api/m2u/init", () => {
  it("should returns status 200", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        v: "1.1",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });

  it("should returns error when client's shortcut version is outdated", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        v: "0.1", // outdated version
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(403);
    expect(JSON.parse(res._getData())).toEqual({
      updateShortcut: true,
      message:
        "You're running an older awwallet which has outdated.\nTo continue using awwallet, please update to the latest version. Visit wwww.awwallet.vercel.app/update",
    });
  });
});

describe("requestInit()", () => {
  it("should returns payload successfully", async () => {
    const response = await requestInit();

    expect(response).toHaveProperty("cookies");
    expect(response).toHaveProperty("instanceId");
    expect(response).toHaveProperty("deviceToken");
    expect(response).toHaveProperty("appVersion");
    expect(response).toHaveProperty("platformVersion");
    expect(response).toHaveProperty("userAgent");
  });

  it("should fail due to invalid app version", async () => {
    const appVersion = "100000";
    expect.assertions(1);
    await expect(requestInit(appVersion)).rejects.toMatchObject({
      statusCode: 500,
      message: "M2U init not returning 401",
    });
  });

  const upcomingAppVersion = (parseFloat(CURRENT_APPVERSION) + 0.1).toFixed(1);
  it(`should fail due to using upcoming unreleased app version (${upcomingAppVersion})`, async () => {
    expect.assertions(1);
    await expect(requestInit(upcomingAppVersion)).rejects.toMatchObject({
      statusCode: 500,
      message: "M2U init not returning 401",
    });
  });
});
