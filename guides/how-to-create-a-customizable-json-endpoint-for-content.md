# How to Create a Customizable JSON Endpoint For Content

Zesty.io's custom API JSON endpoints will save your app developers a lot of time by making requesting dynamic data on your frontend quick and easy. Read about how [our approach differs](https://blog.zesty.io/c/new-features/zesty-io-releases-customizable-json-api-endpoints/) from previous approaches. Learn more about the Zesty.io [headless CMS offering here](https://www.zesty.io/en-us/cms/headless-cms-websites-with-decoupled-architecture/).

### Implementing Custom Endpoints

Before jumping into the steps below we recommend installing a [JSON viewer extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) for Chrome for effortless viewing and simple debugging JSON easier.

1. Navigate to the Editor section, locate Views header in the left-hand navigation, and  click the "+" symbol. 
2. Select JSON Ajax from the dropdown.
3. Name your file. The name of this file will be used to reference your custom endpoint. For example if the file is named 'test-data' the endpoint is referenced at `https://www.yourdomain.com/-/custom/test-data.json`
4. Copy this code example below, and paste it into your new file 

{% embed url="https://gist.github.com/ardeay/1b8a4ccffd5bf1b8035df23e3eccb460" %}

5. Replace content references in the copied code above with actual content reference in your Zesty.io instance. You have full access to parsley code in this view. 

6. Edit content references as necessary to form proper JSON. We provide `.escapeForJS()` for WYSIWYG content. To create comma separated lists implement calls like `{{if {tag._length} != {tab._num} }},{{end-if}}`.

7. Setup optional get parameters like `start` and `limit` to make custom pagination calls `https://www.yourdomain.com/-/custom/test-data.json?start=0&limit=5`

{% embed url="https://gist.github.com/ardeay/cdcfed6dd2c1ddb672ded64b2478ece5" %}

\`\`

