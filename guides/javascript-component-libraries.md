---
description: Implementing JavaScript component libraries on Zesty.io
---

# JavaScript Component Libraries

This is a conceptual overview of the strategies around delivery and rendering of JavaScript based component libraries. With examples demonstrating how to implement on Zesty.io

```text
f(d) = v
```

One of the ways, although an oversimplification, to describe how these libraries work is the equation of a function given data results in a view. The function for our purposes being the component library code you author, data being content coming from the Zesty.io CMS and view is the resulting HTML output of this combination.

The first thing that needs to be understood when examining these rendering options is that most JavaScript component libraries have a build step. This is the step which occurs on a computer or server, which is not the consumers \(_read_: website visitor\), that transforms a domain specific language \(DSL\) into JavaScript \(ES5/6\) which a browser can execute. Meaning there is "source code" which you author and a "shipped" JavaScript file.

**Note**: Some libraries do allow for "runtime" transformations. Meaning the source code is shipped to a consumer's browser and the library then transforms that into browser usablem JavaScript on their machine, which is then rendered to the page.

Examples of JavaScript component libraries which can be used to implement these strategies;

* [ReactJS](https://reactjs.org/)
* [PreactJS](https://preactjs.com/)
* [VueJS](https://vuejs.org/)
* [AngularJS](https://angularjs.org/)

### Single Page Application \(SPA\)

* [create-react-app.zesty.dev](https://create-react-app.zesty.dev)
* [github.com/zesty-io/create-react-app.zesty.dev](https://github.com/zesty-io/create-react-app.zesty.dev)

Arguably the simplest and most common of these strategies. This is when source files are built into a \*single bundle which is served to a web page that mounts it to a DOM element. Typically a root element such as a child div of the body tag. This is also known as a "headless" strategy.

```markup
<html>
 <head>
   <!-- Your pre-built app bundle -->
   <script type="text/javascript" src="path/to/app/bundle.js"></script>
 </head>
 <body>
   <div id="app">
     // App mounts to this element
   </div>
 </body>
</html>
```

With this strategy when the application is initially mounted it contains no data to render. It will make http network requests to the CMS API to fetch necessary data and then render out views.

A SPA can be used across all urls of a site or on a single path part. _e.g. example.org/app/_

### In Page Component

* [preact.zesty.dev](https://preact.zesty.dev)
* [github.com/zesty-io/preact.zesty.dev](https://github.com/zesty-io/preact.zesty.dev)

There is not a hard requirement for component libraries that they are the only thing on a page. Usually the only rule is that anything nested below the mount element of the component is not interacted with externally.

This allows for combining static pages with embeded dynamic components.

```markup
<html>
 <head>
   <!-- Your pre-built component bundle -->
   <script src="path/to/component/bundle.js"></script>
 </head>
 <body>
   <div id="blog">
     <main id="post">
       <header>
         <h1>Post Title</h1>
       </header>
       <div>
         <p>Post content ...</p>
       </div>
       <footer>
         <div id="ComponentMountPoint">
           // Your mounted JavaScript component.
           // This child DOM structure should not 
           // be interacted with externally.
         </div>
       </footer>
     </main>
   </div>
 </body>
</html>
```

### Server Side Rendering \(SSR\)

> e.g. [Next.js](https://nextjs.org/), [Nuxt.js](https://nuxtjs.org/)

SSR is when a browser requests a page and the server responding will in turn fetch the necessary data, typically from an http networked service like a CMS API, run a build combining the data and source code into the rendered HTML page. Which it then returns to the requester. At this point we have served a "static" page. This page then typically includes code which allows it to "hydrate" the data. Part of this static page is a script tag for the JavaScript bundle. Which when the browser automatically downloads and parses will take over the static page and convert into a dynamic single page application.

While Zesty.io does not offer a server execution runtime, meaning we won't run your source code on a server, you can combine Parsley templates with a SPA in a similar fashion. By authoring Parsley templates, which have access to the same CMS data, you can generate static pages which include a JavaScript bundle that once loaded will overtake the static page and provide a dynamic SPA experience which then will request CMS data via APIs.

### Static Page Builders

> e.g. [GatsbyJS](https://www.gatsbyjs.org/)

This is a solution where you author component source code which goes through a build step which combines data with the source code and outputs the generated static files. These static files are then pushed to a host which serves them to consumers.

With this strategy usually you will have separate data, code and hosting management \(_read_: third party providers\). Whereas Zesty.io offers both data and hosting management allowing you to pick your choice of code authoring and build steps.

_e.g. Zesty \(data\) + Gatsby \(code\) + GCP Bucket \(hosting\)_

## In Conclusion

These strategies boil down to two main groups; is the server rendering or is the browser rendering. Both the SPA and in page components require the browser to render. While SSR starts with the server doing an initial render and eventually has the browser take over rendering.

Zesty.io does not offer custom server rendering environments. That is, we will not run a build script for your source code.

When rendering in browser, on Zesty.io, there are a few ways to deliver application bundles; globally, per model, per page and inline.

With all of these solutions there are a few implementation details they all must consider.

* How is the code built?
* How is the code delivered?
* How is data fetched?

Each strategy typically allows for multiple combinations of solutions to these concerns.

_A single bundle is not a requirement. It's possible to build multiple bundles which are shipped independently._

