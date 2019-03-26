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
* Evaluate Conditionals 
* Execute Math Statements 
* Access and Set Variables stored for the page load, session variables, cookies, GET and POST variables. 
* Execute Query Statements 
* Reference and include files available on the instance  
* Be customizable and autocomplete based on a unique instance's content structure.
* Modify data
* Modify Images and create new image files 
* And much more

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

Use double brackets `{{` to start a Parsley statement, use single brackets `{ }` within a Parsley call. You cannot make a Parsley statement within a Parsley statement within a Parsley statement.

#### Comments

Use `(**` to start and `**)` to end comments that will not render in the output of the website.

