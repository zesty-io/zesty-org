---
description: >-
  Parsley Variables are used to store and access data. You can use variables
  stored for a single page-load, session variables, cookies, POST variables, and
  GET variables.
---

# Variables

### Overview

Variables are a way to store information consistently so that you can access the stored information either further on in the code, or at another time. Variables are also useful for shortening frequently used long pieces of code or eliminating repetitive pieces of code. If this doesn't make sense yet, hopefully the examples will help.

There are three types of Parsley variables: standard variables, session variables, and cookies. The only difference between them is the length of time the information stays stored with the variable.

### Standard Variables

Standard variables are only stored for the page load. As soon as one clicks to a new page or reloads the site, the information is stored in that variable is forgotten. Below is an example of how to set and call a standard Parsley variable:

{% embed url="https://gist.github.com/dustinhorning/7dbf816617611df407e3" %}

You can see we set the variable, $myVariable to the phrase "Hello World" and then called the variable in an h1 tag. The resulting HTML would look like this:

{% embed url="https://gist.github.com/dustinhorning/50f98ca5406796b762db" %}

The only HTML that prints out is the H1 tag with whatever is stored in the variable.

In this next example, we'll show you a common implementation that requires the use of a standard variable. We will create a dynamic number of columns, one for each item in a content set.

We are going to write two identical Parsley each loops. In the first loop we will set a variable equal to the index. \(If you have questions about each loops or index, review those sections first\). The second loop will be the information that we would want to show for each content set entry. The initial each loop will run through all the items and then reset the variable to the index each time. The last item in the content set will set the variable equal to the total number of items in the content set. Once we know the total number of items, we can use that variable to set the column class denominator in the second each loop. See the code below:

{% embed url="https://gist.github.com/dustinhorning/1e94ba42b8b7488bac27" %}

You can see in the code we **set** the variable `$count` on line 2 and **call** it on line 7. The result is that $count will be equal to the number of "articles" and the row will have a number of columns equal to the number of articles. Each article will always take up one column, no matter if articles are added or deleted.

For example if there were three articles, `$count` would be set to 3 and each article would be one-third of the row. If a fourth article was added or one was removed, the code would automatically update to adjust to keep each article the same while filling up the row.

### Session Variables

Session variables last as long as the browser session. To put it another way, as long as the browser window stays open and the device keeps internet access. You can set and call session variables the same as standard variables. The only difference is that standard variables require an underscore after the dollar sign. See below:

{% embed url="https://gist.github.com/dustinhorning/ba300a7bfae206fc4ae0" %}

Same as before, we set the variable `$_mySessionVar` to the phrase "Hello Globe" and then call the variable in an H1 tag. The resulting HTML would look like this:

{% embed url="https://gist.github.com/dustinhorning/98ee637264c64bc71eed" %}

The only HTML that prints out is the H1 with whatever is stored in the variable.

Session variables can be particularly useful when you want something to only show once per visit to an instance. In the following example we use a Parsley if-statement to check if a session variable is set. If it's not yet set, we know that this is the first time a user has loaded this page in this session. So we add our code for what we want to happen on the first load and then set our session variable so the code doesn't run again during this session.

{% embed url="https://gist.github.com/dustinhorning/621694b12397f7c5acff" %}

Since the session variable is set to `1` within the if-statement we know the script will only load the first time for each session. For each time after that, the session variable will fail the if-check and will not add the script.

### Cookie Variables

Cookie variables are almost the same as session variables except that they last for 30 days. These work by storing information to the browser of the visit. So if the visitor uses a different device or a different browser or manually clears their cookies, then all the Parsley cookies would be reset.

Similar to standard variables and session variables, Parsley cookies are set and called the same way, however the syntax is slightly different. To set a cookie we use the `@` symbol instead of a dollar sign. See below:

{% embed url="https://gist.github.com/dustinhorning/e56f37f8d2a1f5c0e894" %}

And again, we get the same H1 result:

{% embed url="https://gist.github.com/dustinhorning/ea0c1d6bd1f7e66a6ad5" %}

Cookies are most useful for sites where visitors can select preferences or use a log in system. Cookies allow the code to remember the user's selection so that the user doesn't have to enter it as often.

In the example below, we check the result of a form submission to see if a user has signed in. If a sign-in has happened we set a cookie variable equal to their user name, if not, we check to see if a cookie has already been set. If a sign-in has happened or a cookie was already set then we show a welcome message, if neither of those are true we show a sign-in form. This way, a user only has to sign in once every 30 days.

* Note: In this example, we reference post variables. Post variables are variables created by a field from a submitted form with the post method. Post variables are not covered in this tutorial. 

### Conclusion

Parsley variables are a tool for storing information we need to access later on in the page or at a later time. We can set a variable by opening a Parsley tag, using the correct variable prefix \(either $, $\_, or @\) followed by the variable name, setting it equal to the information we need stored, followed by a closing Parsley tag. Each variable prefix represents a different amount of time that the variable will be stored.

**Standard Variable's prefix is "$" and will store the data for a single page load.**

**Session Variable's prefix is "$\_" and will store the data until the browser session ends.**

**Cookie Variable's prefix is "@" and will store the data for 30 days or until the browser clears the cookies.**

### POST Variables

Please see an example of the syntax for Post variables below.

Zesty.io expects FormData which can be sent [following these docs](https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects) or using a JQuery Post.

```text
<h1>{{ post_var.name }}</h1>
```

### GET Variables

Please see the syntax for Get variables below.

```text
<h1>{{ get_var.name }}</h1>
```

