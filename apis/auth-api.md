---
description: Authenticate API for Zesty.io Users
---

# Auth API

Auth API is used to authenticate users with Zesty.io, which returns a token that grants to access services like Instances API, Accounts API, and Media API. Auth was setup as a stand alone service so it could connect to many services in our platform.

Permissions are managed at the service level, for example, to manage permissions on instances, you would use the [Accounts API](https://accounts-api.zesty.org/) to do so

See Rest Documentation: [https://auth-api.zesty.org/?version=latest](https://auth-api.zesty.org/?version=latest)

## Developer Tokens

In addition to authentication through the Auth API, users may create a semi-permanent Developer Token to access the APIs. A Developer Token is a value that represents a Role and is used to make requests to the APIs. When users perform requests with a Developer Token, it's as if they were performing the requests with the same privileges as that Role. This allows users to make requests to the APIs without having to login; once the Developer Token is created, it is valid until its expiration date. To get the Roles available on an Instance, use the [Get Instance Roles](https://accounts-api.zesty.org/?version=latest#e2ac76b2-244c-4570-9734-8e48288e3477) endpoint which will return you all the Roles (and their IDs) associated with the Instance. A Token may be associated with any Role, however **only Admins and Owners on an Instance can issue Tokens**. The Developer Token is then used in place of a Session Token when making API requests.

To create and manage your Developer Tokens, please see [Accounts API Tokens](https://accounts-api.zesty.org/?version=latest#2d602695-3f14-44c2-b97a-212c402250f6).

{% hint style="info" %}
**Please note:** The value for the Developer Token will **only** be visible upon creation; please store it in a safe location.
{% endhint %}

