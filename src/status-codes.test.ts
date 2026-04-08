import { describe, it, expect } from "vitest";
import * as statusCodes from "./status-codes";
import {
  HttpResponseCode_Ok,
  HttpResponseCode_Created,
  HttpResponseCode_NoContent,
  HttpResponseCode_MovedPermanently,
  HttpResponseCode_NotModified,
  HttpResponseCode_BadRequest,
  HttpResponseCode_Unauthorized,
  HttpResponseCode_Forbidden,
  HttpResponseCode_NotFound,
  HttpResponseCode_TooManyRequests,
  HttpResponseCode_InternalServerError,
  HttpResponseCode_ServiceUnavailable,
} from "./status-codes";

const allValues = Object.values(statusCodes);

describe("HttpResponseCode — integrity", () => {
  it("has no duplicate values", () => {
    const unique = new Set(allValues);
    expect(unique.size).toBe(allValues.length);
  });

  it("all values are numbers in the valid HTTP status code range (100–599)", () => {
    for (const value of allValues) {
      expect(typeof value).toBe("number");
      expect(value).toBeGreaterThanOrEqual(100);
      expect(value).toBeLessThanOrEqual(599);
    }
  });
});

describe("HttpResponseCode — spot checks", () => {
  it.each([
    [HttpResponseCode_Ok, 200],
    [HttpResponseCode_Created, 201],
    [HttpResponseCode_NoContent, 204],
    [HttpResponseCode_MovedPermanently, 301],
    [HttpResponseCode_NotModified, 304],
    [HttpResponseCode_BadRequest, 400],
    [HttpResponseCode_Unauthorized, 401],
    [HttpResponseCode_Forbidden, 403],
    [HttpResponseCode_NotFound, 404],
    [HttpResponseCode_TooManyRequests, 429],
    [HttpResponseCode_InternalServerError, 500],
    [HttpResponseCode_ServiceUnavailable, 503],
  ] as const)("%d === %d", (constant, expected) => {
    expect(constant).toBe(expected);
  });
});

describe("HttpResponseCode — usage", () => {
  it("can be compared against a response status", () => {
    const mockResponse = { status: 200 };
    expect(mockResponse.status === HttpResponseCode_Ok).toBe(true);
    expect(mockResponse.status === HttpResponseCode_NotFound).toBe(false);
  });

  it("can be used to classify responses by status range", () => {
    function classify(status: number): string {
      if (status >= 200 && status < 300) return "success";
      if (status >= 300 && status < 400) return "redirect";
      if (status >= 400 && status < 500) return "client error";
      if (status >= 500) return "server error";
      return "informational";
    }
    expect(classify(HttpResponseCode_Ok)).toBe("success");
    expect(classify(HttpResponseCode_NotFound)).toBe("client error");
    expect(classify(HttpResponseCode_InternalServerError)).toBe("server error");
    expect(classify(HttpResponseCode_MovedPermanently)).toBe("redirect");
  });

  it("can be used in error handling logic", () => {
    function shouldRetry(status: number): boolean {
      return (
        status === HttpResponseCode_TooManyRequests ||
        status === HttpResponseCode_ServiceUnavailable ||
        status === HttpResponseCode_InternalServerError
      );
    }
    expect(shouldRetry(429)).toBe(true);
    expect(shouldRetry(503)).toBe(true);
    expect(shouldRetry(404)).toBe(false);
  });
});
