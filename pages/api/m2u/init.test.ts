import handler, { requestInit } from "./init";
import { createMocks } from "node-mocks-http";

describe("/api/m2u/init", () => {
  it("should returns 200", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        v: "1.1",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
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
});
