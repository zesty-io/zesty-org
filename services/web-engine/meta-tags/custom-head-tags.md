---
description: How to add custom head tags to more resources in Web Engine.
---

# Custom Head Tags

Head tags can be added to content models, views, the instance \(global\), or content items. They can be used to set facebook open graph tags, twitter cards, script links, css links, favicons, etc.. This document will explain how they works, what they are for, and how to create them with the API.

**There are 5 different types of head tags available in Zesty.io.**   
Here is a list of each one with example output:

1. **Meta** e.g. _&lt;meta name="description" content="my page description" /&gt;_
2. **Link** e.g. _&lt;link rel="stylesheet" type="text/css" href="/site.css" /&gt;_
3. **Script** e.g. _&lt;script type="text/javascript" src="/site.js?v=43"&gt;&lt;/script&gt;_
4. **Title** e.g. _&lt;title&gt;My Page Title&lt;/title&gt;_
5. **Style** e.g. _&lt;style&gt;body { background: orange } &lt;/style&gt;_

We are going to go through each one, with a couple example output and how to create them with the API POST calls to the API.

### Creating a Head Tag with the Rest API

A simple post request to your instances REST API will create a head tag.

{% api-method method="post" host="https://8-XyZ123-123xYz.api.zesty.io" path="/v1/web/headtags" %}
{% api-method-summary %}
Head Tag Creation
{% endapi-method-summary %}

{% api-method-description %}
Post a Request with a raw JSON body. The JSON body requires 3 fields type \(meta\|link\|script\|style\|title\), attributes \(key value object\), and sortOder \(integer\). JSON body example given to create meta tag. More specific ones are available under each tag type.  
  
This call adds a head tag immediately to Web Engine. A cache refresh in Web Engine is needed to see this the head tag appear.  
  
When added head tags to view resources, the tag needs to be added to each version of the view, production and stage. This is necessary for views like 404 pages, but content model views, apply the head tag to the resource ZUID of the content model.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Bearer XXXXXX \(APP\_SID Token\)
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="raw" type="object" required=true %}
{   
    "type": "meta",  
    "resourceZUID": "8-XyZ-XyZ"  
     "attributes": {   
           "name": "description",  
           "content": "my page description"  
     },   
    "sort": 1   
}
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
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

## Working with Meta Tags

Meta tags are for search engines, social media, browser compatibilities, viewport info, etc. "Meta" tags are essentially became a catch all for all sorts of configuration information. Zesty.io has no restriction on what type of meta tags you can add. Zesty.io also auto generates meta tags for social sharing and search engines based on your content, [learn more about that here.](./#automated-meta-tags)

{% code-tabs %}
{% code-tabs-item title="A few meta tag output examples" %}
```markup
<meta name="description" content="my page description" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta property="og:description" content="Hello World Description" />
<meta name="viewport" content="width=device-width, height=device-height"/>
<meta name="apple-mobile-web-app-status-bar-style" content="orange" />
```
{% endcode-tabs-item %}
{% endcode-tabs %}

As you can see in the example, meta tags are versatile, everything from search engine info to hidden configurations for iPhone rendering. Meta tags are hidden and are low weight so they minimally affect page load time.

#### Meta Tag Post Body Examples for the Rest API

Attributes are open ended for meta tags, so any key:value pair can be added. Here are a few post body example to create a few of the examples above.

{% code-tabs %}
{% code-tabs-item title="API Post body example for a Description Meta Tag" %}
```markup
{
	"type": "meta",
	"attributes": {
		"name": "description",
		"content": "This is my page description"
	},
	"sort": 3,
	"resourceZUID": "7-XyZ-Xyz"
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="API Post body example for an open graph description" %}
```markup
{
	"type": "meta",
	"attributes": {
		"property": "og:description",
		"content": "This is my page description"
	},
	"sort": 2,
	"resourceZUID": "7-XyZ-Xyz"
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="API Post body example for a Viewport Meta Tag" %}
```markup
{
	"type": "meta",
	"attributes": {
		"name": "viewport",
		"content": "width=device-width, height=device-height"
	},
	"sort": 1,
	"resourceZUID": "7-XyZ-Xyz"
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## Working with Script Head Tags

Script tags a used to load javascript files on page. Since head tags can be applied to content models, views, items, or globally, this enables you as the developer to optimize what you load per page. 

**Example Head Output**

```markup
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
```

**Example Post Body to create script head tags with the Rest API**

{% code-tabs %}
{% code-tabs-item title="API Post body example for a Javascript Script Link" %}
```markup
{
	"type": "script",
	"attributes": {
		"type": "text/javascript",
		"src": "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"
	},
	"sort": 1,
	"resourceZUID": "8-XyZ-Xyz"
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## Working with Link Head Tags

Link head tags a used to load CSS files, Icons,  Alternate Language URLs, etc.. Like general meta tags, link tags feel like open ended configuration tags, as shown in the example head output. Since head tags can be applied to content models, views, items, or globally, this enables you as the developer to set specific link tags to configure page differently and optimize them for search engines and mobile rendering. 

**Example Head Output**

```markup
<link type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.css" />
<link rel="canonical" href="https://www.example.com/" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://www.example.com/favicon.png" />
<link rel="alternate" type="application/rss+xml" href="https://www.example.com/feed.xml" title="RSS Feed" />
```

**Example Post Body to Create Links with the Rest API**

Attributes are open ended for link tags, so any can be added. Here are a few post body example to create a few of the examples above.

{% code-tabs %}
{% code-tabs-item title="API Post body example for Link Tag for a CSS File" %}
```markup
{
	"type": "link",
	"attributes": {
		"type": "text/css",
		"src": "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.css"
	},
	"sort": 1,
	"resourceZUID": "8-XyZ-Xyz"
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="API Post body example for a Link Tag for an Icon" %}
```markup
{
	"type": "link",
	"attributes": {
		"rel": "apple-touch-icon-precomposed",
		"sizes": "114x114",
		"src": "https://www.example.com/favicon.png"
	},
	"sort": 1,
	"resourceZUID": "8-XyZ-Xyz"
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## Working with Title Head Tags

Title tags are linear, and offer one type. Title tags only accept one key value attribute "value".

**Example Head Output**

```markup
<title>My Page Title</title>
```

**Example Post Body to create a head tags with the Rest API**

{% code-tabs %}
{% code-tabs-item title="API Post body example for a creating a Title Tag" %}
```markup
{
	"type": "title",
	"attributes": {
		"value": "My Page Title"
	},
	"sort": 1,
	"resourceZUID": "7-XyZ-Xyz"
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## Working with Style Head Tags

Style tags are linear, and offer one type and way to use them. Style tags only accept one key value attribute "value".

**Example Head Output**

```markup
<style>
    body {
        background: orange;
    }
</style>
```

**Example Post Body to create a style tag with the Rest API**

{% code-tabs %}
{% code-tabs-item title="API Post body example for a creating a Title Tag" %}
```markup
{
	"type": "style",
	"attributes": {
		"value": " body { background: orange;} "
	},
	"sort": 1,
	"resourceZUID": "7-XyZ-Xyz"
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

## 

## How to See all the Head Tags on a Content Instance

To see all the head tags on a content instance, make a Get request to the REST API endpoint `/v1/web/headtags`

{% api-method method="get" host="https://8-XyZ123-123xYz.api.zesty.io" path="/v1/web/headtags" %}
{% api-method-summary %}
Get Head Tags
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows you to view all the head tags you have on a content instance. Note, if you are logged into Zesty.io you can navigate to this get endpoint in your browser. Replace `8-XyZ123-123xYz`with your Instance ZUID.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Bearer XXXXXXXX \(User Session Token\)
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
    _meta: {
        timestamp: "2019-05-15T23:36:07.065882486Z",
        totalResults: 1,
        start: 0,
        offset: 0,
        limit: 1
    },
    data: [
    {
        ZUID: "21-xYz123-123XyZ",
        type: "meta",
        attributes: {
            content: "This is my custom title!",
            name: "og:title"
        },
        resourceZUID: "7-xYz123-xYz123", // Model|Instance|View|Item 
        sort: 0,
        createdByUserZUID: "5-xYz123-xYz123",
        updatedByUserZUID: "5-xYz123-xYz123",
        createdAt: "2019-05-13T21:12:13Z",
        updatedAt: "2019-05-13T21:12:36Z"
    }]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Deleting a Head Tag

{% api-method method="delete" host="https://8-XyZ123-123xYz.api.zesty.io" path="/v1/web/headtags/:headTagZUID" %}
{% api-method-summary %}
Delete Head Tag
{% endapi-method-summary %}

{% api-method-description %}
Removes a head tag immediately from Web Engine. A cache refresh in Web Engine is needed to see this update.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name=":headTagZUID" type="string" required=true %}
use the Get All Head Tags call to find the ZUID of the tag you wish to delete.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=true %}
Bearer XXXXXXX \(user session token\)
{% endapi-method-parameter %}
{% endapi-method-headers %}
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

