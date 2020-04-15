CRUD on view files.

---

*All examples assume a properly [authenticated SDK instance](tools/node-sdk/instantiation.md)*


Get all views:
(returns an array of view objects)
```JavaScript
try {
  const res = await sdk.instance.getViews();
} catch (err) {
  console.error(err);
}
```

Get a view by ZUID:
```JavaScript
try {
  const viewZUID = "11=..."; // View ZUIDS begin with 11
  const res = await sdk.instance.getView(viewZUID);
} catch (err) {
  console.error(err);
}
```

Create a view (snippet):
```JavaScript
const type = "snippet";
const fileName = "navigation";
const code = "my view content";
const payload = {
  type: type,
  fileName: fileName,
  code: code
};

try {
  const res = await sdk.instance.createView(payload);
} catch (err) {
  console.error(err);
}
```

Create a view (endpoint):
```JavaScript
const type = "ajax-json";
const fileName = "/special-endpoint.json";
const code = JSON.stringify({ foo: "bar" });
const payload = {
  type: type,
  fileName: fileName,
  code: code
};

try {
  const res = await sdk.instance.createView(payload);
} catch (err) {
  console.error(err);
}
```

Update a view:
This will only updated view and **will not** publish it.
```JavaScript
const viewZUID = "11-...";
const code = "my view content";
const payload = {
  code: code
};

try {
  const res = await sdk.instance.updateView(viewZUID, payload);
} catch (err) {
  console.error(err);
}
```

Publish a view:
```JavaScript
const viewZUID = "11-...";
const version = 1

try {
  const res = await sdk.instance.publishView(viewZUID, version);
} catch (err) {
  console.error(err);
}
```
<!-- 
Get all versions of a view:
```JavaScript
const viewZUID = "11-...";

try {
  const res = await sdk.instance.getViewVersions(viewZUID);
} catch (err) {
  console.error(err);
}
```

Get a specific version of a view:
```JavaScript
const viewZUID = "11-...";
const viewVersionNumber = 2;

try {
  const res = await sdk.instance.getViewVersion(viewZUID, viewVersionNumber);
} catch (err) {
  console.error(err);
}
``` -->