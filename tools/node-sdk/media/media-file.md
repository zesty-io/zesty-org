# Files

Media is how you can manage assets for an instance. Using media you can upload any type of file to get a globally cached URL for that asset.

_All examples assume a properly_ [_authenticated SDK instance_](https://github.com/zesty-io/zesty-org/tree/5b36e6a69eaa109cf8c939006bb82ee5b6bd4eb9/tools/node-sdk/tools/node-sdk/instantiation.md)

**Create a file:**

```javascript
try {
  // Use your instances bin ZUID
  const binZUID = "1-...";

  // Get a read stream to the file you want to upload to your instance
  const stream = fs.createReadStream(
    path.resolve(__dirname, "path/to/file/image.jpg")
  );

  const opts = {
    title: "File title used for alt and/or title attribute text",
    fileName: "image.jpg",
  };

  const file = await sdk.media.createFile(binZUID, stream, opts);

  console.log(file);
} catch (err) {
  console.log(err);
}
```

