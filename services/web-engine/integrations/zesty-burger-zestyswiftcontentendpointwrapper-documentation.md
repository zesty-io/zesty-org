---
description: >-
  ZestySwiftContentEndpointWrapper is a wrapper library that allows you to
  easily access your data from your Zesty.io website
---

# Zesty Burger: ZestySwiftContentEndpointWrapper Documentation

[![CI Status](https://img.shields.io/travis/zesty-io/ZestySwiftContentEndpointWrapper.svg?style=flat)](https://travis-ci.org/zesty-io/ZestySwiftContentEndpointWrapper) [![Version](https://img.shields.io/cocoapods/v/ZestySwiftContentEndpointWrapper.svg?style=flat)](https://cocoapods.org/pods/ZestySwiftContentEndpointWrapper) [![License](https://img.shields.io/cocoapods/l/ZestySwiftContentEndpointWrapper.svg?style=flat)](https://cocoapods.org/pods/ZestySwiftContentEndpointWrapper) [![Platform](https://img.shields.io/cocoapods/p/ZestySwiftContentEndpointWrapper.svg?style=flat)](https://cocoapods.org/pods/ZestySwiftContentEndpointWrapper)

### About

ZestySwiftContentEndpointWrapper is a wrapper library that allows you to easily access your data from your [Zesty.io](https://zesty.io) website

### Usage

1. Installing ZestySwiftContentEndpointWrapper
2. Initialization
3. Using Basic JSON API
4. Using Custom JSON Endpoints
5. [Example Project](https://github.com/zesty-io/zesty-ios-swift-application-basic-example) 

#### Installing ZestySwiftContentEndpointWrapper

ZestySwiftContentEndpointWrapper uses [Cocoapods](https://cocoapods.org).

Simply add

```text
pod 'ZestySwiftContentEndpointWrapper'
pod 'SwiftyJSON' # required for custom JSON Endpoints
```

to your Podfile. [\(Example Podfile\)](https://github.com/zesty-io/zesty-ios-swift-application-basic-example/blob/master/Podfile)

#### Initialization

For example, creating a ZestyAPI Object for your website `http://burger.zesty.site`

```text
 // Create the ZestyAPI Object
 let zesty = ZestySwiftContentEndpointWrapper(url: "http://burger.zesty.site")
```

* note: If your website does not have an SSL Certificate \(HTTPS\), you will need to configure your app to allow for non HTTPS Calls. [How to change this setting](https://stackoverflow.com/questions/31254725/transport-security-has-blocked-a-cleartext-http)

#### Using Basic JSON API

1. Enable the [Basic JSON API](https://developer.zesty.io/guides/api/basic-api-json-endpoints-guide/) in Config
2. Get the zuid for the item / array you are looking for
3. Use the according function \(`getItem` or `getArray`\)

Zuid Meanings and Functions to Use

* Any zuid that starts with a **6** is an array of items \(use `getArray`\)
* Any zuid that starts with a **7** is an object \(use `getItem`\)

**Getting a Single Item**

`getItem(for: zuid: String, completionHandler: (([String:String], ZestyError?) -> Void)`

Gets a `[String : String]` json data for the specific zuid.

You can find the zuid by looking at the **Content** Tab of Zesty.

For example, getting a specific item with zuid `6-9bfe5c-ntqxrs`

```text
 // Create the ZestyAPI Object
 let zesty = ZestySwiftContentEndpointWrapper(url: "http://burger.zesty.site")
 let zuid = "6-9bfe5c-ntqxrs"

 zesty.getItem(for: zuid, { (item) in
     print(item) // item is a [String : String] dictionary, in JSON Format
 }
```

**Getting an Array**

`getArray(for: zuid: String, completionHandler: (([[String:String]], ZestyError?) -> Void)`

Gets a `[[String : String]]` array of json data for the specific zuid.

You can find the zuid by looking at the **Content** Tab of Zesty.

For example, getting a specific item with zuid `7-9bfe5c-ntqxrs`

```text
 // Create the ZestyAPI Object
 let zesty = ZestySwiftContentEndpointWrapper(url: "http://burger.zesty.site")
 let zuid = "7-9bfe5c-ntqxrs"

 zesty.getArray(for: zuid, { (items) in
     for item in items {
         print(item) // item is a [String : String] dictionary, in JSON Format
     }
 }
```

#### Using Custom JSON Endpoints

`getCustomJSONData(from: String, params: [String: String], completionHandler: ((JSON, ZestyError?) -> Void)`

Gets a [JSON](https://github.com/SwiftyJSON/SwiftyJSON#usage) object for the endpoint and parameters specified.

* note: ZestyAPI uses [SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON) to handle JSON objects. Make sure you add `pod 'SwiftyJSON'` to your `Podfile` in order to use the data returned.
* The returned JSON object's methods reference can be found [here](https://github.com/SwiftyJSON/SwiftyJSON#usage). 
* If you want to use a different type of JSON parsing, the raw data can be extracted from the JSON object using `json.rawString(options: [.castNilToNSNull: true])`. More information on extracting the raw JSON String can be found [here](https://github.com/SwiftyJSON/SwiftyJSON#user-content-string-representation)    

A full tutorial to create your own custom JSON Endpoints through the Zesty Interface can be found [here](https://developer.zesty.io/docs/code-editor/customizable-json-endpoints-for-content/)

**Sample Usage**

For example, using the custom endpoint `menulist` \(Including the extension is only necessary for different file types ; .json is otherwise implied\)

```text
 // Create the ZestySwiftContentEndpointWrapper Object
 let zesty = ZestySwiftContentEndpointWrapper(url: "http://burger.zesty.site")
 let endpoint = "menulist"
 let parameters = ["location" : "San Diego"]
 getCustomJSONData(from: endpoint, params: parameters, { (json) in
     print(item) // item is a [String : JSON] dictionary of type JSON
 }
```

#### Using Custom Endpoints \(Generic\)

`getCustomData(from: String, params: [String: String], completionHandler: ((Data, ZestyError?) -> Void)`

If you want to use non JSON-based data, you can use this function to get any type of Data. The `Data` object returned is the Swift-Standard [Data](https://developer.apple.com/documentation/foundation/data) object.

**Sample Usage**

For example, using the custom endpoint `menulist` \(Including the extension is only necessary for different file types ; .json is otherwise implied\)

```text
 // Create the ZestySwiftContentEndpointWrapper Object
 let zesty = ZestySwiftContentEndpointWrapper(url: "http://burger.zesty.site")
 let endpoint = "someplace"
 let parameters = ["location" : "San Diego"]
 getCustomData(from: endpoint, params: parameters, { (json) in
     print(item) // item is a Data object dictionary
 }
```

#### Getting an image

`getImage(for: String, completionHandler: (UIImage, ZestyError?) -> Void)`

The first parameter is **any** url that gives you an image in a compatible format \(as specified by UIImage\)

**Using it with a zesty image zuid**

To get the url for an image zuid in Zesty, you will need to create an image endpoint

image `endpoint` file

```text
{
    {{ if {get_var.id} }}
        "url" : "{{ get_var.id.getImage()}}"
    {{ end-if}}
}
```

You can then use getCustomJSONData in combination with getImage to get the UIImage you require

**Sample Usage**

After getting the image zuid 3-6a1c0cb-cgo7w from another data call, we use getCustomJSONData and getImage to retrieve our data

### Code

```text
// Create the ZestySwiftContentEndpointWrapper Object
let zesty ZestySwiftContentEndpointWrapper(url: "http://burger.zesty.site")
let endpoint = "image" // created to look as the above code details
let parameters = ["id" : "3-6a1c0cb-cgo7w"]
zesty.getCustomJSONData(from: endpoint, params: parameters { (json, error) in
   if (error != nil) {
       // error handling
       return
   }
   let imageURLString = json["url"].stringValue
   zesty.getImage(imageURLString) { (image, error) in
       if error != nil {
          imageView.image = image // image is now a UIImage object
       }
    }
}  
```

#### Example Project

To help you get started, we've also made an [example project](https://github.com/zesty-io/zesty-ios-swift-application-basic-example)

### Author

[Ronak Shah](https://ronakshah.net) for [Zesty.io](https://zesty.io)

### License

ZestySwiftContentEndpointWrapper is available under the MIT license. See the LICENSE file for more info.

