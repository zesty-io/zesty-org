# Open Graph and Twitter Cards Meta tags

Open graph and Twitter Cards are auto generated in Zesty.io. This document will explain how, and how you can override them.

# Automated tags

All content items with a view and URL route in Zesty.io will have a title, description, and keywords associated with them. The tags produced in the header by these are:

```
<title>{seo_meta_title}</title>
<meta name="description" content="{seo_meta_title}">
<meta name="keywords" content="{seo_meta_keywords}">
```

These value will be used to auto fill in open graph and twitter cards tags.

### Facebook Open Graph Tags
```
<meta property="og:type" content="website">
<meta property="og:title" content="{seo_meta_title}">
<meta property="og:description" content="{seo_meta_description}">
<meta property="og:url" content="[fully_qualified_url:automated]">
<meta property="og:site_name" content="{clippings:site_name}">
```

### Facebook Open Graph Tags when an Image exists
```
<meta property="og:type" content="website">
<meta property="og:title" content="{seo_meta_title}">
<meta property="og:description" content="{seo_meta_description}">
<meta property="og:url" content="[fully_qualified_url:automated]">
<meta property="og:image" content="[default_image:automated]">
<meta property="og:site_name" content="{clippings:site_name}">

```

### Twitter Card Tags
```
<meta name="twitter:card" content="summary">
<meta name="twitter:creator" content="{settings_twitter_handle}">
<meta name="twitter:title" content="{seo_meta_title}">
<meta property="twitter:description" content="{seo_meta_description}">
```

### Twitter Card Tags when an Image exists
```
<meta name="twitter:card" content="summary">
<meta name="twitter:creator" content="{settings_twitter_handle}">
<meta name="twitter:title" content="{seo_meta_title}">
<meta property="twitter:description" content="{seo_meta_description}">
<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:image:src" content="[default_image:automated]">
<meta property="twitter:image:width" content="1200">

```


# How to Override Open Graph and Twitter Card Tags

You may override an open graph or twitter card meta tag on content models items by adding specific content fields to the model.

## OG/Twitter Title

If you add a `content field` to a `model` named `og_title`, it will use that as the default for for the open graph meta title, and twitter card meta title. If a customer does not, it will default to the models `meta title`, which exists for every `model` with a view and route. If the customer wants a specific twitter card meta title, they can create a `content field` named  `tc_title` on the `model`, note this will only apply to twitter card, and will not default to open graph. If only `tc_title` exists, the open graph title will still default to the `meta_title`.

```
<meta name="og:title" content="{og_title|seo_meta_title}">
<meta name="twitter:title" content="{tc_title|og_title|seo_meta_title}">
```

## OG/Twitter Description

The same applies for the open graph description and twitter card description, which can be overridden with `og_description` and `tc_description`.
```
<meta name="og:description" content="{og_description|seo_meta_description}">
<meta name="twitter:description" content="{tc_description|og_description|seo_meta_description}">
```

## OG/Twitter Images

For open graph image and twitter card image it follow the same fall back logic and uses `og_image` and `tc_image` as the custom name. For images, if there is not `og_image` or `tc_image` tag, it will default to the first created content field with `image` or `img` in its reference name.

Images auto resize to work with a 1200 pixel width.

```
<meta name="og:image" content="{og_image|[default_image:automated]}">
<meta name="twitter:img:src" content="{tc_image|og_image|[default_image:automated]}">
```
