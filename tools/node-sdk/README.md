---
description: Zesty.io Software developer kit (SDK) with Node SDK
---

# Node SDK

This is a basic example of how to setup an authenticated SDK instance and request data.

\*Requires [Nodejs](https://nodejs.org/) installed on your system.

1\) Use a package manager to install the SDK. e.g. `npm install @zesty-io/sdk`

2\) Create an example file

```javascript
// example/basic/index.js

const SDK = require("@zesty-io/sdk");

// !!! Do not commit your password to a repository. This needs to stay secret.
// We only have you enter it here for simplicity of the example.
// Add your user email, password and instance ZUID
const ZESTY_USER_EMAIL = "";
const ZESTY_USER_PASSWORD = "";
const ZESTY_INSTANCE_ZUID = "";

async function main() {
  // Get authenticated session
  const auth = new SDK.Auth();
  const session = await auth.login(ZESTY_USER_EMAIL, ZESTY_USER_PASSWORD);

  // Instantiate sdk instance with instance ZUID and authenticated session token
  const sdk = new SDK(ZESTY_INSTANCE_ZUID, session.token);

  // Request instance data
  const res = await sdk.instance.getModels();

  // View our response data in the console
  console.log(res.data);
}

// Run the function
main();
```

3\) Run the example with `node index.js`

{% content-ref url="instantiation.md" %}
[instantiation.md](instantiation.md)
{% endcontent-ref %}

## Further explanations of the example code

1. [Instantiation of an authenticated instance](instantiation.md)
2. [Requesting instance data](instantiation.md)
