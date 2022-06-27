# Model & Fields

Retrieval of content models and model fields.

These functions use these `instances-api` endpoints:

* [Content Models](https://instances-api.zesty.org/#5f8c1a85-1775-f67b-c5e0-a061f69e7ddb)
* [Fields](https://instances-api.zesty.org/#689c935d-a46c-8eef-cf20-df60f55c38d3)

_All examples assume a properly_ [_authenticated SDK instance_](../instantiation.md)

**Get all content models:**

```javascript
try {
  const res = await sdk.instance.getModels();
} catch (err) {
  console.log(err);
}
```

**Get a content model by ZUID:**

```javascript
try {
  const modelZUID = "6-..."; // Model ZUIDs begin with 6
  const res = await sdk.instance.getModel(modelZUID);
} catch (err) {
  console.log(err);
}
```

**Get all fields for a content model:**

```javascript
try {
  const modelZUID = "6-...";
  const res = await sdk.instance.getModelFields(modelZUID);
} catch (err) {
  console.log(err);
}
```

**Get a specific field by field ZUID for a content model:**

```javascript
try {
  const modelZUID = "6-...";
  const fieldZUID = "12-..."; // Field ZUIDs begin 12
  const res = await sdk.instance.getModelField(modelZUID, fieldZUID);
} catch (err) {
  console.log(err);
}
```
