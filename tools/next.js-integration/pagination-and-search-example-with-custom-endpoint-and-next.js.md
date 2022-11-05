---
description: >-
  Lean how to create a custom JSON endpoint to power content like blogs with
  pagination and search.
---

# Pagination and Search Example with Custom Endpoint and Next.js

### Create a custom Search Endpoint

In Manager, open Code, create new file, Select `custom` with the name `/data/search.json`

{% code title="/data/search.json" overflow="wrap" lineNumbers="true" %}
```handlebars
[
{{each blog_posts as article where article.blog_posts_name LIKE '%{get_var.q}%' or article.blog_content LIKE '%{get_var.q}%'  limit 10 }}
{{article.toJSON(2, true) }}
{{if {article._length} > {article._num}  }}, {{ end-if}}
{{end-each}}
]
```
{% endcode %}

### Search Usage

You may now make a request to `https://www.yoururl.com/data/search.json?q=Your Search`

### Created a Custom Pagination Endpoints

In Manager, open Code, create new file, Select `custom` with the name `/data/`pagination`.json`

{% code title="/data/pagination.json" overflow="wrap" lineNumbers="true" %}
```handlebars
{{$limit = 12}} {{$page = 0}} 
{{if {get_var.start} }} {{$page = {get_var.start} }} {{end-if}} 
{{if {get_var.limit} }} {{$limit = {get_var.limit} }} {{end-if}} 
[
{{each blog_posts as article limit {$start},{$limit} order by article.created_at DESC }}
{{article.toJSON(2, true) }}
{{if {article._length} > {article._num}  }}, {{ end-if}}
{{end-each}}
]
```
{% endcode %}

### Pagination Usage

You may now make a request to `https://www.yoururl.com/data/pagination.json?start=0&limit=10`
