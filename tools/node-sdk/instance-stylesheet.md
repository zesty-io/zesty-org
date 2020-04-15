CRUD on Zesty.io stylesheet files.

---

*All examples assume a properly [authenticated SDK instance](tools/node-sdk/instantiation)*


Get all stylesheets:
```JavaScript
try {
  const res = await sdk.instance.getStylesheets();
} catch (err) {
  console.error(err);
}
```

Get a stylesheet by ZUID:
```JavaScript
try {
  const stylesheetZUID = "10-..."; // Stylesheet ZUIDs begin with 10
  const res = await sdk.instance.getStylesheet(stylesheetZUID);
} catch (err) {
  console.error(err);
}
```

Create a stylesheet:
```JavaScript
const fileName = "styles.less";
const code = ".myClass { text-align: left; }";
const stylesheetType = "text/less"; // Can also use text/css, text/sass or text/scss
const payload = {
  code: code,
  fileName: fileName,
  type: stylesheetType
};

try {
  const res = await sdk.instance.createStylesheet(payload);
} catch (err) {
  console.error(err);
}
```

Save a stylesheet:
Change the contents of a stylesheet, while retaining the filename and file type.
```JavaScript
const stylesheetZUID = "10-...";
const code = ".anotherClass { text-align: center; }";

const payload = {
  code: code
};

try {
  const res = await sdk.instance.saveStylesheet(stylesheetZUID, payload);
} catch (err) {
  console.error(err);
}
```

<!-- Save and publish a stylesheet:
Both saves the updated stylesheet and publishes it.
```JavaScript
const stylesheetZUID = "10-...";
const code = ".anotherClass { background-color: #ff0000; }";
const payload = {
  code: code
};

try {
  const res = await sdk.instance.saveAndPublishStylesheet(stylesheetZUID, payload);
} catch (err) {
  console.error(err);
}
```

Get all versions of a stylesheet:
```JavaScript
try {
  const stylesheetZUID = "10-...";
  const res = await sdk.instance.getStylesheetVersions(stylesheetZUID);
} catch (err) {
  console.error(err);
}
```

Get a specific version of a stylesheet:
```JavaScript
try {
  const stylesheetZUID = "10-...";
  const stylesheetVersion = 1;
  const res = await sdk.instance.getStylesheetVersion(
    stylesheetZUID,
    stylesheetVersion
  );
} catch (err) {
  console.error(err);
}
``` -->