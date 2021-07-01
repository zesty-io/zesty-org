---
description: >-
  Learn how to iterate through Headless and Group with View content models with
  a Parsley Each Loop.
---

# Each Loop

### Each Loop Basics

Developers can iterate over a collection in Parsley using the `{{each}}` expression. 

_If you're looking for information on how to loop through multiple images in a single field refer to the_ [_Image Modifiers article_](https://zesty.org/services/web-engine/introduction-to-parsley/image-modifiers#looping-through-multiple-images-in-a-media-field)_._ 

#### Simple Iteration

One of the most basic examples of iteration is looping over a Zesty.io data set. This example shows a list of product names being generated from a data set named Products. [Work with a live example](https://parsley.zesty.io/looping-and-each-statements/).

```text
<ul class="product-list">  
{{ each products as product }}
    <li class="product">{{ product.name }}</li>
{{ end-each }}
</ul>
```

#### Limit

When iterating a collection you can limit the number of iterations with `limit`. This example shows how to retrieve only the 5 latest blog posts from a content set called Posts.

```text
{{ each posts as post limit 5 }}
    <article>
        <h1>{{ post.title }}</h1>
        <p>{{ post.description }}</p>
        <a hreft="{{ truepath(post.zid) }}">Read More</a>
    </article>
{{ end-each }}
```

#### Sorting

You can sort your entries by a string or integer value in which case it will sort alphabetically ascending \(A-Z or 0-9\) which is coded as`asc`, by default. To sort in descending order you must specify descending \(Z-A or 9-0\) which is coded as`desc` .

Example Code

```text
// Alphabetical Sort
{{ each members as member sort by member.name }}
    <aside>
        <h1>{{ member.name }}</h1>
        <p>{{ member.bio }}</p>
    </aside>
{{ end-each }}

// Numerical Descending Sort
{{ each posts as post sort by post.date DESC }}
    <a href="truepath({{post.zid}})">{{ post.title }}</a>

When sorting by multiple columns only the first sort parameter requires the dot notation. All other parameters can be comma separated values.

// Sorting by Multiple Columns
{{ each set as var sort by var.field_1, field_2, field_3 desc }}
{{ end-each }}
```

#### Returning unique items with `group`  

An each loop can output a unique list of items by grouping them based on a single [field](https://zesty.org/services/manager-ui/schema/fields#table-of-field-types) using the keyword `group`. In other words, using `group` will return items based on how many unique items are listed in a field.   
For example, if you had a list of products, but only wanted to print out items with unique barcodes, you could group your products by barcode, shown in the example below. If there are duplicates, only the most recent entry will be outputted.

```text
{{ each products as product group group product.barcode }}
...loop content...
{{ end-each }}
```

#### Comparing similarity with `like`

An each loop can use the comparison `like` to find similar items. The code below shows an example of the syntax being used to search through a content set called Events where the event's zip code that matches a get variable in the URL. For example if your URL is `http://mysite.com/location-search/?zip_search=92101` the `get_var` is named `zip_search` and its value is `92101`.

```text
{{ each events as event where items.zip LIKE '{get_var.zip_search}%' }}    
    {{ event.title }}<br>{{ event.zip }}
{{ end-each }}
```

#### Using `where` to your results

The `where` statement in the each loop essentially helps you filter the data you're looking through to target the exact pieces of data that you're looking to return. The following example shows how to use a `where` statement to narrow down your results to a 3 month date range. The below code is looping through a content set called Events and looking for items where the event's date is greater than now at an interval of 3 months.

```text
{{ each events as event WHERE items.date > DATE_ADD(NOW(),INTERVAL -3 MONTH) ORDER BY event.date ASC LIMIT 0,4 }}

    <h1>{{ event.title }}</h1>
    <p>{{ event.date }}</p>

{{ end-each }}
```

### Advanced Techniques

Let's take a look at specific each loop iterations.

#### Setup

You can think of an each statement as being made up of 4 sections. These are the: 1. declaration 2. where 3. sort 4. limit The declaration comes first but the other three sections can be in any order. However, for the sake of continuity we recommend ordering those sections as shown in the above list. The "where" is by far the most nuanced and will be what we focus most of this article on. First we’ll knock out the other three sections and then come back to the "where" filter.

Here is an example of an each loop with some more complex items. Content in parentheses is placeholder content.

```text
{{ each (set_refrence_name) as (variable) where (variable.field) = (value) and (other_field) != ‘{(page.field)}’ or (field) like “%(value)%” sort by (variable.sort) desc limit (number to skip),(number to show) }}
loop content...
{{ end-each }}
```

#### Declaration

The declaration always comes first and has the least complexity. It will always be "each reference\_name as variable" The reference name must match a page group or data set reference name of an existing set on that Zesty.io instance. The variable must be a string with no spaces or special characters.

```text
{{ each articles as art }}
loop content...
{{ end-each }}
```

#### Sort

The sort section is written as “sort by variable.field asc/desc” where asc or desc represent ascending or descending. Ascending is assumed if no direction is specified. As a warning, if you reference a field that doesn’t exist to sort by, the page will break. Please note that if you want to sort by more than one field, only the first field requires the form "variable.field", subsequent fields can be directly referenced by their name.

```text
{{ each articles as art sort by art.sort_order, date DESC }}
loop content...
{{ end-each }}
```

#### Limit

Limit is written as “limit 4” or “limit 2,10”. If limit is written with a single number that’s the total number of items that will show. If limit is written with two numbers comma separated, the first number is how many entries to skip and the second number is how many entries to run through the loop. Another way to think about this is “limit 4” is the same thing as “limit 0,4” - either way would show you 4 entries, beginning with the first one.

```text
{{ each articles as art limit 10 }}
loop content...
{{ end-each }}
```

#### “where” basics

The where is written as “where something compared to something” and if that condition is true the loop will execute. One of the most common uses would be checking if entries belong on a category page, which might look something like this:

```markup
{{ each articles as art where art.parent_zuid = '{page.zuid}' }}
loop content...
{{ end-each }}
```

This loop would execute if the article's parent page was set to the current page being viewed.

#### The Where - Comparison Types

There are several comparison values you can use to generate the each loop with the results you need. They are =, !=, &gt;, &gt;=, &lt;, &lt;=, and "like".

**Where - and and or**

You can set up multiple comparisons on a single each loop by separating them with “and” or “or” or both. The following example is looping through a content set called Events. It's looping through featured events and looking for today's events or future events by comparing today's date against the event's date in the content set. One thing to note is that you can’t use the variable.field notation for fields after an "and" or an "or," you just reference the field name directly. The only exceptions to this are the Zesty.io auto-included data like “zuid” and "parent\_zuid" which must be referenced as “z.zuid” after an “and” or an “or” modifier.

```text
{{ each events as eve where eve.date > {site.date()} and featured = 1 or date = {site.date} }}
loop content...
{{ end-each }}
```

**Where - find\_in\_set\(\)**

One of the more complex items you can write in an each loop is using a find\_in\_set filter. This is used almost exclusively with the one-to-many field type. The syntax is “where find\_in\_set\(target\_number, set\_of\_numbers\)” For example a blog article might have many tags associated with it. On the blog page, the loop would look like this:

```text
{{ each tags as tag where find_in_set(tag.zuid, ‘{page.tags}’) }}
loop content...
{{ end-each }}
```

This is how you would write the loop on the tags page to find related articles.

#### 

```text


{{ each articles as art where find_in_set('{page.zuid}', art.tags ) }}
loop content...
{{ end-each }}

```

#### Where - Syntax notes

When referencing any external variable, including references to parsley variables, { page.field } variables, { site.item } variables, or variables established in surrounding each loops, use single curly brackets around them. If you are expecting a string, you must wrap the variable in single quotes. Additionally the syntax for multiple checks in a where statement is use “variable.field\_name” for the first check and just “field\_name” for additional clauses. The only exceptions to this are the Zesty.io auto-included data like “zuid” use “z.zuid” for additional clauses.

```text
{{ each tags as tag where tag.featured = 1 and find_in_set(z.zuid, '{page.tags}' ) }}
loop content...
{{ end-each }}
```

