---
description: >-
  Find a list of common Parsley errors below to help you troubleshoot your
  error.
---

# Common Parsley Errors

## Working with Errors

Errors are designed to help the developer write proper Parsley to achieve consistent results. Errors are  only outputted in stage/preview rendering of Web Engine. Production/live WebEngine urls do not output errors.&#x20;

**Errors can be suppressed in stage/preview in 3 ways:**

1. **! Ignore:** Suppress errors on individual calls by prepending it with a bang (`!`) like so `{{!this.asdasdsad}}`.  This is especially useful when using the loader or similar files for checking content model fields. Another common technique is using an if-conditional:  `{{if {!this.myfield} }} ...code... {{end-if}}` to check for a field. Using a bang in such if-conditionals allows you to globally check for null fields without triggering an error.&#x20;
2.  **Bypass:** Ignore all errors on a page for a single page load by appending the query parameter `_bypassError` to the end of any URL in stage/preview Web Engine

    For example:`hash-dev.preview.zestyio.com/?_bypassError=true`.&#x20;
3. **Instance Settings:** In the Zesty.io manager navigate to you instance's Settings section, and then select Developer from the right-hand sidebar. Look for a setting called "Use Parsley Debugger" and select it, then save to ignore all errors.

## Common Error List

{% hint style="warning" %}
### If you do not see your error here please report it to us at [chat.zesty.io](http://chat.zesty.io/)
{% endhint %}

### **Invalid numeric literal**

### **Syntax error, unexpected \***

This error results from missing quotes around a string or missing curly brackets in an if-conditional. Resolve it by adding quotes around the string and ensuring the comparative operator is double equal sign (`==`) and add missing curly brackets around inner conditionals; for example `{{ if this.field }}` becomes `{{ if {this.field} }}`.

### **Syntax error, unexpected /**

This results from empty values in a Parsley `Math()` statement. Resolve this by ensuring that there are values around your operators. For example `Math( / 100 * 2)` becomes `Math( 200 / 100 * 2)`.

### Syntax Error, Unexpected '{'

Commonly refers to a Parsley statement that is not properly closed. Look for missing closing brackets `}` or `}}` to resolve the error.

### The field \* __ does not exist _\*_ on the content model

A field does not exist on specific model. This results from an unidentified field in the following calls `{{ this.something }}` and `{{ if {this.something} }}`

### The content model \* cannot be found.&#x20;

This error results from a missing or mis-named content model. Resolve this error by navigating to your instance's Schema section and ensuring that its reference name is correct and creating it if it doesn't exist.

### Unknown or ambiguous field \* in \* on the \* content model.

Often results from calling a field in an Each Loop without scope properly declared.

### **Your filter statement is missing opening or closing ' ' (quotes for strings) or {} (curly brackets for parsley references)**

'Filter statements' refer to statements using the following calls: `.filter()`, `.first()`, and `.last()`. To resolve this error add quotes around strings, for example `{ page.parent_zuid }` becomes `'{ page.parent_zuid }'`; if single brackets are missing, add them. For example `page.parent_zuid` becomes `{ page.parent_zuid }`.

### zuid is ambiguous needs to be qualified as z.zuid

Results from a malformed filter call. `filter(zuid = '{...}')` **** call needs to be qualified as  with z.zuid `filter(z.zuid = '{...}')`
