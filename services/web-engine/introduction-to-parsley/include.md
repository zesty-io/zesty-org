---
description: >-
  Learn more about how use Parsley's "Include" syntax which allows you insert a
  snippet within the view you are in.
---

# Include

"Include" lets you insert snippets and endpoints within the view you are in.

#### Globally available views

When you create a snippet in the Editor, whether it be an HTML snippet, HTML Ajax, or JSON Ajax, these snippets are available globally. To insert this snippet, you'll need to use the "include" Parsley call and the name of your snippet.

```text
{{ include my-snippet }}
```

If the piece of code that that's being included is an endpoint be sure to use the full name of the endpoint.

```text
{{ include  /my/file.html }}
```

One common use is to create a globally available header and footer. In our example we will have two separate HTML snippets: one called header and the other called footer. We will want these to load in every page of our instance so we add them to the Loader file.  In the Loader file, we add calls for the header and footer snippet calls as follows:

```text
{{ include header }]
{{ current_view }}
{{ include footer }}
```

