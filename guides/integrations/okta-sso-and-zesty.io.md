# Okta SSO and Zesty.io

This document is a guide on how to configure [Okta](https://help.okta.com/en-us/Content/Topics/Apps/apps-about-sso.htm#:~:text=The%20Okta%20app%20integrations%20in,without%20re%2Dentering%20their%20credentials.) as the Identity Provider to facilitate SSO with Zesty.io application.

## Supported Features

* Single Sign-On (OpenID Connect) initiated via Okta
* Support user login to the application from Zesty.io login page for Zesty.io customers that use Okta for their identity and access management
* Automatic account creation in Zesty.io on initial SSO

## Requirements

* User should have access to an [Okta tenant](https://developer.okta.com/docs/guides/oin-oidc-multi-tenancy/main/#tenants-in-okta)
* User should be an [Okta administrator to that tenant](https://help.okta.com/en-us/Content/Topics/Security/Administrators.htm)
* Make sure the email that will be used to login in Zesty.io matches the email used in Okta

## Configuration Steps

1. Install Zesty.io application in Okta instance
2. In the Okta admin page, click on the Zesty.io application and then go to ***"Sign On"*** tab
3. Copy the values of **Client ID** and **Client Secret**
* Client ID is a public identifier for the client that is required in OIDC/OAuth flows
* Client Secret is a private identifier that SHOULD NOT BE SHARED
* Tenant’s own Client ID and Client Secret will be used as authentication is specific within that tenant only. In Okta, a unique identity concept is specific to the tenant that is used to authenticate the user. 
4. Under ***"General"*** tab, find the **Okta domain** (or **Issuer URL**) which is the URL of the Okta tenant being accessed
5. Assign people or group who can use the Zesty.io SSO application in ***"Assign"*** section

## Notes

* Zesty.io’s integration with Okta can only be used for user authentication. 
* For more information, see the [Okta SSO Spec](https://docs.google.com/document/d/1F_my2NdL3mkdsGio0d3qKB6PBncsfNVYfCNDJ-KoIDA/edit).