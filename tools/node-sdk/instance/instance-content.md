# Content

Content items are always accessed relative to their model, so a model ZUID is required for each call. [API documentation](https://instances-api.zesty.org/#74adb209-9eea-0561-e98b-75a2a1b9882b).

_All examples assume a properly_ [_authenticated SDK instance_](../instantiation.md)

**Get all content items for a model:**

```javascript
try {
  const modelZUID = "6-..."; // Model ZUIDs begin with 6
  const res = await sdk.instance.getItems(modelZUID);
  console.log(res);
} catch (err) {
  console.log(err);
}
```

**Get a specific content item by ZUID:**

```javascript
try {
  const modelZUID = "6-...";
  const itemZUID = "7-..."; // Item ZUIDs begin with 7
  const res = await sdk.instance.getItem(modelZUID, itemZUID);
} catch (err) {
  console.log(err);
}
```

**Create a content item:**

```javascript
try {
  const modelZUID = "6-...";
  const res = await sdk.instance.createItem(modelZUID, {
    data: {
      // Values here will depent on content model
      text_field_one: "hello",
      text_field_two: "world"
    },
    meta: {
      createdByUserZUID: "5-...", // User ZUIDs begin with 5
      contentModelZUID: modelZUID
    },
    web: {
      canonicalTagMode: 1,
      metaDescription: "This is the description.",
      metaKeywords: "these,are,some,keywords",
      metaLinkText: "This is the meta link text.",
      metaTitle: "This is the meta title."
    }
  });
} catch (err) {
  console.log(err);
}
```

This will return the ZUID of the created item in the response.

**Save a content item:**

```javascript
try {
  const modelZUID = "6-...";
  const itemZUID = "7-...";

  const res = await sdk.instance.updateItem(modelZUID, itemZUID, {
    data: {
      text_field_one: "updated",
      text_field_two: "item"
    },
    meta: {
      masterZUID: itemZUID
    }
  });
} catch (err) {
  console.log(err);
}
```

**Get all versions for a specific content item by ZUID:**

```javascript
try {
  const modelZUID = "6-...";
  const itemZUID = "7-...";
  const res = await sdk.instance.getItemVersions(modelZUID, itemZUID);
} catch (err) {
  console.log(err);
}
```

**Get a specific version of a content item by version ZUID:**

```javascript
try {
  const modelZUID = "6-...";
  const itemZUID = "7-...";
  const res = await sdk.instance.getItemVersion(modelZUID, itemZUID, 2);
} catch (err) {
  console.log(err);
}
```

**Delete a content item by ZUID:**

```javascript
try {
  const modelZUID = "6-...";
  const itemZUID = "7-...";
  const res = await sdk.instance.deleteItem(modelZUID, itemZUID);
} catch (err) {
  console.log(err);
}
```

Example response:

```javascript
{ _meta:
   { timestamp: '2019-02-20T23:25:37.556Z',
     totalResults: 1,
     start: 0,
     offset: 0,
     limit: 1 },
  message: 'Item deleted',
  data: {}
}
```

> **Note:** this response format may change in future.

## Item Publishing and Unpublishing

**Publish a version of an item immediately:**

```javascript
try {
  const modelZUID = "6-...";
  const itemZUID = "7-...";
  const versionNumber = 1;
  const res = await sdk.instance.publishItem(
    modelZUID,
    itemZUID,
    versionNumber
  );
} catch (err) {
  console.log(err);
}
```

The expected response looks like this:

```javascript
{
  _meta: {
    timestamp: '2019-02-20T23:28:25.487Z',
    totalResults: 1,
    start: 0,
    offset: 0,
    limit: 1
  },
  message: 'Published',
  data: {
    item_zuid: '7-...',
    version_zuid: '9-...',
    version_num: '1'
  }
}
```

> **Note:** this response format may change in future.

**Unpublish a published item immediately:**

```javascript
try {
  const modelZUID = "6-...";
  const itemZUID = "7-...";
  const publishingZUID = "18-...";
  const res = await sdk.instance.unpublishItem(
    modelZUID,
    itemZUID,
    publishingZUID
  );
} catch (err) {
  console.log(err);
}
```

The expected response looks like this:

```javascript
{
  _meta: {
    timestamp: '2019-02-20T23:46:14.423Z',
    totalResults: 1,
    start: 0,
    offset: 0,
    limit: 1
  },
  message: 'Entry updated',
  data: {}
}
```

> **Note:** this response format may change in future.

**Get all publishing records for a specific content item by ZUID:**

```javascript
try {
  const modelZUID = "6-...";
  const itemZUID = "7-...";
  const res = await sdk.instance.getItemPublishings(modelZUID, itemZUID);
} catch (err) {
  console.log(err);
}
```

**Get specific publishing record by publishing ZUID for a content item:**

```javascript
try {
  const modelZUID = "6-3029e8-x4cbhh";
  const itemZUID = "7-9cd6d2cdf9-spmszq";
  const publishingZUID = "18-7c02d25-rpzw1v"; // Publishing ZUIDs begin with 18
  const res = await sdk.instance.getItemPublishing(
    modelZUID,
    itemZUID,
    publishingZUID
  );
} catch (err) {
  console.log(err);
}
```
