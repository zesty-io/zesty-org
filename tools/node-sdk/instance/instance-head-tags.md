# Head Tags

HTML documents contain a `<head>` tag which allows for child `<meta>`, `<link>`, `<stylesheet>` and `<script>` tags. The HeadTags SDK allows for CRUD operations to manage the available tags on a per content item basis.

_All examples assume a properly_ [_authenticated SDK instance_](/tools/node-sdk/instantiation.md)

Get all head tags:

```javascript
try {
  const res = await sdk.instance.getHeadTags();
} catch (err) {
  console.error(err);
}
```

Get a single head tag by ZUID: :

```javascript
const headTagZUID = `21-...`; // Head Tag ZUIDs begin with 21

try {
  const res = await sdk.instance.getHeadTag(headTagZUID);
} catch (err) {
  console.error(err);
}
```

