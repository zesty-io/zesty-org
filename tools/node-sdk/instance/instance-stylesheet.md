# Stylesheet

CRUD on Zesty.io stylesheet files.

_All examples assume a properly_ [_authenticated SDK instance_](../instantiation.md)

Get all stylesheets:

```javascript
try {
  const res = await sdk.instance.getStylesheets();
} catch (err) {
  console.error(err);
}
```

Get a stylesheet by ZUID:

```javascript
try {
  const stylesheetZUID = "10-..."; // Stylesheet ZUIDs begin with 10
  const res = await sdk.instance.getStylesheet(stylesheetZUID);
} catch (err) {
  console.error(err);
}
```

Create a stylesheet:

```javascript
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

Save a stylesheet: Change the contents of a stylesheet, while retaining the filename and file type.

```javascript
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

