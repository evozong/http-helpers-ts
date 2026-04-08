# http-helpers-ts

The HTTP Helpers TypeScript library provides constants for the HTTP protocol documented in the IANA Registry. The library **supports tree-shaking**, which means that unused exports will not be included in your final build, making your ts bundle smaller and more efficient.

The helpers library currently supports the following HTTP constants:

| Type | Prefix | Example |
|---|---|---|
| HTTP Methods | `HttpMethod_` | GET, POST, ... |
| HTTP Response Codes | `HttpResponseCode_` | Ok, NoContent, ... |
| HTTP Header Field Names | `HttpHeader_` | Accept, Authorization, Content-Type, ... |

All constants are retrieved from IANA registry, ensuring only the officially supported values are supported. Each constant also provides documentation summarized from their RFC.

Since only the variable names are exported, names are prepended with the type of constant to prevent collisions.

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
