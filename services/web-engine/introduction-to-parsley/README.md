---
description: Learn the basics of Zesty.io's templating language Parsley.
---

# Parsley

### Overview

Parsley is the templating language used in Zesty.io. Parsley allows data stored and edited in the Content section to be accessed by the website files and data feed files created in the Editor section.

#### Why is it called "Parsley"?

Parsley is play on words for how our rendering service "parses" through the code in the files looking for the templating code and, of course, a reference to the green, zesty flavor of freshly chopped parsley.

#### What is Parsley?

Parsley is a dot-notation-style templating language used to quickly access data, perform logic operations, provide shortcuts for reused code segments and other programing-type functions, all in a human readable syntax.

#### What Can Parsley Do?

At its core, Parsley can reference any Field from any content entry from any content set available on that Zesty.io Instance and replace the Parsley code with the value stored to that field when the file is rendered to a browser or endpoint request. Parsley can also:

* Iterate through content collections
* Evaluate Conditionals&#x20;
* Execute Math Statements&#x20;
* Access and Set Variables stored for the page load, session variables, cookies, GET and POST variables.&#x20;
* Execute Query Statements&#x20;
* Reference and include files available on the instance &#x20;
* Be customizable and autocomplete based on a unique instance's content structure.
* Modify data
* Modify Images and create new image files&#x20;
* And much more

{% hint style="warning" %}
Parsley _only_ works in Views. It does not work in Style Sheets or Scripts. Do not use Parsley in style sheet or JavaScript files. In order to use Parsley in styles and scripts use  `<script>` or `<style>` tags in views or use inline styles.
{% endhint %}

### Basic Rules

Once you're familiar with the basic rules below jump into our [Parsley Repl](http://parsley.zesty.io) for some practice.&#x20;

* Curly brackets (single or double):
  * on the same line will be parsed
  * on separate lines will **not** be parsed
  * in fields will **not **be parsed
* Spacing
  * Single curly brackets: no spaces between Parsley call and bracket (e.g. `{this.my_field}`)
  * Double curly brackets: space(s) allowed between call and bracket (e.g. `{{ this.my_field }}`)
* Case Sensitive
  * Parsley is a case-sensitive language which means that `{{ This.my_field }}` and `{{ this.my_field }}` are not the same call and both are not valid. Be sure to follow case in the examples closely.

### Syntax Structure

#### Whitespace

White space does not matter within double quotes but can't be used within single quotes.

#### Comparisons

Use double equals `==` in `if` statements and single equals everywhere else.

#### Quotes

Do not use quotes in `if` statements. Only use quotes around hard coded strings and single bracket parsley variables everywhere else.

#### Conjunctions

Use `&&` and `||` in `if` statements, and `and` and `or` everywhere else.

#### Brackets

Use double curly brackets `{{ }}` to start a Parsley statement. Use single curly brackets `{ }` when making a Parsley call within a double-bracketed call.&#x20;

#### Comments

Use `(**` to start and `**)` to end comments that will not render in the output of the website.
