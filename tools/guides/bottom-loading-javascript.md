---
description: >-
  Bottom loading your JavaScript can improve page load times as well as other
  benefits.
---

# Bottom Loading JavaScript

### Steps

Follow these steps to bottom load your JavaScript.

1\. Navigate to your Settings section -> Instance Settings category -> Developer.&#x20;

![Navigate to your instance's Settings section.](../../.gitbook/assets/01-bottom-load-js.png)

2\. Toggle the "Automatically include JavaScript" in head setting to _Off_ and save.

![Automatically include JavaScript in head setting.](../../.gitbook/assets/02-bottom-load-js-toggle.png)

3\. Navigate to the Editor and find the Loader listed under Views, and select it.

![Editor section with loader file selected.](../../.gitbook/assets/03-bottom-load-js-editor.png)

4\. Add a script tag with the following Parsley call in the `src` attribute `{{instance.getJsUrl()}}`. For example: `<script type="text/javascript" src="{{instance.getJsUrl()}}"></script>`

![Add a script tag to the Loader.](../../.gitbook/assets/04-bottom-load-js-add-script-tag.png)

5\. Save and Publish your changes to send them live.&#x20;

![Save and publish to send your changes live.](../../.gitbook/assets/05-bottom-load-js-save-and-publish.png)

