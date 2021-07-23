---
description: >-
  The Instance Settings Drawer contains a lot of an instance's information and
  settings including ZUID, users, team, blueprint, and more.
---

# Instance Settings Drawer

### Overview

The Instance Settings Drawer contains many of an instances general settings. Any user who has access to the instance has access to the Instance Settings Drawer. The following items can be accessed via this drawer: 

* Buttons to access Content Manager, preview and live links
* Domain name and DNS instructions
* General instance information:
  * Name
  * ZUID
  * Created on date
  * Updated on date
  * Legacy Hash and Numeric IDs
* User Access
* Team Access
* Access Tokens
* Blueprint Settings
  * Blueprint name
  * GitHub Link
  * Change blueprint button

### Accessing the Instance Settings Drawer

Access the Instance Settings Drawer via the cog icon on an instance's card in the all-instance's grid view. Click the icon and a drawer will slide out from the right-hand side of the screen.

![Access instance settings by clicking the cog icon on the instance card.](../../.gitbook/assets/instance-settings-cog-icon.png)

From the all-instances list view, simply select an instance from the list and the settings will be shown in the right-hand portion of the screen.

![Access instance settings by selecting an instance from the list.](../../.gitbook/assets/instance-settings-access-instance-settings-drawer.png)

### Instance Settings Drawer Tour

The full Instance Settings drawer is shown in full below. 

![Instance Settings Drawer.](../../.gitbook/assets/instance-settings-drawer-full.png)

We'll review each section with a short description below.

#### Buttons to access CMS, preview and live links

![Access to the CMS, preview and live links.](../../.gitbook/assets/01-cms-preview-live-links.png)

From left to right there is a:

* Button to access the Content Manger
* Preview link
* Live link

These links are also available from the instance card and instance list in the all-instances view.

#### Domain name and DNS instructions

![Instance Settings Drawer general domain settings section.](../../.gitbook/assets/02-domain-settings.png)

The domain settings include a field to set your domain name, as well as brief DNS instructions.

#### General instance information:

![Instance Settings Drawer general instance information section.](../../.gitbook/assets/03-general-information.png)

The general information from top to bottom and left to right is:

* Instance Name
* Created On date
* Updated On date
* Instance ZUID
* Numeric ID \(Legacy\)
* Hash ID \(Legacy\)

#### User Access

![Instance Settings Drawer User Access section.](../../.gitbook/assets/04-user-access.png)

The User Access section allows users to be invited to access the instance. When a user is invited to access an instance their role is set as well.

#### Team Access

![Instance Settings Drawer Team Access section.](../../.gitbook/assets/05-team-access.png)

The Team Access section allows for teams to be added to an instance. 

{% hint style="info" %}
Teams are not created in this section. Learn more about Team creation with this [guide](https://zesty.org/guides/adding-a-team).
{% endhint %}

#### Access Tokens

![Instance Settings Drawer Access Tokens section.](../../.gitbook/assets/06-access-tokens.png)

The Access Tokens section allow for access tokens to be created for use with the Atom IDE as well as other workflows. 

#### Blueprint

![Instance Settings Drawer Blueprint section.](../../.gitbook/assets/07-blueprint.png)

The Blueprint section allows users to change their blueprint. 

{% hint style="danger" %}
When a blueprint is changed a user will lose all of their content, code, etc. If you do not want to lose the contents of your instance **do not** change your blueprint. 
{% endhint %}

It also shows the blueprint's name and cover image, and links to its repository on Github.

