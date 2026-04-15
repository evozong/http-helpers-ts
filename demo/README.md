# Tree-shaking demo

`app.ts` imports all constants from the library, but only uses two of them. Run this demo to see that the bundled output contains only those two constants — nothing else from the library is included.

## Run

```sh
npm install
npm run demo
```

## Expected output

```js
"use strict";
(() => {
  // ../dist/methods.js
  var HttpMethod_GET = "GET";

  // ../dist/status-codes.js
  var HttpResponseCode_Ok = 200;

  // app.ts
  async function fetchUsers() { ... }
  fetchUsers().then(console.log).catch(console.error);
})();
```

That's it. Despite the library containing hundreds of HTTP methods, status codes, header names, and media types, the bundle only includes the two constants that `app.ts` actually uses.
