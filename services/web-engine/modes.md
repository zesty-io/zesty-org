---
description: >-
  WebEngine has three options for rendering output to work with different data
  access styles, which are called modes. Modes only affect WebEngine.
---

# Modes

#### Modes give teams the ultimate flexibility to work in the style of their implementation target. Mode change the output behavior of WebEngine from only serving JSON to rendering full HTML pages.&#x20;

{% hint style="info" %}
Modes do not affect the Read/Write APIs (Instances API, Accounts API, or Media API)
{% endhint %}

### Traditional Mode `traditional`_\[default]_

If you are building HTML experiences solely on Zesty.io and want to guard against people accessing your content outside of the HTML document, traditional is right. GET APIs that expose content need to be turned on manually, giving teams the options to turn on some items but not others. Custom JSON or other data format endpoints made with Parsley can still be made without an affect on access.&#x20;

| Key Aspect         | How it work in **Traditional Mode**                                                                                                                                                                                                                         |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **HTML Rendering** | All Views render with Parsley by default, HTML document body is auto generated.                                                                                                                                                                             |
| **Content APIs**   | Instant and GraphQL (gql) APIs must be installed and explicitly turned toggled on through settings, CORS rejects remote client requests outside of the serving domain unless explicitly told otherwise through settings. Headless routing is not available. |
| **JSON Access**    | Routes (View Rendering) does not have access `/?toJSON`, custom made JSON views are accessible.                                                                                                                                                             |
| **SEO **           | SEO is automated on page from user input on each content item.                                                                                                                                                                                              |

### Headless Mode  `headless`

Mode is best for team who's engineers work fully outside of Zesty.io, example technologies, but not limited to, would be NextJS, NuxtJS, or Angular. When headless mode is on, all routes render as JavaScript object notation (JSON). &#x20;

| Key Aspect         | How it behaves in **Headless Mode**                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **HTML Rendering** | Off. Routes to content items render Hydrated JSON. Custom HTML endpoints are still available.                                                          |
| **Content APIs**   | Instant and GraphQL (gql) APIs are on, CORS is `*` allowing client requests from any domain. Headless routing is available from `/-/headless/`         |
| **JSON Access**    | Routes automatically render JSON. The `/?toJSON`is available to return routes with meta data, using `/?toJSON=nometa`                                  |
| **SEO **           | SEO is available on content items with routes, and from the key \[meta] off the JSON object, and is also available from the`/-/headless/routing.json`  |

### Hybrid Mode `hybrid`

Hybrid is best of both worlds. Pages still render HTML at their routes, but they can also render JSON with a simple get parameter. For example `/about/` would return HTML, but `/about/?toJSON` would return a fully hydrated JSON object of the about page.&#x20;

| Key Aspect         | How it work in **Hybrid Mode**                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **HTML Rendering** | All Views render with Parsley by default, HTML document body is auto generated.                                                                               |
| **Content APIs**   | Instant and GraphQL (gql) APIs are on, CORS is `*` allowing client requests from any domain. Headless routing is available from `/-/headless/`                |
| **JSON Access**    | Routes can render JSON with by using a `/?toJSON`, query parameter at the end of any route.  Custom made JSON views and other datatypes are also accessible.  |
| **SEO **           | SEO is automated on page from user input on each content item, and is also available from toJSON calls or the `/headless/routing.json` endpoint               |

{% hint style="warning" %}
Changing a mode will instantly modify the output behavior of WebEngine&#x20;
{% endhint %}

### Change WebEngine Mode

Mode is controlled by a setting that can be found in the Manager UI under General. The default mode is always "traditional".&#x20;

![Setting editable under "general" ](<../../.gitbook/assets/image (44).png>)
