---
description: Working with html forms and utilizing Webhooks in Zesty.io WebEngine
---

# Forms and Form Webhooks

HTML pages rendered in WebEngine have access to a few ways to capture form data, render form data, or to send form data. 

### Capturing Form Data to an Instance's Leads Feature

Zesty.io Leads is feature of zesty that lets you capture user submitted data through an HTML form. Data is captured through &lt;form&gt; POSTs. Here is an example:

```text
<form method="post">
    <input type="text" name="first_name">
    <input type="text" name="last_name">
    <input type="text" name="email">
    
    <input type="hidden" name="zlf" value="form_name">
    
    <input type="submit" value="Submit Button">
</form>

```

Upon POST submission, Zesty.io will look for an input named `zlf` \(Zesty Lead Form\), and if it finds it, it will capture the form data to the leads table which can be viewed ini the Zesty.io Manager app of the instance the submission occurred on. The value you set for `zlf` is captures as the form name, you can use this value to organize your leads into groups.

If you want to learn more about leads, have a look at the leads api [https://instances-api.zesty.org/?version=latest\#6ba715eb-485f-4a4b-8e8a-f2f3fa81e9a1](https://instances-api.zesty.org/?version=latest#6ba715eb-485f-4a4b-8e8a-f2f3fa81e9a1)

### Sending Form Data to an Email or Through a Webhook

There is built in functionality to send form data to an email address that is set in Zesty.io Manager Settings, under contact form. Alternatively you can have a payload sent to any remote server using a Webhook. That is often used for custom integrations or used with systems like [**Zapier**](https://zapier.com/).  

**Sending Form Data to an Email**

In your HTML form, you can add an input with the name `zcf`, \(Zesty Contact Form\) when that exists, Zesty.io WebEngine will detect it and send an email to the email set in contact form settings or the optional `email_override` input.

`email_override` is often used for dynamic forms that change who the need to email. This value could be changed dynamically by Javascript based on user input. A good example is changing the email based on the department like support or billing, or based upon the location like state.

```text
<form method="post">
    <input type="text" name="first_name">
    <input type="text" name="last_name">
    <input type="text" name="email">
    
    <input type="hidden" name="zcf" value="1">
    
    <!-- optional -->
    <input type="hidden" name="email_override" value="my@email.com">
    
    <input type="submit" value="Submit Button">
</form>
```

**Sending Form Data via Webhook**

In your HTML form you can add an input with the name `zwh` \(Zesty Webhook\), which WebEngine will look for. If WebEngine see `zwh` it will attempt to send a POST request to the value of `zwh` which should be the url of the remote service you wish to send a payload too. Let's look at a code:

```text
<form method="post">
    <input type="text" name="first_name">
    <input type="text" name="last_name">
    <input type="text" name="email">
    
    <input type="hidden" name="zwh" value="https://hooks.zapier.com/hooks/catch/1111111/xxxxxx/">
    
    <input type="submit" value="Submit Button">
</form>
```

Upon submission Zesty WebEngine will capture that post and send a payload to the `zwh` value, which in our example is a Zapier url. The payload will look like this:

```text
{
            "_verification_key' => "zyx123zyz",
            "submitted_from_url": "https://www.yourdomain.com/contact/",
            "submitted_at": "timestamp",
            "submitted_from_domain" :  "www.youdomain.com"
            "first_name": "captured_form_input",
            "last_name" : "captured_form_input",
            "email" : "captured_form_input"
}
```

The verification key is an MD5 hash of your Instance ZUID, you can use this to prevent spam from hitting your endpoints. 

### Using All Three Capture Methods

It possible to use all three methods in conjunction, so go nuts, but don't hurt yourself!

```text
<form method="post">
    <input type="text" name="first_name">
    <input type="text" name="last_name">
    <input type="text" name="email">
    
    <input type="hidden" name="zcf" value="1">
    <input type="hidden" name="zlf" value="my form">     
    <input type="hidden" name="zwh" value="https://hooks.zapier.com/hooks/catch/1111111/xxxxxx/">
    
    <input type="submit" value="Submit Button">
</form>
```

### Handling Form Data with Parsley

Sometimes its nice to customize your page base on the user's input. You can access values of a form post in parsley like this:

```text
{{if {post_var.email} }}
<h1>Thank you {{post_var.first_name}}!</h1>
<p>We will reach out to {{post_var.email}} within the nexst 24 hours</p>
{{end-if}}
```



