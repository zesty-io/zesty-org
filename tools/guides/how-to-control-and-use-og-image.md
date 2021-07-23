# Controlling and use of og:image

When users share your content to a social network using the [Open Graph protocol](http://ogp.me/), e.g. Facebook, you can control the content that network will associate with the shared url.

One really nice attribute to control is `og:image`. Zesty will automatically detect the first entry in a page, pageset, or dataset with a field containing the word "image" and use it as the `content` value of `og:image`.

A common practice is to create a `social_share_image` field that will be used for social networks.

Facebook caches shared urls so if your adding this to pre-existing content you may need to use their [Debugging Tool](https://developers.facebook.com/tools/debug/) to update it.

