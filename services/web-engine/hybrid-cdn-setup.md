---
description: Setup your Zesty.io content instance to load through your CDN.
---

# Hybrid CDN Setup

This guide will cover setting up your content instance domain, your CDN to route to a Zesty.io origin, and testing cache purging. Note this is an enterprise feature and needs to be configured by the Zesty.io team for purging to work properly.  &#x20;

## 1.) Setting Up Your Domain

Follow the link below to setup your [Content Instance's domain](../../tools/guides/how-to-launch-an-instance.md#1-set-a-custom-domain-name).

{% content-ref url="../../tools/guides/how-to-launch-an-instance.md" %}
[how-to-launch-an-instance.md](../../tools/guides/how-to-launch-an-instance.md)
{% endcontent-ref %}

## 2.) Accessing Your WebEngine Origin

The WebEngine origin is a special domain that routes  Zesty.io WebEngine which renders published content, code, and API endpoints.  You provide this domain to your CDN configuration.&#x20;

Once your domain is setup in step 1, you will use that domain to find your custom origin url. For example, if you setup `mydomain.com`, your origin would be `mydomain-com.webengine.origin.zesty.zone`

## 3.) Configuring your CDN

Use your `mydomain-com.webengine.origin.zesty.zone`equivalent as the origin or host in your property settings. You may access this origin in https or http. Be sure to use the correct protocol based on if you are serving TLS.

**Cache Headers:** Configure the CDN property rule to respect cache headers for the specific Zesty.io origin. If you are setting it to a specific path (subdirectory like /blog/) and have multiple rules on a property, ensure that only that specific rule. If you are setting up Zesty.io on a sub-directory be sure to test that you are not chancing caching for your other sud-directory properties before deploying.

**HTTPS Setup:** When requesting HTTPS, you need to reference the public CA (certificate authority) bundle into your configuration. Some services like Akamai will have a button to pull the origin CA automatically. For other services, you make need to request

**HTTPS Redirect:** For HTTPS redirect, set a rule in your property configuration for 301 redirect with query parameters to the https version. (for example http://mydomain.com/?utm\_campaign=12345 redirects to https://mydomain.com/?utm\_campaign=12345)&#x20;

**WWW Redirect:** If you are servicing an apex domain like https://mydomain.com as http://www.mydomain.com, you will need to set a rule to 301 redirect with the query string (for example https://mydomain.com/?utm\_campaign=12345) to the www version of the domain or the non-www version, whatever your preference is. Whatever version of the domain you chose, you can set the www behavior in manager ui > settings > general. This will ensure your canonical tags match your desired domain.&#x20;

### Hybrid CDN data flow visualization

![](../../.gitbook/assets/screen-shot-2021-06-09-at-9.07.31-pm.png)

## 4.) Configure Purging

For Zesty.io to custom purge your CDN service, you will need to provide the Zesty.io EcoSystem which your content instance is associated with a purge url. That purge URL need to accept a POST request with a JSON raw body payload that looks like:

```javascript
{
      "objects": [
          "CACHE-KEY",
          "ZUID"
     ]
}
```

A simple payload is an array of strings, which are often ZUIDs in Zesty.io. Page resources that WebEngine renders are tagged with ZUIDs in header tags for CDNs to located them directly.

To secure this endpoint from being called, you may optional setup a secret key, which zesty will post as the header `X-Auth` that value can be saved to Zesty.io along with your purge url endpoint.

```
--header 'X-Auth: xxxxx'
```

### Akamai Purge

Zesty.io automatically adds [ZUIDs](../../getting-started/zuids.md) to headers that are recognized by Akamai. Akamai refers to them as `edge-cache-tags.` Learn more about Edge Cache Tags from [Akamai's documentation](https://learn.akamai.com/en-us/webhelp/fast-purge/fast-purge/GUID-64272BAE-BCB0-4F84-BA5A-8A21549A347D.html#:\~:text=When%20a%20web%20asset%20is,at%20the%20Akamai%20edge%20servers.).&#x20;

Setup API tokens with administrator access. This will be needed to run a purge

Zesty.io has an open-source project for Akamai purge which you can use with your own API keys. Deploy a Google Cloud function with this [https://github.com/zesty-io/akamai-tag-Americapurge](https://github.com/zesty-io/akamai-tag-purge)

### Fastly Purge

Zesty.io automatically adds [ZUIDs](../../getting-started/zuids.md) to headers that are recognized by Fastly. Fastly refers to them as `surrogate-keys.` Learn more about Purging Surrogate keys from [Fastly's documentation](https://developer.fastly.com/reference/api/purging/).&#x20;

Setup an API token with purge access. This will be needed to run a purge on your custom endpoint.

### Need Help?

Hybrid is an enterprise offering from Zesty.io, please reach out to support for help or clarification.

## 5.) Updating Zesty.io to Send the Purge Request

When you have a purge function deployed and have tested that you can post a payload to it to trigger a cache purge, you will then want to update Zesty.io to know about the URL and the x-auth key. Rest API documentation can be found here [https://accounts-api.zesty.org/?version=latest#d1864580-86f7-4ff4-afdd-edea5563992a](https://accounts-api.zesty.org/?version=latest#d1864580-86f7-4ff4-afdd-edea5563992a)

Once added, code and content updates will automatically run your purge request.

{% hint style="info" %}
Note that clicking the Clear Cache buttons in the Manager UI will ultimately trigger a cache purge in your configured CDN
{% endhint %}

{% swagger baseUrl="https://accounts.api.zesty.io/v1/ecosystems/35-xyz-xyzxyz?action=updateCDNDefaults" path="" method="post" summary="Update EcoSystem to run a remote Purge URL" %}
{% swagger-description %}
Your Post Body looks like: 

\




`{`

 

\


  

`"defaultCDNType": "AKAMAI",`

 

\


  

`"defaultCDNPurgeURL": "https://location-of-cloud-purge-function.com",`

 

\


  

`"defaultCDNPurgeAuth": "SECRET_KEY"`

\


`}`

\



{% endswagger-description %}

{% swagger-parameter in="header" name="Authorization" type="string" %}
Bearer XXXXX
{% endswagger-parameter %}

{% swagger-parameter in="body" name="Raw Body" type="string" %}
Pass a body as described in the description above.
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}
