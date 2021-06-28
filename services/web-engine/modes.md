---
description: >-
  WebEngine has three options for rendering output to work with different data
  access styles, which are called modes. Modes only affect WebEngine.
---

# Modes

#### Modes give teams the ultimate flexibility to work in the style of their implementation target. Mode change the output behavior of WebEngine from only serving JSON to rendering full HTML pages. 

{% hint style="info" %}
Modes have no affect to the Read/Write APIs \(Instances API, Accounts API, or Media API\)
{% endhint %}

### Traditional Mode `traditional`_\[default\]_

If you are building HTML experiences solely on Zesty.io and want to guard against people accessing your content outside of the HTML document, traditional is right. GET APIs that expose content need to be turned on manually, giving teams the options to turn on some items but not others. Custom JSON or other data format endpoints made with Parsley can still be made without an affect on access. 

| Key Aspect | How it work in **Traditional Mode** |
| :--- | :--- |
| **HTML Rendering** | All Views render with Parsley by default, HTML document body is auto generated. |
| **Content APIs** | Instant and GraphQL \(gql\) APIs must be installed and explicitly turned toggled on through settings, CORS rejects remote client requests outside of the serving domain unless explicitly told otherwise through settings. Headless routing is not available. |
| **JSON Access** | Routes \(View Rendering\) does not have access `/?toJSON`, custom made JSON views are accessible.  |
| **SEO**  | SEO is automated on page from user input on each content item. |

### Headless Mode  `headless`

Mode is best for team who's engineers work fully outside of Zesty.io, example technologies, but not limited to, would be NextJS, NuxtJS, or Angular. When headless mode is on, all routes render as JavaScript object notation \(JSON\).  

| Key Aspect | How it behaves in **Headless Mode** |
| :--- | :--- |
| **HTML Rendering** | Off. Routes to content items render Hydrated JSON. Custom HTML endpoints are still available.  |
| **Content APIs** | Instant and GraphQL \(gql\) APIs are on, CORS is `*` allowing client requests from any domain. Headless routing is available from `/-/headless/` |
| **JSON Access** | Routes automatically render JSON. The `/?toJSON`is available to return routes with meta data, using `/?toJSON=nometa` |
| **SEO**  | SEO is available on content items with routes, and from the key \[meta\] off the JSON object, and is also available from the`/-/headless/routing.json`  |

### Hybrid Mode `hybrid`

* All APIs are on \(GQL/INSTANT/toJSON\) accessible, CORS is set \* \(anywhere\) for every request
* Routes /?toJSON is available on any route, but default behavior is to return Parsley rendered view
* `/-/headless/` is available

{% hint style="warning" %}
Changing a mode will instantly modify the output behavior of WebEngine 
{% endhint %}

### Change WebEngine Mode

Mode is controlled by a setting that can be found in the Manager UI under General. The default mode is always "traditional". 

![Setting editable under &quot;general&quot; ](../../.gitbook/assets/image%20%2844%29.png)

