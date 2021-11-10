---
description: >-
  Developer option to overwrite the automated meta, title, and og:tags <head>
  tags with a Parsley snippet file.
---

# Custom Head Overwrite

## What is an Automated Head?

Zesty.io automates the creation \<head> tags, which include \<title> \<meta> and \<og:title> like tags to automate the optimization of search engine indexing. There are times when you may want to customize these tags and not rely on Zesty.io to produce them. If you want to overwrite the automated head tags, follow this tutorial.

### How to Setup a Custom Head File and Overwrite the Automated Meta

Four steps to overwrite the head:

1. Create a **text** setting in the category **developer **with the key** overwrite\_head (**[**see API Docs**](https://instances-api.zesty.org/?version=latest#588eccb2-8f3a-482d-b2dd-cfc9a2be93e9)**)**
2. In the code editor, create a new _snippet_ file , lets call it "**custom\_head**" (you can call it anything)
3. In settings, change the new setting's (overwrite\_head) value to** "custom\_head**", save the setting. \
   **This turns on the overwrite.**
4. In the code editor, add your custom tags to the "**custom\_head**" snippet you created in step 2,  and then save and publish it.

{% hint style="warning" %}
**Important: **add a value to the** developer.head\_overwrite **will immediately switch your WebEngine pages renders over to using a custom head. You can prepare the snippet before editing your setting**. **Once setup, overwriting automated head tags lets you control this portion of the \<head> through a versioned view snippet, this means you need to publish the snippet to see changes to a production site.
{% endhint %}

### Example Custom Head File

Custom head files give you access to Parsley logic and data access, this allows for a dynamic custom head per page.

```markup
<title>{{this._meta_title}}</title>

<meta name="description" content="{{this._meta_description}}">
<meta property="og:title" content="{{this._meta_title}}">
<meta property="og:description" content="{{this._meta_description}}">

(** setup an if check to use an og image if available, else default to brand image **)
{{if {!this.og_image} }}
<meta property="og:image" content="{{this.og_image.getImage()}}">
{{else}}
<meta property="og:image" content="https://www.example.com/default-share-image.png">
{{end-if}}

<link rel="icon" type="image/png" href="{{globals.site_icon.getImage()}}">

```

### What Does this Overwrite?

Zesty.io automates the following tags in the head:

* \<title> My Title \</title>
* \<meta name="description" content="my description">
* \<meta name="keywords" content="my, keywords"> (typically omitted)
* \<link rel="icon" href="/path/to/favicon.png">
* Apple oriented icons: apple-touch-icon-precomposed .. sizes="72x72",144x144","114x114"
* Open Graph and Twitter Card Tags (when content is available)
  * \<meta property="og:title" content="">
  * \<meta name="twitter:title" content="">
  * \<meta name="twitter:site" content="">
  * \<meta name="twitter:creator" content="">
  * \<meta property="og:description" content="">
  * \<meta name="twitter:description" content="">
  * \<meta property="og:url" content="">
  * \<meta property="og:site\_name" content="">
  * \<meta property="og:image" content=""> (if an image is available)
  * \<meta property="twitter:image:src" content=""> (if an image is available)

### What is Still Automated?

Even when overwriting, Zesty.io will still automate the following tags:

* Language specific tags that point to alternate locales of content
* main.css link to the auto transpiled css file (settings can overwrite this)
* main.js link to the auto transpiled javascript file (settings can overwrite this)
* Single head tags resources specific to the page scope [https://zesty.org/services/web-engine/meta-tags/custom-head-tags](https://zesty.org/services/web-engine/meta-tags/custom-head-tags)
* RSS feed links
* Google analytics script tags
* UI selected Google Fonts
* HTML Doc Types and Encodings



****\
****

