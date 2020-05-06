---
Title: Instances API
description: A REST API for interacting with your instance resources.
---

# Instances API

Every instance created in Zesty.io can be interacted with over https using the instance [API](https://en.wikipedia.org/wiki/Application_programming_interface) (Application Programming Interface). When an instance is created it is assigned a [ZUID](https://github.com/zesty-io/zuid-specification) (Zesty Universal IDentifier). Using this ZUID the instances API can be requested with the following URL pattern.

```
ZUID.api.zesty.io/v1/
```

The instance API is implemented as a [REST](https://restfulapi.net/) (REpresentational State Transfer) architecture. It allows for [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) (Create, Read, Update, Delete) operations on the requested instance.

{% hint style="info" %}
Complete API Reference: [https://instances-api.zesty.org](https://instances-api.zesty.org)
{% endhint %}


There can be many consumers of the Instances API. For example; the [manager-ui](https://zesty.org/services/manager-ui) consumes your instances API to provide it's functionality. Another common example is making instances API requests as part of a [CI/CD](https://en.wikipedia.org/wiki/Continuous_integration) (Continuous Intergration/Continuous Development) flow.


## Access Permissions

Instance access is restricted by a [roles & permissions](https://zesty.org/getting-started/roles-and-permissions) system. Accessing an instance with the API requires making an authenticated request. Which is a request that includes an `Authentication` header which contains either a [user session or an access token](https://zesty.org/apis/auth-api). Which one you use will depend upon your use case and needs.


# Tooling

## Node SDK

The [node-sdk](https://www.npmjs.com/package/@zesty-io/sdk) is the primary tool for interacting with Zesty.io platform resources. It can be used to programatically manage an instance.

