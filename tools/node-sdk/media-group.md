# Groups

Groups act as a way to organize media assets into related collections. They can also be parented to create related group hierarchies.

*All examples assume a properly [authenticated SDK instance](tools/node-sdk/instantiation.md)*

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
```javascript
try {
  const binZUID = "1-..."
  const group = await sdk.media.createGroup({
    name: `My New Group`,
    binZUID,
  });
  console.log(group)
} catch (err) {
  console.log(err);
}