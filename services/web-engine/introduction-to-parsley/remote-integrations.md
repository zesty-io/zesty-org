---
description: Parsley can make web requests to remote data for server side rendering.
---

# Remote Integrations

## GroupBy \(GBi\) eCommerce Search

GroupBy is smart eCommerce search tool that can reference millions of rich product data points in seconds. Zesty.io integrates with GroupBy in these ways: search, product lookup, personalized navigation, and personalized product refinement lookups. The GroupBy integration into the Zesty.io's Server Side Rendering language Parsley can be used to produce statically cached, search engine rich, product pages, category pages, search pages, and home pages.

This integration requires an api from GroupBy, and three settings in Zesty. The settings are:

* **\[groupby\]\[client-key\]** // \(optional\) unique client key
* **\[groupby\]\[url\]**  // _api endpoint_
* **\[groupby\]\[collection\]** _// the default groupby collection_

### Working in Parsley

In Parsley each loops can be used to iterate over search, product, refinements, or navigation data from GroupBy.

## Searching GroupBy \(api.gbi.search\)

This method allows you to run a string based search to your GroupBy API

```markup
{{each api.gbi.search(collection, area, search, limit) as result}}
    <h1>{{result.title}}</h1>
    <img src="{{result.visualVariants:0:productImage}}" alt="{{result.title}} Image">
    <textarea>{{result._json}}</textarea>
{{end-each}}
```

### Parameter Breakdown of api.gbi.search\(\)

* **collection:** The collection name from GroupBy _e.g. products_
* **area:** The area name from GroupBy _e.g. Storefront_
* **search:** Search query _e.g. Red Dress_
* **limit**: Maximum results to return and each through _e.g. 20 \(defaults to 10\)_

### Accessing Nested Data

GroupBy results are custom tailored per each customer implementation, because of that, zesty flattens the returned object so Parsley can access it like `{{result.visualVariants:0:productImage}}`the use of the semicolons is in place of `.` , so treat it as you were accessing a JSON \(javascript object notation\) object.  

### Working with JSON output

You may output a full JSON string from the result to view the object to know paths like `{{result.visualVariants:0:productImage}}`or as a shortcut to work with dynamic javascript rendering. It is done like this:

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

## Accessing a Product from GroupBy \(api.gbi.product\)

Parsley can be used to server side render product pages by accessing GroupBy. The result is search engine rich and fast loading statically cached pages.

```markup
{{each api.gbi.product(collection, area, productId) as product}}
    <h1>{{product.title}}</h1>
    <img src="{{product.visualVariants:0:productImage}}" alt="{{result.title}} Image">
    <textarea>{{product._json}}</textarea>
    <!-- this gets the first naviigation refinement available -->
    <p>Refinements count: {{navitem._refinementCount}}</p>
    <p>Refinements String: {{navitem._refinements}}</p>
{{end-each}}
```

## Accessing a Rich Navigation from GroupBy \(api.gbi.navigation\)

```markup
<ul>
{{each api.gbi.navigation(collection, area, search) as navitem}}
    <li><strong>{{navitem.navItem}}</strong>
    <p>Refinements count: {{navitem._refinementCount}}</p>
    <p>Refinements String: {{navitem._refinements}}</p>
    </li>
{{end-each}}
</ul>
```

## Accessing a Search with Refinements from GroupBy \(api.gbi.searchWithRefinements\)

A very powerful feature of GroupBy is to make searches, but with relative refinements based on the product being browsed. 

```markup
<ul>
{{each api.gbi.navigation(collection, area, search, refinements, limit) as refinedSearchItem}}
    <h1>{{refinedSearchItem.title}}</h1>
    <img src="{{refinedSearchItem.visualVariants:0:productImage}}" alt="{{result.title}} Image">
    <textarea>{{refinedSearchItem._json}}</textarea>
{{end-each}}
</ul>
```

This functionality can be used in conjunction with search or product navigation output to produce results that output similar to how Amazon.com generates. Parsley conveniently generates a string that can be passed to achieve these results.   

```markup
<!-- Custom Related Items Below the Product -->

{{each api.gbi.navigation(products, Storefront, productID, 5) as relatedNavItem}}
<h1>{{relatedNavItem.displayName}}</h1>
<h2>Total Refinements: {{navitems._refinementCount}}</h2>
<!-- this store a string for later access -->
{{$refinements = {navitem._refinements} }}
	<ul>
	{{each api.gbi.searchWithRefinements(products, Storefront, ,{$$refinements},10) as refined }}
	<li>{{refined.title}}</li>
	{{end-each}}
	</ul>
<hr>
{{end-each}}

```

**How the Refinements String Works**

Parsley needs strings passed to it, therefore a custom string output was made to handle what is normally a JSON array of objects posted to a GroupBy endpoint. Here is an example the string needed for Zesty:

`categories*1:Value:Jewelry Watches|categories*1:Value:Women|categories*1:Value:Bed Bath|categories*1:Value:Men|categories*1:Value:Fine China|categories*1:Value:Handbags Accessories|categories*1:Value:Plus Sizes|categories*1:Value:Dining Entertaining|categories*1:Value:Bath Rugs Bath Mats|categories*1:Value:Shower Curtains`

It's a delimited string. Here is how it works if you need to generate your own string. `*` represents `.`, colons `:` act like CSV, `|` are the delimiter. 

