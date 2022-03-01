# View Templating

## What are Views?

Views are template files in Zesty.io that can render HTML or various other MIME types. Views render dynamically using the templating language, [Parsley](view-templating.md#zesty-ios-templating-language-parsley).

All Views have a ZUID that starts with **11**, for example `11-123a2f0-qw2n4`.&#x20;

Views can carry one of three associations:

1. **Content Model** _View_\
   A Content Model can optionally be created with a view. When this happens, Content Items of that Model get unique URLs. When a content model's item gets accessed by its URL, the [Zesty.io Site Engine](./) will render the view associated with it. When a view is associated with a content model, it has unique behaviors in the Zesty.io Manager Code Editor. This views invoke the `{{this}}` Parsley call which gives direct access to the specific Content Item being rendered.
2. **Endpoint** _View_\
   Views created to load a specific MIME type. Through Parsley they can have access to any data in an Instance, they can also have access to foreign instance data through [EcoCode](../ecosystems.md#ecocode-shared-view-templates).
3. **Snippet** _View_\
   ****Code that is intended to be reused, like HTML components or common each loops, can stored in a snippet and be `{{include}}`'d in both Endpoint Views of Content Model Views.
4. **Wildcard View** _View_\
   ****A view that resolves against a dynamic url structure which may contain any URL path part. For example a wild card view created called: /store/\*/\*/ will resolve /store/anything/here/. These views have access to Parsley, but do not have access to the `{{this}}` call.&#x20;

## Zesty.io's Templating Language, Parsley

Parsley is templating language used in a view to access content managed in Zesty.io.

Similar to other templating languages, Parsley uses double curly brackets `{{ }}` to open and close template expressions. Inside these brackets a developer can use Parsley to access content, write conditionals, or reference look ups. Parsley templating expressions are written alongside standard HTML. See the below example for a reference.

{% code title="Parsley Each Example" %}
```markup
<ul>
{{each articles as article}}
    <li><a href="{{article.getURL()}}">{{article.title}}</a></li>
{{end-each}}
</ul>
```
{% endcode %}

One can quickly explore what Parsley has to offer at the [Parsley REPL](https://parsley.zesty.io/hello-world/).
