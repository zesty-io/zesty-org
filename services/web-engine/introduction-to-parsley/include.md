---
description: >-
  Learn more about how use Parsley's "Include" syntax which allows you insert a
  snippet within the view you are in.
---

# Include

"Include" lets you insert a snippet within the view you are in.

#### Globally available views

When you create a snippet in the Editor, whether it be an HTML snippet, HTML Ajax, or JSON Ajax, these snippets are available globally. To insert this snippet, you'll need to use the "include" Parsley call and the name of your view.

```text
{{ include my-view }}
```

One common use is to create a globally available header and footer. In our example we will have two separate HTML snippets: one called header and the other called footer. We will want these to load in every page of our instance. In the loader file, we will call it as follows:

```text
{{ include header }]
{{ current_view }}
{{ include footer }}
```

