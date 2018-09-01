# View Templating

## What are Views?

Views are template files in Zesty.io that can render HTML or various other MIME types. Views render dynamically using the templating language, [Parsley](view-templating.md#zesty-ios-templating-language-parsley).

All Views have a ZUID that starts with **11**, for example `11-123a2f0-qw2n4`

Views can carry one of three associations

1. **Content Model**  Content Model can be created with a view, when this happens Content Items of that Model get unique URLs. When a content model's item gets accessed by its URL, the [Zesty.io Site Engine](./) will render the view associated with it. When a view is associated with a content model, it has unique behaviors in the Zesty.io Manager Code Editor.
2. Endpoint, created to load a specific MIME type
3. Snippet

## Zesty.io's Templating Language, Parsley

Parsley is templating language used in a view to access content managed in Zesty.io.

Similar to other templating languages, Parsley uses double brackets `{{ }}` to open and close template expressions. Inside these brackets a developer can use Parsley to access content, write conditionals, or reference look ups. Parsley templating expressions are written alongside standard HTML. See the below example for a reference.

{% code-tabs %}
{% code-tabs-item title="Parsley Each Example" %}
```markup
<ul>
{{each articles as article}}
    <li><a href="{{article.getURL()}}">{{article.title}}</a></li>
{{end-each}}
</ul>
```
{% endcode-tabs-item %}
{% endcode-tabs %}

One can quickly explore what Parsley has to offer at the [Parsley REPL](https://parsley.zesty.io/hello-world/)

