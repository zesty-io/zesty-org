---
description: >-
  This document is a guide on how to configure Okta as the Identity Provider to
  facilitate SSO with Zesty.io application
---

# Okta SSO Configuration Guide

## Supported Features

* IdP-initiated Single Sign-On ([OIDC](https://openid.net/connect/)) via Okta
* Support user login to Zesty from Okta end-user dashboard
* Automatic account creation in Zesty.io on initial SSO

## Requirements

* User should have access to an [Okta tenant](https://developer.okta.com/docs/guides/oin-oidc-multi-tenancy/main/#tenants-in-okta)
* User registering the organization’s client\_id, client\_secret and client\_domain in Zesty MUST have an admin or owner role
* Email that will be used to login in Zesty.io MUST match the email registered in Okta

## Configuration Steps

1. Install Zesty.io application in Okta instance
2. In the Okta admin page, click on the Zesty.io application and go to _**"Sign On"**_ tab
3. Copy the values of **Client ID** and **Client Secret**
   * Client ID is a public identifier for the client that is required in OIDC/OAuth flows
   * Client Secret is a private identifier that SHOULD NOT BE SHARED
4. Get your organization’s **Okta domain** (or **Issuer URL**) which can be found in the top-right dropdown button under your email
   * Domain SHOULD CONTAIN **https://** i.e. https://org.okta.com
5. Assign people or group who can use the Zesty.io SSO application in _**"Assign"**_ section
6. Zesty admin MUST register their organization’s **Client ID**, **Client Secret** and **Client Domain** in Zesty
   * The Zesty user who will register the organization’s secrets MUST be an existing Zesty user with **admin** or **owner** role
   * 3 steps to accomplish this: [get token](okta-sso-configuration-guide.md#get-token), [get ecosystem\_zuid](okta-sso-configuration-guide.md#get-ecosystem\_zuid) and [register](okta-sso-configuration-guide.md#register)

### **Get token**

1. If you have an access token created for your instance in Zesty with owner or admin role (see [How to create Access Token](https://zesty.org/quick-start-guide/instance-settings#access-tokens)), this could be used as the token for [get ecosystem\_zuid](okta-sso-configuration-guide.md#get-ecosystem\_zuid) and [register](okta-sso-configuration-guide.md#register) steps. If you have no access token, you can use Zesty's [Login API](https://auth-api.zesty.org/#28b40e26-196b-4283-a483-40a5b537bc22) as seen below, replacing the email and password with your credentials in [https://www.zesty.io/](https://www.zesty.io/)&#x20;

```powershell
curl --location 'https://auth.api.zesty.io/login' \
--form 'email="email"' \
--form 'password="password"'
```

2. This will return the token that will be used in the next steps. See example response below:

```json
{
    "message": "Logged in successfully.",
    "status": "OK",
    "data": {
        "data": "token"
    },
    "meta": {
        "userZuid": "5-000000-000000",
        "token": "token"
    },
    "code": 200
}
```

{% hint style="info" %}
For users with SSO (single sign-on) enabled, there is currently no support for getting a token, creating an access token and using that for [get ecosystem\_zuid](okta-sso-configuration-guide.md#get-ecosystem\_zuid) and [register](okta-sso-configuration-guide.md#register) steps can be used instead.
{% endhint %}

### **Get ecosystem\_zuid**

1. Use Zesty’s [Get Ecosystems API](https://accounts-api.zesty.org/#750eb50b-c53c-44aa-aa4a-b0b1199fb4bf) as seen below, replacing the token for Authorization (obtained in [get token](okta-sso-configuration-guide.md#get-token) step)

```powershell
curl --location 'https://accounts.api.zesty.io/v1/ecosystems' \
--header 'Authorization: Bearer token'
```

{% hint style="info" %}
This API requires the user to have access to an instance. You will not get an ecosystem\_zuid unless you have access to an instance in an ecosystem
{% endhint %}

2. This will return the Ecosystems you have access to in JSON format, select one ZUID in the data returned and use that as the ecosystem\_zuid in [register](okta-sso-configuration-guide.md#register) step.

Sample Response:

```json
{
    "_meta": {
        "timestamp": "2023-03-29T03:07:28.911229564Z",
        "totalResults": 2,
        "start": 0,
        "offset": 0,
        "limit": 2
    },
    "data": [
        {
            "ZUID": "ecosystem_zuid_1",
            "name": "name",
            "description": null,
            "orgID": null,
            "createdByUserZUID": "user_zuid",
            "updatedByUserZUID": "user_zuid",
            "createdAt": "2023-03-23T06:23:57Z",
            "updatedAt": "2023-03-23T06:23:57Z"
        },
        {
            "ZUID": "ecosystem_zuid_1",
            "name": "name",
            "description": null,
            "orgID": null,
            "createdByUserZUID": "user_zuid",
            "updatedByUserZUID": "user_zuid",
            "createdAt": "2023-03-23T06:39:41Z",
            "updatedAt": "2023-03-23T06:39:41Z"
        }
    ]
}
```

### **Register**

1. Use Zesty’s [Create Okta API](https://accounts-api.zesty.org/#357198d6-6dd3-4002-ba02-f04e94985fcb) as seen below, replacing the actual values for ecosystem\_zuid (obtained in [get ecosystem\_zuid](okta-sso-configuration-guide.md#get-ecosystem\_zuid) step), client\_id, client\_secret, client\_domain (from Okta) and token for Authorization (obtained in [get token](okta-sso-configuration-guide.md#get-token) step)
2. To know if the organization’s client information was successfully registered, the API will respond with status **“OK”**

```powershell
curl --location 'https://accounts.api.zesty.io/v1/vendors/okta' \
--header 'Authorization: Bearer token' \
--header 'Content-Type: application/json' \
--data
'{
    "ecosystem_zuid": "ecosystem_zuid",
    "client_id": "client_id",
    "client_secret": "client_secret",
    "client_domain": "client_domain"
}'
```

## Notes

* Zesty.io’s integration with Okta can only be used for user authentication.
* Users who haven’t used their email in Zesty will have a new account created for them with the default role.
* All permissions and roles will be updated within Zesty.
* Okta users can authenticate in Zesty from the Okta end-user dashboard via the Zesty application button
