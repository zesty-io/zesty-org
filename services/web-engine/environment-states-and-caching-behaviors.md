---
description: >-
  Explains the multiple caching behaviors in the different environment state of
  WebEngine.
---

# Environment States & Caching Behaviors

### WebEngine Environment States

WebEngine has two primary states, stage preview \[**dev**], and published production \[**live**]. **Live** is available through registered domains which have their branch set to **live. Dev** is available through your preview domain _HASH-dev.webengine.zesty.io_ or through a [registered domain](../../tools/guides/how-to-launch-an-instance.md#1-set-a-custom-domain-name) that has branch set to **dev.** Domains are assigned in the accounts.zesty.io user interface.

| Environment State     | What resolves                                                                      |
| --------------------- | ---------------------------------------------------------------------------------- |
| **live - production** | Only published content and code files                                              |
| **dev - preview**     | The latest version of content (published or not) and code files (published or not) |

Note, any resource that does not have version, like customer headers and settings, will immediately affect production on new renders or a cache clear.

### WebEngine Caching

WebEngine has different cache layers in place for efficiency, speed, and global scale. Caching only occurs exist on HTTP GET requests.

**System Cache**

The system cache is used to deliver data on GET and POST requests. The system cache is cleared on every POST, PUT, DELETE, and PUBLISH requests to the [Instances API](../../apis/instances-api.md). After the system cache is clears, it begins to rebuild cache references for every sequential request to data that powers a Zesty.io instance.

**CDN Cache**

The CDN cache ensure speedy delivery of assets, Zesty.io has specific features sets to work with cache purging for Akamai and Fastly, but can work with any CDN. &#x20;

The CDN cache is explicitly used when serving WebEngine GET Requests to any registered domain (both branch "dev" or "live"). CDN cache is destroyed upon an expiry date or a PUBLISH event. HTTP requests are rendered on the fly and stored in the cache upon first render. &#x20;

#### Ways to Purge/Refresh the Cache of your Instance

**Publish Events**

Any publish action will trigger the purge/refresh the system cache and CDN cache.

**Manual Purges**

The Manager UI offers two options manually purge/refresh cache. The first option will purge ALL http cached resources and assets of the full instance. That option is located in Manager UI, by clicking the instance name, a fly out will reveal a "Refresh Instance Cache" button.

![In Manager UI, by clicking the instance name, a fly out will reveal a "Refresh Instance Cache" button.](<../../.gitbook/assets/image (43).png>)

The second option is to purge/refresh individual HTTP cached resources of a specific content item. This option is available in the Manager UI when viewing a content item, scroll down the page until the CDN option appears on the right.&#x20;

![In Manager UI, when viewing a content item, scroll down and look on the right side.](<../../.gitbook/assets/image (42).png>)
