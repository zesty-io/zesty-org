---
description: How to add custom head tags to more resources in Web Engine.
---

# Custom Head Tags

Head tags can be added to content models, views, the instance (global), or content items. They can be used to set facebook open graph tags, twitter cards, script links, css links, favicons, etc.. This document will explain how they works, what they are for, and how to create them with the API.

**There are 5 different types of head tags available in Zesty.io.** \
****Here is a list of each one with example output:

1. **Meta** e.g. _\<meta name="description" content="my page description" />_
2. **Link** e.g. _\<link rel="stylesheet" type="text/css" href="/site.css" />_
3. **Script** e.g. _\<script type="text/javascript" src="/site.js?v=43">\</script>_
4. **Title** e.g. _\<title>My Page Title\</title>_
5. **Style** e.g. _\<style>body { background: orange } \</style>_

We are going to go through each one, with a couple example output and how to create them with the API POST calls to the API.

## Dynamic Values in Head Tags

Meta, Title, Script, and Link tags may use dynamic reference to globals, settings, and content values.

{% hint style="warning" %}
Even though values shown below use curly braces { } these are **not** Parsley references.
{% endhint %}

* **Settings** are accessed like `{settings.general.site_protocol}`
* **Content** item values are accessed like `{this.my_title}`
* **Globals** are accessed like `{globals.site_name}`
* **Query Params** are accessed like **** `{query_param.key}` or `{get_var.key}`
* **Path Parts** accessed like **** `{path_part.0}`  e.g. `/first/part/  {path_part.0} returns 'first'`
* **Multiple** like this `"my page is {this.title} from {globals.site_name}"`

**Examples**

```markup
<meta name="og:price" content="${this.price}">
<link rel="stylesheet" href="{settings.developer.bulma_cdn_link}">
<meta name="custom_verify" href="{settings.yahoo.verify_hash}">
<meta name="foobar" href="{globals.site_name}: {this.seo_meta_description}">
```

### Custom Head Tag Loading

Custom head tags load based on their resource type in this order:

1. Instance Level
2. View Level
3. Model Level
4. Item Level

At each level they ordered in ascending order by their `sort_order`

### Bad Tag References

If a bad tag reference is used, a reference to a global, setting, or content item that doesn't exist, then a warning `(#bad reference {this.ref} #)` will be output in preview in the tag, on production sites an empty string will be returned.

## Creating a Head Tag with the Rest API

A simple post request to your instances REST API will create a head tag.

{% swagger baseUrl="https://8-XyZ123-123xYz.api.zesty.io" path="/v1/web/headtags" method="post" summary="Head Tag Creation" %}
{% swagger-description %}
Post a Request with a raw JSON body. The JSON body requires 3 fields type (meta|link|script|style|title), attributes (key value object), and sortOder (integer). JSON body example given to create meta tag. More specific ones are available under each tag type.

\




\


This call adds a head tag immediately to Web Engine. A cache refresh in Web Engine is needed to see this the head tag appear. 

\




\


When added head tags to view resources, the tag needs to be added to each version of the view, production and stage. This is necessary for views like 404 pages, but content model views, apply the head tag to the resource ZUID of the content model.
{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" type="string" %}
Bearer XXXXXX (APP_SID Token)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="raw" type="object" %}
{ 

\


    "type": "meta",

\


    "resourceZUID": "8-XyZ-XyZ"

\


     "attributes": { 

\


           "name": "description",

\


           "content": "my page description"

\


     }, 

\


    "sort": 1 

\


}
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

## Working with Meta Tags

Meta tags are for search engines, social media, browser compatibilities, viewport info, etc. "Meta" tags are essentially became a catch all for all sorts of configuration information. Zesty.io has no restriction on what type of meta tags you can add. Zesty.io also auto generates meta tags for social sharing and search engines based on your content, [learn more about that here.](./#automated-meta-tags)

{% code title="A few meta tag output examples" %}
```markup
<meta name="description" content="my page description" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta property="og:description" content="Hello World Description" />
<meta name="viewport" content="width=device-width, height=device-height"/>
<meta name="apple-mobile-web-app-status-bar-style" content="orange" />
```
{% endcode %}

As you can see in the example, meta tags are versatile, everything from search engine info to hidden configurations for iPhone rendering. Meta tags are hidden and are low weight so they minimally affect page load time.

#### Meta Tag Post Body Examples for the Rest API

Attributes are open ended for meta tags, so any key:value pair can be added. Here are a few post body example to create a few of the examples above.

{% code title="API Post body example for a Description Meta Tag" %}
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
{% endcode %}

{% code title="API Post body example for an open graph description" %}
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
{% endcode %}

{% code title="API Post body example for a Viewport Meta Tag" %}
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
{% endcode %}

## Working with Script Head Tags

Script tags a used to load javascript files on page. Since head tags can be applied to content models, views, items, or globally, this enables you as the developer to optimize what you load per page.&#x20;

**Example Head Output**

```markup
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
```

**Example Post Body to create script head tags with the Rest API**

{% code title="API Post body example for a Javascript Script Link" %}
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
{% endcode %}

## Working with Link Head Tags

Link head tags a used to load CSS files, Icons,  Alternate Language URLs, etc.. Like general meta tags, link tags feel like open ended configuration tags, as shown in the example head output. Since head tags can be applied to content models, views, items, or globally, this enables you as the developer to set specific link tags to configure page differently and optimize them for search engines and mobile rendering.&#x20;

**Example Head Output**

```markup
<link type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.css" />
<link rel="canonical" href="https://www.example.com/" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://www.example.com/favicon.png" />
<link rel="alternate" type="application/rss+xml" href="https://www.example.com/feed.xml" title="RSS Feed" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Font+Name">
```

**Example Post Body to Create Links with the Rest API**

Attributes are open ended for link tags, so any can be added. Here are a few post body example to create a few of the examples above.

{% code title="API Post body example for Link Tag for a CSS File" %}
```markup
{
	"type": "link",
	"attributes": {
		"rel": "stylesheet",
		"href": "https://fonts.googleapis.com/css?family=Font+Name"
	},
	"sort": 1,
	"resourceZUID": "8-XyZ-Xyz"
}
```
{% endcode %}

{% code title="API Post body example for Link Tag for a CSS File" %}
```markup
{
	"type": "link",
	"attributes": {
		"type": "text/css",
		"href": "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.css"
	},
	"sort": 1,
	"resourceZUID": "8-XyZ-Xyz"
}
```
{% endcode %}

{% code title="API Post body example for a Link Tag for an Icon" %}
```markup
{
	"type": "link",
	"attributes": {
		"rel": "apple-touch-icon-precomposed",
		"sizes": "114x114",
		"href": "https://www.example.com/favicon.png"
	},
	"sort": 1,
	"resourceZUID": "8-XyZ-Xyz"
}
```
{% endcode %}

## Working with Title Head Tags

Title tags are linear, and offer one type. Title tags only accept one key value attribute "value".

**Example Head Output**

```markup
<title>My Page Title</title>
```

**Example Post Body to create a head tags with the Rest API**

{% code title="API Post body example for a creating a Title Tag" %}
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
{% endcode %}

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

{% code title="API Post body example for a creating a Title Tag" %}
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
{% endcode %}

##

## How to See all the Head Tags on a Content Instance

To see all the head tags on a content instance, make a Get request to the REST API endpoint `/v1/web/headtags`

{% swagger baseUrl="https://8-XyZ123-123xYz.api.zesty.io" path="/v1/web/headtags" method="get" summary="Get Head Tags" %}
{% swagger-description %}
This endpoint allows you to view all the head tags you have on a content instance. Note, if you are logged into Zesty.io you can navigate to this get endpoint in your browser. Replace 

`8-XyZ123-123xYz`

with your Instance ZUID.
{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" type="string" %}
Bearer XXXXXXXX (User Session Token)
{% endswagger-parameter %}

{% swagger-response status="200" description="Cake successfully retrieved." %}
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
{% endswagger-response %}
{% endswagger %}

## Updating a Head Tag

To get a head tag ZUID, call the get endpoint to see all the head tags and their ZUIDs.&#x20;

{% swagger baseUrl="https://8-XyZ123-123xYz.api.zesty.io" path="/v1/web/headtags/:headTagZUID" method="put" summary="Put Head Tag" %}
{% swagger-description %}
Put updates the head tag in Web Engine immediately. A cache refresh in Web Engine is needed to see an update. Put will replace all attributes with the attributes you pass.
{% endswagger-description %}

{% swagger-parameter in="path" name=":headTagZUID" type="string" %}
use the Get All Head Tags call to find the ZUID of the tag you wish to delete.
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" type="string" %}
Bearer XXXXXXX (user session token)
{% endswagger-parameter %}

{% swagger-parameter in="body" name="raw" type="string" %}
{

\


  "type": "meta",

\


  "sort" : 2,

\


  "attributes" : {

\


     "name" : "description",

\


     "content" : " hello world"

\


  }

\


 }
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}

{% swagger-response status="500" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

## Deleting a Head Tag

{% swagger baseUrl="https://8-XyZ123-123xYz.api.zesty.io" path="/v1/web/headtags/:headTagZUID" method="delete" summary="Delete Head Tag" %}
{% swagger-description %}
Removes a head tag immediately from Web Engine. A cache refresh in Web Engine is needed to see this update.
{% endswagger-description %}

{% swagger-parameter in="path" name=":headTagZUID" type="string" %}
use the Get All Head Tags call to find the ZUID of the tag you wish to delete.
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" type="string" %}
Bearer XXXXXXX (user session token)
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}
