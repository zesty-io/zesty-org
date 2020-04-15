# Headless Code Examples

## Principles of Headless Zesty.io

Zesty.io provides many basic content apis to pull content from your site, allowing for easy access of your content. Additionally, Zesty.io allows you to create custom endpoints, allowing you to perform logic / more advanced queries when pulling data. These endpoints are the fundamental building blocks that define headless Zesty.io products — when put together, anything can be created.

The pages in this guide detail various examples that use Zesty.io, and also include links to their source code. Additionally, you can receive support from our developers at chat.zesty.io

## Getting Started

{% hint style="danger" %}
This guide assumes that you already have a zesty.io instance created with content to consume. If you don't yet have a zesty.io instance, you can learn how to create one here
{% endhint %}

First, you'll need to figure out which platform you want to integrate with Zesty.io. We currently have guides and example projects for Swift, React, Rails, Hugo, and Jekyll, but don't let that stop you! Zesty.io endpoints can be consumed anywhere you want, so sky's the limit.

Second, you need to decide whether you want to consume Zesty.io content remotely or locally. To consume content **remotely** means that you'll be performing a request to Zesty.io every time you want to _load_ content. To consume content **locally** means that you'll be performing a request to Zesty.io every time you want to _reload_ content.

