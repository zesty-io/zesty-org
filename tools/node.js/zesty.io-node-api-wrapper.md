---
description: >-
  Quickly access Zesty.io's Instance, Accounts and Media Management APIs through
  NodeJS.
---

# Zesty.io Node API Wrapper

### Installation

This tutorial assumes you have npm and Node.js \(8.9.4 or greater\) installed, and have a `package.json` file for your project.

Install via npm:

```text
npm install zestyio-api-wrapper
```

Include this line at the top of your JavaScript project file:

```javascript
const Zesty = require("zestyio-api-wrapper");
```

### Instantiation

You can get the Zesty.io token and instance ZUID for your instance from the Zesty.io manager, or by using the authentication functionality in the wrapper. At this time, authentication through the wrapper does not support user accounts using 2FA authentication.

#### Authenticating using the Wrapper

This wrapper now includes functionality to authenticate a user by their email address and password, returning a token that can then be used to make API calls. This should be used, for scenarios such as building a tool that runs periodically and authenticates to Zesty.io in order to perform some task: uploading content or retrieving audit log information for example.

We do not recommend that you put values for email address and password in your code or source control system - treat these as secrets and use environment variables or some other mechanism to ensure that their values aren't stored in the code nor committed to source control.

In the following example, we're assuming the use of environment variables:

```javascript
const ZestyAuth = require("zestyio-api-wrapper/auth");

try {
  const email = process.env.ZESTY_USER_EMAIL;
  const password = process.env.ZESTY_USER_PASSWORD;

  const zestyAuth = new ZestyAuth();

  const token = await zestyAuth.login(email, password);
} catch (e) {
  console.log(e);
}
```

If the correct credentials are configured in the environment variables `ZESTY_USER_EMAIL` and `ZESTY_USER_PASSWORD`, the above snippet will log the user in and return a token that can then be used to instantiate the API wrapper.

#### Obtaining a Token Manually from the Zesty Editor

You can also obtain a token manually by logging into your Zesty.io instance, then going to the "Editor" section in the manager application. From there, click on the "External Editing" button which displays the ZUID and token for your instance.

#### Instantiating the Wrapper

Once you have obtained a token, you can instantiate the API wrapper as follows:

```javascript
const token = "PRIVATE_TOKEN_FROM_ZESTYIO"; // Obtain using one of the methods described above
const instanceZUID = "8-..."; // ZUID of the Zesty.io Cloud Content Instance on which to make requests

const zesty = new Zesty(instanceZUID, token);
```

You can optionally enable API request and error logging by setting one or both of the `logErrors` and `logResponses` flags:

```javascript
const zesty = new Zesty(instanceZUID, token, {
  logErrors: true,
  logResponses: true
});
```

Note that the user whose login generated the token will need to have permissions to access the particular Zesty.io instance that the wrapper is instantiated with. As access to instances is also associated with roles, the user will need to have the appropriate role set in Zesty.io in order to be allowed to perform various API calls.

#### Validating a Token

Tokens are currently session based. This means that they will expire after a period of inactivity. To check whether a token is valid you can use the `verifyToken` method in the auth class:

```javascript
try {
  const zestyAuth = new ZestyAuth();

  // token has been obtained from zestyAuth.login...

  const isTokenGood = await zestyAuth.verifyToken(token);
} catch (e) {
  console.log(e);
}
```

If this returns `true`, your token is good to make API calls. If `false`, you should re-authenticate and get a new token.

### Usage

#### Response Object Format

Responses from the API will generally be delivered as objects having the following form:

```javascript
{
  _meta: {
    timestamp: '2019-02-14T18:42:19.279094718Z',
    totalResults: 1,
    start: 0,
    offset: 0,
    limit: 1
  },
  data: // Object or array of objects.
}
```

The content of `data` will be either an object \(for endpoints that return one item\) or an array containing zero or more objects \(endpoints that can return multiple items will return an array regardless of how many items match the query\).

#### Error Response Format

Responses for error cases will generally be delivered as objects having the following form:

```javascript
{
  reason: 'Textual description',
  statusCode: 401, // HTTP response code from API, 400, 401, 500 etc
  error: 'Something is wrong' // null or string or object with error detail
}
```

#### Content Models and Fields

Retrieval of content models and model fields. See documentation:

* [Content Models](https://instances-api.zesty.org/#5f8c1a85-1775-f67b-c5e0-a061f69e7ddb)
* [Fields](https://instances-api.zesty.org/#689c935d-a46c-8eef-cf20-df60f55c38d3)

**Get all content models:**

```javascript
try {
  const res = await zesty.getModels();
} catch (err) {
  console.log(err);
}
```

**Get a content model by ZUID:**

```javascript
try {
  const modelZUID = "6-..."; // Model ZUIDs begin with 6
  const res = await zesty.getModel(modelZUID);
} catch (err) {
  console.log(err);
}
```

**Get all fields for a content model:**

```javascript
try {
  const modelZUID = "6-...";
  const res = await zesty.getFields(modelZUID);
} catch (err) {
  console.log(err);
}
```

**Get a specific field by field ZUID for a content model:**

```javascript
try {
  const modelZUID = "6-...";
  const fieldZUID = "12-..."; // Field ZUIDs begin 12
  const res = await zesty.getField(modelZUID, fieldZUID);
} catch (err) {
  console.log(err);
}
```

#### Content Items

Content items are always accessed relative to their model, so a model ZUID is required for each call. See the documentation [here](https://instances-api.zesty.org/#74adb209-9eea-0561-e98b-75a2a1b9882b).

**Get all content items for a model:**

```javascript
try {
  const modelZUID = "6-..."; // Model ZUIDs begin with 6
  const res = await zesty.getItems(modelZUID);
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
  const res = await zesty.getItem(modelZUID, itemZUID);
} catch (err) {
  console.log(err);
}
```

**Create a content item:**

```javascript
try {
  const modelZUID = "6-...";
  const res = await zesty.createItem(modelZUID, {
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

  const res = await zesty.saveItem(modelZUID, itemZUID, {
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
  const res = await zesty.getItemVersions(modelZUID, itemZUID);
} catch (err) {
  console.log(err);
}
```

**Get a specific version of a content item by version ZUID:**

```javascript
try {
  const modelZUID = "6-...";
  const itemZUID = "7-...";
  const res = await zesty.getItemVersion(modelZUID, itemZUID, 2);
} catch (err) {
  console.log(err);
}
```

**Delete a content item by ZUID:**

```javascript
try {
  const modelZUID = "6-...";
  const itemZUID = "7-...";
  const res = await zesty.deleteItem(modelZUID, itemZUID);
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

#### Item Publishing and Unpublishing

**Publish a version of an item immediately:**

```javascript
try {
  const modelZUID = "6-...";
  const itemZUID = "7-...";
  const versionNumber = 1;
  const res = await zesty.publishItemImmediately(
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
  const res = await zesty.unpublishItemImmediately(
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
  const res = await zesty.getItemPublishings(modelZUID, itemZUID);
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
  const res = await zesty.getItemPublishing(
    modelZUID,
    itemZUID,
    publishingZUID
  );
} catch (err) {
  console.log(err);
}
```

#### Views

The wrapper allows CRUD on Zesty.io view files. See documentation [here](https://instances-api.zesty.org/#efc2e79a-e392-4114-a722-c3b512e23833):

**Get all views:**

\(returns an array of view objects\)

```javascript
try {
  const res = await zesty.getViews();
} catch (err) {
  console.log(err);
}
```

**Get a view by ZUID:**

```javascript
try {
  const viewZUID = "11=..."; // View ZUIDS begin with 11
  const res = await zesty.getView(viewZUID);
} catch (err) {
  console.log(err);
}
```

**Create a view \(snippet\):**

```javascript
const fileName = "navigation-snippet";
const code = "my view content";
const payload = {
  code: code,
  fileName: fileName
};

try {
  const res = await zesty.createView(payload);
} catch (err) {
  console.log(err);
}
```

**Create a view \(endpoint\):**

```javascript
const fileName = "/special-endpoint.json";
const code = JSON.stringify({ foo: "bar" });
const payload = {
  code: code,
  type: "ajax-json",
  fileName: fileName
};

try {
  const res = await zesty.createView(payload);
} catch (err) {
  console.log(err);
}
```

**Save a view:**

This will only save the updated view, and will not publish it.

```javascript
const viewZUID = "11-...";
const code = "my view content";
const payload = {
  code: code
};

try {
  const res = await zesty.saveView(viewZUID, payload);
} catch (err) {
  console.log(err);
}
```

**Save and publish a view:**

Both saves the updated view and publishes it.

```javascript
const viewZUID = "11-...";
const code = "my view content";
const payload = {
  code: code
};

try {
  const res = await zesty.saveAndPublishView(viewZUID, payload);
} catch (err) {
  console.log(err);
}
```

**Get all versions of a view:**

```javascript
const viewZUID = "11-...";

try {
  const res = await zesty.getViewVersions(viewZUID);
} catch (err) {
  console.log(err);
}
```

**Get a specific version of a view:**

```javascript
const viewZUID = "11-...";
const viewVersionNumber = 2;

try {
  const res = await zesty.getViewVersion(viewZUID, viewVersionNumber);
} catch (err) {
  console.log(err);
}
```

#### Scripts

CRUD on Zesty.io script files. See documentation [here](https://instances-api.zesty.org/#83f109ba-94a8-4647-8cb7-06f2bfe291a0).

**Get all scripts:**

\(returns an array of script objects\).

```javascript
try {
  const res = await zesty.getScripts();
} catch (err) {
  console.log(err);
}
```

**Get a script by ZUID:**

```javascript
try {
  const scriptZUID = "10-..."; // Script ZUIDs begin with 10
  const res = await zesty.getScript(scriptZUID);
} catch (err) {
  console.log(err);
}
```

**Create a script:**

```javascript
const fileName = "my-script.js";
const code = "alert('hello world');";
const payload = {
  code: code,
  fileName: fileName,
  type: "text/javascript"
};

try {
  const res = await zesty.createScript(payload);
} catch (err) {
  console.log(err);
}
```

**Save a script:**

Change the contents of a script, while retaining the filename.

```javascript
const scriptZUID = "10-...";
const code = "alert('hello world');";
const payload = {
  code: code
};

try {
  const res = await zesty.saveScript(scriptZUID, payload);
} catch (err) {
  console.log(err);
}
```

**Save and publish a script:**

Both saves the updated script and publishes it.

```javascript
const scriptZUID = "10-...";
const code = "alert('hello again');";
const payload = {
  code: code
};

try {
  const res = await zesty.saveAndPublishScript(scriptZUID, payload);
} catch (err) {
  console.log(err);
}
```

**Get all versions of a script:**

```javascript
try {
  const scriptZUID = "10-...";
  const res = await zesty.getScriptVersions(scriptZUID);
} catch (err) {
  console.log(err);
}
```

**Get a specific version of a script:**

```javascript
try {
  const scriptZUID = "10-...";
  const versionNumber = 1;
  const res = await zesty.getScriptVersion(scriptZUID, versionNumber);
} catch (err) {
  console.log(err);
}
```

#### Stylesheets

CRUD on Zesty.io stylesheet files. See documentation [here](https://instances-api.zesty.org/#f72b36b1-43cd-46cd-aae0-2e98cd9bbdda).

**Get all stylesheets:**

```javascript
try {
  const res = await zesty.getStylesheets();
} catch (err) {
  console.log(err);
}
```

**Get a stylesheet by ZUID:**

```javascript
try {
  const stylesheetZUID = "10-..."; // Stylesheet ZUIDs begin with 10
  const res = await zesty.getStylesheet(stylesheetZUID);
} catch (err) {
  console.log(err);
}
```

**Create a stylesheet:**

```javascript
const fileName = "styles.less";
const code = ".myClass { text-align: left; }";
const stylesheetType = "text/less"; // Can also use text/css or text/scss
const payload = {
  code: code,
  fileName: fileName,
  type: stylesheetType
};

try {
  const res = await zesty.createStylesheet(payload);
} catch (err) {
  console.log(err);
}
```

**Create a stylesheet and show transpiler errors:**

```javascript
const fileName = "styles.less";
const code = ".myClass { text-align: left; }";
const stylesheetType = "text/less"; // Can also use text/css or text/scss
const payload = {
  code: code,
  fileName: fileName,
  type: stylesheetType
};
const showError = true;

try {
  const res = await zesty.createStylesheet(payload, showError);
} catch (err) {
  console.log(err);
}
```

**Save a stylesheet:**

Change the contents of a stylesheet, while retaining the filename and file type.

```javascript
const stylesheetZUID = "10-...";
const code = ".anotherClass { text-align: center; }";

const payload = {
  code: code
};

try {
  const res = await zesty.saveStylesheet(stylesheetZUID, payload);
} catch (err) {
  console.log(err);
}
```

**Save a stylesheet and show transpiler errors:**

Change the contents of a stylesheet, while retaining the filename and file type.

```javascript
const stylesheetZUID = "10-...";
const code = ".anotherClass { text-align: center; }";

const payload = {
  code: code
};
const showError = true;

try {
  const res = await zesty.saveStylesheet(stylesheetZUID, payload, showError);
} catch (err) {
  console.log(err);
}
```

**Save and publish a stylesheet:**

Both saves the updated stylesheet and publishes it.

```javascript
const stylesheetZUID = "10-...";
const code = ".anotherClass { background-color: #ff0000; }";
const payload = {
  code: code
};

try {
  const res = await zesty.saveAndPublishStylesheet(stylesheetZUID, payload);
} catch (err) {
  console.log(err);
}
```

**Save and publish a stylesheet and show transpiler errors:**

Both saves the updated stylesheet and publishes it.

```javascript
const stylesheetZUID = "10-...";
const code = ".anotherClass { background-color: #ff0000; }";
const payload = {
  code: code
};
const showError = true;

try {
  const res = await zesty.saveAndPublishStylesheet(stylesheetZUID, payload, showError);
} catch (err) {
  console.log(err);
}
```

**Get all versions of a stylesheet:**

```javascript
try {
  const stylesheetZUID = "10-...";
  const res = await zesty.getStylesheetVersions(stylesheetZUID);
} catch (err) {
  console.log(err);
}
```

**Get a specific version of a stylesheet:**

```javascript
try {
  const stylesheetZUID = "10-...";
  const stylesheetVersion = 1;
  const res = await zesty.getStylesheetVersion(
    stylesheetZUID,
    stylesheetVersion
  );
} catch (err) {
  console.log(err);
}
```

#### Head Tags

CRUD on `<head>` tags \(for example meta tags, stylesheet `link` tags, `script` tags that go in the head area of an HTML document\). Allows setting of tags at a per item \(refered to as Resource ZUID in the documentation\) level. See documentation [here](https://instances-api.zesty.org/#1eabcc23-03a1-4414-bba1-177228345c8e).

**Get all head tags:**

```javascript
try {
  const res = await zesty.getHeadTags();
} catch (err) {
  console.log(err);
}
```

**Get a single head tag by ZUID:**

```javascript
const headTagZUID = `21-...`; // Head Tag ZUIDs begin with 21

try {
  const res = await zesty.getHeadTag(headTagZUID);
} catch (err) {
  console.log(err);
}
```

**Create a head tag:**

See the [documentation](https://instances-api.zesty.org/#1eabcc23-03a1-4414-bba1-177228345c8e) for the full range of options.

```javascript
const resourceZUID = "7-..."; // A content item

try {
  // Create a script tag to load a script only when rendering the view for the
  // content item whose ZUID is in resourceZUID

  let res = await zesty.createHeadTag({
    type: "script",
    attributes: {
      src: "https://mydomain.com/libs/library.js"
    },
    resourceZUID: resourceZUID
  });

  // Create a meta 'generator' tag added in the head only when rendering the
  // view for the content item whose ZUID is in resourceZUID

  res = await zesty.createHeadTag({
    type: "meta",
    attributes: {
      generator: "This is a test"
    },
    resourceZUID: resourceZUID
  });

  // Create a 'link' tag to load a CSS file from a specified URL only when
  // rendering the view for the content item whose ZUID is in resourceZUID.

  res = await zesty.createHeadTag({
    type: "link",
    attributes: {
      rel: "stylesheet",
      href: "https://mydomain.com/css/mystylesheet.css"
    },
    resourceZUID: resourceZUID
  });
} catch (err) {
  console.log(err);
}
```

**Update an existing head tag by ZUID:**

See the [documentation](https://instances-api.zesty.org/#1eabcc23-03a1-4414-bba1-177228345c8e) for the full range of options.

```javascript
const headTagZUID = `21-...`; // Head Tag ZUIDs begin with 21
const resourceZUID = "7-..."; // A content item

// Update an existing head tag to be a script loaded from its URL only
// when rendering the view for the content item whose ZUID is in resourceZUID.

try {
  const res = await zesty.saveHeadTag(headTagZuid, {
    type: "script",
    attributes: {
      src: "https://mydomain.com/libs/another-library.js"
    },
    resourceZUID: resourceZUID
  });
} catch (err) {
  console.log(err);
}
```

**Delete a single head tag by ZUID:**

```javascript
const headTagZUID = `21-...`; // Head Tag ZUIDs begin with 21

try {
  const res = await zesty.getSiteHead();
} catch (err) {
  console.log(err);
}
```

#### Site Head Entries

**Get all site head entries:**

See API documentation [here](https://instances-api.zesty.org/#1b097314-1e85-450f-86f7-186f1a3f080f).

```javascript
try {
  const res = await zesty.deleteHeadTag(headTagZUID);
} catch (err) {
  console.log(err);
}
```

#### Navigation Entries

**Get all navigation entries:**

Returns all items needed to build navigation for a management interface. See the API documentation [here](https://instances-api.zesty.org/#b340777b-c900-4b5e-8455-82b9a10ac56a).

```javascript
try {
  const res = await zesty.getNav();
} catch (err) {
  console.log(err);
}
```

#### Audit Trail

Provides methods to retrieve and filter audit trail entries. See documentation [here](https://instances-api.zesty.org/#026123c3-086e-42bd-9eda-86c2b5de33a2).

**Get all audit trail entries:**

```javascript
try {
  const res = await zesty.getAuditTrailEntries();
} catch (err) {
  console.log(err);
}
```

**Get a specific audit trail entry by ZUID:**

```javascript
const auditZUID = "15-..."; // Audit trail entry ZUIDs begin with 15

try {
  const res = await zesty.getAuditTrailEntries(auditZUID);
} catch (err) {
  console.log(err);
}
```

**Get audit trail entries having specific properties:**

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
  res = await zesty.searchAuditTrailEntries({
    limit: 5,
    order: "created",
    dir: "desc"
  });
} catch (err) {
  console.log(err);
}
```

Examples for each filtering parameter can be found in the [API documentation](https://instances-api.zesty.org/#026123c3-086e-42bd-9eda-86c2b5de33a2).

#### Instance Settings

**Get all instance settings:**

```javascript
try {
  const res = await zesty.getSettings();
} catch (err) {
  console.log(err);
}
```

**Get instance setting by setting ID:**

```javascript
try {
  const settingID = 5;
  const res = await zesty.getSetting(settingID);
} catch (err) {
  console.log(err);
}
```

### Media Management Calls

#### Media Bins

**Get all media bins:**

```javascript
try {
  const binsResponse = await zesty.getMediaBins();
  const firstBin = binsResponse.data[0];
  const firstBinId = firstBin.id;
} catch (err) {
  console.log(err);
}
```

Abbreviated response format:

```javascript
{
  message: 'Bin',
  status: 'OK',
  code: 200,
  data:[
    {
      id: '<Bin ZUID>',
      name: '<Bin Name>',
      created_at: '2018-07-09T21:50:27.000Z',
      deleted_at: null,
      default: true
    },
    ...
  ]
}
```

**Get media bin by ID:**

```javascript
try {
  const binId = "media bin ID";
  const binResponse = await zesty.getMediaBin(binId);
} catch (err) {
  console.log(err);
}
```

Abbreviated response format:

```javascript
{
  message: 'Bin',
  status: 'OK',
  code: 200,
  data: [
    {
      id: '<Bin ZUID>',
      name: '<Bin Name>',
      created_at: '2018-07-09T21:50:27.000Z',
      deleted_at: null
    }
  ]
}
```

**Update media bin by ID:**

\(Allows for bin name to be updated\).

```javascript
const binId = "media bin ID";

try {
  const binUpdateResponse = await zesty.updateMediaBin(binId, {
    name: "New Name"
  });
} catch (err) {
  console.log(err);
}
```

Abbreviated response format:

```javascript
{
  message: 'Bin <Bin ZUID> updated',
  status: 'OK',
  code: 200,
  data: [
    {
      id: '<Bin ZUID>',
      name: 'New Name'
    }
  ]
}
```

#### Media Groups \(Folders\)

**Get all media groups in a bin:**

```javascript
const binId = "media bin ID";

try {
  const binGroupsResponse = await zesty.getMediaGroups(binId);
} catch (err) {
  console.log(err);
}
```

Abbreviated response format:

```javascript
{
  message: 'Folder',
  status: 'OK',
  code: 200,
  data: [
    {
      id: '<Group ZUID>',
      bin_id: '<Bin ZUID>',
      group_id: '<Parent Group ZUID>',
      name: '<Group Name>'
    },
    ...
  ]
}
```

**Get media group by ID:**

```javascript
const groupId = "media group ID";

try {
  const groupResponse = await zesty.getMediaGroup(groupId);
} catch (err) {
  console.log(err);
}
```

Abbreviated response format:

```javascript
{
  message: 'group',
  status: 'OK',
  code: 200,
  data: [
    {
      id: '<Group ZUID>',
      bin_id: '<Bin ZUID>',
      group_id: '<Parent Group ZUID>',
      name: '<Group Name>',
      groups: [],
      files: [
        {
          id: '<File ZUID>',
          bin_id: '<Bin ZUID>',
          group_id: '<Group ZUID>',
          filename: '<Filename>',
          title: '<File Display Name>',
          url: '<URL to file>',
          created_by: null,
          created_at: '2018-10-22T23:13:24.000Z',
          updated_at: '2018-10-22T23:13:40.000Z',
          deleted_at: null
        },
        ...
      ]
    }
  ]
}
```

**Create media group:**

```javascript
const binId = "media bin ID";
const groupId = "parent group ID - optional";
const name = "new group name - optional defaults to new folder";

try {
  const createGroupResponse = await zesty.createMediaGroup({
    bin_id: binId,
    group_id: groupId,
    name: name
  });
} catch (err) {
  console.log(err);
}
```

Abbreviated response format:

```javascript
{
  message: 'Created folder <Group Name>',
  status: 'OK',
  code: 201,
  data: [
    {
      id: '<Group ZUID>',
      bin_id: '<Bin ZUID>',
      group_id: '<Parent Group ZUID>',
      name: '<Group Name>',
      type: 'group'
    }
  ]
}
```

**Update media group by ID:**

```javascript
const groupId = "group ID to update";
const parentGroupId = "parent group ID - optional";
const name = "new group name - optional";

try {
  const updateGroupResponse = await zesty.updateMediaGroup(groupId, {
    group_id: parentGroupId,
    name: name
  });
} catch (err) {
  console.log(err);
}
```

Abbreviated response format:

```javascript
{
  message: 'Updated group <Group Name>',
  status: 'OK',
  code: 200,
  data: [
    {
      id: '<Group ZUID>',
      name: '<Group Name>',
      group_id: '<Parent Group ZUID>'
     }
  ]
}
```

**Delete media group by ID:**

```javascript
const groupId = "group ID to delete";

try {
  const deleteGroupResponse = await zesty.deleteMediaGroup(groupId);
} catch (err) {
  console.log(err);
}
```

Abbreviated response format:

```javascript
{
  message: 'Deleted group <Group ZUID>',
  status: 'OK',
  code: 200
}
```

#### Media Files

**Get all media files in a bin:**

```javascript
const binId = "media bin ID";

try {
  const binFilesResponse = await zesty.getMediaFiles(binId);
} catch (err) {
  console.log(err);
}
```

Abbreviated response format:

```javascript
{
  message: 'Group',
  status: 'OK',
  code: 200,
  data: [
    {
      id: '<File ZUID>',
      bin_id: '<Bin ZUID>',
      group_id: '<Group ZUID>',
      filename: '<File name>',
      title: '<File display name>',
      url: '<URL to file>',
      created_by: null,
      created_at: '2018-10-22T23:13:24.000Z',
      updated_at: '2018-10-22T23:13:40.000Z',
      deleted_at: null,
    },
    ...
  ]
}
```

**Get media file by ID:**

```javascript
const fileId = "media file ID";

try {
  const fileResponse = await zesty.getMediaFile(fileId);
} catch (err) {
  console.log(err);
}
```

Abbreviated response format:

```javascript
{
  message: 'Files',
  status: 'OK',
  code: 200,
  data: [
    {
      id: '<File ZUID>',
      bin_id: '<Bin ZUID>',
      group_id: '<Group ZUID>',
      filename: '<File name>',
      title: '<File display name>',
      url: '<URL to file>',
      created_by: null,
      created_at: '2018-10-22T23:13:24.000Z',
      updated_at: '2018-10-22T23:13:40.000Z',
      deleted_at: null
    }
  ]
}
```

**Create \(upload\) media file:**

```javascript
const fs = require("fs");
const fileName = "test.jpg";
const stream = fs.createReadStream(`/path/to/${fileName}`);
const fileType = "image/jpeg";
const title = "A Media Item";
const binId = "media bin ID";
const groupId = "media group ID, use bin ID for root folder in bin";

try {
  const createFileResponse = await zesty.createMediaFile(
    binId,
    groupId,
    fileName,
    title,
    fileType,
    stream
  );
} catch (err) {
  console.log(err);
}
```

Abbreviated response format:

```javascript
{
  message: 'File uploaded',
  status: 'Created',
  data: [
    {
      id: '<File ZUID>',
      bin_id: '<Bin ZUID>',
      group_id: '<Group ZUID>',
      filename: '<File name>',
      title: '<File display name>',
      url: '<URL to file>',
      type: 'file'
    }
  ],
  code: 201
}
```

**Update media file by ID:**

\(Allows ability to change file name, display title, group that the file is in\).

```javascript
const fileId = "media file ID";
const newName = "newname.jpg - optional";
const newTitle = "New Title - optional";
const newGroup = "new group ID - optional";

try {
  const updateFileResponse = await zesty.updateMediaFile(fileId, {
    filename: newName,
    title: newTitle,
    group_id: newGroup
  });
} catch (err) {
  console.log(err);
}
```

Abbreviated response format:

```javascript
{
  message: 'Updated file <File Name>',
  status: 'OK',
  code: 200,
  data: [
    {
      id: '<File ZUID>',
      group_id: '<Group ZUID>',
      title: '<File Display Title>',
      filename: '<File Name>',
      url: '<URL to file>'
    }
  ]
}
```

**Delete media file by ID:**

```javascript
const fileId = "media file ID";

try {
  const deleteFileResponse = await zesty.deleteMediaFile(fileId);
} catch (err) {
  console.log(err);
}
```

Abbreviated response format:

```javascript
{
  message: '1 files deleted and purging',
  status: 'OK',
  code: 200
}
```

