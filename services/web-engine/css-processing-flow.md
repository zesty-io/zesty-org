---
description: >-
  Zesty.io runs CSS pre-processers on save and publish of SASS, SC SS, LESS, and
  CSS files. We also concatenate JS files.
---

# CSS & JS Processing Flow

Zesty.io’s Code Editor supports [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [LESS](http://lesscss.org), and [SCSS/SASS](https://sass-lang.com). Every save of a stylesheet will combine, compile, and minify all stylesheet files into a single CSS file `/site.css`. That file is automatically linked to in your page \<head>. If more than one style of stylesheet is used, they will compile and concat into a single file. The order of concatenation:

1. **CSS**
2. **LESS**
3. **SCSS/SASS**

****

![](https://docs.google.com/a/zesty.io/drawings/d/srvGtbLDWqNiHQ83TwuBrZg/image?w=624\&h=287\&rev=390\&ac=1\&parent=1XwoNkMZD2S8bfQOfOWKOBvbknhJT\_vH6yKsWaDqZfUM)

### **Compilers and Minifiers**

All files are concatenated based on their type then by their order set in the editor interface of the Zesty.io manager. Each stylesheet type has its own compiler or minifier explained below.

### **CSS**

All CSS with the exception of any file named ‘ie8.css’ is concatenated and run through a minification process. The repository used for CSS minification: [https://github.com/fmarcia/uglifycss](https://github.com/fmarcia/uglifycss)

### **LESS**

All LESS files are concatenated based on their order in the editor interface and then run through the LESSC compiler with the compressed flag. The repository we use to compile:  [https://github.com/less/less.js](https://github.com/less/less.js)

Errors are returned for broken LESS at compile time.

### **SCSS/SASS**

All SCSS files are concatenated based on their order in the editor and run through the SASSC compiler with the flags ‘ --style compressed --stdin’, that behavior is hard coded and cannot be changed. The repository used for compiling SASS: [https://github.com/sass/sassc](https://github.com/sass/sassc)

The command to compile SCSS to CSS is \`sassc --stdin --style compressed\`

The command to compile SASS to CSS is \`sassc --stdin --sass --style compressed\`

Errors are returned for broken SASS at compile time.

### **Special Rules and Files**

**Asset Directory Settings**

A special setting with the values `category: general` `key:base_directory` may be set to a base have your `site.css` and `site.js` files load from a specific directory like `/my/directory/site.js` this is useful for launching sub directory specific website instances. &#x20;

#### **ie8.css**

If a file is given the name ie8.css, it will be ignored by the minification process and be included in its own href link in the header after the main minified CSS file is added.

#### **Auto Added Stylesheet Files**

Zesty.io auto appends stylesheets to specific templates (mostly legacy). If you experience added CSS and it is a problem please reach out to support on the Zesty.io developer slack channel. Support engineers can remove the base CSS files.

{% hint style="warning" %}
Comments in Style files can err on compilation especially if they are single-line comments noted by `//` and at the top or bottom of the file. To mitigate  this ensure that comments are noted using the multi-line `/* */` syntax.
{% endhint %}

### Managing Stylesheets Using the API

{% swagger baseUrl="https://8-xyz-xyzxyz.api.zesty.io" path="/v1/web/stylesheets/" method="post" summary="Create Stylesheet" %}
{% swagger-description %}
Creates a single stylesheet with two versions: dev and live
{% endswagger-description %}

{% swagger-parameter in="body" name="type" type="string" %}
type must be one of the following options:

\


\- text/less

\


\- text/sass

\


\- text/scss

\


\- text/css
{% endswagger-parameter %}

{% swagger-parameter in="body" name="filename" type="string" %}
filename must include a file extension. Valid file extensions are:

\


\- .less

\


\- .sass

\


\- .scss

\


\- .css
{% endswagger-parameter %}

{% swagger-parameter in="body" name="code" type="string" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
  "_meta": {
    "timestamp": "2019-09-04T20:43:09.6201781Z",
    "totalResults": 1,
    "start": 0,
    "offset": 0,
    "limit": 1
  },
  "data": {
    "ZUID": "10-a08bb28483-clr72r",
    "status": "live",
    "type": "text/less",
    "fileName": "styles.less",
    "code": "@pale-green-color: #4D926F;#header {color: @pale-green-color;}h2{color: @pale-green-color;}",
    "lastEditedID": 21474570,
    "template": 1,
    "module": 0,
    "plugin": 0,
    "version": 1,
    "createdAt": "2019-09-04T20:43:08.6159035Z",
    "updatedAt": "2019-09-04T20:43:08.6159349Z"
  }
}

```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://8-xyz-xyzxyz.api.zesty.io" path="/v1/web/stylesheets/:stylesheet_zuid" method="get" summary="Get Single Stylesheet" %}
{% swagger-description %}
Retrieve a single stylesheet using its ZUID
{% endswagger-description %}

{% swagger-parameter in="path" name="stylesheet_zuid" type="string" %}
unique id assigned to a given stylesheet

\



{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
    "_meta": {
        "timestamp": "2019-09-05T18:39:54.3312411Z",
        "totalResults": 1,
        "start": 0,
        "offset": 0,
        "limit": 1
    },
    "data": {
        "ZUID": "10-d2a3bed586-xtgzj9",
        "status": "dev",
        "type": "text/less",
        "fileName": "derp.less",
        "code": "@pale-green-color: #4D926A;#header {color: @pale-green-color;}h2{color: @pale-green-color;}",
        "lastEditedID": 21474570,
        "template": 1,
        "module": 0,
        "plugin": 0,
        "version": 2,
        "createdAt": "2019-09-04T11:16:31Z",
        "updatedAt": "2019-09-04T18:17:40Z"
    }
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://8-xyz-xyzxyz.api.zesty.io" path="/v1/web/stylesheets" method="get" summary="Get Multiple Stylesheets" %}
{% swagger-description %}
Retrieves multiple stylesheets
{% endswagger-description %}

{% swagger-parameter in="query" name="status" type="string" %}
A stylesheet's status. Valid options are:

\


\- dev

\


\- live
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```javascript
{
  "_meta": {
    "timestamp": "2019-09-05T18:31:23.9959161Z",
    "totalResults": 2,
    "start": 0,
    "offset": 0,
    "limit": 2
  },
  "data": [
    {
      "ZUID": "10-2c4b18-84jpqk",
      "status": "dev",
      "type": "text/css",
      "fileName": "main.css",
      "code": "/*\nYou can write more css here\nor add additional files.\n\nLearn more here: https://developer.zesty.io/docs/code-editor/css-and-less/\n*/\n",
      "lastEditedID": null,
      "template": 1,
      "module": 0,
      "plugin": 0,
      "version": null,
      "createdAt": "2019-08-20T22:22:21Z",
      "updatedAt": "2019-08-20T22:22:21Z"
    },
    {
      "ZUID": "10-d2a3bed586-xtgzj9",
      "status": "dev",
      "type": "text/less",
      "fileName": "derp.less",
      "code": "@pale-green-color: #4D926A;#header {color: @pale-green-color;}h2{color: @pale-green-color;}",
      "lastEditedID": 21474570,
      "template": 1,
      "module": 0,
      "plugin": 0,
      "version": 2,
      "createdAt": "2019-09-04T11:16:31Z",
      "updatedAt": "2019-09-04T18:17:40Z"
    }
  ]
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://8-xyz-xyzxyz.api.zesty.io" path="/v1/web/stylesheets/:stylesheet_zuid" method="put" summary="Update Stylesheet" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="stylesheet_zuid" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="code" type="string" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://8-xyz-xyzxyz.api.zesty.io" path="/v1/web/stylesheets/:stylesheet_zuid" method="put" summary="Update Stylesheet and Publish " %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="stylesheet_zuid" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="purge_cache" type="boolean" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://8-xyz-xyzxyz.api.zesty.io" path="/v1/web/stylesheets/:stylesheet_zuid" method="delete" summary="Delete Stylesheet" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="stylesheet_zuid" type="string" %}

{% endswagger-parameter %}

{% swagger-parameter in="query" name="purge_cache" type="boolean" %}
Default value is true. This value is only checked when you wish to publish
{% endswagger-parameter %}

{% swagger-parameter in="query" name="action" type="string" %}
Set action=publish if you wish to publish
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

{% swagger baseUrl="https://8-xyz-xyzxyz.api.zesty.io" path="/v1/web/stylesheets/:stylesheet_zuid/versions/:version" method="post" summary="Publish Stylesheet" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="version" type="number" %}
Specify the version of the resource you wish to publish
{% endswagger-parameter %}

{% swagger-parameter in="query" name="purge_cache" type="boolean" %}
Default value is true
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

### JavaScript

Zesty.io combines all script files into a single concatenated `/site.js` file, this file automatically links in the head via script tag, and can optionally be omitted in developer settings on the instance.
