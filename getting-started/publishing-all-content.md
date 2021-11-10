---
description: >-
  Often at a project launch there is a desire to publish all content at once.
  This explains how you publish all content, or all content on a single model.
---

# Publishing All Content

To publish all the latest versions of content items on a content instance make an authenticated get request a described below. Please note, this is not reversible and it will publish all drafted versions.

{% swagger baseUrl="https://us-central1-zesty-prod.cloudfunctions.net/publishAllContent" path="" method="get" summary="Publish All Content" %}
{% swagger-description %}
Publishes the latest version of every content item in every content model on an instance. 
{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" type="string" %}
bearer XXXXXXXXXXXXX ... is your APP_SID cookie or authorization token found in the code tab)
{% endswagger-parameter %}

{% swagger-parameter in="query" name="instanceZUID" type="string" %}
8-xyz-xyz ... This Zesty Unique Identifier can be found in accounts.zesty.io by clicking into your instance's setting
{% endswagger-parameter %}

{% swagger-response status="200" description="Tell you how many items are in the instance along with an array mapping the items zuids, versions, and model zuids" %}
```
{
    "totalItemsPublished": 2,
    "itemsPublished": [
        {
            "zuid": "7-d32028-t13v3k",
            "modelZUID": "6-d4497c-h9jhcq",
            "version": 6
        },
        {
            "zuid": "7-da5e84-9fszz1",
            "modelZUID": "6-d83c78-25j4vg",
            "version": 1
        }
    ]
}
```
{% endswagger-response %}
{% endswagger %}



{% swagger baseUrl="https://us-central1-zesty-prod.cloudfunctions.net/publishAllModelContent" path="" method="get" summary="Publish All Model Content" %}
{% swagger-description %}
Publishes the latest version of every content item in every content model on an instance. 
{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" type="string" %}
bearer XXXXXXXXXXXXX ... is your APP_SID cookie or authorization token found in the code tab)
{% endswagger-parameter %}

{% swagger-parameter in="query" name="modelZUID" type="string" %}
6-d0497c-h9jhcq ... The model zuid of all the content you want to pulish
{% endswagger-parameter %}

{% swagger-parameter in="query" name="instanceZUID" type="string" %}
8-xyz-xyz ... This Zesty Unique Identifier can be found in accounts.zesty.io by clicking into your instance's setting
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}
