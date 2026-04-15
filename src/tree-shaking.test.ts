import * as esbuild from "esbuild";
import { describe, it, expect } from "vitest";

// Resolve dist/ relative to this file's location (src/ → ../dist).
const distDir = new URL("../dist", import.meta.url).pathname;

async function bundle(entryContents: string): Promise<string> {
  const result = await esbuild.build({
    stdin: {
      contents: entryContents,
      resolveDir: distDir,
    },
    bundle: true,
    write: false,
    treeShaking: true,
    platform: "browser",
    format: "esm",
  });
  return result.outputFiles[0].text;
}

const APP_USING_TWO_CONSTANTS = `
import * as http from "./index.js";
export async function fetchUsers() {
  const r = await fetch("/api/users", { method: http.HttpMethod_GET });
  if (r.status === http.HttpResponseCode_Ok) return r.json();
  throw new Error("unexpected status: " + r.status);
}
`;

describe("tree-shaking", () => {
  it("only includes accessed constants when using import * as http", async () => {
    const output = await bundle(APP_USING_TWO_CONSTANTS);

    expect(output).toContain("HttpMethod_GET");
    expect(output).toContain("HttpResponseCode_Ok");

    expect(output).not.toContain("HttpMethod_POST");
    expect(output).not.toContain("HttpResponseCode_NotFound");
    expect(output).not.toContain("HttpHeader_");
    expect(output).not.toContain("HttpMediaType_");
  });
});
