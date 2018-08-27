# Basic Content JSON API

## What is the Zesty.io Basic Content API?

The Basic Content API (BCA) is a Read Only interface that returns JSON data via HTTP GET requests. It uses Zesty Unique Identifiers (ZUID)s to return information. BCA is primarily used for headless applications, but is not limited to that use. Dynamic Website data or middleware interpreters are also common uses.

## Introduction

### Getting Started

BCA is an optional feature on every Zesty.io Instance. It can be turned on from developers settings in the Instances Manager Interface.

To access BCA, you make a call to your preview URL like [http://burger.zesty.site/-/basic-content/6-4b5c74-fg83s2.json](http://burger.zesty.site/-/basic-content/6-4b5c74-fg83s2.json). Swap out the domain for your preview URL or your live domain. Switch out the HASH for a resource you wish to access on your Zesty.io instance.

The hash you see is a ZUID. ZUIDs are used to represent every type of resource in Zesty.io. You can find the ZUID of a resource in a few ways through the Zesty.io Content Manager. When editing content, you will see the ZUID (items start with 7-) of that content in the URL of the page you are editing. You can access model ZUIDS (models start with 6-) by looking in the schema (previously config) tab.

When you visit the BAC URL you see a JSON object of the data associated with the resource you are requesting along with meta data, version information, image objects, and related resources objects.

## Security

BCA is optional and has to be turned on to gain access to it. Options to controls Cross Origin Resource sharing can be used to lock the API down to specific websites. A header request with a private token can be set to make external programmatic application calls.
