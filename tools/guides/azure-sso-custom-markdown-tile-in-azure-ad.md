---
description: >-
  This document is a guide on how to create a dashboard or update an existing
  dashboard with custom markdown tile in Microsoft Entra ID (previously Azure
  AD) to do an Azure SSO in Zesty.io
---

# Azure SSO Custom Markdown Tile in Azure AD

## Supported Features

* IdP-initiated Single Sign-On (SSO) in Azure AD
* Support user login to Zesty from [Azure Portal](https://portal.azure.com/)
* Automatic account creation in Zesty.io on initial SSO

## Requirements

* User creating the custom dashboard that will contain a tile link in Azure Portal for each AD organization must have the [Microsoft.Portal/Dashboards/Write](https://learn.microsoft.com/en-us/azure/azure-portal/azure-portal-dashboard-share-access#understand-access-control-for-dashboards) permission (Owner and Contributor roles have this permission) to create the custom dashboard, publish it and share to assign access
* Email that will be used to login in Zesty.io MUST match the email registered in in the Azure AD organization

## Configuration Steps

1. Login to [Azure Portal](https://portal.azure.com/#home)
2. In the sidebar, go to Dashboard&#x20;
3. The custom markdown tile can be added in an existing dashboard or on a new dashboard.&#x20;

For creating a new dashboard, follow the [#creating-a-new-dashboard](azure-sso-custom-markdown-tile-in-azure-ad.md#creating-a-new-dashboard "mention") and continue with the [#creating-the-custom-markdown-tile](azure-sso-custom-markdown-tile-in-azure-ad.md#creating-the-custom-markdown-tile "mention").&#x20;

For adding the markdown tile in an existing dashboard, skip the [#creating-a-new-dashboard](azure-sso-custom-markdown-tile-in-azure-ad.md#creating-a-new-dashboard "mention") and continue with [#creating-the-custom-markdown-tile](azure-sso-custom-markdown-tile-in-azure-ad.md#creating-the-custom-markdown-tile "mention").

### Creating a new dashboard

* Click Create button
* Select Custom

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-04 at 3.44.24 PM.png" alt=""><figcaption><p>Creating a dashboard in Azure Portal</p></figcaption></figure>

* Rename the dashboard to Zesty.io

### Creating the custom markdown tile

* Add a markdown tile

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-04 at 3.46.00 PM.png" alt=""><figcaption><p>Renaming the dashboard name and adding a markdown tile</p></figcaption></figure>

* Edit markdown with the following details:
  * Title - leave as blank
  * Subtitle - leave as blank
  * Content - Inline editing using this HTML

{% code overflow="wrap" fullWidth="false" %}
```html
<div style='display:flex;flex-direction:column;justify-content:center;align-items:center;'>
    <a href='https://auth.api.zesty.io/azure/login'><img src='https://brand.zesty.io/zesty-io-logo.png' style='height:70px;'/></a>
    <h2>Zesty.io</h2>
</div>
```
{% endcode %}

{% hint style="info" %}
&#x20;The markdown details are fully customizable. The only important detail to add is the link of the tile/button to use [**https://auth.api.zesty.io/azure/login**](https://auth.api.zesty.io/azure/login)
{% endhint %}

* Save the markdown and the dashboard created/updated
* Publish the dashboard by clicking Share

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-04 at 4.02.10 PM.png" alt=""><figcaption><p>Publishing a dashboard</p></figcaption></figure>

* Once the dashboard is published, go to Manage sharing > Access control
* Go to Add > Role assignment and select roles and members to grant access to the dashboard
* Once roles and members are selected, click Review + assign

<figure><img src="../../.gitbook/assets/Screenshot 2024-04-04 at 4.04.37 PM.png" alt=""><figcaption><p>Dashboard Role and member assignment</p></figcaption></figure>

## Notes

* Users who haven’t used their email in Zesty will have a new account created for them.
* Zesty user roles and permissions are managed in Zesty per instance
  * Roles are assigned when inviting a user to a instance in Zesty

## Resources

* Creating an Azure dashboard: [https://learn.microsoft.com/en-us/azure/azure-portal/azure-portal-dashboards](https://learn.microsoft.com/en-us/azure/azure-portal/azure-portal-dashboards)
* Using a custom markdown tile: [https://learn.microsoft.com/en-us/azure/azure-portal/azure-portal-markdown-tile](https://learn.microsoft.com/en-us/azure/azure-portal/azure-portal-markdown-tile)
* Sharing Azure portal dashboard: [https://learn.microsoft.com/en-us/azure/azure-portal/azure-portal-dashboard-share-access](https://learn.microsoft.com/en-us/azure/azure-portal/azure-portal-dashboard-share-access)
* Microsoft Entra roles: [https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/)
