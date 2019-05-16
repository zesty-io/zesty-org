# Head & Meta Tags

Meta tags are automatically generated in Zesty.io. Some may be overwritten by content fields. This document will explain which meta tags can be affected by the user, and which are hard written into the Zesty.io Website Engine.

## Automated Meta tags

### Basic SEO Meta Tags

All content items with a view and URL route in Zesty.io will have a title, description, and keywords associated with them. The tags produced in the header that are affected by content items are:

```markup
<title>{seo_meta_title}</title>
<meta name="description" content="{seo_meta_description}">
<meta name="keywords" content="{seo_meta_keywords}">
```

### Default Environment Meta Tags

These tags are always generated, and are not editable.

```markup
<meta  http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
```

### Social Media Tags \(Twitter Card and Open Graph Meta Tags\)

These tags are always auto-generated to help with sharing on social media platforms. The two social media tags automated are Open Graph \(Facebook\) and Twitter Cards \(Twitter\). The content of these tags are copied from the meta title and meta description tags.

{% page-ref page="open-graph-twitter-card-meta-tags.md" %}

