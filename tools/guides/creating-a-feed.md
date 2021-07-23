---
description: Use our built-in options or use a custom endpoint to create a feed.
---

# Creating a feed

## Overview

There are two types of feeds: a built-in feed and a custom feed. The built-in feed is automatically created based on a content model's [Reference Name](https://zesty.org/glossary#parsley-reference-name). Custom feeds are built by a developer in Zesty.io's Editor section. Learn more about the built-in and custom feeds below.

## Built-in Feed

The built-in feed is automatically created using a content model with the reference name `article`, `articles`, or `blog_article`. To view the built-in feed navigate to your domain slash \(/\) feed.xml - for example: `example.com/feed.xml`.

The built-in feed.xml file cannot be modified. If you want a custom feed then you'll need to create a custom endpoint in the Editor.

In the Settings section -&gt; Instance Settings category -&gt; SEO there is a field for overriding the default content models that's used for the feed.xml file. To use this override field locate the ZUID of the content model that you want to create a feed for; copy and paste the ZUID in that override field and save.

## Custom Feed

Custom feeds can be made by creating a custom endpoint in the [Editor section](https://zesty.org/services/manager-ui/editor). Navigate to the Editor section and create a new endpoint called, for example: `/feed/my-feed.xml` . In this file, use a Parsley [each loop](https://zesty.org/services/web-engine/introduction-to-parsley/each-loop-deep-dive#each-loop-basics) to loop through the items that you want in your feed. Note: be sure that your XML syntax is correct by previewing your new endpoint before sending it live. Once you're ready to send it live, publish it.

