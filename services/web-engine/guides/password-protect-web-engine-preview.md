---
description: Two methods to password protect the preview url for your content instance
---

# Password Protect Web Engine Preview

### **Method 1:** **Hard Lock with Query Parameter**

First Method is a hard lock, it requires a query parameter. Edit your loader file and wrap all the code in an if statement like this:

{% code-tabs %}
{% code-tabs-item title="loader" %}
```javascript
{{ if {get_var.pw} == 'test' || {site.env} == 'live' }}

    {{ current_view }}

{{ end-if }}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

What it does: if the site is now the live url, its check for query parameter `pw` to equal the set string. For example `https://xyz.preview.zestyio.com?pw=test`  will load the page, but anything else will show a blank screen. This requires every preview url to have the `?pw=test` appended to the url.

### **Method 2:** **Javascript Prompt with Memory**

This method is a soft lock because the page can be accessed with a curl request outside of a normal browser, or with a browser that have javascript disabled.

This method requires you to have two cookie functions added to your loader. In your loader you check to see if the website is NOT live. If it is not live then it will lock you out of the page with a javascript prompt before the site loads. It will ask for a password. An incorrect password will redirect you away \(line 18\), a correct password will store a cookie which will bypass requesting a password as you browse the stage preview site for 30 days.

{% code-tabs %}
{% code-tabs-item title="loader" %}
```markup
{{ if {site.env} != 'live' }}

<script>    
    function getCookie(name) {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    }
    
    function setCookie(name, value, days) {
        var d = new Date;
        d.setTime(d.getTime() + 24*60*60*1000*days);
        document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
    }
    
    function blockMe() { 
        var pw = prompt("Password"); 
        if (pw != 'test') {
            window.location = 'https://www.zesty.io';
        } else {
            setCookie('bypass', true, 30)
        }
    } 
    
    if (getCookie('bypass') == null) {
        blockMe();
    }
</script>

{{ end-if }}

{{ current_view }}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

