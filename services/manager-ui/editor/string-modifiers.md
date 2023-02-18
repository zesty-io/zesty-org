---
description: >-
  There are a number of Parsley string modifiers that users can employ to suite
  their needs. Keep reading to learn more about which string modifiers are
  available and how to use them.
---

# String Modifiers

## .getNextURL()

A quick way to retrieve the next URL in line in a page group.

```
{{ page.getNextURL() }}
```

## .getPreviousURL()

Quick access to the URL of the previous page in line in a page group.

```
{ page.getpreviousurl() }}
```

## .getUrl()

Returns the relative path to the item you are trying to access.

```
<a href="{{ blog_post.getUrl() }}">Link</a>
// <a href="https://zesty.io/blog/updates/new-sitemap-xml-control-in-zesty/">Link</a>
```

## .htmlentities()

Converts the text string provided into HTML entities. Useful for when outputting text from the database.

```
<p>{{ page.description.htmlentities() }}</p>
```

## .html\_entity\_decode()

Converts all HTML entities in the provided string to their applicable characters.

```
<p>{{ page.description.html_entity_decode() }}</p>
```

## .obfuscate()

Use this call to render obscure text to web crawlers, like email or phone numbers.

```
<a href="mailto:{{setting.contact-form.sending_email.obfuscate()}}">
{{setting.contact-form.sending_email.obfuscate()}}</a>
```

## .preg\_replace(pattern, replacement)

Executes a regular expression find and replace on the text attached to the call.

```
// Replace all instances of whitespace with dashes
// $title = "Hello all and welcome to Zesty"
{{ $title.preg_replace(' ','-') }}
// "Hello-all-and-welcome-to-Zesty"
```

## .replace(pattern, replacement)

Does a simple replace without any regular expression.

```
// $description = "We wrote this blog post"
{{ $description.replace(We, I) }}
// "I wrote this blog post"
{{ page.article_body.replace( src='(.*?)', data-src='\') }}
```

## .slugify()

Slugify will concatenate strings by replacing spaces with dashes (-), lowercasing all letters, and stripping out all punctuation.

```
// if the page title is the string: My New Homepage!

{{ page.title.slugify() }}

// calling slugify on the page title will return: my-new-homepage
```

## .striptags(start, length)

Function will return a string with HTML tags removed. It also acts as a substring method if a `start` and `length` parameter are provided.

```
{{thispage.html.striptags()}}

{{thispage.html.striptags(4,6)}}
```

## .substr(start, length)

Function that takes the text value it is attached to and returns a substring with the desired length. Substring can take negative numbers as well such as `substr(-5)` to return the last five characters of a string. Does not consider whitespace as part of length.

```
// $description = "This is a longer description that needs shortened!"
{{ $description.substr(0,9) }}...
// "This is a lo..."
```

## .subWords(number\_of\_words)

Return the first X words from a body of text. This is a cleaner method and subString() when creating text previews in lists because it will not create breaks in the middle of words.

```
{{ page.content.subWords(3) }}
```

## site.lorem(number)

Auto generates lorem ipsum placeholder content from this example string:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat quam quis erat tristique pretium. Nunc iaculis lacinia nulla, quis pulvinar lorem rhoncus quis. In adipiscing, sapien blandit dictum pulvinar, massa nisl pretium nunc, vel volutpat nisl leo id justo. Sed ut elit nulla. Vestibulum pharetra est sit amet odio bibendum pharetra. Mauris magna dolor, mollis ac dignissim vitae, sollicitudin et arcu. Vivamus nec ultrices augue. Quisque libero diam, facilisis in ullamcorper vitae, condimentum vitae erat. Ut lacinia lacus in tellus scelerisque vestibulum. Praesent pharetra ligula lacus, at ultrices felis dictum ac. Cras consectetur ut dolor vitae dapibus. Vestibulum sit amet nibh semper, ornare erat vel, consectetur sapien.

```
{{site.lorem(20)}}
```

## site.searchformatted

Takes a string parameter and a limit paramenter and outputs a site wide search results based on a meta title, meta desription, and page url.

```
{{site.searchformatted(STRING, NUMBER)}}
{{site.searchformatted({get_var.search},10)}}
```
