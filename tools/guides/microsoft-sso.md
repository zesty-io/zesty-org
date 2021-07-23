---
description: You may log into Zesty.io using Microsoft Single-On
---

# Microsoft Single Sign-On \(SSO\)

{% hint style="warning" %}
Once you've logged in via Microsoft SSO your account is tied to Microsoft SSO login and you must always login using this method.
{% endhint %}

To log in to Zesty.io using Microsoft SSO click the **Sign in with Microsoft** button which is located below the login form at [https://accounts.zesty.io/login](https://accounts.zesty.io/login)

![The Microsoft SSO button is located below the user/password form located at https://accounts.zesty.io/login](../../.gitbook/assets/image%20%281%29.png)

### For Organizations

Organizations that have enterprise licensing with Zesty.io may choose to have new account creation be blocked on a email domain basis thus forcing new users to use Microsoft SSO.

Once a user in your organization connects to Zesty.io with Microsoft SSO users may be deleted them from your Azure organization to prevent them from logging in again.

#### Synchronized Permissions

**Permissions are not synchronized** with Microsoft Active Directory. Single Sign-On login is only available once your organization's Microsoft Active Directory admin has allowed the [Zesty.io](http://zesty.io/) application.

You can streamline permission access by using Teams in Zesty.io, which enables you to add a single team to an instance under specific roles and permissions. Adding and removing a user from a Team is the best way to cascade access. Learn more about [Teams](../../services/accounts-ui/teams.md).

{% page-ref page="../../services/accounts-ui/teams.md" %}



