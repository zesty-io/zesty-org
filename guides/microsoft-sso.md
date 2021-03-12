---
description: You may log into Zesty.io using Microsoft Single-On
---

# Microsoft SSO

You may log into Zesty.io using Microsoft Single-On, do this by clicking the Microsoft button which is located below the login form at [https://accounts.zesty.io/login](https://accounts.zesty.io/login)

![The Microsoft SSO button is located below the user/password form located at https://accounts.zesty.io/login](../.gitbook/assets/image%20%281%29.png)

Once you login via Microsoft SSO, you account is tied to Microsoft SSO login, and you must always login using this method.

### For Organizations

Organization who have enterprise licensing with Zesty.io may choose to have new account creation be blocked on a per email domain basis. This would force new users to use Microsoft SSO.

Once a user in your organization connects to Zesty.io with Microsoft SSO, you may deleted them from your Org in Azure to prevent them from logging in again.

#### Synchronized Permissions

**Permissions are not synchronized** with Microsoft Active Directory. Only Single Sign On login is available, once the users SSOs,  access permission for that user must be set in Zesty.io by an admin or owner level account on a per instance basis.

You can streamline permission access by using Teams in Zesty.io, which enables you to add a single team to a content instance under specific roles and permissions. Adding and removing a user from a team is the best way to cascade access. Learn more about [teams](../services/accounts-ui/teams.md).

{% page-ref page="../services/accounts-ui/teams.md" %}



