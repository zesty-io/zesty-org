---
description: >-
  Zesty provides a few ways to add JavaScript to your sites. They are managed
  from the Editor underneath the JavaScript file list. You can either choose to
  create an internal file or link to an external
---

# Javascript

### Overview

Zesty provides a few ways to add JavaScript to your sites. Most are managed from the Editor underneath the JavaScript file list, otherwise JavaScript can be added to HTML views with script tags. When adding JavaScript to the JavaScript file section you can either choose to create an internal file or link to an external JavaScript file.

### Internal JavaScript Files

Any JavaScript files created in the code editor will be concatenated and delivered synchronously as a single file in the document head.

It's important to note that because all the JavaScript is served before the document is loaded if your doing anything with the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) you need to check that the [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded) event has fired. This is commonly accomplished with the jQuery document `ready()` function.

_jQuery DOM ready example:_

\`\`\`$\(document\).ready\(function\(\) { console.log\( "ready!" \); // execute your code here }\);

\`\`\`

### External JavaScript Files

By creating a JavaScript Link you can add externally hosted files to your site. This is a great option for JavaScript libraries that are hosted on well known CDNs. Which can potentially be cached in your visitors browser allowing them to avoid a resource download.

### Inline JavaScript

If needed you can also add JavaScript inline on a Zesty template page. A common use case would be adding an analytics vendors tracking code on the `loader`, this would make the tracking code available on every page across your site.

