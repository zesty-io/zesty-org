---
description: >-
  This guide shows how to create a search results page within Zesty,
  demonstrating with a zipcode search example.
---

# How to Create a Search Page

In this guide you will learn how to create a search form and search results on the Zesty platform. We will be creating a search form which will lookup results based on a postal code. Using AJAX we will request search results for a smooth user experience.

We will need to create 3 files;

1. `zip-search-form` Zesty snippet file
2. `zip-search-results` Zesty HTML AJAX file 
3. `zip-search.js` Zesty JavaScript file

Here is an example of what that code would look like. Read on to cover each step independently.

{% embed url="https://gist.github.com/shrunyan/0176f2511d5376b56a9f" %}

### Events Dataset

Start by structuring your data. For this example we are searching for events listed on our web property. The events dataset will be structured with a _title_, _zipcode_, & _image_ fields. Later we will be fuzzy matching user input against the _zipcode_ field. This can be expanded on with any other necessary fields, for example; _description_, _address_, _price_, etc...

### Search Form

In the code editor we will create a snippet file to build the search form in. This will allow the form to be included anywhere we need. For our example we are creating a `zip-search-form` snippet and will `include` it on a page. We are not including a form tag with an action attribute because we will be controlling submitting the user input via AJAX.

```text
<input id="search" />    
<ul id="results"></ul>
```

  
 This a very simple example and can be expanded upon to fit your search purposes. As well as made more semantic with a form tag and labels for inputs.

### Search Results

For the search results we are going to make a HTML AJAX file in the code editor. AJAX files are templates that we write JavaScript AJAX requests against and get an HTML response. We plan on posting the user entered search term to this file so we know the Parsley `get_var` property will be available for us to fuzzy match against.

We need to write a Parsley `each` loop to match the posted term against any dataset property that we have setup. In our example we will see if there are any event zip codes which match our search term. We could easily add a Parsley `OR` statement and match against multiple values.

```text
{{each events as event WHERE event.zip_code LIKE '{get_var.term}%'}}
    <h1>{{event.title}}</h1>
    <h2>{{event.zip_code}}</h2>
{{end-each}}
```

The `%` character acts as a wildcard mechanism in Parsley. This will allow fuzzy matching as a user refines their search term.

### AJAX to Request Results

Lastly we need to write some JavaScript to capture the user input then request the results via AJAX. We are going to use the jQuery library to accomplish this since it provides some really nice methods to deal with AJAX requests. First we select the `#search` form and attach an event handler for the `keyup` event. So every time someone types into the form we will execute the callback function, `cb()`.

`$('#search').on('keyup', function cb() {`

Inside `cb()` we will use the jQuery [`load`](https://api.jquery.com/load) function to fetch the search results by composing a url with our search term as a GET query.

`$('#results').load('/ajax/zip-search-results.html/?term='+$(this).val());`

Two important things to note about the url;

1. All HTML AJAX files can be requested at the `/ajax/YOUR-FILENAME` url path.
2. Attaching the input value to the url makes the value available as a `get_var.term` on the fetched page.

_Our file path includes a_ `.html` _file extension. This is not necessary since Zesty templates are virtualized. We are using it so we can see it and understand conceptually what it represents._

### Finishing Up

Now we have a search form, search results & JavaScript to fetch the results. To implement this form we can `include zip-search-form` on any Zesty page template and our searching against events dataset functionality will be available.

