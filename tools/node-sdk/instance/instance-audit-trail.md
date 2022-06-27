# Audit Trail

An instances AuditTrail is a collection of records that catalogs the actions taken within an instance. e.g. Creating, Publishing, Deleting a content item. This provides insight into how or why a peice of content is in a specific state.

AuditTrail entries can only be retrived. Creation is reserved for internal Zesty.io usage, which is done at the individual API endpoint. **Deletion and updating do not exist, as this acts as an immutable record of the actions taken in an instance.**

_All examples assume a properly_ [_authenticated SDK instance_](../instantiation.md)

Get all audit trail entries:

```javascript
try {
  const res = await sdk.instance.getAuditLogs();
} catch (err) {
  console.error(err);
}
```

Get a specific audit trail entry by ZUID:

```javascript
const auditZUID = "15-..."; // Audit trail entry ZUIDs begin with 15

try {
  const res = await sdk.instance.getAuditLog(auditZUID);
} catch (err) {
  console.error(err);
}
```

Get audit trail entries having specific properties: [Further filtering documentation and examples](https://instances-api.zesty.org/?version=latest#fc78edce-069d-4948-8209-733a3c02e8dc)

```javascript
const filterProps = {
  // Object keys can be:
  // order
  // dir
  // start_date
  // end_date
  // limit
  // page
  // action
  // affectedZUID
  // userZUID
  // See documentation for examples.
};

try {
  res = await sdk.instance.searchAuditLogs({
    limit: 5,
    order: "created",
    dir: "desc"
  });
} catch (err) {
  console.error(err);
}
```
