---
description: This index collects all Parsley syntax and methods.
---

# Parsley Index

### \_index

When looping through a content model with an each loop, you can use `variable_name._index` to get the current count of how many times you have run through the each loop. \_index begins counting from 0. To start counting at 1 use `_num` instead.

```text
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

### \_length

When looping through a content model with an each loop, you can call `{{ variable_name._length }}` to get the total number of times the loop will run.

```text
<div class="article-tags">
{{ each article_tag as tag }}
<p>{{ tag.name }}{{ if {tag._num} != {tag._length} }}, {{ end-if }}</p>
{{ end-each }}
</div>
(** As long as the loop's num does not equal its length a comma will be appended to the list of tags **)
```

### \_num

When looping through a content model with an each loop, you can use `variable_name._num` to get the current count of how many times you have run through the each loop. `_num` begins counting from 1. To start counting at 0 use `_index` instead.

```text
<div class="article-tags">
{{ each article_tag as tag }}
<p>{{if {tag._num} == 1 }}This is the first item{{ end-if }}</p>
{{ end-each }}
</div>
(** As long as the loop's num does not equal its length a comma will be appended to the list of tags **)
```

### activate\_links\(\)

Converts plain text URLS into anchor tags [URL](URL). Useful for content where text comes in with HTML stripped.

```text
{{ page.textarea.activate_links() }}
```

### api.dribbble

```text
{{ each api.dribbble.getShots(USER_NAME) as shot }}
	<img src="{{ shot.image_teaser_url }}" alt="{{ shot.title} }" />
{{ end-each }}
```

### breadcrumbs

The `breadcrumbs` call outputs an automated breadcrumb trail of links, listing the parent pages assigned to the current page. If there are no available links, then an empty span is outputted.

```text
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

### clippings \(see Globals\)

### Comments \(\*\* **\*\***\)

Use these comments to prevent Parsley or other code from processing in HTML and Endpoint files. Anything within these comments are server side comments and will not render out to the source code.

```text
(** old code  **)
(** 
< h1>{{ page.title }}</h1>
**)
(** new code **)
<h3>{{ page.new_title }}</h3>

```

### current\_view

The `{{ current_view }}` call is a unique Zesty.io statement that will load the Page View associated with the current website url. `{{ current_view }}` is used once in the `loader` snippet. This allows a website to have consistent template elements above and below the unique aspect of each page.

```text
{{ include header }}
<div class="content">
      {{ current_view }}
</div>
{{ include footer }}
```

### date\(format\)

Uses the [php date](http://php.net/manual/en/function.date.php) format to create the date string shown to the user.

```text
<em>{{ page.published_date.date(l, F jS, Y \a\t g:ia) }}</em> 
// <em>Sunday, January 1st, 2011 at 10:50pm</em>
```

### dateDiffForHumans\(\)

This method creates an expression of duration comparing the date and time from a content field to the current date and time.

```text
{{ page.date.dateDiffForHumans() }}
<br/>
Returns:
<br/>
[x time] ago 
```

### each

The Parsley Each statements, also known as loops, allow you to iterate \(loop\) through each entry of a content model.

```text
{{ each team_members as member }}
<p>{{ member.name }}</p>
{{ end-each }}
```

### else

The `else` statement allows for a a final case if none of the defined conditions in the `if` statement have been met.

```text
{{ if {page.field} == 1 }}
Example where first condition is met
{{ else-if {page.field} == 2 }}
Example where second condition is met
{{ else }}
Example where no condition is met
{{ end-if }}
```

### else-if

The `else-if` statement is used for the defining alternate conditions, if the original if condition is not met. There can be as many `else-if` statements as needed after the opening `if` statement and before the `end-if`.

```text
{{ if {page.field} == 1 }}
Example where first condition is met
{{ else-if {page.field} == 2 }}
Example where second condition is met
{{ else }}
Example where no condition is met
{{ end-if }}
```

### end-each

Required to close `each` loops.

```text
{{ each team_members as member }}
<p>{{ member.name }}</p>
{{ end-each }}
```

### end-if

Required to close an `if` statement.

```text
{{ if {page.field} == 1 }}
Example where first condition is met
{{ else-if {page.field} == 2 }}
Example where second condition is met
{{ else }}
Example where no condition is met
{{ end-if }}
```

### escapeForJs\(\)

The `escapeForJs()` call returns text with all the characters that could break a Javascript or JSON string escaped with `\`.

```text
[
 {
 "title": "{{ page.title.escapeForJs() }}"
 }
]
```

### filter\(\)

The `.filter()` call can be used to access specific data based on the scope.

```text
{{ scope.filter(z.zuid = '{page.one-to-one-field}').scope-field }}

{{ another-set.filter(z.zuid = '{thispage.one-to-one}').page_title }}
```

### find\_in\_set

The `find_in_set` query allows for looking for a specific number or string in a comma separated list. `find_in_set` is always used to filter a Content Model related with a One-to\_Many relational field.

```text
{{ each tags as tag where find_in_set(tag.zuid, '{page.tags}') }}
<span>{{ tag.title }}</span>
{{ end-each }}
```

### first\(\)

The `first()` call will access the content available in the first entry of any content model.

```text
{{ content_model.first().title }}
// "This is the title for the first entry of a content model"
```

### format\_currency\(\)

The `format_currency()` call transforms a float number from a content field to the format $XX.XX.

```text
{{ each products as product }}
    {{ product.price.format_currency() }}
{{ end-each }}
```

### get\_var

The `get_var` call returns the value of any query parameter in the current URL by referencing the key. When printing out any query parameter using `get_var`, be sure to use `htmlentities()` to prevent Cross-site Scripts and code injections.

```text
// at the page /blog/?category=news

{{ get_var.category.htmlentities() }}
```

### getfeedurl\(\)

Every content model in Zesty \(single page, page groups or datasets\) can access a public RSS feed. It will always be `content_model_refrence_name-feed.rss/`

```text
{{ content_model.getfeedurl() }}
```

### getImage\(width, height, type\)

The `getImage()` function takes optional arguments for width, height, and type \(`fit` or `crop`\) and returns a URL to that image. Fit is the default and does not need to be explicitly declared. Crop type requires all 3 arguments declared. Fit is similar to the css style "contain" and crop is similar to the css style "cover".

```text
<img src="{{ page.photo.getImage() }}" />
<img src="{{ page.photo.getImage(100) }}" />
<img src="{{ page.photo.getImage(,100,fit) }}" /> 
<img src="{{ page.photo.getImage(100,,fit) }}" />
<img src="{{ page.photo.getImage(100,100,fit) }}" />
<img src="{{ page.photo.getImage(100,100,crop) }}" />
```

### getImageTitle\(\)

The \`getImageTitle\(\) call returns the image title set in the Media Tab.

```text
{{ page.image.getImageTitle() }}
```

### getMediaURL\(\)

The `getMediaURL()` call returns the original URL to that file. This is how to access files stored in the Media Tab that are not images, such as PDFs and MP4s. You can also use this call to access the original file of an image without the default optimization provided by Zesty.io.

```text
<a href="{{ page.download_file.getMediaURL() }}" >Download</a>
// <a href="https://domain.com/file.pdf" >Download</a>
```

### getNextURL\(number\)

The `getNextURL()` call returns the current page url with a query parameter `p` increased by the number specified. If there is no query parameter `p`, it will set it equal to the number specified. If no number is provided, the default is 5. This can be used with `get_var.p` to do pagination with an each loop.

```text
{{ page.getNextURL(10) }}
// blog/?p=10
```

### getPreviousURL\(number\)

The `getPreviousURL()` call returns the current page url with a query parameter `p` decreased by the number specified. If there is no query parameter `p`, it will set it equal to 0. If no number is provided as an argument, the default is 5. This can be used with `get_var.p` to do pagination with an each loop.

```text
// on the page /blog/?p=30
{{ page.getpreviousurl(10) }}
// /blog/?p=20
```

### getUrl\(\)

The `getUrl()` call returns the relative path to the entry.

```text
<a href="{{ blog.first().getUrl() }}">Link</a>
// <a href="/blog/">Link</a>
```

### globals

The `globals` call is used to access content stored in the Globals \(formerly Content Clippings\) set.

```text
{{ globals.phone }}

// Returns: 
555-555-5555
```

### Google Analytics

Parsley provides a short cut to creating google analytics tag. The advantage of using this Parsley call is that as Google Analytics updates their syntax, it will be automatically updated on your website.

This call `{{gaEvent(eventCategory,eventAction,eventLabel,eventValue)}}` will trigger an event to your Google Analytics integration.

**eventCategory:** _text_ required Typically the object that was interacted with \(e.g. 'Video'\)

eventAction:_text_ required The type of interaction \(e.g. 'play'\)

**eventLabel:\***text\* optional Useful for categorizing events \(e.g. 'Fall Campaign'\)

**eventValue:\***integer\* optional A numeric value associated with the event \(e.g. 42\)

Read the spec for GA Events [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/events>)

```text
<pre><a href="https://vimeo.com/144792991" {{gaEvent(Vimeo, Opened-video)}}>My Video</a></pre>

// returns 
<pre><a href="https://vimeo.com/144792991" onclick="ga('send','event', 'Vimeo', ' Opened-video', ' ',undefined,'{'nonInteraction': 1}');">My Video</a></pre>
```

### gravatar\(\)

The `gravatar()` function takes an email address and requests an image from the Gravatar API.

```text
"<img class="highlight" src="{{ page.author_email.gravatar() }}" />"
// <img class="highlight" src="http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
```

### hasChildren\(\)

The `hasChildren()` function returns true or false, depending if any pages are parented to the entry. This can be used to find out if a page has pages that live under it. This is helpful when using logic to create secondary navigations.

```text
{{ if {page.hasChildren()} }}
    // subnav code
{{ end-if }}
```

### html\_entity\_decode\(\)

The `html_entity_decode` call converts all HTML entities in the provided string to their applicable characters.

```text
<p>{{ page.description.html_entity_decode() }}</p>
```

### htmlentities\(\)

The `htmlentities()` call convert all applicable characters to HTML entities. Should be used whenever printing out a get or post variable to prevent Cross-site Scripting and code injection.

```text
{{page.html.htmlentities()}}
{{ get_var.search.htmlentities() }}
```

### if

The `if` statement evaluates conditions using `==`, `!=`, `>=`, `<=`, `<`, and `>`. Within the `if` statement, multiple conditions can be combined using `&&` for and, and `||` for or. If statements can also execute math.

```text
{{ if {page.field} == 1 && {page.price} + 10 > 100 }}
Example
{{ end-if }}
```

### include

The `include` call is a prompt to reference the code in any other HTML file or input, including page views, snippets and endpoints.

```text
{{ include header }}
```

### last\(\)

The `last()` call will access the content available in the last entry of any content model.

```text
{{ articles.last().title }}
```

### limit

The `limit` statement is used in an each loop to specify how many content entries will result. The `limit` statement can also be used to skip a number of entries and show the next set if two arguments are provided.

```text
{{ each articles as post where post.featured = 1 sort by post.date desc limit 20 }}
// entries 1 through 20
{{ end-each }}
{{ each articles as post where post.featured = 1 sort by post.date desc limit 10,20 }}
// entries 11 through 30
{{ end-each }}
```

### math\( statement \)

The `math()` call executes an equation and returns a number.

```text
(** plain output **)
{{ math( 1 + 2 ) }}

(** in use with a page field **)
{{ math( round({page.product_cost} * 1.5) ) }}

(** in use with a variable **)
{{ $my_num = 4 }}
{{ math( {$my_num} + 2 ) }}

```

### navigation\(number\)

The `navigation()` call will access your Zesty.io Navigation Structure and output it as an HTML list. The call will mimic the content navigation layout you find in the Zesty.io Content Manager and will ignore pages marked as unlisted. A number argument will specify what level of children to access within the navigation. Blank will list all pages, 1 will only be top level pages, 2 will be top level and subpages, 3 will be top level, subpages and tertiary pages, and so on.

```text
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

### number\_fomat\(number\)

The `number_format()` call returns a number with the specified number of decimals as the argument. Blank will remove any decimals.

```text
{{ $number = 3.14 }}

{{ $number.number_fomat(1) }} 

// Returns: 
3.1
```

### obfuscate\(\)

The `obfuscate()` call returns obscure text to web crawlers, like email or phone numbers.

```text
<a href="mailto:{{setting.contact-form.sending_email.obfuscate()}}">{{setting.contact-form.sending_email.obfuscate()}}</a>
```

### page

The `page` call represents the content entry for the current page. It provides access to the data associated with the page. Any field in the Content Model can be accessed using this method when on the associated page.

```text
{{ page.field_name }}
```

### paypalStandard\(action, product, price, shipping\)

Quickly create a Paypal Standard buy, donate, or add to cart button in Parsley. To start using Paypal Standard a Paypal account must be created. The Paypal account information and tax rate are set in the Config Tab, under Settings-&gt; Paypal Standard. These must be set to send money to the appropriate account. Action can be `buy`, `addtocart` and `donate`.

```text
{{ each products as p }}
	<h1>{{ p.title }}</h1>
	<p>{{ p.price }}</p>
	{{ paypalStandard(buy,{p.title},{p.price},{p.shipping}) }}
 {{ end-each }}
```

### post\_clean\(\)

The `post_clean()` call replaces `\n` `\r\n` or `\` with a blank string.

```text
{{ page.imported_content.post_clean() }}
```

### post\_var

The `post_var` call references data available in the requests post body. A couple common ways data can be added to the request post body is by submitting a form with a `method="post"` or using javascript `POST`. A common practical use for this call is to check is a form has been submitted by checking if the POST variable for the name of a required input is available.

```text
{{ if {post_var.email} }}
Thank you for submitting your form, please check {{ post_var.email }} for a verification email.
{{ else }}
// form code
{{ end-if }}
```

### preg\_replace\(pattern, replacement\)

The `preg_replace()` call is a regular expression replacement. To learn more about Regular expression go to [http://www.regular-expressions.info/](http://www.regular-expressions.info/)

```text
{{ page.content.preg_replace(/i/,*) }}

//Returns:
I'm gonna f*x that last joke by tak*ng out all the words and add*ng new ones.
- M*tch Hedberg 
```

### random\(\)

The `random()` call is used to reference a random content entry for a content model.

```text
{{ articles.random().title }}
// "the 'title' from a random item in 'articles'"
```

### replace\(pattern, replacement\)

The `replace()` call does a simple replace without any regular expression.

```text
// $description = "We wrote this blog post"
{{ $description.replace('We', 'I') }}
// "I wrote this blog post"
```

### sectionlinks\(number\)

The `sectionlinks()` call looks at the current page and searches up to its top-level parent to create a navigation structure as an HTML list. Depth can be specified by as a numeric argument as `sectionlinks(2)` or you can choose not to display the top level page by passing `sectionlinks(off)`

```text
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

### server\_var



The `sever_var` call provides access to some of the most common server variables holding information about headers, paths, and script location. Some available variables are:

* REMOTE\_ADDR 
* HTTP\_USER\_AGENT 
* HTTP\_REFERER
* HTTP\_HOST
* REQUEST\_URI
* REQUEST\_METHOD

```text
{{ server_var.HTTP_USER_AGENT  }}
```

### setting

The `settings` call returns data stored in the Instance Settings in the Config Tab.

```text
<a href="{{ setting.social-links.linkedin_link }}">Zesty on Linkedin</a>
// <a href="https://www.linkedin.com/company/zesty-io/">Zesty on Linkedin</a>
```

### site

The `site` call returns data specific to the instance, such as the CDN URL and the domain or globally relevant data, such as the current data-time or the current language.

```text
{{ site.cdn }}
```

### site.date\(\)

The `site.date()` call returns the current date time and accepts arguments to modify the date based on the PHP data-time. More information available at [http://php.net/manual/en/function.date.php](http://php.net/manual/en/function.date.php)

```text
{{ site.date(l jS \of F Y h:i:s A) }}

//Returns:
Sunday 31st of July 2005 08:45:12 PM
```

### site.lorem\(number\)

The `site.lorem()` call auto generates lorem ipsum placeholder content.

```text
{{ site.lorem(20) }}

// Returns : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat quam quis erat tristique pretium.
```

### site.searchformatted\(string,limit\)

The `site.searchformatted()` call takes a string and a limit as arguments and outputs instance-wide search results based on meta title, meta description, and path.

```text
{{site.searchformatted({get_var.search},10)}}
```

### slugify\(\)

The `slugify()` call will concatenate strings by replacing spaces with dashes \(-\), lowercasing all letters, and stripping out all punctuation.

```text
// if the page title is the string: My New Homepage!

{{ page.title.slugify() }}

// calling slugify on the page title will return: my-new-homepage
```

### sort by / order by

The `sort by` or `order by` statement can be used in an each loop to specify a field of the content model used to sort the content entries and which direction. Multiple fields can be specified using a comma separated list. If no sort is specified, the default is creation date. If no direction is specified ascending is the default.

```text
{{ each articles as post where post.featured = 1 sort by post.date desc, post.title limit 10 }}
{{ end-each }}
```

### striptags\(start, length\)

The `striptags` call will return a string with HTML tags removed. It also acts as a substring method if a start and length parameter are provided.

```text
// $html = "Hello <h1>Zesty.io</h1> users"
{{ $html.striptags() }}
// "Hello Zesty.io users"
```

### substr\(start, length\)

The `substr()` call takes the text value it is attached to and returns a substring with the desired length. Does not consider whitespace as part of length.

```text
// $description = "This is a longer description that needs shortened!"
{{ $description.substr(0,9) }}...
// "This is a..."
```

### subWords\(number\_of\_words\)

The `subWords()` call returns the first specified number of words from a body of text.

```text
{{ page.content.subWords(3) }}
```

### trim\_zeros\(\)

The `trim_zeros()` call with take a number like 8.0000000 and just show 8.

```text
// $num = 8.000000000
{{ $num.trim_zeros() }}
// 8
```

### truepath\(zuid\)

The `truepath()` call will determine the web url to access a content entry based on a ZUID. Since one-to-one and internal page fields in Zesty.io store ZUIDs, `truepath()` is a quick way to access the direct url to that content entry without needing to do an each loop or filter call.

```text
{{ truepath({page.link_to_article}) }}
```

### where

The `where` statement is used to filter content entries in an each loop. `Where` statements use SQL style conditional statements to determine which entries to pass through the loop. A single each can use multiple conditions using `and` and `or`.

```text
{{ each articles as post where post.featured = 1 or post.category = '{page.featured_category}` sort by post.date desc limit 10 }}
{{ end-each }}
```

