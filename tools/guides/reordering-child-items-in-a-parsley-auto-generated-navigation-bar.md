---
description: >-
  Reordering the child items in an auto-generated navigation bar is as simple as
  adjusting some numbers in the content editing view.
---

# Reordering Child Items in a Parsley Auto-generated Navigation Bar

### Overview

Parsley's  [`{{ navigation() }}`](https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#navigation-number) call automatically creates a navigation bar based on an instances content models. Depending on how the call is configured, users will see child items in their navigation bar. Child items will show up in dropdowns underneath their parent item.&#x20;

**Note:** the `{{ navigation() }}` call creates an HTML list structure but does not styles the navigation bar as shown below.

![A dropdown of child pages is shown outlined in purple.](../../.gitbook/assets/auto-gen-nav-dropdowns.png)

These child items are shown in the order they're created, however users may want to reorder them. Follow the steps below to reorder them.

### Steps to reorder navigation child items

Using the image above as our example we're going to step through how to reorder child  items.

1\. Decide on the order that you want the child items in.

![Example order of child items.](../../.gitbook/assets/auto-gen-nav-child-items-order.png)

2\. In the Content Manager, navigate to the Content section.

![Navigate to the Content section.](../../.gitbook/assets/02-navigate-to-content-section.png)

3\.  Locate the item that you've selected to be your first child item and select it.

![Locate your first child item and select it.](../../.gitbook/assets/03-locate-item-and-select-it.png)

4\. Scroll down to find the Parsley Behaviors section in the right-hand sidebar.&#x20;

![Parsley Behaviors in the right-hand sidebar.](../../.gitbook/assets/04-locate-parsley-behaviors.png)

5\. Use the number picker to reorder your item.&#x20;

![Use the number picker to reorder your item.](../../.gitbook/assets/05-use-the-number-picker-to-reorder-item.png)

6\. Click  the green Save button and preview your changes before sending them live.

![Save and preview your changes.](../../.gitbook/assets/06-save-and-preview-changes.png)

7\. If you're satisfied with the order click the blue Publish to send your changes live.

![Click the blue Publish button to send your changes live.](../../.gitbook/assets/07-publish-changes.png)

8\. Repeat steps 3-7 for each item that you'd like to reorder.
