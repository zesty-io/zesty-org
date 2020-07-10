---
description: Zesty.io Unique Identifiers
---

# ZUIDs

A ZUID \(Zesty.io Unique Identifier\) is a unique hash that is assign to every resource created by the Zesty.io API. A ZUID is used to access resources through API, control permissions, and identified resource types. 

* A ZUID is a string
* A ZUID is typically 15-20 characters in length, but may be up to 50 characters
* A ZUID contains 3 components, separated by hyphens/dashes

A ZUID is made of three parts separated by hyphens. See this example:

```text
1-1b123a2f0-qw2n4
```

1. An Integer that identifies the resource type. [Types documented here](https://github.com/zesty-io/zuid-specification/blob/master/prefixes.json)\)
2. Time Encoded as a String
3. A Random Alphanumeric String

Learn more at [https://zesty-io.github.io/zuid-specification/](https://zesty-io.github.io/zuid-specification/)

