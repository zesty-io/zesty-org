---
description: >-
  When a user has cookies disabled, or their ad blocker blocks cookies, your
  best to use session variables to ensure personalization works for them. This
  guide will show you how to use session variables
---

# How to Personalize User Experience with Session Variables

In this guide you will learn how to create page personalization, using session variables, on the Zesty platform. We will be modifying the loader file and a view file to create the most basic form of personalization.

There are three key components to executing personalization. The **URL**, the **Session Variable**, and the **Business Logic**. Let's start by looking at how to format the **URL**.

### The URL

The url will contain the key to personalization, it is simply stored in a Get variable. A Get variable can be appended to the end of any URL. In our example, let's use `st`, short for session test.

```text
https://mydomain.com/page/?st=developer
```

 _**Note**: when you setup links with advertisers, just append_ `?st=developer` _or_ `?st=marketer`_etc. and you can custom curate any experience you want to deliver._

Easy right? Now let's store that value to a session variable.

### The Session Variable

Session variables are single references stored to memory on Zesty servers. Once a session variable is set, it can be accessed with Zesty's reference language, parsley. Parsley provides a simple way to set and access cookies, which looks like `$_variable = 'hello world'`. Note the `$_` denotes the variable a session variable, where are variable `$` without the `_` underscore is only available in a single page load.

In this example, we are going to store the Get variable passed by the URL to our session variable. To ensure we capture this on any page, we are going to put our code in the `loader` view. From the Code Editor in your Satellite, open the `loader` view file, and enter this line of code:

Open the loader view file and add:

```text
{{$_sesvar = {get_var.ct} }}
    
<div class="container">
    {{current_view}}
</div>
```

 _**Note**: the name of the session variable doesn't effect the result, but the name cannot have spaces or abnormal characters. Session variables can also be overwritten, so on a page for marketers you could overwrite the variable to_ `{{$_sesvar = 'marketers'}}`_, and then start targeting your language to marketers._

### The Business Logic

In our URL `https://mydomain.com/page/?st=developer` we are passing the value `developer` and capturing that value into our session variable. With an `if` statement, we are going to check the session variable's value against our desired match `developer`. If it's a match, we will show one type of content, otherwise we will show our default content. It's quick to implement, let's take a look at the code.

```text
<h1>Page Title</h1>
<hr/>
{{if $_sesvar == 'developer'}}

<p>{{page.content_for_developers}}</p>
<a href="/link/for/developers/">Sign up you Code Monkey!</a>

{{else}}

<p>{{page.content_for_marketers}}</p>
<a href="/link/for/marketers/">Sign up and Market Awesome!</a>

{{end-if}}
```

 It's that easy, have fun!

