---
description: >-
  Content Models in Zesty.io can be associated with a view. A view is a file
  that loads whenever a content item is accessed through a browser by its unique
  URL.
---

# View Templating

## The Anatomy of a View

Views are template files that are tied to a Content Model. When a content models item gets accessed by its URL, the [Zesty.io Site Engine](./) will render a view. 

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

