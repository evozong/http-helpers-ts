import { describe, it, expect } from "vitest";
import * as mediaTypes from "./media-types";
import {
  HttpMediaType_Application_Json,
  HttpMediaType_Application_OctetStream,
  HttpMediaType_Application_Pdf,
  HttpMediaType_Application_Xml,
  HttpMediaType_Audio_Mpeg,
  HttpMediaType_Font_Woff2,
  HttpMediaType_Image_Jpeg,
  HttpMediaType_Image_Png,
  HttpMediaType_Image_Webp,
  HttpMediaType_Multipart_FormData,
  HttpMediaType_Text_Css,
  HttpMediaType_Text_Html,
  HttpMediaType_Text_Javascript,
  HttpMediaType_Text_Plain,
  HttpMediaType_Video_Mp4,
} from "./media-types";

const allValues = Object.values(mediaTypes);

// RFC 7231 media-type: type "/" subtype
// Allows uppercase (e.g. audio/AMR, video/H264) and special chars in subtype
const MIME_TYPE_REGEX = /^[A-Za-z0-9][A-Za-z0-9!#$%&'*+\-.^_`|~]*\/[A-Za-z0-9][A-Za-z0-9!#$%&'*+\-.^_`|~]*$/;

describe("HttpMediaType — integrity", () => {
  it("has no duplicate values", () => {
    const unique = new Set(allValues);
    expect(unique.size).toBe(allValues.length);
  });

  it("all values are non-empty strings matching the MIME type format", () => {
    for (const value of allValues) {
      expect(typeof value).toBe("string");
      expect(value).toMatch(MIME_TYPE_REGEX);
    }
  });

  it("no value has leading or trailing whitespace", () => {
    for (const value of allValues) {
      expect(value).toBe(value.trim());
    }
  });
});

describe("HttpMediaType — spot checks", () => {
  it.each([
    [HttpMediaType_Application_Json, "application/json"],
    [HttpMediaType_Application_OctetStream, "application/octet-stream"],
    [HttpMediaType_Application_Pdf, "application/pdf"],
    [HttpMediaType_Application_Xml, "application/xml"],
    [HttpMediaType_Audio_Mpeg, "audio/mpeg"],
    [HttpMediaType_Font_Woff2, "font/woff2"],
    [HttpMediaType_Image_Jpeg, "image/jpeg"],
    [HttpMediaType_Image_Png, "image/png"],
    [HttpMediaType_Image_Webp, "image/webp"],
    [HttpMediaType_Multipart_FormData, "multipart/form-data"],
    [HttpMediaType_Text_Css, "text/css"],
    [HttpMediaType_Text_Html, "text/html"],
    [HttpMediaType_Text_Javascript, "text/javascript"],
    [HttpMediaType_Text_Plain, "text/plain"],
    [HttpMediaType_Video_Mp4, "video/mp4"],
  ] as const)("%s === %s", (constant, expected) => {
    expect(constant).toBe(expected);
  });
});

describe("HttpMediaType — usage", () => {
  it("can be used as the Content-Type value in a fetch RequestInit", () => {
    const init: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": HttpMediaType_Application_Json,
      },
      body: JSON.stringify({ hello: "world" }),
    };
    const headers = init.headers as Record<string, string>;
    expect(headers["Content-Type"]).toBe("application/json");
  });

  it("can be used to compare against an incoming Content-Type string", () => {
    const incoming: string = "application/json";
    expect(incoming === HttpMediaType_Application_Json).toBe(true);
    expect(incoming === HttpMediaType_Text_Plain).toBe(false);
  });

  it("can be used to set the Accept header", () => {
    const requestHeaders = new Headers({
      Accept: HttpMediaType_Application_Json,
    });
    expect(requestHeaders.get("Accept")).toBe("application/json");
  });

  it("can be used to route handling by content type", () => {
    function handle(contentType: string): string {
      if (contentType === HttpMediaType_Application_Json) return "json";
      if (contentType === HttpMediaType_Text_Html) return "html";
      if (contentType === HttpMediaType_Multipart_FormData) return "form";
      return "unknown";
    }
    expect(handle("application/json")).toBe("json");
    expect(handle("text/html")).toBe("html");
    expect(handle("multipart/form-data")).toBe("form");
    expect(handle("application/octet-stream")).toBe("unknown");
  });
});
