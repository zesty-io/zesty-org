---
description: >-
  Often at a project launch there is a desire to publish all content at once.
  This explains how you publish all content, or all content on a single model.
---

# Publishing All Content

To publish all the latest versions of content items on a content instance make an authenticated get request a described below. Please note, this is not reversible and it will publish all drafted versions.

{% api-method method="get" host="https://us-central1-zesty-prod.cloudfunctions.net/publishAllContent" path="" %}
{% api-method-summary %}
Publish All Content
{% endapi-method-summary %}

{% api-method-description %}
Publishes the latest version of every content item in every content model on an instance. 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
bearer XXXXXXXXXXXXX ... is your APP\_SID cookie or authorization token found in the code tab\)
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="instanceZUID" type="string" required=true %}
8-xyz-xyz ... This Zesty Unique Identifier can be found in accounts.zesty.io by clicking into your instance's setting
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Tell you how many items are in the instance along with an array mapping the items zuids, versions, and model zuids
{% endapi-method-response-example-description %}

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
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



{% api-method method="get" host="https://us-central1-zesty-prod.cloudfunctions.net/publishAllModelContent" path="" %}
{% api-method-summary %}
Publish All Model Content
{% endapi-method-summary %}

{% api-method-description %}
Publishes the latest version of every content item in every content model on an instance. 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
bearer XXXXXXXXXXXXX ... is your APP\_SID cookie or authorization token found in the code tab\)
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="modelZUID" type="string" required=true %}
6-d0497c-h9jhcq ... The model zuid of all the content you want to pulish
{% endapi-method-parameter %}

{% api-method-parameter name="instanceZUID" type="string" required=true %}
8-xyz-xyz ... This Zesty Unique Identifier can be found in accounts.zesty.io by clicking into your instance's setting
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

