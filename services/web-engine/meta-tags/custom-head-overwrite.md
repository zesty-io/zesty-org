---
description: >-
  Developer option to overwrite the automated meta, title, and og:tags <head>
  tags with a parsley snippet file.
---

# Custom Head Overwrite

## What is an Automated Head?

Zesty.io automates the creation &lt;head&gt; tags, which include &lt;title&gt; &lt;meta&gt; and &lt;og:title&gt; like tags to automate the optimization of search engine indexing. There are times when you may want to customize these tags and not rely on Zesty.io to produce them. If you want to overwrite the automated head tags, follow this tutorial.

### How to Setup a Custom Head File and Overwrite the Automated Meta

Four steps to overwrite the head:

1. Create a **text** setting in the category **developer** with the key **head\_overwrite \(**[**see API Docs**](https://instances-api.zesty.org/?version=latest#588eccb2-8f3a-482d-b2dd-cfc9a2be93e9)**\)**
2. In the code editor, create a new _snippet_ file , lets call it "**custom\_head**" \(you can call it anything\)
3. In settings, change the new setting's value to **"custom\_head**", save the setting.  **This turns on the overwrite.**
4. In the code editor, add your custom tags to the "**custom\_head**" snippet you created in step 2, then save and publish it.

{% hint style="warning" %}
**Important:** add a value to the **developer.head\_overwrite** will immediately switch your WebEngine pages renders over to using a custom head. You can prepare the snippet before before editing your setting**.** Once setup, overwriting automated head tags lets you control this portion of the &lt;head&gt; through a versioned view snippet, this mean you need to publish the snippet to see a changes to a production site.
{% endhint %}

### Example Custom Head File

Custom head files give you access to parsley logic and data access, this allows for a dynamic custom head per page.

```markup
<title>{{this._meta_title}}</title>

<meta name="description" content="{{this._meta_description}}">
<meta property="og:title" content="{{this._meta_title}}">
<meta property="og:description" content="{{this._meta_description}}">

(** setup an if check to use an og image if available, else default to brand image **)
{{if {this.og_image} }}
<meta property="og:image" content="{{this.og_image}}">
{{else}}
<meta property="og:image" content="https://www.example.com/default-share-image.png">
{{end-if}}

```

### What Does this Overwrite?

Zesty.io automates these tags in the head:

* &lt;title&gt; My Title &lt;/title&gt;
* &lt;meta name="description" content="my description"&gt;
* &lt;meta name="keywords" content="my, keywords"&gt; \(typically omitted\)
* &lt;link rel="icon" href="/path/to/favicon.png"&gt;
* Apple oriented icons: apple-touch-icon-precomposed .. sizes="72x72",144x144","114x114"
* Open Graph and Twitter Card Tags \(when content is available\)
  * &lt;meta property="og:title" content=""&gt;
  * &lt;meta name="twitter:title" content=""&gt;
  * &lt;meta name="twitter:site" content=""&gt;
  * &lt;meta name="twitter:creator" content=""&gt;
  * &lt;meta property="og:description" content=""&gt;
  * &lt;meta name="twitter:description" content=""&gt;
  * &lt;meta property="og:url" content=""&gt;
  * &lt;meta property="og:site\_name" content=""&gt;
  * &lt;meta property="og:image" content=""&gt; \(if an image is available\)
  * &lt;meta property="twitter:image:src" content=""&gt; \(if an image is available\)

### What is Still Automated?

Even when overwriting, Zesty.io will still automate this tags:

* Language specific tags that point to alternate locales of content
* main.css link to the auto transpiled css file \(settings can overwrite this\)
* main.js link to the auto transpiled javascript file \(settings can overwrite this\)
* Single head tags resources specific to the page scope [https://zesty.org/services/web-engine/meta-tags/custom-head-tags](https://zesty.org/services/web-engine/meta-tags/custom-head-tags)
* RSS feed links
* Google analytics script tags
* UI selected Google Fonts
* HTML Doc Types and Encodings



  
****



