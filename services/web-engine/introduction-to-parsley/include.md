---
description: >-
  Learn more about how use Parsley's {{ include }} syntax which allows you
  insert a snippet within the view you are in.
---

# Include Syntax

\`\`[`{{ include }}`](https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#include) allows you to insert snippets and endpoints within the [view](https://zesty.org/services/web-engine/view-templating#what-are-views) you are in.

## Globally Available Views, Snippets, and Endpoints

When you [create a snippet](https://zesty.org/guides/using-snippets#creating-snippets) in the [Web IDE](https://zesty.org/services/manager-ui/editor), whether it be an HTML snippet, HTML Ajax, or JSON Ajax, these snippets are available globally. To insert this snippet, you'll need to use the `{{ include }}` Parsley call and the name of your snippet.

```text
{{ include my-snippet }}
```

While the `{{ include }}` prompt is commonly used for [snippets](https://zesty.org/glossary#snippet), users can also use the `{{ include }}` prompt for including view files within one another. For example, if you have a view with a [Reference Name](https://zesty.org/glossary#parsley-reference-name) of _contact\_us_ the `{{ include }}` prompt would take the form of `{{ include contact_us }}`.

```text
{{ include reference_name }}
```

If the piece of code that's being included is an endpoint be sure to use the full name of the endpoint.

```text
{{ include  /my/file.html }}
```

### Common Usage

One common use of snippets is to create a globally available header and footer. In the example below we have two separate HTML snippets: one called **header** and the other called **footer**. We want these to load in every page of our instance therefore we add them to the Loader file. In the Loader file, we add calls for the header and footer snippet calls as follows:

```text
{{ include header }]
{{ current_view }}
{{ include footer }}
```

Get a full walk-through for how to do this with the **Using Snippets** guide that's linked below.

{% page-ref page="../../../guides/using-snippets.md" %}

### Working with Remote Files

`{{ include }}` can also pull in text from a remote file. The file must be accessible _without_ authentication. There is a 3 second timeout for every request, if your remote file takes longer than 3 seconds to return, you will get a blank string. `{{ include }}` will grab the remote string and parse it with Parsley. You can use Parsley code in your remote text as well.

```text
{{ include https://parsley.zesty.io/test/remoteinclude.parsley }}
```

