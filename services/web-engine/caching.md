---
description: 'Zesty.io: Caching Document which describes the details of caching web requests'
---

# Caching

**Note**: For a general overview of caching we recommend starting with the [MDN HTTP caching ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)article.

![](https://lh6.googleusercontent.com/HtF0LS2OJcOrwgOuWiyS1ioAZr0vLbNVbnal3kH57SBdtEIY32cM7KaoFiZ0GL9abrCLgdfnJXxVX3A\_1Yuh-oTN94RnDWxAdRxctfMcHlyRT3fBbG3PcV1lTtb0w6sw7dBxtRw)

## Caching Instructions&#x20;

When responding to a web request HTTP headers are used as instructions to any caches within the request chain on how they should behave with regards to whether they should cache the response and for how long. Here are the primary headers to be aware of when considering caching.

### Cache-Control&#x20;

[**Cache-Control - HTTP | MDN**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)

Currently the standard header to use when instruction caches on how they should behave. Cache-Control uses "directives" which are the specific values that instruct the caches. Read [April King — Cache-Control Recommendations](https://grayduck.mn/2021/09/13/cache-control-recommendations/) for more information on Cache-Control directives.

### Pragma - Deprecated&#x20;

[**Pragma - HTTP | MDN**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Pragma)

Pragma provides backward compatibility to HTTP 1.0. Cache-Control should be preferred when possible.

## Caching Layers&#x20;

When fulfilling web requests there are many locations at which the request can be cached. In this document we attempt to make an exhaustive list of locations to keep in mind when thinking through request chains and where/when they are cached.

### Query Caching&#x20;

Zesty.io WebEngine is an origin service for web traffic. In order to keep this service performant we back it with an in-memory cache. When WebEngine fulfills a request it needs to resolve the requested pages data. These resolved queries are kept in the Query Cache. This is an important detail as it means whenever we need to invalidate a cache object we need to also invalidate the related Query Cache. This ensures that when that cache object is requested next the latest data is returned vs the potentially stale cache data.

### Intermediates&#x20;

From the Zesty.io Cloud CDN to our origin we are aware of all the intermediary caches but may not necessarily control them. For example, we host WebEngine on GAE: Google App Engine which contains a cache which is enacted whenever responses contain a Cache-Control header. We do not have any control over the behavior of this cache beyond what the Cache-Control instructions are.

Beyond the infrastructure within our control it is possible for there to be other intermediaries. Especially with customers running private infrastructure in front of the origin. It's important to understand this fact as when we debug caching issues any caches in between can be the cause of unknown behaviors.

### **CDN:** Content Delivery Network&#x20;

As designed, CDNs cache responses to request they service. While we have control over the CDN we manage, we often will need to coordinate with customers to ensure their CDN is configured correctly to ensure proper caching behavior.

#### Zesty.io Cloud&#x20;

This offering is our out-of-the-box solution for customers. It contains all the necessary components of our architecture already configured and running.

This infrastructure is what powers our \*.zesty.dev vanity domains. Meaning it is present and used by customers whether they operate a Private Cloud or not.

#### Zesty.io Private Cloud&#x20;

This offering is for customers who want to maintain control over the data in transit and at rest for their web properties.

### Browser&#x20;

Browsers usually provide a cache as well. These are typically informed by the headers on responses. This is a layer which can often be overlooked.

## Cache Time-to-Live (TTL)&#x20;

TTL: time-to-live is the concept of how long a particular response should remain a cache object before the cache invalidates it and fetches the latest. Regardless of if it was explicitly purged. Learn more about TTL in the [Fastly Cache freshness and TTLs | Fastly Developer Hub](https://developer.fastly.com/learning/concepts/cache-freshness/) support article.

One important aspect when determining what TTL value should be set is thinking about the type of data being returned. Most often the primary concern is how likely is the data to change over time.

For example; the data which makes the image [https://brand.zesty.io/zesty-io-logo-vertical.png](https://brand.zesty.io/zesty-io-logo-vertical.png) is unlikely to change overtime. Therefore a long TTL, e.g. 1 year, would be appropriate.

But the data for the URL [https://www.zesty.io/sitemap.xml](https://www.zesty.io/sitemap.xml) may change often. As we can imagine new articles being published and altering the sitemap. Therefore a short TTL would be more appropriate, e.g. 24 hours.

Some URLs should never be cached. For example; [https://\{{instance\_zuid\}}.api.zesty.io/v1/content/models/\{{content\_model\_zuid\}}/items](https://\{{instance\_zuid\}}.api.zesty.io/v1/content/models/%7B%7Bcontent\_model\_zuid%7D%7D/items) is an API responses which can change often, sometimes hourly.

## Cache Destruction

&#x20;When a change is desired to be public it needs to be published. Publishing involves the process of telling all pertinent caches that the prior cache object is no longer valid and the next time the data is requested it should re-fetch the latest.

There are typically two events which start this process;

### Publish&#x20;

The most common event for triggering cache destruction. It is an action which immediately communicates to caches telling them the specified cache object is no longer valid.

### Schedule&#x20;

Scheduling is just a delayed publish. This event adds additional layers of architecture to achieve this. We operate a Scheduler which takes a job to be run at a specific time. The job being the specific publish event we want to occur.
