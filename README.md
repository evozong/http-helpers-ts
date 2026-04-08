# http-helpers-ts

The HTTP Helpers TypeScript library has been written to support tree-shaking, which means that unused exports will not be included in your final build, making it more efficient!

The helpers library currently supports the following HTTP constants:
1. HTTP Methods (GET, POST, ...)
2. HTTP Response Codes (OK, NoContent, ...)

Each constant also contains documentation help summarized from their IANA specification.

Since only the variable names are exported, names are still prepended with the type of constant to prevent collisions.

## Installation
Since the library only contains exported values, you can include it as a dev dependency instead of a runtime dependency.

```sh
npm install -D @evozong/http-helpers-ts
```

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

## Compiled outputs

If you only use HttpMethod_GET and HttpResponseCode_Ok, you'll see that these are the only 2 exported `var`s in the compiled js:

```sh
npm run build
```

```js
// node_modules/@evozong/http-helpers-ts/dist/index.js
var HttpMethod_GET = "GET";
var HttpResponseCode_Ok = 200;
// Nothing else is included!
```

## Publishing this package

```sh
npm login
npm publish --access public
```
