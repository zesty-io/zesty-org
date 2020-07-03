---
description: Parsley can make remote request to foreign date for server side rendering.
---

# Remote Integrations

## GroupBy \(GBi\) Ecommerce Search

GroupBy is smart eCommerce search tool that can reference millions of rich product data points in seconds. Zesty.io integrates with GroupBy in three ways: search, products, and navigation. The GroupBy integration can be used to produce staticly cached, search engine rich, product pages, category pages, search pages, and home pages.

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

Note, GroupBy results are custom tailored per each customer implementation, because of that, zesty flattens the returned object so Parsley can access it like `{{result.visualVariants:0:productImage}}`use semicolons in place of `.` as you were accessing a JSON object. 

{% code title="Navigation with GroupBy..." %}
```markup
<ul>
{{each api.gbi.navigation(collection, area, search) as navitem}}
    <li>{{navitem.navItem}}</li>
{{end-each}}
</ul>
```
{% endcode %}



