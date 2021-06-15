---
description: >-
  Zesty.io's DAM has on-the-fly (OTF) rendering options to improve and
  manipulate media that both developers and content authors can use.
---

# On-The-Fly Media Optimization and Dynamic Image Manipulation

### Auto Image Optimization - Default Output

Zesty.io automatically transforms images as the content-type "webp", which is a format made to  optimized image download speed and rendering speed, developed by Google.

> WebP is a modern **image format** that provides superior **lossless and lossy** compression for images on the web. Using WebP, webmasters and web developers can create smaller, richer images that make the web faster. - _Read the full Google launch article_ [_https://developers.google.com/speed/webp_](https://developers.google.com/speed/webp)\_\_

 When optimization happens, Zesty.io does a few things to the file:

* All metadata \(for example, EXIF, XMP, or ICC\) will is removed.
* Any [ICC profile](https://en.wikipedia.org/wiki/ICC_profile) on the image is applied directly to the image to ensure color output is correct. If the image doesn't have an ICC profile, a default profile is added.
* If the source image contains orientation metadata, this orientation will be applied directly to the image data and metadata will be removed.
* Images are served with their original name and extension, but will still output as `content-type` "webp" 

### Image Manipulation Options

All image may be manipulated on-the-fly by passing query parameter to the end of the image URL. See the example below

| Query Param | Example |
| :--- | :--- |
| **none** | [https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg](%20https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg) |
| **?width=** | [https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?width=300](https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?width=300) |
| **?orient=** | \*\*\*\*[https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?orient=v](https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?orient=v) |

![Original Image Source: https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg](../../.gitbook/assets/arcade-space-ship-example.jpg)

We recognize the following parameters in the query string of the image request:

| Parameter | Description |
| :--- | :--- |
| \`\`[`auto`](on-the-fly-media-optimization-and-dynamic-image-manipulation.md#auto)\`\` | Enable optimization features automatically. |
| [`bg-color`](https://developer.fastly.com/reference/io/bg-color) | Set the background color of an image. |
| [`blur`](https://developer.fastly.com/reference/io/blur) | Set the blurriness of the output image. |
| [`brightness`](https://developer.fastly.com/reference/io/brightness) | Set the brightness of the output image. |
| [`canvas`](https://developer.fastly.com/reference/io/canvas) | Increase the size of the canvas around an image. |
| [`contrast`](https://developer.fastly.com/reference/io/contrast) | Set the contrast of the output image. |
| [`crop`](https://developer.fastly.com/reference/io/crop) | Remove pixels from an image. |
| [`dpr`](https://developer.fastly.com/reference/io/dpr) | Serve correctly sized images for devices that expose a device pixel ratio. |
| [`fit`](https://developer.fastly.com/reference/io/fit) | Set how the image will fit within the size bounds provided. |
| [`format`](https://developer.fastly.com/reference/io/format) | Specify the output format to convert the image to. |
| [`frame`](https://developer.fastly.com/reference/io/frame) | Extract the first frame from an animated image sequence. |
| [`height`](https://developer.fastly.com/reference/io/height) | Resize the height of the image. |
| [`optimize`](https://developer.fastly.com/reference/io/optimize) | Automatically apply optimal quality compression. |
| [`orient`](https://developer.fastly.com/reference/io/orient) | Change the cardinal orientation of the image. |
| [`pad`](https://developer.fastly.com/reference/io/pad) | Add pixels to the edge of an image. |
| [`precrop`](https://developer.fastly.com/reference/io/precrop) | Remove pixels from an image before any other transformations occur. |
| [`quality`](https://developer.fastly.com/reference/io/quality) | Optimize the image to the given compression level for lossy file formatted images. |
| [`resize-filter`](https://developer.fastly.com/reference/io/resize-filter) | Specify the resize filter used when resizing images. |
| [`saturation`](https://developer.fastly.com/reference/io/saturation) | Set the saturation of the output image. |
| [`sharpen`](https://developer.fastly.com/reference/io/sharpen) | Set the sharpness of the output image. |
| [`trim`](https://developer.fastly.com/reference/io/trim) | Remove pixels from the edge of an image. |
| [`width`](https://developer.fastly.com/reference/io/width) | Resize the width of the image. |

### Image Manipulation Processing order

Manipulation query parameters can be specified in any order, but they are processed in this order:

1. `precrop`
2. `trim`
3. `crop`
4. `orient`
5. `width` `height` `dpr` `fit` `resize-filter` `disable` `enable`
6. `pad` `canvas` `bg-color`
7. `brightness` `contrast` `saturation`
8. `sharpen`
9. `blur`
10. `x-fastly-imageopto-overlay`
11. `format` `auto` `optimize` `quality` `profile` `level`

## Zesty.io OTF DAM: On-The-Fly Image Options API

### Auto Optimize

Enables optimizations based on [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation). Although the WebP format produces images at a higher compression ratio with a lower loss of quality, it is not supported in all browsers.

{% api-method method="get" host="https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?auto=webp" path="" %}
{% api-method-summary %}
Auto Optimize: ?auto
{% endapi-method-summary %}

{% api-method-description %}
Enables optimizations based on content negotiation. Although the WebP format produces images at a higher compression ratio with a lower loss of quality, it is not supported in all browsers.  
  
`?auto=webp` _Deliver lossless \(because input image is lossless\) WebP where client support is available, otherwise deliver a PNG  
`?format=pjpg&auto=webp`Deliver lossy \(because format=pjpg is lossy\) WebP where client support is available, otherwise deliver a progressive JPEG  
`?format=png&auto=webp`	Deliver lossless \(because format=png is lossless\) WebP where client support is available, otherwise deliver a PNG_
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="auto" type="string" required=false %}
webp is the only option, see notes above
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

