---
description: >-
  The Leads Section is where submitted data from forms configured to work with
  Zesty.io Leads can be collected, viewed, and exported.
---

# Leads

### Overview

If a form submission is posted to a Zesty.io hosted website with an input value for `zlf`, Zesty.io will automatically store all the submitted data. The Leads section is where that stored data can be interacted with.

Note: the Leads section will automatically display once a lead is stored with your Zesty.io instance.

### How to Connect forms to ZLF

To configure a form to use Zesty.io's leads table, three items need to be true. First, the form needs to be using the `POST` method. Second, the form action needs to be to a relative path. Third, the form needs to include an input with a name attribute of `zlf` and a non-empty `value`.

Here is an example:

```text
<form method="post" action="/thank-you/" >
          .........
         <input type="hidden" name="zlf" value="Contact Page Form" />
          .........
</from>
```

