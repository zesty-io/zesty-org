---
description: >-
  The Parsley Page call is used to reference content stored for any field in the
  current view.
---

# Parsley Page Call

### Overview

One of the most common Parsley calls is `{{ page.field_name }}`. This call will use the content stored for the specified field for the current page. For example, we'll say I have a `homepage` collection which has a `welcome_title` field, and I store the content "Welcome to my website!" in that field. I can use this Parsley:

```text
<h1>{{ page.welcome_title }}</h1>

to generate this output:

<h1>Welcome to my website!</h1>
```

### Auto-created Page Fields

Every page created in Zesty.io has default fields for settings and SEO. All of these fields are available for developer use and include:

* `zuid` - the unique identifier for the page.
* `getUrl` - the relative URL path to the page.
* `path_part` - the portion of the URL path specific to the page.
* `seo_link_title` - the title used in Parsley Auto-navigation calls.
* `seo_meta_title` - the title used as the title in the head.
* `seo_meta_description` - used for the meta description in the head.
* `seo_meta_keywords` - not used by default
* `set_zuid` - the unique identifier for the Collection the page belongs to.
* `parent_zuid` - the unique identifier of the immediate parent page, if the current page is a child of another.

### How it works

comment: &lt;&gt; \(In the case of `{{ page.field_name }}` we are still using the table, row, and column instructions we described in the Parsley Content Calls overview article, but we get to use a short cut.\) When `{{ page.field_name }}` is rendered on a website, Zesty.io is able to look up which Content Model and which Entry is being referenced based on the URL, then uses which ever field is requested to get the correct data. The 'page.' specifies both the table the current content model, the row as the content entry being viewed, while the field referenced after the `page.` is the column.

