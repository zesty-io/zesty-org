# Views

CRUD on view files.

_All examples assume a properly_ [_authenticated SDK instance_](../instantiation.md)

Get all views: \(returns an array of view objects\)

```javascript
try {
  const res = await sdk.instance.getViews();
} catch (err) {
  console.error(err);
}
```

Get a view by ZUID:

```javascript
try {
  const viewZUID = "11=..."; // View ZUIDS begin with 11
  const res = await sdk.instance.getView(viewZUID);
} catch (err) {
  console.error(err);
}
```

Create a view \(snippet\):

```javascript
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

Create a view \(endpoint\):

```javascript
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

Update a view: This will only updated view and **will not** publish it.

```javascript
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

```javascript
const viewZUID = "11-...";
const version = 1

try {
  const res = await sdk.instance.publishView(viewZUID, version);
} catch (err) {
  console.error(err);
}
```

