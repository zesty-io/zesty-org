---
description: >-
  Zesty.io runs CSS pre-processers on save and publish of SASS, SC SS, LESS, and
  CSS files. We also concatenate JS files.
---

# CSS & JS Processing Flow

Zesty.io’s Code Editor supports [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [LESS](http://lesscss.org/), and [SCSS/SASS](https://sass-lang.com/). Every save of a stylesheet will combine, compile, and minify all stylesheet files into a single CSS file `/site.css`. That file is automatically linked to in your page &lt;head&gt;. If more than one style of stylesheet is used, they will compile and concat into a single file. The order of concatenation:

1. **CSS**
2. **LESS**
3. **SCSS/SASS**

\*\*\*\*

![](https://docs.google.com/a/zesty.io/drawings/d/srvGtbLDWqNiHQ83TwuBrZg/image?w=624&h=287&rev=390&ac=1&parent=1XwoNkMZD2S8bfQOfOWKOBvbknhJT_vH6yKsWaDqZfUM)

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

A special setting with the values `category: general` `key:default_asset_base_directory` may be set to a base have your `site.css` and `main.js` files load from a specific directory like `/my/directory/site.js` this is useful for launching sub directory specific website instances.  

#### **ie8.css**

If a file is given the name ie8.css, it will be ignored by the minification process and be included in its own href link in the header after the main minified CSS file is added.

#### **Auto Added Stylesheet Files**

Zesty.io auto appends stylesheets to specific templates \(mostly legacy\). If you experience added CSS and it is a problem please reach out to support on the Zesty.io developer slack channel. Support engineers can remove the base CSS files.

{% hint style="warning" %}
Comments in Style files can err on compilation especially if they are single-line comments noted by `//` and at the top or bottom of the file. To mitigate  this ensure that comments are noted using the multi-line `/* */` syntax.
{% endhint %}

### Managing Stylesheets Using the API

{% api-method method="post" host="https://8-xyz-xyzxyz.api.zesty.io" path="/v1/web/stylesheets/" %}
{% api-method-summary %}
Create Stylesheet
{% endapi-method-summary %}

{% api-method-description %}
Creates a single stylesheet with two versions: dev and live
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="type" type="string" required=true %}
type must be one of the following options:  
- text/less  
- text/sass  
- text/scss  
- text/css
{% endapi-method-parameter %}

{% api-method-parameter name="filename" type="string" required=true %}
filename must include a file extension. Valid file extensions are:  
- .less  
- .sass  
- .scss  
- .css
{% endapi-method-parameter %}

{% api-method-parameter name="code" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

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
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://8-xyz-xyzxyz.api.zesty.io" path="/v1/web/stylesheets/:stylesheet\_zuid" %}
{% api-method-summary %}
Get Single Stylesheet
{% endapi-method-summary %}

{% api-method-description %}
Retrieve a single stylesheet using its ZUID
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="stylesheet\_zuid" type="string" required=true %}
unique id assigned to a given stylesheet  
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

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
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://8-xyz-xyzxyz.api.zesty.io" path="/v1/web/stylesheets" %}
{% api-method-summary %}
Get Multiple Stylesheets
{% endapi-method-summary %}

{% api-method-description %}
Retrieves multiple stylesheets
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="status" type="string" required=false %}
A stylesheet's status. Valid options are:  
- dev  
- live
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

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
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="put" host="https://8-xyz-xyzxyz.api.zesty.io" path="/v1/web/stylesheets/:stylesheet\_zuid" %}
{% api-method-summary %}
Update Stylesheet
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="stylesheet\_zuid" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-body-parameters %}
{% api-method-parameter name="code" type="string" required=true %}

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

{% api-method method="put" host="https://8-xyz-xyzxyz.api.zesty.io" path="/v1/web/stylesheets/:stylesheet\_zuid" %}
{% api-method-summary %}
Update Stylesheet and Publish 
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="stylesheet\_zuid" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="purge\_cache" type="boolean" required=false %}

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

{% api-method method="delete" host="https://8-xyz-xyzxyz.api.zesty.io" path="/v1/web/stylesheets/:stylesheet\_zuid" %}
{% api-method-summary %}
Delete Stylesheet
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="stylesheet\_zuid" type="string" required=true %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="purge\_cache" type="boolean" required=false %}
Default value is true. This value is only checked when you wish to publish
{% endapi-method-parameter %}

{% api-method-parameter name="action" type="string" required=false %}
Set action=publish if you wish to publish
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

{% api-method method="post" host="https://8-xyz-xyzxyz.api.zesty.io" path="/v1/web/stylesheets/:stylesheet\_zuid/versions/:version" %}
{% api-method-summary %}
Publish Stylesheet
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="version" type="number" required=true %}
Specify the version of the resource you wish to publish
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="purge\_cache" type="boolean" required=false %}
Default value is true
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

### Javascript

Zesty.io combines all script files into a single concatenated `/main.js` file, this file automatically links in the head vi a script tag, and can optionally be omitted in developer settings on the instance.

