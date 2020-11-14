---
description: >-
  Learn how to use all of Parsley's instance functions to access instance
  variables.
---

# Instance Functions

## instance.cdn

Access the full url to the Satellite™ CDN.

```text
{{ instance.cdn }}
```

## instance.date\(\)

Access the date from the Satellite. [Additional formatting options](https://developer.zesty.io/parsley-templating/dates/).

```text
{{ instance.date() }}
```

## instance.host\_env

Shows the instance's webengine URL. This only works in preview - not on live.

```text
{{ instance.host_env }}
```

## instance.host\_live

Shows you the instance's first registered domain. This only works in preview - not on live.

```text
{{ instance.host_live }}
```

## instance.host\_preview \(or instance.host\_relative\)

Shows an instance's preview URL. This only works in preview - not on live.

```text
{{ instance.host_preview }}
{{ instance.host_relative }}
```

## instance.host\_protocol

Shows the instance's protocol based on its settings. This only works on preview - not on live.

```text
{{ instance.host_protocol }}
```

## instance.searchformatted\(search\_term\)

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
{{ instance.searchformatted(my search term) }}
```

## instance.domain

If domain is set for the instance, this call will return it.

```text
{{ instance.domain }}
```

## instance.lorem\(number\)

Generate lorem ipsum placeholder text on the fly.

```text
{{ instance.lorem(200) }}
```

## instance.sendemail\(subject, body, to\_address\)

Send an email with a Parsley call. This **requires a verified email** in settings &gt; contact form. Use ,, the ascii code for a comma in place of commas in the subject and body arguments.

```text
{{instance.sendemail(hello stuaaaaaart,You are my biggest&#44; bestest fan, stuart@zesty.io)}}
```

## instance.subnav\(\)

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
{{ instance.subnav(false) }} 

{{ instance.subnav(true 2) }}
```

## instance.truepath\(ZUID\)

Truepath takes in a UUID-like identifier, called a "ZUID", which can be located in the the Zesty.io Manager url. Truepath returns a perfect url path to the znode content id. Use true path to ensure links never break.

```text
{{ instance.truepath(501) }}
```

