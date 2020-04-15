HTML documents contain a `<head>` tag which allows for child `<meta>`, `<link>`, `<stylesheet>` and `<script>` tags. The HeadTags SDK allows for CRUD operations to manage the available tags on a per content item basis.

---

*All examples assume a properly [authenticated SDK instance](https://github.com/zesty-io/node-sdk/wiki/instantiation)*


Get all head tags:
```JavaScript
try {
  const res = await sdk.instance.getHeadTags();
} catch (err) {
  console.error(err);
}
```

Get a single head tag by ZUID:
:
```JavaScript
const headTagZUID = `21-...`; // Head Tag ZUIDs begin with 21

try {
  const res = await sdk.instance.getHeadTag(headTagZUID);
} catch (err) {
  console.error(err);
}
```

<!-- Create a head tag:
See the documentation for the full range of options.
```JavaScript
const resourceZUID = "7-..."; // A content item

try {
  // Create a script tag to load a script only when rendering the view for the
  // content item whose ZUID is in resourceZUID

  let res = await sdk.instance.createHeadTag({
    type: "script",
    attributes: {
      src: "https://mydomain.com/libs/library.js"
    },
    resourceZUID: resourceZUID
  });

  // Create a meta 'generator' tag added in the head only when rendering the
  // view for the content item whose ZUID is in resourceZUID

  res = await sdk.instance.createHeadTag({
    type: "meta",
    attributes: {
      generator: "This is a test"
    },
    resourceZUID: resourceZUID
  });

  // Create a 'link' tag to load a CSS file from a specified URL only when
  // rendering the view for the content item whose ZUID is in resourceZUID.

  res = await sdk.instance.createHeadTag({
    type: "link",
    attributes: {
      rel: "stylesheet",
      href: "https://mydomain.com/css/mystylesheet.css"
    },
    resourceZUID: resourceZUID
  });
} catch (err) {
  console.error(err);
}
```

Update an existing head tag by ZUID:
See the documentation for the full range of options.
```JavaScript
const headTagZUID = `21-...`; // Head Tag ZUIDs begin with 21
const resourceZUID = "7-..."; // A content item

// Update an existing head tag to be a script loaded from its URL only
// when rendering the view for the content item whose ZUID is in resourceZUID.

try {
  const res = await sdk.instance.saveHeadTag(headTagZuid, {
    type: "script",
    attributes: {
      src: "https://mydomain.com/libs/another-library.js"
    },
    resourceZUID: resourceZUID
  });
} catch (err) {
  console.error(err);
}
```




Delete a single head tag by ZUID:
```JavaScript
try {
  const res = await sdk.instance.deleteHeadTag(headTagZUID);
} catch (err) {
  console.error(err);
}
```


## Site Head Entries

Get all site head entries:
See API documentation here.
```JavaScript
const headTagZUID = `21-...`; // Head Tag ZUIDs begin with 21

try {
  const res = await sdk.instance.getSiteHead();
} catch (err) {
  console.error(err);
}
``` -->