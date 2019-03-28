---
description: Learn how to use all of Parsley's site functions to access site variables.
---

# Site Functions

### site.cdn

Access the full url to the Satellite™ CDN.

```text
{{site.cdn}}
```

### site.date\(\)

Access the date from the Satellite. [Additional formatting options](https://developer.zesty.io/parsley-templating/dates/).

```text
{{site.date()}}
```

### site.searchformatted\(search\_term\)

Search a Satellite's meta titles and descriptions.

Returns search results in this format:

```text
<ol class="search-formatted">
    <li onclick="window.location='/menu-sweet/'">
        <a href="/menu-sweet/">Sweet Menu</a>Meta Page description
    </li>
</ol>
```

Parsley code used to return the the search results:

```text
{{site.searchformatted(my search term)}}
```

### site.domain

If domain is set for the Satellite, this call will return it.

```text
{{site.domain}}
```

### site.lorem\(number\)

Generate lorem ipsum placeholder text on the fly.

```text
{{site.lorem(200)}}
```

### site.sendemail\(subject, body, to\_address\)

Send an email with a Parsley call. This **requires a verified email** in settings &gt; contact form. Use ,, the ascii code for a comma in place of commas in the subject and body arguments.

```text
{{site.sendemail(hello stuaaaaaart,You are my biggest&#44; bestest fan, stuart@zesty.io)}}
```

### site.subnav\(\)

Generate a formatted Sub Navigation.

```text
<ul id="sub-navigation" class="sub-navigation">
    <li>
        <a class="sub-navigation categories" href="/about/categories/" title="The Categories">The Categories</a>
    </li>
</ul>
```

 show two sub levels and the auto generated header

```text
<h5 class="sub-navigationHeader"><a href="/about/" title="About" class=" at">About</a></h5> 
<ul id="sub-navigation" class="sub-navigation">
    <li>
        <a class="sub-navigation categories" href="/about/categories/" title="The Categories">The Categories</a>
    </li>
</ul>
```

```text
{{site.subnav(false)}} 

{{site.subnav(true 2)}}
```

### site.truepath\(ZUID\)

Truepath takes in a UUID-like identifier, called a "ZUID", which can be located in the the Zesty.io Manager url. Truepath returns a perfect url path to the znode content id. Use true path to ensure links never break.

```text
{{site.truepath(501)}}
```

