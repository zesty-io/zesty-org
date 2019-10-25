---
description: >-
  Find a list of common Parsley errors below to help you troubleshoot your
  error.
---

# Common Parsley Errors

{% hint style="warning" %}
### If you do not see your error here please report it to us at [chat.zesty.io](http://chat.zesty.io/)
{% endhint %}

### **Syntax error, unexpected \***

This error results from missing quotes around a string or missing curly brackets in an if-conditional. Resolve it by adding quotes around the string and ensuring the comparative operator is double equal sign \(`==`\) and add missing curly brackets around inner conditionals; for example `{{ if this.field }}` becomes `{{ if {this.field} }}`.

### Syntax Error, Unexpected '{'

Commonly refers to a Parsley statement that is not properly closed. Look for missing closing brackets `}` or `}}` to resolve the error.

### The field \* __does not exist _\*_ on the content model

A field does not exist on specific model. This results from an unidentified field in the following calls `{{ this.something }}` and `{{ if {this.something} }}`

### Unknown or ambiguous field \* in \* on the \* content model.

Often results from calling a field in an Each Loop without scope properly declared.

### **Your filter statement is missing opening or closing ' ' \(quotes for strings\) or {} \(curly brackets for parsley references\)**

'Filter statements' refer to statements using the following calls: `.filter()`, `.first()`, and `.last()`. To resolve this error add quotes around strings, for example `{ page.parent_zuid }` becomes `'{ page.parent_zuid }'`; if single brackets are missing, add them. For example `page.parent_zuid` becomes `{ page.parent_zuid }`.

### zuid is ambiguous needs to be qualified as z.zuid

Results from a malformed filter call. `filter(zuid = '{...}')` ****call needs to be qualified as  with z.zuid `filter(z.zuid = '{...}')`

