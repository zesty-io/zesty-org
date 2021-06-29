---
description: >-
  WebEngine is a server side rendering origin for rich content and data. It
  communicate with popular CDNs and have handle versioned or published states.
---

# WebEngine

At the foundation of every Zesty.io instance is WebEngine, a rendering service which powers the dynamic rendering of full page HTML, stand-alone files of any datatype, automated JSON output, proxied remote files, and more. WebEngine has all the logic built in to instantly become your domains origin to power on-the-fly search engine rich content. 

The most foundational part of WebEngine is powering HTML or JSON views that are associated with the content items entered into [content models](../manager-ui/schema/content-models.md). Each content item can power a dynamic rich HTML view or automated JSON which has all the content relationships hydrated.   

Depending on the [WebEngine mode](modes.md), when a content items route is hit `/about/` for example, either a fully rendered HTML page will be delivered, or, a fully hydrated JSON object of route's the content item. 

**Full Page Rendering - Hybrid and Traditional Modes**

Each content model created on a Zesty.io instance comes with a editable HTML view that can be customized to any design. Pages can be wrapped in snippets like `headers` and `footers`. Each view is wrapped in a body with an automated head of title, meta, og:tags, CSS links, and JavaScript references. The head can [optionally be customized](meta-tags/custom-head-overwrite.md).  

**Automated JSON - Headless Mode**

When WebEngine runs in [headless mode](modes.md#headless-mode-headless), it converts all routes associated to a content item and converts that data into fully hydrated JSON. 

{% code title="https://www.zesty.io/?toJSON" %}
```javascript
{
    title: "Your Content, Anywhere",
    content: "<h1>A CONTENT PLATFORM THAT POWERS ENTERPRISE GRADE WEBSITES AND APPLICATIONS</h1>",
    image: {
        type: "images",
        totalItems: 1,
        data: [
            {
                type: "image",
                zuid: "3-5c58033-eb8cq",
                url: "https://zestyio.media.zestyio.com/Zesty.io---9-5seg.mp4"
            }
        ]
    },
    customer_logo_heading: "Trusted by enterprises, startups, and everyone in between",
    main_headline: "Managing content at scale is difficult.",
    main_description: "<ul><li><p>Security issues, and out of date software</p></li><li><p>Editing the same content in multiple places</p></li><li><p>Developers needed for content updates</p></li></ul><h1>..but it doesn’t have to be</h1><ul><li><p>Centralized content management</p></li><li><p>Automated security and product improvements</p></li><li><p>Easy Distribution at global scale</p></li></ul>",
    pagina_nueva: null,
    og_image: {
    type: "images",
    totalItems: 1,
    data: [
            {
                type: "image",
                zuid: "3-a4f5ca6-a25px",
                url: "https://kfg6bckb.media.zestyio.com/zesty-share-image-generic.png"
            }
        ]
    },
    meta: {
        type: "item",
        model_name: "homepage",
        zuid: "7-31209c-g7qsjg",
        createdAt: "2020-10-01 06:33:30",
        updatedAt: "2020-10-01 06:33:29",
        listed: "1",
        version: "200",
        locale: {
            id: "1",
            name: "English (United States)",
            code: "en-US",
            default: "1",
            active: "1",
            enabled: "1"
        },
        model: {
            type: "model",
            zuid: "6-31079c-vdg69q",
            name: "homepage",
            label: "Homepage",
            resourceURI: "https://www.zesty.io/-/instant/6-31079c-vdg69q.json"
        },
        web: {
            url: "https://www.zesty.io/",
            uri: "/",
            fragment: "zesty_home",
            canonical_tag_mode: "1",
            sitemap_priority: "-1.0",
            sitemap_last_updated: "2020-10-01 06:33:29",
            canonical_query_param_whitelist: null,
            canonical_tag_custom_value: null,
            seo_link_text: "Homepage",
            seo_meta_title: "Zesty.io: The Headless CMS for Marketers + Developers",
            seo_meta_description: "Built for teams to manage and distribute content to multiple sites, devices, and anywhere else it needs to go.",
            seo_meta_keywords: null
        }
    }
}
```
{% endcode %}

## \*\*\*\*

