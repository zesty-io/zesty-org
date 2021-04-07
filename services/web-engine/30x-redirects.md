# 30X Redirects

## How Do Redirects work on Zesty.io Web Engine?

Redirects are created and managed inside the Instance Manager.  In the Manage Redirects section in the Health tab, you can add and maintain 301 and 302 redirects.

You might want to use a redirect if, for example, you have changed the URL of a page or resource and wish user's who visit the old URL to be directed to the new one by their browser.

You may add a new redirect in the Content Managers in the `/seo` section. By entering the URL path that you want the redirect to take visitors away from, select 301 if it is a permanent move or 302 if temporary, then select the new target URL path that you wish the user to be taken to.

### Types of Redirects

| Type | Example: Old Path =&gt; New Path |
| :--- | :--- |
| Path | `/this/` =&gt; `/that/` |
| Path _\(with wildcards\)_ | `/old/path/*/*/` =&gt; `/new/$1/$2/path` |
| Page \(zuid\) | `/old-about/` =&gt; `7-xyz-x1y2z3`  |
| External | `/redirect-away/` =&gt; `https://www.google.com` |

{% hint style="info" %}
_All redirects will pass query parameters. For example_: _`/this/?hello=world` will becomes `/that/?hello-world`_
{% endhint %}

### Path Redirects

A basic path redirect is a statically typed path to another statically typed path. For example:

{% code title="redirect:path" %}
```elixir
/old/path/
```
{% endcode %}

{% code title="redirect:target" %}
```erlang
/my/new/path/?a=1&b=2
```
{% endcode %}

Any request to `/old/path/` will redirect to `/my/new/path/?a=1&b=2`

**API Documentation for path redirects:**  
[https://instances-api.zesty.org/\#38bf3fb8-44b1-4b22-a743-376c42fda624](https://instances-api.zesty.org/#38bf3fb8-44b1-4b22-a743-376c42fda624)

### Path Redirects with Wildcards

A path redirect with wildcards is a statically typed path with asterisk which can catch any path and pass it forward into a new dynamically built path. For Example:

{% code title="redirect:path" %}
```elixir
/old/*/*/
```
{% endcode %}

{% code title="redirect:target" %}
```erlang
/new/$1/$2/
```
{% endcode %}

**Example Results Table**

| Incoming Request Path | Redirect Path |
| :--- | :--- |
| `/old/foo/bar/`  | `/new/foo/bar/` |
| `/old/apples/oranges/` | `/new/apples/oranges/` |

Another path building example with Wildcard Paths

{% code title="redirect:path" %}
```erlang
/old/*/*/
```
{% endcode %}

{% code title="redirect:target" %}
```erlang
/$1-$2/
```
{% endcode %}

**Example Results Table**

| Incoming Request Path | Redirect Path |
| :--- | :--- |
| /old/hello/world/ | /hello-world/ |
| /old/foo/bar/ | /foo-bar/ |

**Other ideas for redirects**

| **Path Examples** | Target Examples |
| :--- | :--- |
| /old/\*/\*/ | /search/?q=$2 |
| /\*/\*/\*/ | /$2-$1-$3/ |

**API Documentation for wild card path redirects:**   
[https://instances-api.zesty.org/\#4e35194e-ce30-43a0-bfe2-91bc76e5a627](https://instances-api.zesty.org/#4e35194e-ce30-43a0-bfe2-91bc76e5a627)

### Page Redirects

Page redirects take in a static string string for the path like `/my/old/path` and a content ZUID as the target. The static path will always redirect to whatever the content ZUIDs current path is, even if the content ZUID referenced has its path change through version, the redirect will always follow it.

**API documentation for page redirects:**   
[https://instances-api.zesty.org/\#9dbf6a75-cb3e-4292-850b-1e78979bd035](https://instances-api.zesty.org/#9dbf6a75-cb3e-4292-850b-1e78979bd035)

### External Redirects

Page redirects take in a static string string for the path like `/my/old/path` and a content ZUID as the target. The static path will always redirect to whatever the content ZUIDs current path is, even if the content ZUID referenced has its path change through version, the redirect will always follow it.

**API Docs for External Redirect:**   
[https://instances-api.zesty.org/\#0e1a4940-3d7f-4e59-bd3d-9b06be44d9a3](https://instances-api.zesty.org/#0e1a4940-3d7f-4e59-bd3d-9b06be44d9a3)

### Redirects API Documentation

See how to create the 4 types of redirect from our REST documentation  [https://instances-api.zesty.org/\#1fdabbe3-e977-4ea5-8a4b-81ce29598263](https://instances-api.zesty.org/#1fdabbe3-e977-4ea5-8a4b-81ce29598263) 

