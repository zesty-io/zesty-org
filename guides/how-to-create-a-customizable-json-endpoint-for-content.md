# Creating a Customizable JSON Endpoint For Content

Zesty.io's custom API JSON endpoints will save your app developers a lot of time by making requesting dynamic data on your frontend quick and easy. Learn more about the Zesty.io [headless CMS offering here](https://www.zesty.io/en-us/cms/headless-cms-websites-with-decoupled-architecture/).

### Implementing Custom Endpoints

Before jumping into the steps below we recommend installing a [JSON viewer extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) for Chrome for effortless viewing and simple debugging JSON.

1. Navigate to the [Web IDE](https://zesty.org/services/manager-ui/editor) section, locate the blue "create file" button at the top of the left-hand navigation, and click it. 
2. Select Custom File Type from the dropdown.
3. Name your file. The name of this file will be used to reference your custom endpoint. For example if the file is named `/test-data` the endpoint is referenced at `https://www.example.com/test-data.json`The preview URL can also be used in place of your live domain. **Note:** _always consume the production URL when accessing endpoints. Preview.zesty.io URLs not only show unpublished data but also are not cached._
4. Copy this code example below, and paste it into your new file 

{% hint style="warning" %}
Note: Don't forget to add the leading slash in your file name as the file name gets concatenated to your instance's url.
{% endhint %}

{% embed url="https://gist.github.com/ardeay/1b8a4ccffd5bf1b8035df23e3eccb460" %}

5. Replace content references in the copied code above with actual [content models](https://zesty.org/services/manager-ui/schema/content-models) in your Zesty.io instance. You have full access to [Parsley](https://zesty.org/services/web-engine/introduction-to-parsley) code in this view. 

6. Edit content references as necessary to form proper JSON. We provide [`.escapeForJS()`](https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#escapeforjs) for WYSIWYG content. To create comma separated lists in an each loop implement calls like `{{if {tag._length} != {tab._num} }},{{end-if}}`.

7. Setup optional get parameters like `start` and `limit` to make custom pagination calls `https://www.yourdomain.com/test-data.json?start=0&limit=5`

{% embed url="https://gist.github.com/ardeay/cdcfed6dd2c1ddb672ded64b2478ece5" %}

