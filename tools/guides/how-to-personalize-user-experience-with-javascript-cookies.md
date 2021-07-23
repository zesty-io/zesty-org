---
description: >-
  In the event where you want to store a cookie based on a user action without
  passing a link, you would need to use JavaScript. This guide explains how to
  setup cookies using JavaScript, and later how
---

# Personalize User Experience with JavaScript Cookies

In the event where you want to store a cookie based on a user action without passing a link, you would need to use JavaScript. This guide explains how to setup cookies using JavaScript and later how to use logic to control personalization.

### Setting up the JavaScript

In Zesty code editor, create a JavaScript file called `cookies.js` and paste this code:

```text
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
```

When the file is setup, you may now make JavaScript calls to set and read cookies.

**Example usage:**

```text
<script type="text/javascript">
createCookie('test_cookie','cookie content',7);
var x = readCookie('test_cookie')
if (x) {
    alert('wooo my cookie: ' + x);
}
</script>

```

### The Business Logic

{% hint style="warning" %}
Parsley access to cookies should not be used on statically cached pages. Note cookies should be used carefully and should not expose sensitive information.
{% endhint %}

With an `if` statement, we are going to check the cookie's value to returned customized content. If it's a match, we will show one type of content, otherwise we will show our default content. It's quick to implement, let's take a look at the code.

```text
<h1>Page Title</h1>
<hr/>
{{if @test_cookie == 'cookie content'}}

<h2>{{@test_cookie}}</h2>
<p>{{page.personlized_content}}</p>

{{else}}

<p>{{page.default_content}}</p>

{{end-if}}
```

It's that easy, have fun!

