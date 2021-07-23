---
description: >-
  The Instance Settings interface provides administrative control over
  publishing domains, vanity domains, users and team access, access tokens, and
  blueprints.
---

# Instance Settings

### Overview

After creating your instance you will be redirected to that instance's Settings displayed in the Account Manager. You can also access settings by selecting any of your currently created instance from the Account Manager. The Instance Settings configure key aspects of your project including:

* Domain & DNS configuration
* Zesty vanity domains
* User and Team access
* Access token creation
* View selected and change blueprint

### Domain & DNS Configuration

Here you can added in your owned custom domains and D

![](../.gitbook/assets/image%20%2883%29.png)

### Zesty Vanity Domains

You can create domains using the default 'zesty.dev' vanity domain. These can be create in a live or dev environment by selecting the live or dev branch from the dropdown.  

{% hint style="info" %}
Zesty vanity domain example: myblog.zesty.dev
{% endhint %}

* **Live domains:** will display only the published content
* **Dev domains:** will display the latest draft of your content which will include published content and updated/new content that has been saved as a version but not yet published

![Zesty live and dev vanity domains](../.gitbook/assets/image%20%28102%29.png)

### ZUID & Instance Details

Each instance created with a ZUID \(Zesty.io Unique Identifier\). This number creates accessibility to your instance. It will be used when running API calls, seeking support, and more. 

Additional details regarding your instance are provided as well, shown below: 

![Instance details located in Instance Settings](../.gitbook/assets/image%20%2881%29.png)

### Adding Users and Teams

Each instance will need users and/or a team added. The user that creates the instance is giving ownership and may add in the desired users/team. Users are assigned a role, which governs their control in the instance. 

{% hint style="info" %}
[Roles & Permissions](../getting-started/roles-and-permissions.md#base-roles-types) provides a breakdown of each role and their access reach
{% endhint %}

![User invite and role selection ](../.gitbook/assets/image%20%2865%29.png)

{% hint style="info" %}
Teams will need to be created prior to adding them -- [Team creation instructions](../services/accounts-ui/teams.md#overview)
{% endhint %}

![Team invite](../.gitbook/assets/image%20%2868%29.png)

### Access Tokens

Access tokens can be created for a variety of uses. Including to gain access to your instance via Atom IDE plugin, Node SDK as well as other workflows. 

These will need to be renewed every 90 days and can be so directly in the instance settings as shown below.

![Access Token Creation](../.gitbook/assets/image%20%2895%29.png)

### Blueprints 

From this interface you can view the blueprint that was chosen for the instance on creation. You may change the blueprint that was chosen by selecting the Change Blueprint button, however it will reset the instance. If you wish to change your blueprint after creation try to do so before adding content to avoid any loss of work.

{% hint style="danger" %}
**Warning:** Changing your Blueprint after the creation of an instance will cause the instance to be reset and content, code, etc. to be removed. If you do not want to lose the contents of your instance **do not** change your blueprint.
{% endhint %}

![](../.gitbook/assets/image%20%2888%29.png)

### Next Steps

After configuring your project, you can begin adding your content and creating your views. Continue to Content Manager for more information.

