## View Templating (Parsley)

Content Models in Zesty.io can be associated with a view. A view is a file that loads whenever a content item is accessed through a browser by its unique URL.

Parsley is templating language used in a view to access content managed in Zesty.io.

Similar to other templating languages, Parsley uses double brackets `{{ }}` to open and close template expressions. Inside these brackets a developer can use Parsley to access content, write conditionals, or reference look ups. Parsley templating expressions are written alongside standard HTML. See the below example for a reference.

```
<ul>
{{each articles as article}}
	<li><a href="{{article.getURL()}}">{{article.title}}</a></li>
{{end-each}}
</ul>
```

One can quickly explore what Parsley has to offer at the <a href="https://parsley.zesty.io/hello-world/">Parsley REPL</a>
