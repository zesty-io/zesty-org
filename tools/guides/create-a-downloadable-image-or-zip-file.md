---
description: >-
  This guide will walk through how to create a downloadable image or zip file
  utilizing a DAM stored media item.
---

# Create a Downloadable Image or Zip File

This tutorial will guide you through accessing media items stored in Content Items. As well as steps to creating a downloadable anchor tag for an image or zip. Throughout this guide, we will be using one Content Item that serves as our reference for all of our code samples.

{% hint style="info" %}
**What you'll learn in this guide:**

* Accessing your content item's media fields
* How to use Parsley to call your media items URL
* Query parameters used to allow for downloading content
* Anchor tags 'download' attribute
{% endhint %}

### Where to upload my media items?

To add media assets into your Content Items, you will first need to add the desired assets to the DAM. This can be done by navigating to the Media App in the Zesty CMS platform. Once inside you can select the grouping you would like the asset added to or create a new subgroup.&#x20;

After selecting the location, simply click the upload button to add the image or zip file.

![Media App and DAM upload](../../.gitbook/assets/DAM\_upload.png)

### Adding media assets to your content items

Once the media items have been uploaded into the DAM, they can be selected in any Content Item that has a media field. In the image below you can see we have a Content Item that has 2 media fields named: _**file**_ and _**download image**_.

In the file field, we have selected the zip file and the image field contains our selected image. To add media items, click the plus button in the media field and a DAM screen will display allowing you to select the media asset.

&#x20;We will be using the fields' reference names to access their content in the Code App. These are the names that appear after the colon in the highlighted selections within the image. When fields are initially created, Zesty allows users to create their own field reference names for ease of recognition.

![Content Item with loaded zip file and image media items](../../.gitbook/assets/image\_zip.png)

### Creating a downloadable zip file

Now that our zip file has been added to our Content Item, we can create the anchor tag in the Code App. First, we will navigate to our Content Model associated view file in the Code App.&#x20;

Once there we can utilize the Parsley keyword `this` to access our fields by their reference names using dot notation. For example, the following will output the content from our Title field:&#x20;

```html
/* we encompass our entire call in double curly brackets to initialize
Parsley. The keyword 'this' points to the view associated content model and
we connect it to the desired field reference name */

<h1>{{this.title}}</h1>
```

Using the above dot notation style syntax we can create our download anchor tag. To do so, we will need to use the Parsley `getMediaURL()` call. This call returns the original media DAM URL to the file.&#x20;

#### 'download' query parameter

In addition to the `getMediaURL()` call, we will need to add a 'download' query parameter to the media item URL. This can be achieved within the `href` of the anchor tag. Below illustrates how to achieve this using our example _**file**_ field:

<pre class="language-html"><code class="lang-html"><strong>/* the following anchor tag demonstrates the necessary syntax */
</strong>&#x3C;a href="{{this.file.getMediaURL()}}?download=true" download>Zip file&#x3C;/a>

/* the resulting output */
&#x3C;a href="https://123abc.media.zestyio.com/myfile.zip?download=true" download>Zip file&#x3C;/a></code></pre>

### Creating a downloadable image file

As before, we add our image to the Content Item by selecting it in our _**download\_image**_ field. Once selected, we will navigate to our Content Model associated view file in the Code App.&#x20;

Using the Parsley `getMediaURL()` call on an image will return the original file without the default optimization provided by Zesty. Additional query parameters are needed to complete the syntax. These will be added to the `href` as well.

#### 'download' & 'raw' query parameters

Two query parameters are needed to create a downloadable image. In addition to 'download', you will also need 'raw' to allow for downloading the raw unoptimized image file. Below illustrates how to achieve this using our example _**download\_image**_ field:

```html
/* the following anchor tag demonstrates the necessary syntax */
<a href="{{this.file.getMediaURL()}}?download=true&raw=true" download>Image</a>

/* the resulting output */
<a href="https://123abc.media.zestyio.com/myimage.jpg?download=true&raw=true" download>Image</a>
```

### Anchor Tag 'download' Attribute

In the above code samples, you can see that a `download` attribute has been added to the anchor tags after the `href`. It specifies that the target provided by the `href` attribute will be downloaded when a user clicks on the hyperlink. This is necessary for each downloadable link created.&#x20;

The `download` attribute can also be provided an optional value, which will be the new file name after the item is downloaded. For example, we would like our image to download with the file name _'fan-art.jpg'._ To do so, we would use the following syntax:

```html
/* the following anchor tag demonstrates the download attribute
with an optional file name value */
<a href="{{this.file.getMediaURL()}}?download=true&raw=true" download="fan-art.jpg">Image</a>
```
