---
description: >-
  Learn more about how use Parsley's {{ include }} syntax which allows you
  insert a snippet within the view you are in.
---

# Include Syntax

[`{{ include }}`](https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#include) allows you to insert snippets and endpoints within the [view](https://zesty.org/services/web-engine/view-templating#what-are-views) you are in.

## Globally Available Views, Snippets, and Endpoints

When you [create a snippet](https://zesty.org/guides/using-snippets#creating-snippets) in the [Web IDE](https://zesty.org/services/manager-ui/editor), whether it be an HTML snippet, HTML Ajax, or JSON Ajax, these snippets are available globally. To insert this snippet, you'll need to use the `{{ include }}` Parsley call and the name of your snippet.

```
{{ include my-snippet }}
```

While the `{{ include }}` prompt is commonly used for [snippets](https://zesty.org/glossary#snippet), users can also use the `{{ include }}` prompt for including view files within one another. For example, if you have a view with a [Reference Name](https://zesty.org/glossary#parsley-reference-name) of _contact\_us_ the `{{ include }}` prompt would take the form of `{{ include contact_us }}`.

```
{{ include reference_name }}
```

If the piece of code that's being included is an endpoint be sure to use the full name of the endpoint.

```
{{ include  /my/file.html }}
```

### Common Usage

One common use of snippets is to create a globally available header and footer. In the example below we have two separate HTML snippets: one called **header** and the other called **footer**. We want these to load in every page of our instance therefore we add them to the Loader file. In the Loader file, we add calls for the header and footer snippet calls as follows:

```
{{ include header }]
{{ current_view }}
{{ include footer }}
```

Get a full walk-through for how to do this with the **Using Snippets** guide that's linked below.

{% content-ref url="../../../tools/guides/using-snippets.md" %}
[using-snippets.md](../../../tools/guides/using-snippets.md)
{% endcontent-ref %}

### Working with Remote Files

`{{ include }}` can also pull in text from a remote file. The file must be accessible _without_ authentication. There is a 3 second timeout for every request, if your remote file takes longer than 3 seconds to return, you will get a blank string. `{{ include }}` will grab the remote string and parse it with Parsley. You can use Parsley code in your remote text as well.

```
{{ include https://parsley.zesty.io/test/remoteinclude.parsley }}
```

### Using Dynamic Values in Includes

Includes make use dynamic reference to globals, settings, query parameters, path parts, post values, and `this` content values. The scope is limited to just those values because include are processes before parsley starts its rendering process.

{% hint style="warning" %}
**Note:** Includes are part of Parsley, but are processed before Parsley starts to render, therefore developers are limited to the scope of the values listed below.
{% endhint %}

* **Settings** are accessed like `{settings.general.site_protocol}`
* **Content** item values are accessed like `{this.my_title}`
* **Globals** are accessed like `{globals.site_name}`
* **Query Params** are accessed like `{query_param.key}` or `{get_var.key}`
* **Path Parts** accessed like `{path_part.0}`  e.g. `/first/part/  {path_part.0} returns 'first'`
* **Multiple** like this `"my page is {this.title} from {globals.site_name}"`

```
{{ include https://parsley.zesty.io/testers/hello/?testMe={get_var.testParam}&testPathPart={path_part.0} }}
{{ include {get_var.testParam} }}
```
