---
description: Parsley can make remote request to foreign date for server side rendering.
---

# Remote Integrations

## GroupBy \(GBi\) eCommerce Search

GroupBy is smart eCommerce search tool that can reference millions of rich product data points in seconds. Zesty.io integrates with GroupBy in these ways: search, product lookup, personalized navigation, and personalized product refinement lookups. The GroupBy integration into the Zesty.io's Server Side Rendering language Parsley can be used to produce statically cached, search engine rich, product pages, category pages, search pages, and home pages.

This integration requires an api from GroupBy, and three settings in Zesty. The settings are:

* **\[groupby\]\[client-key\]** // \(optional\) unique client key
* **\[groupby\]\[url\]**  // _api endpoint_
* **\[groupby\]\[collection\]** _// the default groupby collection_

### Working in Parsley

In parsley each loops can be used to iterate over search, product, or navigation data.

{% code title="Searching GroupBy..." %}
```markup
{{each api.gbi.search(collection, area, search, limit) as result}}
    <h1>{{result.title}}</h1>
    <textarea>{{result._json}}</textarea>
{{end-each}}
```
{% endcode %}

Note: GroupBy results are custom tailored per each customer implementation, because of that, zesty flattens the returned object so Parsley can access it like `{{result.visualVariants:0:productImage}}`the use of the semicolons is in place of `.` , so treat it as you were accessing a JSON \(javascript object notation\) object.  You may output a full JSON string from the result to view the object to know paths like `{{result.visualVariants:0:productImage}}`or as a shortcut to work with dynamic javascript rendering. It is done like this:

{% code title="Working with JSON" %}
```markup
<p>View the JSON string</p>
<textarea>
{{result._json}}
</textarea>
<p>Access the object with javascript</p>
<script>
let myobj = {{result._json}}; // this will auto create the javascript object
console.log(myobj);
</script>

```
{% endcode %}



{% code title="Navigation with GroupBy..." %}
```markup
<ul>
{{each api.gbi.navigation(collection, area, search) as navitem}}
    <li>{{navitem.navItem}}</li>
{{end-each}}
</ul>
```
{% endcode %}



