---
description: >-
  WebEngine is a server side rendering origin for rich content and data. It
  communicate with popular CDNs and have handle versioned or published states.
---

# WebEngine

At the foundation of every Zesty.io instance is WebEngine, a rendering service which powers the dynamic rendering of full page HTML along with independent files of any datatype. WebEngine has all the logic built in to instantly become your domains origin to power on-the-fly content creation. 

The most foundational part of WebEngine is powering HTML views that are associated with [content models](../manager-ui/schema/content-models.md). Each content item entered into a content model can power a dynamic rich HTML view or automated JSON which has all the content relationships hydrated.   

Depending on the [WebEngine mode](modes.md), when a content items route is hit `/about/` for example, either a fully rendered HTML page will be delivered, or, a fully hydrated JSON object of route's the content item. 

**Full Page Rendering**

Each content model created on a Zesty.io instance comes with a editable HTML view that can be customized to any design. Pages can be wrapped in snippets like `headers` and `footers`. Each view is wrapped in a body with an automated head of title, meta, og:tags, CSS links, and JavaScript references. The head can [optionally be customized](meta-tags/custom-head-overwrite.md).  

## 

