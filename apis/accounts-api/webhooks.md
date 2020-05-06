---
description: A description on Zesty Webhooks and how to use them in production.
---

# Webhooks

{% hint style="info" %}
**Open Perpetual Beta:** Webhooks are available to all instances. We plan on expanding the payload of the webhook to include the data an meta data of affected resource.  
{% endhint %}

### Introduction

Webhooks allow for actions performed within the Zesty.io platform to trigger external actions via RESTful HTTP API calls. An example of such a use case would be to send out email or text message alerts to customers when a new blog article being published. 

[REST API Documentation and Examples](https://accounts-api.zesty.org/?version=latest#f929ad7b-4bff-4f78-9376-ead64d158b9b)

### What Resources Listen for Webhooks

#### Instances API 

* Content Models
* Content Model Items
* Content Model Fields
* Views
* Stylesheets 
* Scripts
* Redirects
* Languages
* Instance Setting

#### Accounts API

* Role
* Instance Roles
* Instance Domains
* Invites

{% hint style="danger" %}
Webhook for Publish Actions do not trigger for any publish event greater than 30 days out.
{% endhint %}

{% api-method method="post" host="https://accounts.api.zesty.io" path="/v1/webhooks" %}
{% api-method-summary %}
Create Webhook
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows you to create webhooks.  
NOTE: To create a webhook, the authenticated user must have one or more the roles for the given instance:  
- Admin  
- Owner  
- Developer
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="description" type="string" required=false %}
A description about the webhook
{% endapi-method-parameter %}

{% api-method-parameter name="parentResourceZUID" type="string" required=false %}
A ZUID that corresponds to a resource that acts as a parent.  Some examples of parent resources include:  
{% endapi-method-parameter %}

{% api-method-parameter name="body" type="object" required=false %}
A JSON representation of webhook's request body. The `contentType` parameter will determine how the body will be sent.
{% endapi-method-parameter %}

{% api-method-parameter name="authorization" type="string" required=false %}
The authorization token that will be sent as part of your webhook request. This corresponds to the `authorization` header in the HTTP request.  
Any provided authorization token will automatically be used as a Bearer token.  
Ex. `authorization: Bearer ABCDEF123` 
{% endapi-method-parameter %}

{% api-method-parameter name="contentType" type="string" required=true %}
The type of content in the request your Webhook will send to the URL. This corresponds to the `content-type` HTTP header in the request your webhook will be sending.   
A valid content types is any one of the following:  
- `application/json`  
-`application/x-www-form-url-encoded`
{% endapi-method-parameter %}

{% api-method-parameter name="URL" type="string" required=true %}
The URL your webhook send its request to.
{% endapi-method-parameter %}

{% api-method-parameter name="method" type="string" required=true %}
The HTTP Method that the webhook will use on the URL.  
A valid HTTP Method is any of the following  
- `GET`  
- `POST`
{% endapi-method-parameter %}

{% api-method-parameter name="eventAction" type="number" required=true %}
A numerical value that represents an action on a resource.   
A valid action is any of the following  
- 1 Create   
- 2 Update  
- 3 Delete  
- 4 Publish  
- 5 Unpublish 
{% endapi-method-parameter %}

{% api-method-parameter name="scopedResourceZUID" type="string" required=true %}
A ZUID string that represents ant of the following entities:  
- Instance ZUID  
  
{% endapi-method-parameter %}

{% api-method-parameter name="resourceZUID" type="string" required=true %}
A ZUID that corresponds to any entity within Zesty  
 
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=201 %}
{% api-method-response-example-description %}
Webhook successfully created
{% endapi-method-response-example-description %}

```javascript
{
    "_meta": {
        "timestamp": "2019-12-12T18:48:36.6747159Z",
        "totalResults": 1,
        "start": 0,
        "offset": 0,
        "limit": 1
    },
    "data": {
        "ZUID": "40-9896f0a99a-zb0fdb",
        "scopedResource": "8-a0a29cebe6-32shdn",
        "eventAction": 1,
        "parentResourceZUID": null,
        "resource": "items",
        "method": "POST",
        "URL": "https://hooks.slack.com/services/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",
        "contentType": "application/json",
        "authorization": "",
        "body": {
            "text": "New item created for site 8-a0a29cebe6-32shdn"
        },
        "createdByUserZUID": "5-98a6a4-wz0tt8",
        "description": null,
        "createdAt": "2019-12-12T18:48:36.529346Z",
        "updatedAt": "2019-12-12T18:48:36.5293872Z"
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://accounts.api.zesty.io" path="/v1/instances/:instance\_zuid/webhooks" %}
{% api-method-summary %}
Retrieve Webhooks by Instance ZUID
{% endapi-method-summary %}

{% api-method-description %}
Retrieves a list of all webhooks.  
  
NOTE: To create a webhook, the authenticated user must have one or more the roles for the given instance:
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="instance\_zuid" type="string" required=true %}
Corresponds to an instance ZUID 
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "_meta": {
        "timestamp": "2019-12-12T20:01:26.8671069Z",
        "totalResults": 16,
        "start": 0,
        "offset": 0,
        "limit": 16
    },
    "data": [
        {
            "ZUID": "40-80ce8482e6-d05ng1",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 2,
            "parentResourceZUID": null,
            "resource": "domains",
            "method": "POST",
            "URL": "https://hooks.slack.com/services/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",
            "contentType": "application/json",
            "authorization": "",
            "body": {
                "text": "New domain has been added for site 8-a0a29cebe6-32shdn"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": "here is a description of my webhook",
            "createdAt": "2019-12-11T23:14:49Z",
            "updatedAt": "2019-12-11T23:14:49Z"
        },
        {
            "ZUID": "40-88e3d8969e-sm4g1q",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 4,
            "parentResourceZUID": null,
            "resource": "items",
            "method": "POST",
            "URL": "https://hooks.slack.com/services/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",
            "contentType": "application/json",
            "authorization": "",
            "body": {
                "text": "Item has been published for site 8-a0a29cebe6-32shdn"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": null,
            "createdAt": "2019-12-05T20:52:52Z",
            "updatedAt": "2019-12-05T20:54:41Z"
        },
        {
            "ZUID": "40-90d1d499ac-pdv87l",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 2,
            "parentResourceZUID": null,
            "resource": "domains",
            "method": "POST",
            "URL": "https://hooks.slack.com/services/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",
            "contentType": "application/json",
            "authorization": "",
            "body": {
                "text": "New domain has been added for site 8-a0a29cebe6-32shdn"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": null,
            "createdAt": "2019-12-11T23:14:24Z",
            "updatedAt": "2019-12-11T23:14:24Z"
        },
        {
            "ZUID": "40-90f2c0cf82-4f39d7",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 1,
            "parentResourceZUID": "6-56cf30-3nlbwn",
            "resource": "items",
            "method": "POST",
            "URL": "https://hooks.slack.com/services/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",
            "contentType": "application/json",
            "authorization": "",
            "body": {
                "text": "Created a new item for content model 6-56cf30-3nlbwn"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": null,
            "createdAt": "2019-12-04T21:20:55Z",
            "updatedAt": "2019-12-04T21:20:55Z"
        },
        {
            "ZUID": "40-9896f0a99a-zb0fdb",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 1,
            "parentResourceZUID": null,
            "resource": "items",
            "method": "POST",
            "URL": "https://hooks.slack.com/services/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",
            "contentType": "application/json",
            "authorization": "",
            "body": {
                "text": "New item created for site 8-a0a29cebe6-32shdn"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": null,
            "createdAt": "2019-12-12T18:48:36Z",
            "updatedAt": "2019-12-12T18:48:36Z"
        },
        {
            "ZUID": "40-a09bf5f2f8-h2mq51",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 2,
            "parentResourceZUID": null,
            "resource": "domains",
            "method": "POST",
            "URL": "https://hooks.slack.com/services/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",
            "contentType": "application/json",
            "authorization": null,
            "body": {
                "text": "New domain has been added for site 8-a0a29cebe6-32shdn"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": "here is a description of my webhook",
            "createdAt": "2019-12-11T23:37:28Z",
            "updatedAt": "2019-12-11T23:37:28Z"
        },
        {
            "ZUID": "40-b0a3ddef9d-hl8b7l",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 2,
            "parentResourceZUID": "",
            "resource": "items",
            "method": "POST",
            "URL": "https://hooks.slack.com/services/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",
            "contentType": "application/json",
            "authorization": "",
            "body": {
                "text": "Item for site 8-a0a29cebe6-32shdn has been updated"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": null,
            "createdAt": "2019-12-05T19:47:01Z",
            "updatedAt": "2019-12-05T19:47:01Z"
        },
        {
            "ZUID": "40-b0cfd19cc2-688bdg",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 2,
            "parentResourceZUID": null,
            "resource": "domains",
            "method": "POST",
            "URL": "https://hooks.slack.com/services/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",
            "contentType": "application/json",
            "authorization": "",
            "body": {
                "text": "New domain has been added for site 8-a0a29cebe6-32shdn"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": null,
            "createdAt": "2019-12-05T23:54:47Z",
            "updatedAt": "2019-12-05T23:54:47Z"
        },
        {
            "ZUID": "40-b8c0dab9aa-xd6tf9",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 2,
            "parentResourceZUID": null,
            "resource": "domains",
            "method": "POST",
            "URL": "https://hooks.slack.com/services/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",
            "contentType": "application/json",
            "authorization": "",
            "body": {
                "text": "New domain has been added for site 8-a0a29cebe6-32shdn"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": null,
            "createdAt": "2019-12-06T19:48:26Z",
            "updatedAt": "2019-12-06T19:48:26Z"
        },
        {
            "ZUID": "40-c0b78fd1e9-5zl5sm",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 1,
            "parentResourceZUID": "6-66bd1c-41krtg",
            "resource": "items",
            "method": "POST",
            "URL": "https://hooks.slack.com/services/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",
            "contentType": "application/json",
            "authorization": "",
            "body": {
                "text": "New Page Content model for site 8-a0a29cebe6-32shdn has been created"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": null,
            "createdAt": "2019-12-05T19:50:03Z",
            "updatedAt": "2019-12-05T19:50:03Z"
        },
        {
            "ZUID": "40-c8c9fdc3c6-4bxbxj",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 2,
            "parentResourceZUID": null,
            "resource": "domains",
            "method": "POST",
            "URL": "https://hooks.slack.com/services/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",
            "contentType": "application/json",
            "authorization": "",
            "body": {
                "text": "New domain has been added for site 8-a0a29cebe6-32shdn"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": null,
            "createdAt": "2019-12-06T19:06:25Z",
            "updatedAt": "2019-12-06T19:06:25Z"
        },
        {
            "ZUID": "40-e0b9e887cb-5kp21j",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 1,
            "parentResourceZUID": "6-f0fbdb8ca5-n46q46",
            "resource": "items",
            "method": "POST",
            "URL": "http://n4zkq1s52f.chm/ngs58",
            "contentType": "application/json",
            "authorization": "",
            "body": {
                "text": "bar"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": null,
            "createdAt": "2019-12-06T19:55:23Z",
            "updatedAt": "2019-12-06T19:55:23Z"
        },
        {
            "ZUID": "40-e8818d9a80-kqsf26",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 1,
            "parentResourceZUID": null,
            "resource": "items",
            "method": "POST",
            "URL": "https://hooks.slack.com/services/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",
            "contentType": "application/json",
            "authorization": "",
            "body": {
                "text": "New item created for site 8-a0a29cebe6-32shdn"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": null,
            "createdAt": "2019-12-12T00:17:35Z",
            "updatedAt": "2019-12-12T00:17:35Z"
        },
        {
            "ZUID": "40-e88693c0c5-3wp36q",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 2,
            "parentResourceZUID": null,
            "resource": "domains",
            "method": "POST",
            "URL": "https://hooks.slack.com/services/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",
            "contentType": "application/json",
            "authorization": "",
            "body": {
                "text": "New domain has been added for site 8-a0a29cebe6-32shdn"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": null,
            "createdAt": "2019-12-06T19:40:46Z",
            "updatedAt": "2019-12-06T19:40:46Z"
        },
        {
            "ZUID": "40-e89cf7919a-cssc0k",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 2,
            "parentResourceZUID": null,
            "resource": "domains",
            "method": "POST",
            "URL": "https://hooks.slack.com/services/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",
            "contentType": "application/json",
            "authorization": "",
            "body": {
                "text": "New domain has been added for site 8-a0a29cebe6-32shdn"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": null,
            "createdAt": "2019-12-06T19:48:24Z",
            "updatedAt": "2019-12-06T19:48:24Z"
        },
        {
            "ZUID": "40-f0e1cfacc7-m816ne",
            "scopedResource": "8-a0a29cebe6-32shdn",
            "eventAction": 4,
            "parentResourceZUID": "",
            "resource": "items",
            "method": "POST",
            "URL": "https://hooks.slack.com/services/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",
            "contentType": "application/json",
            "authorization": "",
            "body": {
                "text": "Item for site 8-a0a29cebe6-32shdn has been published"
            },
            "createdByUserZUID": "5-98a6a4-wz0tt8",
            "description": null,
            "createdAt": "2019-12-04T21:44:33Z",
            "updatedAt": "2019-12-09T23:20:44Z"
        }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://accounts.api.zesty.io" path="/v1/webhooks/:webhook\_zuid" %}
{% api-method-summary %}
Retrieve Webhook by ZUID
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="webhook\_zuid" type="string" required=true %}
Corresponds to the Webhook's Unique ZUID value
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "_meta": {
        "timestamp": "2019-12-16T18:35:53.383016928Z",
        "totalResults": 1,
        "start": 0,
        "offset": 0,
        "limit": 1
    },
    "data": {
        "ZUID": "40-cef081acb5-02t58c",
        "scopedResource": "8-a0a29cebe6-32shdn",
        "eventAction": 4,
        "parentResourceZUID": "6-885f58-1zcf1v",
        "resource": "items",
        "method": "POST",
        "URL": "https://hooks.slack.com/services/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",
        "contentType": "application/json",
        "authorization": "",
        "body": {
            "text": "Publish event 6-885f58-1zcf1v for item has been triggered"
        },
        "createdByUserZUID": "5-98a6a4-wz0tt8",
        "description": null,
        "createdAt": "2019-12-16T17:58:40Z",
        "updatedAt": "2019-12-16T17:58:40Z"
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="https://accounts.api.zesty.io" path="/v1/webhooks/:webhook\_zuid" %}
{% api-method-summary %}
Webhook Deletion
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="webhook\_zuid" type="string" required=true %}
Corresponds to the Webhook's Unique ZUID value
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "_meta": {
        "timestamp": "2019-12-16T18:39:00.305956275Z",
        "totalResults": 1,
        "start": 0,
        "offset": 0,
        "limit": 1
    },
    "data": {
        "ZUID": "40-cef081acb5-02t58c"
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### Webhook Conditions

Webhooks are executed by calling API endpoints.  In order to create webhooks that will be triggered and executed by API calls, create webhooks with the following parameters. When an action occurs, such as content item creation, a search for the corresponding webhook will occur.

#### Example: 

An item 7-ABCD-1234 corresponding to content model 6-ABCD-1234 has been updated in instance 8-ABCD-1234. Webhooks will be triggered based on the following action conditions.

* Update on an item with ZUID 7-ABCD-1234 on an instance with ZUID 8-ABCD-1234
* Update on any item belonging to content model 6-ABCD-1234 in instance 8-ABCD-1234
* Update on any item in instance 8-ABCD-1234

### Instances API Webhook

#### Create, Update, Delete and Publish Item**s**

| Condition | Scoped Resource | Parent Resource | Resource | Action | Request URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Creating a new item | INSTANCE\_ZUID |  | items | CREATE | POST /content/model/MODEL\_ZUID/items |
| Creating a new item for a given content model | INSTANCE\_ZUID | MODEL\_ZUID | items | CREATE | POST /content/model/MODEL\_ZUID/items |
| Updating a specific item | INSTANCE\_ZUID |  | ITEM\_ZUID | UPDATE | PUT /content/model/MODEL\_ZUID/items/ITEM\_ZUID |
| Updating any item for a given content model | INSTANCE\_ZUID | MODEL\_ZUID | items | UPDATE | PUT /content/model/MODEL\_ZUID/items/ITEM\_ZUID |
| Updating any item | INSTANCE\_ZUID |  | items | UPDATE | PUT /content/model/MODEL\_ZUID/items/ITEM\_ZUID |
| Deleting a specific item | INSTANCE\_ZUID |  | ITEM\_ZUID | DELETE | DELETE /content/model/MODEL\_ZUID/items/ITEM\_ZUID |
| Deleting any item for a given content model | INSTANCE\_ZUID | MODEL\_ZUID | items | DELETE | DELETE /content/model/MODEL\_ZUID/items/ITEM\_ZUID |
| Deleting any item | INSTANCE\_ZUID |  | items | DELETE | DELETE /content/model/MODEL\_ZUID/items/ITEM\_ZUID |
| Publishing any item for a given content model | INSTANCE\_ZUID | MODEL\_ZUID | items | PUBLISH | POST /content/model/MODEL\_ZUID/items/ITEM\_ZUID/publishings |
| Publishing a specific item | INSTANCE\_ZUID |  | ITEM\_ZUID | PUBLISH | POST /content/model/MODEL\_ZUID/items/ITEM\_ZUID/publishings |
| Publishing any item | INSTANCE\_ZUID |  | items | PUBLISH | POST /content/model/MODEL\_ZUID/items/ITEM\_ZUID/publishings |

#### Creating, Updating and Deleting Content Models

| Condition | Scoped Resource | Parent Resource | Resource | Action | Request URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Creating a new content model | INSTANCE\_ZUID |  | models | CREATE | POST /content/model |
| Update a specific content model | INSTANCE\_ZUID |  | MODEL\_ZUID | UPDATE | PUT /content/model/MODEL\_ZUID |
| Updating any content model | INSTANCE\_ZUID |  | models | UPDATE | PUT /content/model/MODEL\_ZUID |
| Deleting a specific content model | INSTANCE\_ZUID |  | MODEL\_ZUID | DELETE | DELETE /content/model/MODEL\_ZUID |
| Deleting any content model | INSTANCE\_ZUID |  | models | DELETE | DELETE /content/model/MODEL\_ZUID |

#### Creating, Updating and Deleting Fields

| Condition | Scoped Resource | Parent Resource | Resource | Action | Request URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Creating a new field | INSTANCE\_ZUID |  | fields | CREATE | POST /content/model/MODEL\_ZUID/fields |
| Creating a new field for a given content model | INSTANCE\_ZUID | MODEL\_ZUID | fields | CREATE | POST /content/model/MODEL\_ZUID/fields |
| Updating a specific field | INSTANCE\_ZUID |  | FIELD\_ZUID | UPDATE | PUT /content/model/MODEL\_ZUID/fields/FIELD\_ZUID |
| Updating any field for a given content model | INSTANCE\_ZUID | MODEL\_ZUID | fields | UPDATE | PUT /content/model/MODEL\_ZUID/fields/FIELD\_ZUID |
| Updating any field | INSTANCE\_ZUID |  | fields | UPDATE | PUT /content/model/MODEL\_ZUID/fields/FIELD\_ZUID |
| Deleting a specific field | INSTANCE\_ZUID | FIELD\_ZUID | DELETE | DELETE  | DELETE /content/model/MODEL\_ZUID/fields/FIELD\_ZUID |
| Deleting any field for a given content model | INSTANCE\_ZUID | MODEL\_ZUID | fields | DELETE | DELETE /content/model/MODEL\_ZUID/fields/FIELD\_ZUID |
| Deleting any field | INSTANCE\_ZUID |  | fields | DELETE | DELETE /content/model/MODEL\_ZUID/fields/FIELD\_ZUID |

#### Creating, Updating and Deleting Views

| Condition | Scoped Resource | Parent Resource | Resource | Action | Request URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Creating a new view | INSTANCE\_ZUID |  | views | CREATE | POST /web/views |
| Update a specific view | INSTANCE\_ZUID |  | VIEW\_ZUID | UPDATE | PUT /web/views/VIEW\_ZUID |
| Updating any view | INSTANCE\_ZUID |  | views | UPDATE | PUT /web/views/VIEW\_ZUID |
| Deleting a specific view | INSTANCE\_ZUID |  | VIEW\_ZUID | DELETE | DELETE /web/views/VIEW\_ZUID |
| Deleting any view | INSTANCE\_ZUID |  | views | DELETE | DELETE /web/views/VIEW\_ZUID |

#### Creating, Updating and Deleting Stylesheets

| Condition | Scoped Resource | Parent Resource | Resource | Action | Request URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Creating a new stylesheet | INSTANCE\_ZUID  |  | stylesheets | CREATE | POST /web/scripts |
| Update a specific stylesheet | INSTANCE\_ZUID |  | STYLESHEET\_ZUID | UPDATE | PUT /web/scripts/SCRIPT\_ZUID |
| Updating any stylesheet | INSTANCE\_ZUID |  | scripts | UPDATE | PUT /web/scripts/SCRIPT\_ZUID |
| Deleting a specific stylesheet | INSTANCE\_ZUID |  | SCRIPT\_ZUID | DELETE | DELETE /web/scripts/SCRIPT\_ZUID |
| Deleting any stylesheet | INSTANCE\_ZUID |  | scripts | DELETE | DELETE /web/scripts/SCRIPT\_ZUID |

#### Creating, Updating and Deleting Scripts

| Condition | Scoped Resource | Parent Resource | Resource | Action | Request URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Creating a new script | INSTANCE\_ZUID |  | scripts | CREATE | POST /web/scripts |
| Update a specific script | INSTANCE\_ZUID |  | SCRIPT\_ZUID | UPDATE | PUT /web/scripts/SCRIPT\_ZUID |
| Updating any script | INSTANCE\_ZUID |  | scripts | UPDATE | PUT /web/scripts/SCRIPT\_ZUID |
| Deleting a specific script | INSTANCE\_ZUID |  | SCRIPT\_ZUID | DELETE | DELETE /web/scripts/SCRIPT\_ZUID |
| Deleting any script | INSTANCE\_ZUID |  | scripts | DELETE | DELETE /web/scripts/SCRIPT\_ZUID |

#### Creating, Updating and Deleting Redirects

| Condition | Scoped Resource | Parent Resource | Resource | Action | Request URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Creating a new redirect | INSTANCE\_ZUID |  | redirects | CREATE | POST /web/redirects |
| Update a specific redirect | INSTANCE\_ZUID |  | REDIRECT\_ZUID | UPDATE | PUT /web/redirects/REDIRECT\_ZUID |
| Updating any redirect | INSTANCE\_ZUID |  | redirects | UPDATE | PUT /web/redirects/REDIRECT\_ZUID |
| Deleting a specific redirect | INSTANCE\_ZUID |  | REDIRECT\_ZUID | DELETE | DELETE /web/redirects/REDIRECT\_ZUID |
| Deleting any redirect | INSTANCE\_ZUID |  | redirects | DELETE | DELETE /web/redirects/REDIRECT\_ZUID |

#### Creating, Updating and Deleting Langs

| Condition | Scoped Resource | Parent Resource | Resource | Action | Request URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Creating a new language | INSTANCE\_ZUID |  | langs | CREATE | POST /env/langs |
| Update a specific language | INSTANCE\_ZUID |  | LANG\_ID | UPDATE | PUT /env/langs/LANG\_ID |
| Updating any language | INSTANCE\_ZUID |  | langs | UPDATE | PUT /env/langs/LANG\_ID |
| Deleting a specific language | INSTANCE\_ZUID |  | LANG\_ID | DELETE | DELETE /env/langs/LANG\_ID |
| Deleting any language | INSTANCE\_ZUID |  | langs | DELETE | DELETE /env/langs/LANG\_ID |

#### Creating, Updating and Deleting Settings

| Condition | Scoped Resource | Parent Resource | Resource | Action | Request URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Creating a new setting | INSTANCE\_ZUID  |  | settings | CREATE | POST /env/settings |
| Update a specific setting | INSTANCE\_ZUID |  | SETTINGS\_ZUID | UPDATE | PUT /env/settings/SETTINGS\_ZUID |
| Updating any setting | INSTANCE\_ZUID |  | settings | UPDATE | PUT /env/settings/SETTINGS\_ZUID |
| Deleting a specific setting | INSTANCE\_ZUID |  | SETTINGS\_ZUID | DELETE | DELETE /env/settings/SETTINGS\_ZUID |
| Deleting any setting | INSTANCE\_ZUID |  | settings | DELETE | DELETE /env/settings/SETTINGS\_ZUID |

#### Creating, Updating and Deleting Leads

### Accounts API Webhook

#### Roles

| Condition | Scoped Resource | Parent Resource | Resource | Action | Request URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Creating a new role | INSTANCE\_ZUID |  | roles | CREATE | POST /roles |

#### Instance Roles

| Condition | Scoped Resource | Parent Resource | Resource | Action | Request URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Generating a new Instance Role  | INSTANCE\_ZUID  | INSTANCE\_ZUID | roles | CREATE | POST /instances/INSTANCE\_ZUID/roles |

#### Instance Domains

<table>
  <thead>
    <tr>
      <th style="text-align:left">Condition</th>
      <th style="text-align:left">Scoped Resource</th>
      <th style="text-align:left">Parent Resource</th>
      <th style="text-align:left">Resource</th>
      <th style="text-align:left">Action</th>
      <th style="text-align:left">Request URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Create domain for a given instance</td>
      <td style="text-align:left">INSTANCE_ZUID</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">domains</td>
      <td style="text-align:left">CREATE</td>
      <td style="text-align:left">POST /instances/INSTANCE_ZUID/domains</td>
    </tr>
    <tr>
      <td style="text-align:left">Update a specific domain for a given instance</td>
      <td style="text-align:left">INSTANCE_ZUID</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">DOMAIN_ZUID</td>
      <td style="text-align:left">UPDATE</td>
      <td style="text-align:left">PUT /instances/INSTANCE_ZUID/domains/DOMAIN_ZUID</td>
    </tr>
    <tr>
      <td style="text-align:left">Update any domain for a given instance</td>
      <td style="text-align:left">INSTANCE_ZUID</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">domains</td>
      <td style="text-align:left">UPDATE</td>
      <td style="text-align:left">PUT /instances/INSTANCE_ZUID/domains/DOMAIN_ZUID</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>Delete</p>
        <p>a specific domain for a given instance</p>
      </td>
      <td style="text-align:left">INSTANCE_ZUID</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">DOMAIN_ZUID</td>
      <td style="text-align:left">DELETE</td>
      <td style="text-align:left">DELETE /instances/INSTANCE_ZUID/domains/DOMAIN_ZUID</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>Delete</p>
        <p>any domain for a given instance</p>
      </td>
      <td style="text-align:left">INSTANCE_ZUID</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">domains</td>
      <td style="text-align:left">DELETE</td>
      <td style="text-align:left">DELETE /instances/INSTANCE_ZUID/domains/DOMAIN_ZUID</td>
    </tr>
  </tbody>
</table>#### Invites

| Condition | Scoped Resource | Parent Resource | Resource | Action | Request URL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Create Invite | INSTANCE\_ZUID |  | invites | CREATE | POST /invites |
| Respond to Invite | INSTANCE\_ZUID |  | INVITE\_ZUID | UPDATE | PUT /invites/INVITE\_ZUID |
| Delete Invite | INSTANCE\_ZUID |  | INVITE\_ZUID | DELETE | DELETE /invites/INVITE\_ZUID |

