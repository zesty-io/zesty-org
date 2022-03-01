---
description: >-
  If you published updates but you're not seeing them on your live site you
  might need to refresh the cache.
---

# Refreshing the Cache

### Overview

Caching allows for data to be stored and quickly retrieved when requests are made. However, sometimes when a cached item is updated you may not see the updates you've made even after you published them to the live site even though you can see the changes in preview. When that happens refreshing the cache (also known as busting the cache) purges the stored items and retrieves the latest items for storage. Once the cache is refreshed users will be able to see the updates that they've made.&#x20;

Learn more about caching [here](https://en.wikipedia.org/wiki/Cache\_\(computing\)).

## Refreshing Cached Items

### Steps to Refresh Cached Item(s)&#x20;

1\. Locate the item that needs its cache refreshed and select it.

![Locate and select the item from the sidebar.](../../.gitbook/assets/01-cache-bust-find-item.png)

2\. In the editing view scroll down until you see Refresh Cached Item button in the right-hand sidebar and click it.

![Scroll until you see the Refresh Cached Item button.](../../.gitbook/assets/02-cache-bust-find-button.png)

3\. A green success notification will show in the lower right-hand corner.

![After clicking the button look for the green success notification.](../../.gitbook/assets/3-cache-bust-success-notification.png)

4\. Hard-refresh the live site and view your changes.&#x20;

## Refreshing the Instance Cache

{% hint style="info" %}
Only user roles with publishing privileges can access this feature.
{% endhint %}

1\. From any section in the content manager access the main instance menu in the upper right-hand corner by clicking on it. Then from the dropdown click on the **Refresh Instance Cache** button.

![Content dashboard with instance cache button.](../../.gitbook/assets/screen-shot-2021-03-29-at-4.58.42-pm.png)

**Note:** If you have a large number of pages it may take some time for all of the pages refresh.

