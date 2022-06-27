# Instantiation

The first step in using the SDK is setting up an authenticated instance.

We use an `async` function since we need to `await` the asynchronus authentication service response. Internally the `login` function will cache the returned the authentication token and use it for subsequent requests. As well as it will handle re-issuing a token when the one in use expires.

_All API requests must be authenticated_

## User Level Authentication

The SDK has user level authentication meaning the actions allowed against the instance will depend on the role and privileges of the user account you authenticate with.

For example; If the user account you instantiate the SDK with has a role of contributor you will be able to create and update content items but **will not** be able to delete or publish content items.

**When using the SDK we recommend these 2 things for authenticating.**

1. An account created specifically for using with the SDK&#x20;
2. The role of `developer` for the SDK user

### [async/await syntax](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async\_await)

```javascript
async function authedSDK() {
  try {
    const auth = new SDK.Auth();
    const session = await auth.login(
      process.env.ZESTY_USER_EMAIL,
      process.env.ZESTY_USER_PASSWORD
    );

    return new SDK(process.env.ZESTY_INSTANCE_ZUID, session.token);
  } catch (err) {
    console.error(err)
    // Handle errors. e.g. send to logging service
    // re throw error
    throw err
  }
}
const instance = await authedSDK()
```

### [Promise syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using\_promises)

```javascript
const auth = new SDK.Auth();
const sdk = auth.login(
  process.env.ZESTY_USER_EMAIL,
  process.env.ZESTY_USER_PASSWORD
).then(session => {
  return new SDK(process.env.ZESTY_INSTANCE_ZUID, session.token);
}).catch(err => {
  console.error(err)
  // Handle errors. e.g. send to logging service
  // re throw error
  throw err
})
```
