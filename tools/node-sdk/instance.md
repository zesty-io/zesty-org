This is the largest API and most likely the one you will need to interact with the most. It allows for CRUD (Create, Read, Update, Delete) operations on all the content and resources within your instance.

A few examples of it's usage are to programmatically insert content into an instance, integrate into a CI/CD release pipeline, pull data into external sources (e.g. apps, video games, t.v., etc). With this API it comes down to your needs and imagination.

Once you have an [authenticated SDK instance](https://github.com/zesty-io/node-sdk/wiki/instantiation) you can begin requesting and/or writing data from your instance. All of the provided functionality uses the underlying [Zesty.io REST `instance-api`](https://instances-api.zesty.org/).

If needed these REST endpoints can be consumed directly. The `node-sdk` simply provides some basic functionality and a structured codebase all in a tested state. 

### Learn more about the available resources within an instance
* [Content](https://github.com/zesty-io/node-sdk/wiki/instance-content)
* [Model & Fields](https://github.com/zesty-io/node-sdk/wiki/instance-model)
* [Stylesheet](https://github.com/zesty-io/node-sdk/wiki/instance-stylesheet)
* [JavaScript]
* [Views](https://github.com/zesty-io/node-sdk/wiki/instance-view)
* [Audit Trail](https://github.com/zesty-io/node-sdk/wiki/instance-audit-trail)
* [Head Tags](https://github.com/zesty-io/node-sdk/wiki/instance-head-tags)
* [Navigations]
* [Settings]