---
description: Authenticate API for Zesty.io Users
---

# Auth API

Auth API is used to authenticate users with Zesty.io, which returns a token that grants to access services like Instances API, Accounts API, and Media API. Auth was setup as a stand alone service so it could connect to many services in our platform.

Permissions are managed at the service level, for example, to manage permissions on instances, you would use the [Accounts API](https://accounts-api.zesty.org/) to do so

See Rest Documentation: [https://auth-api.zesty.org/?version=latest](https://auth-api.zesty.org/?version=latest)

## Developer Tokens

In addition to authentication through the Auth API, users may create a static Developer Token to access the APIs. Users with Admin access to an Instance may create a Developer Token and associate it with a Role; this Token will then grant access to the APIs without having to login. This Developer Token is then passed in as an *Authorization* header to all requests in place of a Session Token. 

**Please note:** The value for the Developer Token will **only** be visible upon creation; please store it in a safe location.

To create and manage your Developer Tokens, please see [Accounts API Tokens](https://accounts-api.zesty.org/?version=latest#2d602695-3f14-44c2-b97a-212c402250f6). 
