---
description: >-
  Often at a project launch there is a desire to publish all content at once.
  This explains how you publish all content, or all content on a single model.
---

# Publishing All Content

To publish all the latest versions of content items on a content instance make an authenticated get request a described below. Please note, this is not reversible and it will publish all drafted versions.

Publish All endpoints runs against the default language, to publish alternative languages you must send the `lang` option with the language code you wish to publish.&#x20;

Note these endpoints queue individual publishing requests which process at 1,800 a minute.

{% hint style="warning" %}
These endpoints must be made with an authentication token made from a user login. Developer tokens will not work.
{% endhint %}

#### Publish All Content

Will iterate through each model of an instance, and queue all items for publishing.

{% swagger baseUrl="https://us-central1-zesty-prod.cloudfunctions.net/publishAllContent" path="" method="get" summary="Publish All Content" %}
{% swagger-description %}
Publishes the latest version of every content item in every content model on an instance. 
{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" type="string" required="true" %}
bearer XXXXXXXXXXXXX ... is your APP_SID cookie or authorization token found in the code tab)
{% endswagger-parameter %}

{% swagger-parameter in="query" name="instanceZUID" type="string" required="true" %}
8-xyz-xyz ... This Zesty Unique Identifier can be found in accounts.zesty.io by clicking into your instance's setting
{% endswagger-parameter %}

{% swagger-parameter in="query" name="lang" %}
The language code variant, example: es-MX. Defaults to en-US
{% endswagger-parameter %}

{% swagger-response status="200" description="Expand to see response example" %}
{% code lineNumbers="true" %}
```json
{
    "totalQueued": 1,
    "estimatedTotalQueueTimeInSeconds": 0.0005555555555555556,
    "instanceZUID": "8-f48cf3a682-7dthvk",
    "contentLanguage": "en-US",
    "modelZUID": "6-852420-2mhz4v",
    "message": "1 items queued to publish for instance 8-f48cf3a682-7dthvk. Each item will publish in a queue over the next ~0.00 minutes."
}
```
{% endcode %}
{% endswagger-response %}
{% endswagger %}

#### Publish All Model Content

Will iterate through each item in a specific single content model and queue them for publishing.

{% swagger baseUrl="https://us-central1-zesty-prod.cloudfunctions.net/publishAllModelContent" path="" method="get" summary="Publish All Model Content" %}
{% swagger-description %}
Publishes the latest version of every content item in every content model on an instance. 
{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" type="string" required="true" %}
bearer XXXXXXXXXXXXX ... is your APP_SID cookie or authorization token found in the code tab)
{% endswagger-parameter %}

{% swagger-parameter in="query" name="modelZUID" type="string" required="true" %}
6-d0497c-h9jhcq ... The model zuid of all the content you want to pulish
{% endswagger-parameter %}

{% swagger-parameter in="query" name="instanceZUID" type="string" required="true" %}
8-xyz-xyz ... This Zesty Unique Identifier can be found in accounts.zesty.io by clicking into your instance's setting
{% endswagger-parameter %}

{% swagger-parameter in="query" name="lang" %}
The language code variant, example: es-MX. Default to en-US
{% endswagger-parameter %}

{% swagger-response status="200" description="Expand to see response example" %}
{% code lineNumbers="true" %}
```json
{
    "totalQueued": 1,
    "estimatedTotalQueueTimeInSeconds": 0.0005555555555555556,
    "instanceZUID": "8-f48cf3a682-7dthvk",
    "contentLanguage": "en-US",
    "modelZUID": "6-852420-2mhz4v",
    "message": "1 items queued to publish for instance 8-f48cf3a682-7dthvk. Each item will publish in a queue over the next ~0.00 minutes."
}
```
{% endcode %}
{% endswagger-response %}
{% endswagger %}
