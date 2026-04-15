import * as http from "@evozong/http-helpers-ts";

// Only HttpMethod_GET and HttpResponseCode_Ok are used.
// After bundling, only these two constants will appear in the output —
// the rest of the library (methods, status codes, headers, media types) is dropped.
async function fetchUsers(): Promise<unknown> {
  const response = await fetch("/api/users", { method: http.HttpMethod_GET });

  if (response.status === http.HttpResponseCode_Ok) {
    return response.json();
  }

  throw new Error(`Unexpected status: ${response.status}`);
}

fetchUsers().then(console.log).catch(console.error);
