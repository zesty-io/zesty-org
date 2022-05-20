---
description: This index collects all Parsley syntax and methods.
---

# Parsley Index

## \_index

When looping through a content model with an each loop, you can use `variable_name._index` to get the current count of how many times you have run through the each loop. \_index begins counting from 0. To start counting at 1 use `_num` instead.

```
<div class="row">
{{ each team_members as member }}
{{ if {member._index} % 3 == 0 }} (** Checks for every third loop, can be used to end and stop rows when using fixed width columns in a grid  **)
</div><div class="row">
{{ end-if }}
<div class="column">
<p>{{ member.name }}</p>
<p>{{ member._index }}</p>
</div>
{{ end-each }}
</div>
```

## \_length

When looping through a content model with an each loop, you can call `{{ variable_name._length }}` to get the total number of times the loop will run.

```
<div class="article-tags">
{{ each article_tag as tag }}
<p>{{ tag.name }}{{ if {tag._num} != {tag._length} }}, {{ end-if }}</p>
{{ end-each }}
</div>
(** As long as the loop's num does not equal its length a comma will be appended to the list of tags **)
```

## \_num

When looping through a content model with an each loop, you can use `variable_name._num` to get the current count of how many times you have run through the each loop. `_num` begins counting from 1. To start counting at 0 use `_index` instead.

```
<div class="article-tags">
{{ each article_tag as tag }}
<p>{{if {tag._num} == 1 }}This is the first item{{ end-if }}</p>
{{ end-each }}
</div>
(** As long as the loop's num does not equal its length a comma will be appended to the list of tags **)
```

## activate\_links()

Converts plain text URLS into anchor tags [URL](https://github.com/zesty-io/zesty-org/tree/3418a808274fc82af3fe7dbbfeb55591b527edaf/services/web-engine/introduction-to-parsley/URL/README.md). Useful for content where text comes in with HTML stripped.

```
{{ page.textarea.activate_links() }}
```

## api.dribbble

```
{{ each api.dribbble.getShots(USER_NAME) as shot }}
    <img src="{{ shot.image_teaser_url }}" alt="{{ shot.title} }" />
{{ end-each }}
```

## breadcrumbs

The `breadcrumbs` call outputs an automated breadcrumb trail of links, listing the parent pages assigned to the current page. If there are no available links, then an empty span is outputted.

```
{{ breadcrumbs }}

Example Output:
<span itemprop="breadcrumb">
    <span class="crumb"><a href="/blog/">Blog</a></span> 
    <span class="sep">»</span>
    <span class="crumb"><a href="/blog/example-category/">Example Category</a></span>
    <span class="sep">»</span>
    <span class="crumb">Example Post</span>
</span>
```

## clippings (see Globals)

## Comments (\*\* **\*\***)

Use these comments to prevent Parsley or other code from processing in HTML and Endpoint files. Anything within these comments are server side comments and will not render out to the source code.

```
(** old code  **)
(** 
< h1>{{ page.title }}</h1>
**)
(** new code **)
<h3>{{ page.new_title }}</h3>
```

## current\_view

The `{{ current_view }}` call is a unique Zesty.io statement that will load the Page View associated with the current website url. `{{ current_view }}` is used once in the `loader` snippet. This allows a website to have consistent template elements above and below the unique aspect of each page.

```
{{ include header }}
<div class="content">
      {{ current_view }}
</div>
{{ include footer }}
```

## date(format)

Uses the [php date](https://www.php.net/manual/en/datetime.format.php) format to create the date string shown to the user.

```
<em>{{ page.published_date.date(l, F jS, Y \a\t g:ia) }}</em> 
// <em>Sunday, January 1st, 2011 at 10:50pm</em>
```

## dateDiffForHumans()

This method creates an expression of duration comparing the date and time from a content field to the current date and time.

```
{{ page.date.dateDiffForHumans() }}
<br/>
Returns:
<br/>
[x time] ago
```

## each

The Parsley Each statements, also known as loops, allow you to iterate (loop) through each entry of a content model.

```
{{ each team_members as member }}
<p>{{ member.name }}</p>
{{ end-each }}
```

## else

The `else` statement allows for a a final case if none of the defined conditions in the `if` statement have been met.

```
{{ if {page.field} == 1 }}
Example where first condition is met
{{ else-if {page.field} == 2 }}
Example where second condition is met
{{ else }}
Example where no condition is met
{{ end-if }}
```

## else-if

The `else-if` statement is used for the defining alternate conditions, if the original if condition is not met. There can be as many `else-if` statements as needed after the opening `if` statement and before the `end-if`.

```
{{ if {page.field} == 1 }}
Example where first condition is met
{{ else-if {page.field} == 2 }}
Example where second condition is met
{{ else }}
Example where no condition is met
{{ end-if }}
```

## end-each

Required to close `each` loops.

```
{{ each team_members as member }}
<p>{{ member.name }}</p>
{{ end-each }}
```

## end-if

Required to close an `if` statement.

```
{{ if {page.field} == 1 }}
Example where first condition is met
{{ else-if {page.field} == 2 }}
Example where second condition is met
{{ else }}
Example where no condition is met
{{ end-if }}
```

## escapeForJs()

The `escapeForJs()` call returns text with all the characters that could break a Javascript or JSON string escaped with `\`.

```
[
 {
 "title": "{{ page.title.escapeForJs() }}"
 }
]
```

## filter()

The `.filter()` call can be used to access specific data based on the scope.

```
{{ scope.filter(z.zuid = '{this.one-to-one-field}').scope-field }}

{{ another-set.filter(z.zuid = '{this.one-to-one}').page_title }}
```

## find\_in\_set

The `find_in_set` query allows for looking for a specific number or string in a comma separated list. `find_in_set` is always used to filter a Content Model related with a One-to\_Many relational field.

```
{{ each tags as tag where find_in_set(tag.zuid, '{this.tags}') }}
<span>{{ tag.title }}</span>
{{ end-each }}
```

## first()

The `first()` call will access the content available in the first entry of any content model.

```
{{ content_model.first().title }}
// "This is the title for the first entry of a content model"
```

## format\_currency()

The `format_currency()` call transforms a float number from a content field to the format $XX.XX.

```
{{ each products as product }}
    {{ product.price.format_currency() }}
{{ end-each }}
```

## get\_var

The `get_var` call returns the value of any query parameter in the current URL by referencing the key. When printing out any query parameter using `get_var`, be sure to use `htmlentities()` to prevent Cross-site Scripts and code injections.

```
// at the page /blog/?category=news

{{ get_var.category.htmlentities() }}
```

## getfeedurl()

Every content model in Zesty (single page, page groups or datasets) can access a public RSS feed. It will always be `content_model_refrence_name-feed.rss/`

```
{{ content_model.getfeedurl() }}
```

## getImage(width, height, type)

The `getImage()` function takes optional arguments for width, height, and type (`fit` or `crop`) and returns a URL to that image. Fit is the default and does not need to be explicitly declared. Crop type requires all 3 arguments declared. Fit is similar to the css style "contain" and crop is similar to the css style "cover".

```
<img src="{{ page.photo.getImage() }}" />
<img src="{{ page.photo.getImage(100) }}" />
<img src="{{ page.photo.getImage(,100,fit) }}" /> 
<img src="{{ page.photo.getImage(100,,fit) }}" />
<img src="{{ page.photo.getImage(100,100,fit) }}" />
<img src="{{ page.photo.getImage(100,100,crop) }}" />
```

## getImageTitle()

The `getImageTitle()` call returns the image title set in the Media Tab.

```
{{ page.image.getImageTitle() }}
```

## getMediaURL()

The `getMediaURL()` call returns the original URL to that file. This is how to access files stored in the Media Tab that are not images, such as PDFs and MP4s. You can also use this call to access the original file of an image without the default optimization provided by Zesty.io.

```
<a href="{{ page.download_file.getMediaURL() }}" >Download</a>
// <a href="https://domain.com/file.pdf" >Download</a>
```

```
// If looping through an image field with multiple images use this call
{{ my-var.image.getmediaurl() }}
```

## getNextURL(number)

The `getNextURL()` call returns the current page url with a query parameter `p` increased by the number specified. If there is no query parameter `p`, it will set it equal to the number specified. If no number is provided, the default is 5. This can be used with `get_var.p` to do pagination with an each loop.

```
{{ page.getNextURL(10) }}
// blog/?p=10
```

## getPreviousURL(number)

The `getPreviousURL()` call returns the current page url with a query parameter `p` decreased by the number specified. If there is no query parameter `p`, it will set it equal to 0. If no number is provided as an argument, the default is 5. This can be used with `get_var.p` to do pagination with an each loop.

```
// on the page /blog/?p=30
{{ page.getpreviousurl(10) }}
// /blog/?p=20
```

## getUrl()

The `getUrl()` call returns the relative path to the entry.

```
<a href="{{ blog.first().getUrl() }}">Link</a>
// <a href="/blog/">Link</a>
```

## globals

The `globals` call is used to access content stored in the Globals (formerly Content Clippings) set.

```
{{ globals.phone }}

// Returns: 
555-555-5555
```

## Google Analytics

Parsley provides a short cut to creating google analytics tag. The advantage of using this Parsley call is that as Google Analytics updates their syntax, it will be automatically updated on your website.

This call `{{gaEvent(eventCategory,eventAction,eventLabel,eventValue)}}` will trigger an event to your Google Analytics integration.

**eventCategory:** _text_ required Typically the object that was interacted with (e.g. 'Video')

eventAction:_text_ required The type of interaction (e.g. 'play')

**eventLabel:\***text\* optional Useful for categorizing events (e.g. 'Fall Campaign')

**eventValue:\***integer\* optional A numeric value associated with the event (e.g. 42)

Read the spec for GA Events [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/events%3E)

```
<pre><a href="https://vimeo.com/144792991" {{gaEvent(Vimeo, Opened-video)}}>My Video</a></pre>

// returns 
<pre><a href="https://vimeo.com/144792991" onclick="ga('send','event', 'Vimeo', ' Opened-video', ' ',undefined,'{'nonInteraction': 1}');">My Video</a></pre>
```

## gravatar()

The `gravatar()` function takes an email address and requests an image from the Gravatar API.

```
"<img class="highlight" src="{{ page.author_email.gravatar() }}" />"
// <img class="highlight" src="http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
```

## hasChildren()

The `hasChildren()` function returns true or false, depending if any pages are parented to the entry. This can be used to find out if a page has pages that live under it. This is helpful when using logic to create secondary navigations.

```
{{ if {page.hasChildren()} }}
    // subnav code
{{ end-if }}
```

## html\_entity\_decode()

The `html_entity_decode` call converts all HTML entities in the provided string to their applicable characters.

```
<p>{{ page.description.html_entity_decode() }}</p>
```

## htmlentities()

The `htmlentities()` call convert all applicable characters to HTML entities. Should be used whenever printing out a get or post variable to prevent Cross-site Scripting and code injection.

```
{{page.html.htmlentities()}}
{{ get_var.search.htmlentities() }}
```

## if

The `if` statement evaluates conditions using `==`, `!=`, `>=`, `<=`, `<`, and `>`. Within the `if` statement, multiple conditions can be combined using `&&` for and, and `||` for or. If statements can also execute math.

```
{{ if {page.field} == 1 && {page.price} + 10 > 100 }}
Example
{{ end-if }}
```

## include

The [`include`](https://zesty.org/services/web-engine/introduction-to-parsley/include) call is a prompt to reference the code in any View which includes views, snippets, and endpoints.

```
{{ include header }}
```

## instance.host\_env

Shows the instance's webengine URL. This only works in preview - not on live.

```
{{ instance.host_env }}
```

## instance.host\_live

Shows you the instance's first registered domain. This only works in preview - not on live.

```
{{ instance.host_live }}
```

## instance.host\_preview (or instance.host\_relative)

Shows an instance's preview URL. This only works in preview - not on live.

```
{{ instance.host_preview }}
{{ instance.host_relative }}
```

## instance.host\_protocol

Shows the instance's protocol based on its settings. This only works on preview - not on live.

```
{{ instance.host_protocol }}
```

## last()

The `last()` call will access the content available in the last entry of any content model.

```
{{ articles.last().title }}
```

## limit

The `limit` statement is used in an each loop to specify how many content entries will result. The `limit` statement can also be used to skip a number of entries and show the next set if two arguments are provided.

```
{{ each articles as post where post.featured = 1 sort by post.date desc limit 20 }}
// entries 1 through 20
{{ end-each }}
{{ each articles as post where post.featured = 1 sort by post.date desc limit 10,20 }}
// entries 11 through 30
{{ end-each }}
```

## math( statement )

The `math()` call executes an equation and returns a number.

```
(** plain output **)
{{ math( 1 + 2 ) }}

(** in use with a page field **)
{{ math( round({page.product_cost} * 1.5) ) }}

(** in use with a variable **)
{{ $my_num = 4 }}
{{ math( {$my_num} + 2 ) }}
```

## navigation(number)

The `navigation()` call will access your Zesty.io Navigation Structure and output it as an HTML list.

```
site.navigation(INT depth, BOOL bootstrap, BOOL json)

{{site.navigation()}} // all defaults to html output
{{site.navigation(1)}}  // depth of the parent child levels
{{site.navigation(3, false, true)}}  // json output
```

The call will mimic the content navigation layout you find in the Zesty.io Content Manager and will ignore pages marked as unlisted. A number argument will specify what level of children to access within the navigation. Blank will list all pages, 1 will only be top level pages, 2 will be top level and subpages, 3 will be top level, subpages and tertiary pages, and so on.

```
{{ navigation() }}

// Returns:
<ul id="nav" class="nav">
     <li><a href="..."></a>
          <ul>
              <li><a href="..."></a></li>
          </ul>
     </li>
     <li><a href="..."></a></li>
</ul>
```

## number\_format(number)

The `number_format()` call returns a number with the specified number of decimals as the argument. Blank will remove any decimals.

```
{{ $number = 3.14 }}

{{ $number.number_format(1) }} 

// Returns: 
3.1
```

## obfuscate()

The `obfuscate()` call returns obscure text to web crawlers, like email or phone numbers.

```
<a href="mailto:{{setting.contact-form.sending_email.obfuscate()}}">{{setting.contact-form.sending_email.obfuscate()}}</a>
```

## xssProtect()

The `xssProtect()` call encode, decodes, strips html and turns characters into entities.

```
{{get_var.search.xssProtect()}}
```

## page

The `page` call represents the content entry for the current page. It provides access to the data associated with the page. Any field in the Content Model can be accessed using this method when on the associated page.

```
{{ page.field_name }}
```

## paypalStandard(action, product, price, shipping)

Quickly create a Paypal Standard buy, donate, or add to cart button in Parsley. To start using Paypal Standard a Paypal account must be created. The Paypal account information and tax rate are set in the Config Tab, under Settings-> Paypal Standard. These must be set to send money to the appropriate account. Action can be `buy`, `addtocart` and `donate`.

```
{{ each products as p }}
    <h1>{{ p.title }}</h1>
    <p>{{ p.price }}</p>
    {{ paypalStandard(buy,{p.title},{p.price},{p.shipping}) }}
 {{ end-each }}
```

## post\_clean()

The `post_clean()` call replaces `\n` `\r\n` or `\` with a blank string.

```
{{ page.imported_content.post_clean() }}
```

## post\_var

The `post_var` call references data available in the requests post body. A couple common ways data can be added to the request post body is by submitting a form with a `method="post"` or using javascript `POST`. A common practical use for this call is to check is a form has been submitted by checking if the POST variable for the name of a required input is available.

```
{{ if {post_var.email} }}
Thank you for submitting your form, please check {{ post_var.email }} for a verification email.
{{ else }}
// form code
{{ end-if }}
```

## preg\_replace(pattern, replacement)

The `preg_replace()` call is a regular expression replacement. To learn more about Regular expression go to [http://www.regular-expressions.info/](http://www.regular-expressions.info/)

```
{{ page.content.preg_replace(/i/,*) }}

//Returns:
I'm gonna f*x that last joke by tak*ng out all the words and add*ng new ones.
- M*tch Hedberg
```

## random()

The `random()` call is used to reference a random content entry for a content model.

```
{{ articles.random().title }}
// "the 'title' from a random item in 'articles'"
```

## replace(pattern, replacement)

The `replace()` call does a simple replace without any regular expression.

```
// $description = "We wrote this blog post"
{{ $description.replace(We, I) }}
// "I wrote this blog post"
```

## request.path()

Get the full path from request, for example lets use the url /store/12345/my-product/

```
{{ request.path() }} // output: /store/12345/my-product/
```

## request.pathPart(num)

Get the "parts" of a url, for example lets use the url /store/12345/my-product/

```
{{ request.pathPart(1) }} // output: store
{{ request.pathPart(2) }} // output: 12345
{{ request.pathPart(3) }} // output: my-product
{{ request.pathPart(4) }} // output: (empty string)
```

## request.queryParam(num)

Get the query parameters from url, for example lets use the url /store/12345/my-product/?test=hello

```
{{ request.queryParam(test) }} // output: hello
{{ request.queryParam(lala) }} // output: (empty string)
```

## response.addHeader(name, value)

This call will add a header to the response. This call does not output anything.

```
{{response.addHeader(ab-test, 4)}}
```

## response.redirect301(url)

This call will add a redirect the page.

```
{{response.redirect301(https://www.google.com)}}
```

## response.redirect302(url)

This call will add a redirect the page.

```
{{response.redirect301(https://www.google.com)}}
```

## response.return404(message)

This call will response to your default 404 page, if there is no default 404 page, a generic 404 page will display with the "message" param as an h1 tag.

```
{{response.return404(My Default Message)}}
```

## sectionlinks(number)

The `sectionlinks()` call looks at the current page and searches up to its top-level parent to create a navigation structure as an HTML list. Depth can be specified by as a numeric argument as `sectionlinks(2)` or you can choose not to display the top level page by passing `sectionlinks(off)`

```
{{ sectionlinks() }}

// <ul class="sectionLinks" id="sectionLinks">
      <li><a href="/about-us/" title="About Us">About Us</a>
         <ul class="sectionLinks">
         <li><a href="/about-us/team/" title="">Team</a></li>
         <li><a href="/about-us/qualifications/" title="Qualifications">Qualifications</a></li>
      </ul>
    </li>
</ul>
```

## seo\_meta\_description

Use this call to access an item's meta description.

```
{{ this.seo_meta_description }}
```

## seo\_link\_title

{% hint style="warning" %}
**Deprecated:** this functionality is only available to test in preview, it is not available for production websites because they are statically cached.
{% endhint %}

This call will access the Navigation Title for an item which is located under an [item's Meta information](https://zesty.org/services/manager-ui/content/meta-fields) in the Content section.

The `sever_var` call provides access to some of the most common server variables holding information about headers, paths, and script location. Some available variables are:

```
{{ this.seo_link_title }}
```

## seo\_meta\_title

This call will access the Meta Title for an item which is located under an [item's Meta information](https://zesty.org/services/manager-ui/content/meta-fields) in the Content section.

```
{{ this.seo_meta_title }}
```

## setting

The `settings` call returns data stored in the Instance Settings in the Config Tab.

```
<a href="{{ setting.social-links.linkedin_link }}">Zesty on Linkedin</a>
// <a href="https://www.linkedin.com/company/zesty-io/">Zesty on Linkedin</a>
```

## toJSON()

A function outputs a JSON string that can be use in inline JavaScript. The function can be called off this, data calls, or loop variables. Parsley REPL Example [https://parsley.zesty.io/turn-any-content-item-to-json/](https://parsley.zesty.io/turn-any-content-item-to-json/)

`{{this.toJSON(depth, showMeta)}}`

* `depth` is an integer for hydration depth, max is 5
* `showMeta` true or false: `true` gives all meta, routing, and zuid details, and locale details. `false` is just content

```
{{this.toJSON(3,false)}} 

{{model.first().toJSON(2, true)}}

{{each model as item}}
    {{item.toJSON()}}
{{end-each}}
```

{% code title="Example Output for {{this.toJSON}} call on zesty.io's homepage" %}
```javascript
{
    title: "Your Content, Anywhere",
    content: "<h1>A CONTENT PLATFORM THAT POWERS ENTERPRISE GRADE WEBSITES AND APPLICATIONS</h1>",
    image: {
        type: "images",
        totalItems: 1,
        data: [
            {
                type: "image",
                zuid: "3-5c58033-eb8cq",
                url: "https://zestyio.media.zestyio.com/Zesty.io---9-5seg.mp4"
            }
        ]
    },
    customer_logo_heading: "Trusted by enterprises, startups, and everyone in between",
    main_headline: "Managing content at scale is difficult.",
    main_description: "<ul><li><p>Security issues, and out of date software</p></li><li><p>Editing the same content in multiple places</p></li><li><p>Developers needed for content updates</p></li></ul><h1>..but it doesn’t have to be</h1><ul><li><p>Centralized content management</p></li><li><p>Automated security and product improvements</p></li><li><p>Easy Distribution at global scale</p></li></ul>",
    pagina_nueva: null,
    og_image: {
    type: "images",
    totalItems: 1,
    data: [
            {
                type: "image",
                zuid: "3-a4f5ca6-a25px",
                url: "https://kfg6bckb.media.zestyio.com/zesty-share-image-generic.png"
            }
        ]
    },
    meta: {
        type: "item",
        model_name: "homepage",
        zuid: "7-31209c-g7qsjg",
        createdAt: "2020-10-01 06:33:30",
        updatedAt: "2020-10-01 06:33:29",
        listed: "1",
        version: "200",
        locale: {
            id: "1",
            name: "English (United States)",
            code: "en-US",
            default: "1",
            active: "1",
            enabled: "1"
        },
        model: {
            type: "model",
            zuid: "6-31079c-vdg69q",
            name: "homepage",
            label: "Homepage",
            resourceURI: "https://www.zesty.io/-/instant/6-31079c-vdg69q.json"
        },
        web: {
            url: "https://www.zesty.io/",
            uri: "/",
            fragment: "zesty_home",
            canonical_tag_mode: "1",
            sitemap_priority: "-1.0",
            sitemap_last_updated: "2020-10-01 06:33:29",
            canonical_query_param_whitelist: null,
            canonical_tag_custom_value: null,
            seo_link_text: "Homepage",
            seo_meta_title: "Zesty.io: The Headless CMS for Marketers + Developers",
            seo_meta_description: "Built for teams to manage and distribute content to multiple sites, devices, and anywhere else it needs to go.",
            seo_meta_keywords: null
        }
    }
}
```
{% endcode %}

## \*\*\*\*

## instance

The `instance` call returns data specific to the instance, such as the CDN URL and the domain or globally relevant data, such as the current data-time or the current language.

```
{{ instance.cdn }}
```

## instance.env

The `instance.env` call returns `live` for published content and views, and `dev` for versioned preview views and content.

```
{{ instance.env }}
```

## instance.date()

The `instance.date()` call returns the current date time and accepts arguments to modify the date based on the PHP data-time. More information available at [http://php.net/manual/en/function.date.php](http://php.net/manual/en/function.date.php)

```
{{ instance.date(l jS \of F Y h:i:s A) }}

//Returns:
Sunday 31st of July 2005 08:45:12 PM
```

## instance.lorem(number)

The `instance.lorem()` call auto generates lorem ipsum placeholder content.

```
{{ instance.lorem(20) }}

// Returns : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat quam quis erat tristique pretium.
```

## instance.searchformatted(string,limit)

The `instance.searchformatted()` call takes a string and a limit as arguments and outputs instance-wide search results based on meta title, meta description, and path.

```
{{instance.searchformatted({get_var.search},10)}}
```

## slugify()

The `slugify()` call will concatenate strings by replacing spaces with dashes (-), lowercasing all letters, and stripping out all punctuation.

```
// if the page title is the string: My New Homepage!

{{ page.title.slugify() }}

// calling slugify on the page title will return: my-new-homepage
```

## sort by / order by

The `sort by` or `order by` statement can be used in an each loop to specify a field of the content model used to sort the content entries and which direction. Multiple fields can be specified using a comma separated list. If no sort is specified, the default is creation date. If no direction is specified ascending is the default.

```
{{ each articles as post where post.featured = 1 sort by post.date desc, post.title limit 10 }}
{{ end-each }}
```

## striptags(start, length)

The `striptags` call will return a string with HTML tags removed. It also acts as a substring method if a start and length parameter are provided.

```
// $html = "Hello <h1>Zesty.io</h1> users"
{{ $html.striptags() }}
// "Hello Zesty.io users"
```

## substr(start, length)

The `substr()` call takes the text value it is attached to and returns a substring with the desired length. This call takes both positive and negative numbers. Negative numbers, for example, `substr(-5)` will return the last five characters in a string. Does not consider whitespace as part of length.

```
// $description = "This is a longer description that needs shortened!"
{{ $description.substr(0,9) }}...
// "This is a lo..."
```

## subWords(number\_of\_words)

The `subWords()` call returns the first specified number of words from a body of text.

```
{{ page.content.subWords(3) }}
```

## trim\_zeros()

The `trim_zeros()` call with take a number like 8.0000000 and just show 8. It will also trim leading zeros as well so a number like 00800.00 will show 800.

```
// $num = 8.000000000
{{ $num.trim_zeros() }}
// 8
```

## truepath(zuid)

The `truepath()` call will determine the web URL to access a content entry based on a [ZUID](https://zesty.org/glossary#zuid). Since one-to-one and internal page fields in Zesty.io store ZUIDs, `truepath()` is a quick way to access the direct url to that content entry without needing to do an each loop or filter call.

```
{{ truepath({page.link_to_article}) }}
```

`truepath()` can be used in [each loops](https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#each) as well, for example `{{ truepath(this.zuid) }}` or `{{ this.zuid.truepath() }}` and you can assign it to a Parsley variable as well.

```
{{each articles as art limit 5}}
    {{art.zuid}} <br>
    {{art.zuid.truepath()}}<br>
    {{$var = {truepath({art.zuid})} }}
    VAR: {{$var}}<hr>
{{end-each}}
```

## where

The `where` statement is used to filter content entries in an each loop. `Where` statements use SQL style conditional statements to determine which entries to pass through the loop. A single each can use multiple conditions using `and` and `or`.

```
{{ each articles as post where post.featured = 1 or post.category = '{page.featured_category}` sort by post.date desc limit 10 }}
{{ end-each }}
```
