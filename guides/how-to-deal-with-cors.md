# How to Deal With CORS

## Overview

CORS can be one of the must frustrating things to debug when working with front-end code. This guide provide steps for determining if you are having a CORS issue and ways to resolve them. How to configure CORS on your Zesty.io instance.

## What is CORS?

Cross-Origin Resource Sharing (CORS) is when one domain makes an XHR request to another domain. This commonly occurs when using JavaScript to make an HTTP request to an API.

CORS is an instruction provided by the requested server to the requesting client (your web browser) on what it's rules are on requests from other domains which aren't itself.

It acts as a security mechanism to limit how data is accessed. It should be noted though that CORS is not an absolute measure to prevent access to an API. As it is up to requesting client on whether it will respect the instructions returned by the requested server. Meaning things such as cURL can be used to bypass these instructions.

The "instructions" we are referring to are the HTTP headers `access-control-allow-*` returned when accessing a domains URL which has a CORS policy in place. 

CORS requests are known as "complex" requests triggering a web browser to send a "pre-flight" OPTIONS request. This is an HTTP request which the browser makes to ask the requested server what it's policy is on CORS. Based upon the response the browser will then decided whether it should proceed with making the intended HTTP request. This is usally where we begin to see errors being thrown.

## Debugging CORS

While CORS policies are set by the back-end server there are a few things you will want to test on the front-end to ensure your request is being sent correctly.

### Browser Extensions

One of the biggest "gotchas" in front-end development can be browser extensions. When installed you've given them permission to run code on the browser tabs you are viewing as such they have the ability to modify functionality happening on a web page. Not all extensions are good actors and can cause un-intential and intential side effects. One of those being modifying network request. When ever debugging front-end issues we always suggest using a "clean-room" profile. In short this is a browser profile without any extensions installed. This will ensure you don't have unexpected changes in behavior from that 3rd party code location.

### Investigating HTTP Response Headers

Whenever you need to debug front-end code your best friend will be a browsers inspector. This is a browsers internal tool for examning the source code and resulting behaviors of a web page. Not all browser inspectors are equal and can have significant differences in available functionality. These differences are out of the scope of this guide but an important factor to be aware of.

Most browser inspectors can be accessed by right click on a web page to show the context menu and selecting the "inspect" option. This should open the inspector which will contain multiple tabs. The two we are interested in will be the "Console" and "Network" tab. 

#### Console

The console is where we can see errors and logs from both the browser and our pages source code. When a CORS error occurs you should see a console error stating what the error was.

// TODO Show screenshot of CORS error

{% hint style="warn" %}
Sometimes when a server error occurs the browser will display it as a CORS error. When you see a CORS error in the console it is important to inspect the request and confirm the response headers.
{% endhint %}

Typically the displayed error will point out the exact header which caused the CORS failure. Usually this information is enough to understand what caused the failure and what is needed to allow the request to succeed. Most commmonly this is a mismatch between the origin (the domain loaded in your browser tab which made the front-end request) and requested domain (the back-end server which your front-end code wanted to get data from). If your response header `Allow-Access-Control-Origin` value does not match the domain you are on it will fail. If this is the case you will need to communicate with the back-end server owner to determine a solution, they would need to allow the domain you are requesting from.

{% hint style="info" %}
An origin is the combination of the protocol, domain, and port
{% endhint %}

`Allow-Access-Control-Origin` has a special value which can be set, an asterisk `*`. This is known as a "wildcard". Meaning that the back-end server allows requests from any origin. Public APIs need this value set in order to allow requests from any origin.

In addition to the `Allow-Access-Control-*` headers there are also `[Access-Control-Request-*](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers)` headers. We suggest gaining a cursory understanding of the available values here to more full understand how CORS requests are formulated.

#### Network

Using the network tab we can inspect all the network traffic to and from the domain we are on. When clicking on a request, such as our OPTIONS request, we will see both the request and response headers. Looking at the response headers of our OPTIONS request we will be able see what `Allow-Access-Control-*` were returned from our back-end server. These are the instructions which the browser then follows. 

// TODO screeenshot of OPTIONS network request response headers

If the domain we are on is not shown in the `Allow-Access-Control-Origin` value then we will not be able to make the CORS request.

{% hint style="hint" %}
Most Network tabs allow filtering to types of request, such as XHR. Some browsers when an OPTION request fails will not make the actual request causing it not to appear in the filtered XHR list. For this reason it is important to be on the "All" filter to ensure you are seeing any failures which could be occuring.
{% endhint %}

### JavaScript Fetch Settings

If you are just starting to learn about CORS one of the best places to start is the [Mozilla Developer Network (MDN) documentation on CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). It is an excellent resource for all things front-end.

When authoring code which will make a `Fetch` CORS request one setting you will want to be familiar with is `[mode](https://developer.mozilla.org/en-US/docs/Web/API/Request/mode)`. This is the setting which explicitly states what type of request you want to make. It is useful to define this to ensure consistency on how a browser makes the request along with communicating to yourself or other developers in the future what the intent and expectations of the network request are.

## Solving CORS Issues

The most important thing to understand is that CORS policies are set by the requested domains server. Full stop. When making a network request with JavaScript in a web browser if the back-end server does not want to server requests across origins there is nothing you will be able to do from you JavaScript code to circumvent that. At that point you would need to work with whoever maintains the back-end to understand what their CORS policy is.

That being said sometimes there are things in the front-end JavaScript which can be setup incorrectly. Before you contact the back-end owners you will want to ensure you've gone through the obvious steps to debug your CORS requests.


### CORS Settings on Zesty.io Instances

Because your Zesty.io instance can act as an API to front-end code you have the option of controlling how CORS request are responded to by your instance. 

{% hint style="info" %}
[Learn more about using your instance as an API](https://zesty.org/guides/how-to-create-a-customizable-json-endpoint-for-content)
{% endhint %}

Your instance has two types of APIs the [Instant JSON API](https://zesty.org/apis/instant-content-api) and [Custom Endpoints](https://zesty.org/services/manager-ui/editor/custom-file-types-endpoints). By [turning on the CORS setting](https://zesty.org/services/manager-ui/settings/instance-settings#developer) for these APIs in the instance Developer settings you will requests from external domains to yours. This how you can allow public browser access to your APIs.


# Inclusion

CORS errors can be one of the biggest points of frustration when authoring front-end code. Hopefully with this guide we have given you some helpful insight and strategies for debugging these error when they occur. 


**Sources**
- https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers
- https://fetch.spec.whatwg.org/#http-cors-protocol