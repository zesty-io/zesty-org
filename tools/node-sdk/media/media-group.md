# Groups

Groups act as a way to organize media assets into related collections. They can also be parented to create related group hierarchies.

_All examples assume a properly_ [_authenticated SDK instance_](https://github.com/zesty-io/zesty-org/tree/5b36e6a69eaa109cf8c939006bb82ee5b6bd4eb9/tools/node-sdk/tools/node-sdk/instantiation.md)

**Get all groups from a bin:**

```javascript
try {
  const binZUID = "1-..."; // bin ZUIDs begin with 1
  const res = await sdk.instance.getGroups(binZUID);
  console.log(res);
} catch (err) {
  console.log(err);
}
```

**Get an individual group:**

```javascript
try {
  const groupZUID = "2-..."; // group ZUIDs begin with 2
  const res = await sdk.instance.getGroup(groupZUID);
  console.log(res);
} catch (err) {
  console.log(err);
}
```

**Create a group:**

`````javascript try { const binZUID = "1-..." const group = await sdk.media.createGroup({ name:```My New Group\`, binZUID, }\); console.log\(group\) } catch \(err\) { console.log\(err\); }

