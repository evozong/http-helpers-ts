# http-helpers-ts

The [`http-helpers-ts`](https://www.npmjs.com/package/@evozong/http-helpers-ts) library provides constants commonly used in HTTP APIs. Three things distinguish it from similar libraries on npm:

1. The library supports tree-shaking, ensuring that unused constants are not exported into your final build, bloating your code bundle.
2. The constants are sourced from the **[IANA Protocol Registry](https://www.iana.org/protocols)**, ensuring that all the *officially supported* values are covered in the library.
3. Documentation for each value is summarized directly from the RFC, and the documentation includes a link to the RFC and section that specified the value, giving you direct access to the source of truth for each value.

![Hover tooltip showing HttpMethod_GET with its RFC summary and a link to RFC 9110 Section 9.3.1](https://raw.githubusercontent.com/evozong/http-helpers-ts/refs/heads/main/README-img-documentation.png)

## Installation
You can install the library as a dev dependency, as it can be compiled away entirely:

```sh
npm install -D @evozong/http-helpers-ts
```

## Supported Constants
The current version (v1.0.0) covers four common sets of constants. Pull Request contributions to support more sets of constants are welcome 😃.

| Type | Prefix | Example |
|---|---|---|
| HTTP Methods | `HttpMethod_` | GET, POST, ... |
| HTTP Response Codes | `HttpResponseCode_` | Ok, NoContent, ... |
| HTTP Header Field Names | `HttpHeader_` | Accept, Authorization, Content-Type, ... |
| HTTP Media Types (MIME Types) | `HttpMediaType_` | application/json, image/png, text/html, ... |

## Usage

### HTTP Methods

```ts
import * as http from "@evozong/http-helpers-ts";

fetch("/api/users", { method: http.HttpMethod_GET });
fetch("/api/users", { method: http.HttpMethod_POST, body: JSON.stringify(data) });
```

### HTTP Response Codes

```ts
import * as http from "@evozong/http-helpers-ts";

if (response.status === http.HttpResponseCode_Ok) {
  // handle success
} else if (response.status === http.HttpResponseCode_Unauthorized) {
  // redirect to login
} else if (response.status === http.HttpResponseCode_NotFound) {
  // show 404 page
}
```

### HTTP Header Field Names

```ts
import * as http from "@evozong/http-helpers-ts";

fetch("/api/users", {
  method: "POST",
  headers: {
    [http.HttpHeader_ContentType]: "application/json",
    [http.HttpHeader_Authorization]: "Bearer token123",
    [http.HttpHeader_Accept]: "application/json",
  },
  body: JSON.stringify(data),
});

// Read a specific header from a response
const etag = response.headers.get(http.HttpHeader_ETag);
const cacheControl = response.headers.get(http.HttpHeader_CacheControl);
```

### HTTP Media Types

```ts
import * as http from "@evozong/http-helpers-ts";

fetch("/api/data", {
  headers: {
    "Content-Type": http.HttpMediaType_Application_Json,
    "Accept": http.HttpMediaType_Application_Json,
  },
  body: JSON.stringify(data),
});

// Compare against an incoming Content-Type
if (contentType === http.HttpMediaType_Multipart_FormData) {
  // parse form data
}
```

Note: Due to the large number of Media Types, only ~900 non-vendor types from the IANA registry are included. Vendor-prefixed (`vnd.*`), personal (`prs.*`), unregistered (`x-*`), deprecated, and obsolete types are excluded.

## Compiled outputs

If you only use HttpMethod_GET and HttpResponseCode_Ok, you'll see that these are the only 2 exported `var`s in the compiled js:

```sh
npm run build
```

```js
// node_modules/@evozong/http-helpers-ts/dist/methods.js
var HttpMethod_GET = "GET";

// node_modules/@evozong/http-helpers-ts/dist/status-codes.js
var HttpResponseCode_Ok = 200;

// Nothing else is included!
```

## Contributions
If you find that some of the supported constants are out of date, update the file and create a Pull Request, I will merge and publish a new version.

Feel free to also create support for more HTTP constants! There are too many in the IANA registry, I did not import them all.

## Publishing this package
Publishing is done through Github Actions. A build and publish workflow has been set up to trigger when a commit has a "v*" tag. To publish a new version:

1. Make sure you update package.json to the right version number!
2. Create a tag over the commit to be pushed.
3. Push to main.

```sh
npm login
npm publish
```
