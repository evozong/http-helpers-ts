import { describe, it, expect } from "vitest";
import * as headers from "./header-names";
import {
  HttpHeader_Accept,
  HttpHeader_Authorization,
  HttpHeader_CacheControl,
  HttpHeader_ContentLength,
  HttpHeader_ContentType,
  HttpHeader_Cookie,
  HttpHeader_ETag,
  HttpHeader_Host,
  HttpHeader_Location,
  HttpHeader_SetCookie,
  HttpHeader_StrictTransportSecurity,
  HttpHeader_UserAgent,
} from "./header-names";

const allValues = Object.values(headers);

// RFC 7230 token: visible ASCII excluding delimiters
const HTTP_HEADER_NAME_REGEX = /^[A-Za-z0-9!#$%&'*+\-.^_`|~]+$/;

describe("HttpHeader — integrity", () => {
  it("has no duplicate values", () => {
    const unique = new Set(allValues);
    expect(unique.size).toBe(allValues.length);
  });

  it("all values are non-empty strings containing only valid RFC 7230 token characters", () => {
    for (const value of allValues) {
      expect(typeof value).toBe("string");
      expect(value).toMatch(HTTP_HEADER_NAME_REGEX);
    }
  });

  it("no value has leading or trailing whitespace", () => {
    for (const value of allValues) {
      expect(value).toBe(value.trim());
    }
  });
});

describe("HttpHeader — spot checks", () => {
  it.each([
    [HttpHeader_Accept, "Accept"],
    [HttpHeader_Authorization, "Authorization"],
    [HttpHeader_CacheControl, "Cache-Control"],
    [HttpHeader_ContentLength, "Content-Length"],
    [HttpHeader_ContentType, "Content-Type"],
    [HttpHeader_Cookie, "Cookie"],
    [HttpHeader_ETag, "ETag"],
    [HttpHeader_Host, "Host"],
    [HttpHeader_Location, "Location"],
    [HttpHeader_SetCookie, "Set-Cookie"],
    [HttpHeader_StrictTransportSecurity, "Strict-Transport-Security"],
    [HttpHeader_UserAgent, "User-Agent"],
  ] as const)("%s === %s", (constant, expected) => {
    expect(constant).toBe(expected);
  });
});

describe("HttpHeader — usage", () => {
  it("can be used as keys in a fetch headers object", () => {
    const requestHeaders: Record<string, string> = {
      [HttpHeader_ContentType]: "application/json",
      [HttpHeader_Authorization]: "Bearer token123",
      [HttpHeader_Accept]: "application/json",
    };
    expect(requestHeaders["Content-Type"]).toBe("application/json");
    expect(requestHeaders["Authorization"]).toBe("Bearer token123");
  });

  it("can be used to read values from a Headers object", () => {
    const responseHeaders = new Headers({
      [HttpHeader_ContentType]: "application/json; charset=utf-8",
      [HttpHeader_ETag]: '"abc123"',
      [HttpHeader_CacheControl]: "max-age=3600",
    });
    expect(responseHeaders.get(HttpHeader_ContentType)).toBe(
      "application/json; charset=utf-8"
    );
    expect(responseHeaders.get(HttpHeader_ETag)).toBe('"abc123"');
    expect(responseHeaders.get(HttpHeader_CacheControl)).toBe("max-age=3600");
  });

  it("can be used to build a fetch RequestInit", () => {
    const init: RequestInit = {
      method: "POST",
      headers: {
        [HttpHeader_ContentType]: "application/json",
        [HttpHeader_Authorization]: "Bearer token123",
      },
      body: JSON.stringify({ hello: "world" }),
    };
    const initHeaders = init.headers as Record<string, string>;
    expect(initHeaders[HttpHeader_ContentType]).toBe("application/json");
  });

  it("can be used to check for a specific header in a response", () => {
    const responseHeaders = new Headers({
      [HttpHeader_Location]: "https://example.com/new-resource",
    });
    expect(responseHeaders.has(HttpHeader_Location)).toBe(true);
    expect(responseHeaders.has(HttpHeader_ContentType)).toBe(false);
  });
});
