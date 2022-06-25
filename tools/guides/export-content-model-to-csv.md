# Export Content Model to CSV

You can export a model's content items to a Comma Separated Value file by using a GET request to the  cloud function  `contentToolsModeltoCSV` or by writing your own NodeJS script.

{% swagger baseUrl="https://us-central1-zesty-prod.cloudfunctions.net/contentToolsModeltoCSV" path="" method="get" summary="Content Model to CSV" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="header" name="Authentication" type="string" %}
Bearer XXXXXX
{% endswagger-parameter %}

{% swagger-parameter in="query" name="instanceZUID" type="string" %}
8-XXX-XXXXX
{% endswagger-parameter %}

{% swagger-parameter in="query" name="modelZUID" type="string" %}
6-XXX-XXXXX
{% endswagger-parameter %}

{% swagger-response status="200" description="A CSV output" %}
```
a comma seperated value string    
```
{% endswagger-response %}
{% endswagger %}

### Write your Own CSV Export

If you are looking for a more custom export, here is the the node code to export a [Content Model ](../../services/manager-ui/schema/content-models.md)to a CSV using the [Node SDK](../../apis/node-sdk/).

```javascript
const SDK = require("@zesty-io/sdk");

const modelZUID = '6-xxx-xxxxx';
const instanceZUID = '8-xxx-xxxxx';  
const authToken = 'XXXXX';

const sdk = new SDK(instanceZUID, token);  
let items = await sdk.instance.getItems(modelZUID);

let header = []
let itemData = []

// start the headers
header.push({id: 'zuid', title: 'zuid'})
header.push({id: 'url', title: 'url'})
// create the csv headers based on the content (data) row
for (let [key, value] of Object.entries(items.data[0].data)) {
  header.push({id: key, title: key});
}

items.data.map(async item => {
  item.data.url = item.web.path ? item.web.path : null;
  item.data.zuid = item.meta.ZUID;
  console.log(item.data)
  itemData.push(item.data);
});

// take first item and convert it to a header
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const csvStringifier = createCsvStringifier({
    header: header
});

let csvstring = csvStringifier.getHeaderString()+csvStringifier.stringifyRecords(itemData);
console.log(csvstring);
```
