---
description: >-
  Are bots submitting your form? Screen out form submissions by bots by
  implementing our honeypot feature.
---

# How to Prevent Bots From Submitting Forms

### Overview

A honeypot is a feature that's added to site manager and site engine to prevent spam. Learn more about honeypots \[here\]\([https://en.wikipedia.org/wiki/Honeypot\_\(computing](https://en.wikipedia.org/wiki/Honeypot_%28computing)\)\). The idea is that a hidden HTML input can be injected by JavaScript or coded in with HTML. When a bot fills out and submits a form including that hidden input with a value the server will trigger a 500 error thus preventing spam. In other words: the honeypot code will not be visible to a site's visitors and will work at a server level to deflect spam.

### How it works

When the honeypot is turned on and a form is submitted the server looks for the hidden input with a name attribute matching the honeypot field string and a value attribute that's empty. If either of those requirements are not met then the server will return a 500. The following examples describe this process in more detail.

**Submission will fail if honeypot is turned on and:**

* The hidden HTML input with the honeypot code has not appended to your form.
* The `name` attribute does not match the honeypot field.
* A `value` attribute has been set. For example `<input ... value="wlkncitns">`.

**Submission will succeed if honeypot is turned on and:**

* The `name` attribute matches the honeypot field _and_ the `value` attribute is empty.

### Setting up the honeypot

The honeypot setting is accessed by navigating to the Schema section -&gt; Instance Settings -&gt; Contact Form. This setting will be off by default. To turn this setting on simply add text to the honeypot field and save, and then navigate to the Editor section and add this Parsley call for the honeypot field to all of your forms: `{{setting.contact-form.honeypot}}`. Once the honeypot is turned on it will affect ALL forms on an instance.

#### Coding in the honeypot with JavaScript or HTML

If there are multiple forms on your instance it's likely easier to append your forms with the honeypot code using JavaScript. Otherwise you can simply add 1 line of code in HTML.

**JavaScript**

Honeypots can be added to all forms with simple JavaScript at the end of the loader file. This code will append the honeypot to all of your forms.

```text
var input = document.createElement('input');
input.setAttribute('name','{{setting.contact-form.honeypot}}');  input.setAttribute('type','hidden'); (edited)
document.querySelectorAll('form').forEach(form =>; { form.appendChild(input); });
```

**HTML**

To add the honeypot code with HTML, add the following line between your HTML form tags.

`<input type="hidden" name="{{setting.contact-form.honeypot}}" value="">`

