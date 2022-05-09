---
description: >-
  The toJSON() Parsley call allows users to create custom endpoints from Models
  and Item.
---

# Parsley toJSON()

The Parsley method `toJSON()` enables users to create custom endpoints with a fully hydrated JSON object. It can also be used inline with JavaScript included in Views, providing additional access to a Content Item's stored data.&#x20;

The `toJSON()` method has two optional parameters, giving the user control over hydration level and the inclusion of metadata. This is achieved with the following syntax:&#x20;

```
// Hydration depth is passed first followed by metadata preference
{{ this.toJSON(depth, showMeta) }}

// For example:
{{this.toJSON(3,false)}}
```

* `depth` is an integer for hydration depth, max depth is 5
* `showMeta` supports a boolean value of _true_ or _false. `true` _ provides all meta, routing, zuid details, and locale details. _`false`_ provides only content.

The method's parameters, `depth` and `showMeta,` are optional. The default output of the method, without specification, will include meta data and a hydration depth level of 2.

### Using the Method

The `toJSON()` method can be used in a variety of ways to format the desired content and the URL routing location it will be rendered from. Below details how this can be accomplished in three different ways:

1. Applying the Parsley method to `this` inside of the Item associated View will access the corresponding Item's content. The Parsley keyword `this` can only be used on a Content Model generated View, as it points to the connected item. **For example:** `{{this.toJSON(depth, showMeta)}}`&#x20;
2. Adding the method to the Parsley first() or last() calls can access a corresponding item in a Multi-Entry or Dataset Model. **For example:** `{{model.first().toJSON(2, true)}}`
3. The method can also be used in Pasley `each` loops to render a JSON object of each item. Inside the `each` loop, filters can be applied by adding Parsley if or where conditionals as well to only output desired objects. **For example:**&#x20;

```
{{each model as item}}
    {{item.toJSON()}}
{{end-each}}

// with conditional
{{each model as item where item.zuid = '7-f2dabc123-123xyz'}}
    {{item.toJSON()}}
{{end-each}}
```

For examples of the `toJSON()` method, please visit the [Parsley REPL](https://parsley.zesty.io/turn-any-content-item-to-json/). Additional syntax details can be found in the [Parsley Index](../../services/web-engine/introduction-to-parsley/parsley-index.md#tojson).
