# Okta SSO and Zesty.io

This document is a guide on how to configure [Okta](https://help.okta.com/en-us/Content/Topics/Apps/apps-about-sso.htm#:~:text=The%20Okta%20app%20integrations%20in,without%20re%2Dentering%20their%20credentials.) as the Identity Provider to facilitate SSO with Zesty.io application.

## Supported Features

* IdP-initiated Single Sign-On ([OIDC](https://openid.net/connect/)) via Okta
* Support user login to Zesty from Okta end-user dashboard
* Automatic account creation in Zesty.io on initial SSO

## Requirements

* User should have access to an [Okta tenant](https://developer.okta.com/docs/guides/oin-oidc-multi-tenancy/main/#tenants-in-okta)
* User registering the organization’s client_id, client_secret and client_domain in Zesty MUST have an admin or owner role
* Email that will be used to login in Zesty.io MUST match the email registered in Okta

## Configuration Steps

1. Install Zesty.io application in Okta instance
2. In the Okta admin page, click on the Zesty.io application and go to ***"Sign On"*** tab
3. Copy the values of **Client ID** and **Client Secret**
* Client ID is a public identifier for the client that is required in OIDC/OAuth flows
* Client Secret is a private identifier that SHOULD NOT BE SHARED
4. Get your organization’s **Okta domain** (or **Issuer URL**) which can be found in the top-right dropdown button under your email
* Domain SHOULD CONTAIN **https://** i.e. https://org.okta.com
5. Assign people or group who can use the Zesty.io SSO application in ***"Assign"*** section
6. Zesty admin MUST register their organization’s **Client ID**, **Client Secret** and **Client Domain** in Zesty
* To register, use Zesty’s Create Okta Org API as seen below, replacing the actual values for ecosystem_id, client_id, client_secret and client_domain
* The Zesty user who will register the organization’s secrets MUST be an existing Zesty user with **admin** or **owner** role

```
curl --location 'https://accounts.api.zesty.io/v1/oktaorg' \
--header 'Authorization: Bearer token' \
--header 'Content-Type: application/json' \
--data
'{
    "oktaorg_zuid": "ecosystem_zuid",
    "client_id": "client_id",
    "client_secret": "client_secret",
    "client_domain": "client_domain"
}'
```

## Notes

* Zesty.io’s integration with Okta can only be used for user authentication.
Users who haven’t used their email in Zesty will have a new account created for them with the default role.
All permissions and roles will be updated within Zesty.