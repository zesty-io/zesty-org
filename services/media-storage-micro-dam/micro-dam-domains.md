---
description: >-
  WebEngine can optionally server media through the registered url or origin,
  allowing for customer domains instead of media.zestyio.com
---

# Custom DAM Media Domains

## Default DAM Domain

By default, all DAM instances are assigned a random hash on a zestyio.com domain e.g. `xyz.media.zestyio.com` This domain is what serves all media you upload to an instance. This URL serves as a direct pathway to an obfuscated storage bucket. All assets served on this domain are cached indefinitely for speed. 

### Custom Vanity Domains for DAMs

Enterprise-level customers have the option to create a DAM with a custom vanity domain. To create a Micro DAM with a vanity URL please reach out to your account manager. Note, only a new DAM can be assigned a vanity domain. Vanity domains cannot be retroactively assigned to preexisting buckets that already have media that is consumed over the web. 

### On Domain URL path for DAMs _\(/-/media\)_

Enterprise level customers have the option to enables WebEngine to proxy through a media bucket of images to a `/-/media/` path on the registered domain to an instance. This feature may be used to replace the `xyz.media.zestyio.com` media domain in favor of `myregistereddomain.com/-/media/`

The /-/media/ routing may also be used to pass through any storage bucket url from Amazon, Azure, or Google. This allows WebEngine to proxy and /-/media/\*.\* request to another service. Note, both media.zestyio.com and an external bucket domain cannot be used simultaneously.  

**Parsley:** If the domain being proxied is a zesty media url, WebEngine will look to replace that domain with the relative path `/-/media/` when the getImage\(\) parsley function is called called.

**Hardcoded Media URLs:** Hard coded media URLs occur when developers directly paste the full media.zesty.io.com domain into their code. This often occurs in CSS files. WebEngine will scan the final rendered document for hard coded occurrences and actively replace them with the /-/media/... relative path.

#### Understanding /-/media Caching

Media served this way will be purged by regular publishes. Media gets cache keys: Instance ZUID, Legacy Site ID, domain, and an MD5\(Instance ZUID+Filepath\). You can mimic this key by concatenating the zuid and file path into a single string then running an md5 string conversion on it.

The same cache keys all WebEngine assigns to an instance's pagesare also applied to media, so media can be purged, an a hybrid purge request will also clear it

#### Using /-/media with EcoSystems

For sites that have EcoMedia, only the Instance's direct media bucket url will resolve as /-/media, media from foreign EcoMedia will load wi the  [media.zestyio.com](http://media.zestyio.com/) domain

#### Rendering Caveat for /-/media

The first time an image is processed with a Parsley call like `this.image.getImage(432,23)` WebEngine will generate a temporary processing url like `https://svc.zesty.io/media-resolver-service/resource/c5567c9a132bb58ce9ce648c5a911adf6a109103` which redirects to the `https://9skdl6.media.zestyio.com/photo-by-adrian-drebler.4bc8d829e6421e78cf8539272c470028.jpg`. On second load the updated /-/media/ url will appear `https://parsley.zesty.io/-/media/photo-by-adrian-drebler.4bc8d829e6421e78cf8539272c470028.jpg`



