---
description: Authenticate API for Zesty.io Users
---

# Auth API

Authentication with Zesty.io is handled by the Auth API which issues a token that grants access to the [Instances API](https://github.com/zesty-io/zesty-org/tree/235f491605bc0837da2a305c282d907ccab019a7/apis/instances-rest-api/README.md), [Accounts API](accounts-api/), and [Media API](auth-api.md).

{% hint style="info" %}
Complete Auth REST API Documentation: [https://auth-api.zesty.org](https://auth-api.zesty.org/?version=latest)
{% endhint %}

Roles and permission are managed by the [Accounts API](https://accounts-api.zesty.org/).

There are 2 types of authentication

* User 
* Token-based

## User Authentication

User authentication is done by providing a specific user account email and password combination. When authenticating as a user you are issued a session token. These are short lived 30 minute sessions that are extended whenever an authenticated action is taken. e.g. Saving content.

Ending a user authenticated session can be done by explicitly logging out. This ends the specifically referenced session. i.e. If you are logged in on another device it will not end that session.

## Token-based Authentication

Token-based authentication is handled by the [Accounts API](https://accounts-api.zesty.org/?version=latest#2d602695-3f14-44c2-b97a-212c402250f6). The issued access tokens are opaque, meaning they can not be parsed to determine their underlying properties such as; role, instance or owner. They are valid for 90 days from creation. In order to create an access token you must have an authenticated user session. Only users with **Admin** or **Owner** roles of an instance can issue a token.

Access tokens are assigned a role and roles are scoped to instances. Allowing them to take user like actions on the scoped instances. e.g. Creating, Publishing, etc... Tokens can be assigned existing system roles or a custom role defined on an instance. Custom roles are encouraged as they allow providing only the specific access a token needs. Reducing the potential impact of a leaked token.

{% hint style="info" %}
**Please Note:** The value of access token will **only** be visible upon creation; please store it in a safe location.
{% endhint %}

Every access token is assigned a role which describes the permissions the token has against it's scoped instances.

{% hint style="info" %}
**Please Note:** An access token is a secret which should be guarded carefully and every precaution taken to avoid leaking them. Simply having a token allows the holder that tokens scoped access.
{% endhint %}

If you want to find out the available roles on an instance use the [Get Instance Roles](https://accounts-api.zesty.org/?version=latest#e2ac76b2-244c-4570-9734-8e48288e3477) endpoint which will return all the roles \(and their IDs\) associated with the Instance.

Access tokens are useful for automated API usage. e.g. CI/CD flows, migrating content, connecting third-party services, etc...

All actions taken with an access token is recorded by the [AuditTrail API](https://instances-api.zesty.org/?version=latest#026123c3-086e-42bd-9eda-86c2b5de33a2), similiar to users. AuditTrail logs will note the _name_ of the token which was used for the action. These logs will not contain user information. Meaning if a token is used in a manual process, e.g. running a script, the log will not indicate the person who ran that process.

Revoking tokens can be done with the Accounts API. If a token is exposed it should be cycled by deleting the token and creating a new one.

