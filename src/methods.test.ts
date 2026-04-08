import { describe, it, expect } from "vitest";
import * as methods from "./methods";
import {
  HttpMethod_GET,
  HttpMethod_POST,
  HttpMethod_PUT,
  HttpMethod_PATCH,
  HttpMethod_DELETE,
  HttpMethod_HEAD,
  HttpMethod_OPTIONS,
} from "./methods";

const allValues = Object.values(methods);

describe("HttpMethod — integrity", () => {
  it("has no duplicate values", () => {
    const unique = new Set(allValues);
    expect(unique.size).toBe(allValues.length);
  });

  it("all values are non-empty uppercase strings with only letters and hyphens", () => {
    for (const value of allValues) {
      expect(typeof value).toBe("string");
      expect(value).toMatch(/^[A-Z][A-Z0-9-]*$/);
    }
  });
});

describe("HttpMethod — spot checks", () => {
  it.each([
    [HttpMethod_GET, "GET"],
    [HttpMethod_POST, "POST"],
    [HttpMethod_PUT, "PUT"],
    [HttpMethod_PATCH, "PATCH"],
    [HttpMethod_DELETE, "DELETE"],
    [HttpMethod_HEAD, "HEAD"],
    [HttpMethod_OPTIONS, "OPTIONS"],
  ] as const)("%s === %s", (constant, expected) => {
    expect(constant).toBe(expected);
  });
});

describe("HttpMethod — usage", () => {
  it("can be used as the method in a fetch RequestInit", () => {
    const init: RequestInit = { method: HttpMethod_POST };
    expect(init.method).toBe("POST");
  });

  it("can be compared against an incoming request method string", () => {
    const incomingMethod: string = "DELETE";
    expect(incomingMethod === HttpMethod_DELETE).toBe(true);
    expect(incomingMethod === HttpMethod_GET).toBe(false);
  });

  it("can be used to route requests by method", () => {
    function handle(method: string): string {
      if (method === HttpMethod_GET) return "read";
      if (method === HttpMethod_POST) return "create";
      if (method === HttpMethod_PUT) return "replace";
      if (method === HttpMethod_PATCH) return "update";
      if (method === HttpMethod_DELETE) return "delete";
      return "unknown";
    }
    expect(handle("GET")).toBe("read");
    expect(handle("POST")).toBe("create");
    expect(handle("DELETE")).toBe("delete");
    expect(handle("FOOBAR")).toBe("unknown");
  });
});
