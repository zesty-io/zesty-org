> Most of the time you will not need to interact with the `auth-api` directly. The process of authentication and re-authentication is handle internally in the SDK.

## `login`
The login function takes 2 parameters a user email and password. It then talks to the `auth-api` to get a session token for the provided user credentials.

### parameters
* `email`
* `password`

### response
```
```

## `verifyToken`
Given a session `token` this function will talk with the `auth-api` to ensure the provide token is a valid session.

### parameters
* `token` 

### response
```
```