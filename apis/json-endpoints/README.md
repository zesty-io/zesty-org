---
description: Zesty provides multiple endpoints that return a JSON objects.
---

# JSON Endpoints

Equipped in every Instance is the ability to utilize JSON objects of the users' stored content. A portion of the JSON objects are accessible directly in the Manager UI, while others can be customized to suit the users' needs via View files.

### JSON Endpoint Types

The types of JSON endpoints can be broken down into two categories:

1. Zesty provided:
   * `/-/headless/` **Headless**: available in _Headless_ _and_ _Hybrid WebEngine Modes_
   * `/-/headless/routing.json` **Routing**: available in _Headless_ _and_ _Hybrid WebEngine Modes_
   * `/?toJSON` **toJSON**: available in _Headless and Hybrid WebEngine Modes_
   * `/-/gql/` **GraphQL**: available in _Headless and Hybrid WebEngine Modes_
   * `/-/instant/` **Instant API**: available in _Developer Settings_
2. User created:
   * Using the Parsley call \{{ this.toJSON() \}}, users are able to output a fully hydrated JSON object for models and content items.
   * Using Parsley, users can create endpoints that output a JSON object of the content defined by the users' parsley call.

### Accessing Headless/Hybrid JSON Endpoints

Several of the Zesty provided endpoints are only accessible in **Headless** or **Hybrid WebEngine Mode.** To initiate a WebEngine Mode Change, access the Settings App. Listed under General settings, WebEngine Mode will be presented with the following three dropdown selections: **Traditional**, **Headless**, or **Hybrid**.

![](../../.gitbook/assets/webengine\_mode\_setting.png)

With **Headless** or **Hybrid** selected, the user will have access to the Headless, toJSON, and GraphQL endpoints.&#x20;

{% hint style="danger" %}
**Warning:** Switching from either Traditional or Hybrid WebEngine Mode to Headless WebEngine Mode will cause WebEngine not to render Views stored in Zesty.
{% endhint %}

#### Headless

The Headless endpoint options can be viewed from the Manager as well as when utilizing the `/-/headless/` endpoint in the browser. In each content item there is a Headless section. When selected it will provide formatted links to the following:

* URL to JSON: using the `/?toJSON` endpoint to output the item in JSON
* Instant JSON API: `/-/instant/` endpoint provides the same read only Instant API JSON the Manager provides in models and items
* GraphQL API: `/-/gql/` formatted URLs output flat objects ideal for feeding to GraphQL servers
* Instances Rest API: provides the formatted API call using the Instances API. Additional information on our Instances API can be found [here](../instances-api.md).&#x20;
* Custom Endpoints: this section houses quick access to the Code App to create custom endpoints utilizing Parsley

The toJSON, Instant JSON API, and GraphQL endpoints are also provided when accessing the `/-/headless/` endpoint. This can be achieved by adding the endpoint to your Instances live domain. For example:

`https://www.mydomain.com/-/headless/`

The trailing forward slash is necessary to access the JSON output. The object returned will provide additional endpoint linking and preformatted URLs to the Instance's available JSON endpoints. For example:&#x20;

![Example of the Headless endpoint JSON output](../../.gitbook/assets/headless\_JSON.png)

#### Routing

The Routing endpoint is provided through the Headless JSON object. It renders an array of objects that correspond to each Content Item stored within the Instance. Each item object will contain details on a item, including: item ZUID, item title, description, URI, item path part, item URL and the Hybrid JSON URL constructred with the use of the `/?toJSON` endpoint.

![Routing Item object and associated information.](../../.gitbook/assets/routing\_item.png)

#### toJSON

The `/?toJSON` endpoint can be added to the end of any view route established in the users' Instance. Once applied the route will automatically render a JSON output of that view. Additional parameters can be applied to remove the meta data from the output. For example:

`https://www.mydomain.com/blog/?toJSON=nometa`

#### GraphQL

The GraphQL endpoint returns a flat object consumable by GraphQL servers. The formatting of these URLs using the `/-/gql/` is slightly different from other JSON options. The addition to the URL is attached to the end of the Instance's domain, followed by the model's name. For example:

`https://www.mydomain.com/-/gql/blog.json`

The object returned will include the model's Items, fields, stored content, language variants, and meta data. Additional information on our GraphQL endpoints can be found [here](../graphql.md).

### Accessing Instant API (Read Only)

The Instant API endpoints can be accessed in the Manager. To enable the endpoints within the Manager, the **Instant JSON API** setting, in Developer Settings, will need to be switched on.&#x20;

![Inside the Settings App, under Developer, users scan access the Instant JSON API switch ](../../.gitbook/assets/instant\_api\_setting.png)

Once the setting has been activated, inside the details panel of both Models and Content Items, there will be an Instant API link that will direct the user to the associated JSON output.&#x20;

For both Models and Content Items, the API link will be available in the details panel. In a model, the link will appear in the Model Info section. For a content item, the link will appear in the Links portion of the details panel.

![Model Instant API Link](../../.gitbook/assets/instant\_api\_model.png) ![Content Item Instant API Link](../../.gitbook/assets/instant\_api\_item.png)

### User Created JSON Endpoints

The two options available for custom endpoints allow the user to create the desired URL routing and during the creation of the object, Pasley enables the user to integrate content from multiple content items. &#x20;

With the Parsley method `toJSON()` there are some limitations to incorporating multiple content items in one object. However, it is ideal for creating a fully hydrated JSON object of any content item. This method is covered in depth [here](parsley-tojson.md).

When using Parsley without the `toJSON()` method, users can loop through multiple content items to produce a JSON that has the desired content. As well as filter out the fields that are not necessary for the rendered output. Creating a custom endpoint guide can be found [here](how-to-create-a-customizable-json-endpoint-for-content.md).
