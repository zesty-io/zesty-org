---
description: >-
  Find a list of common Parsley errors below to help you troubleshoot your
  error.
---

# Common Parsley Errors

{% hint style="warning" %}
### If you do not see your error here please report it to us at [chat.zesty.io](http://chat.zesty.io/)
{% endhint %}

### Syntax Error, Unexpected '{'

Commonly refers to a Parsley statement that is not properly closed. Look for missing closing brackets `}` or `}}` to resolve the error.

### Unknown or ambiguous field \* in \* on the \* content model.

Often results from calling a field in an Each Loop without scope properly declared.

### The field \* __does not exist _\*_ on the content model

A field does not exist on specific model. This results from an unidentified field in the following calls `{{ this.something }}` and `{{ if {this.something} }}`

