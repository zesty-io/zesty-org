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
| **?bg-color=** | [https://9skdl6.media.zestyio.com/parsley-logo-brackets.png?bg-color=006699](https://9skdl6.media.zestyio.com/parsley-logo-brackets.png?bg-color=006699) |

![Original Image Source: https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg](../../.gitbook/assets/arcade-space-ship-example.jpg)

We recognize the following parameters in the query string of the image request:

| Parameter | Description |
| :--- | :--- |
| [`auto`](on-the-fly-media-optimization-and-dynamic-image-manipulation.md#auto)\`\` | Enable optimization features automatically. |
| [`bg-color`](on-the-fly-media-optimization-and-dynamic-image-manipulation.md#background-color-bg-color) | Set the background color of an image. |
| [`blur`](on-the-fly-media-optimization-and-dynamic-image-manipulation.md#gaussian-blur-blur) | Set the blurriness of the output image. |
| [`brightness`](on-the-fly-media-optimization-and-dynamic-image-manipulation.md#brightness-brightness) | Set the brightness of the output image. |
| [`canvas`](on-the-fly-media-optimization-and-dynamic-image-manipulation.md#canvas) | Increase the size of the canvas around an image. |
| [`contrast`](on-the-fly-media-optimization-and-dynamic-image-manipulation.md#contrast-image-jpg-contrast) | Set the contrast of the output image. |
| [`crop`](https://developer.fastly.com/reference/io/crop) | Crop an image by removing pixels from an image based on a ratio. Great for thumbnails. |
| [`dpr`](on-the-fly-media-optimization-and-dynamic-image-manipulation.md#device-pixel-ratio-dpr-image-jpg-dpr) | Device Pixel Ratio - Serve correctly sized images for devices that expose a device pixel ratio. |
| [`fit`](on-the-fly-media-optimization-and-dynamic-image-manipulation.md#fit-image-jpg-fit-cover-and-height-200-and-width-200) | Set how the image will fit within the width and height provided. |
| [`height`](on-the-fly-media-optimization-and-dynamic-image-manipulation.md#height-images-jpg-height) | Resize the height of the image. |
| [`optimize`](on-the-fly-media-optimization-and-dynamic-image-manipulation.md#image-optimize-image-jpg-optimize) | Automatically apply optimal quality compression. |
| [`orient`](on-the-fly-media-optimization-and-dynamic-image-manipulation.md#orientation-image-jpg-orient) | Change the cardinal orientation of the image. |
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

| Order | Query Call |
| :--- | :--- |
| 1 | `trim` |
| 2 | `crop` |
| 3 | `orient` |
| 4 | `width`     `height`    `dpr`     `fit`     `resize-filter`      |
| 5 | `pad`     `canvas`     `bg-color` |
| 6 | `brightness`     `contrast`     `saturation` |
| 7 | `sharpen` |
| 8 | `blur` |
| 9 | `format`    `auto`    `optimize`    `quality`    `profile`    `level` |

## Zesty.io OTF DAM: On-The-Fly Image Options API

### Auto Optimize

Enables optimizations based on [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation). Although the WebP format produces images at a higher compression ratio with a lower loss of quality, it is not supported in all browsers.

{% api-method method="get" host="https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg" path="?auto=webp" %}
{% api-method-summary %}
Auto Optimize:   /image.jpg?auto=
{% endapi-method-summary %}

{% api-method-description %}
Enables optimizations based on content negotiation. Although the WebP format produces images at a higher compression ratio with a lower loss of quality, it is not supported in all browsers.  
  
`?auto=webp` _Deliver lossless \(because input image is lossless\) WebP where client support is available, otherwise deliver a PNG  
`?format=pjpg&auto=webp`Deliver lossy \(because format=pjpg is lossy\) WebP where client support is available, otherwise deliver a progressive JPEG  
`?format=png&auto=webp`	Deliver lossless \(because format=png is lossless\) WebP where client support is available, otherwise deliver a PNG_
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="auto" type="string" %}
webp is the only option, see notes above
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?format=pjpg&auto=webp
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

![https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?format=pjpg&amp;auto=webp](../../.gitbook/assets/image%20%289%29.png)

{% api-method method="get" host="https://9skdl6.media.zestyio.com/parsley-logo-brackets.png" path="?bg-color=690167" %}
{% api-method-summary %}
Background Color:   /image.jpg?bg-color=
{% endapi-method-summary %}

{% api-method-description %}
Change the background color of a transparent image. Tip: you can make background transparent using a decimal value on the end like `125,80,200,0.5`
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="bg-color" type="string" required=false %}
Hex RBG: `690167`Decimal: `105,1,103,0.5`
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
https://9skdl6.media.zestyio.com/parsley-logo-brackets.png?bg-color=006699
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

![https://9skdl6.media.zestyio.com/parsley-logo-brackets.png?bg-color=105,1,103](../../.gitbook/assets/image%20%288%29.png)

![https://9skdl6.media.zestyio.com/parsley-logo-brackets.png?bg-color=323CF3](../../.gitbook/assets/image%20%2810%29.png)

{% api-method method="get" host="https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg" path="?blur=20" %}
{% api-method-summary %}
Gaussian Blur:   /image.jpg?blur=
{% endapi-method-summary %}

{% api-method-description %}
Gaussian blur your image.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="blur" type="number" required=false %}
0.5 to 1000
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?blur=20
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

![https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?blur=20](../../.gitbook/assets/image%20%286%29.png)

{% api-method method="get" host="https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg" path="?brightness=20" %}
{% api-method-summary %}
Brightness:  /image.jpg?brightness=
{% endapi-method-summary %}

{% api-method-description %}
Adjusts the "brightness" of an image. This effect adds perceived light to an image.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="brightness" type="integer" required=false %}
0 unchanged \|\| -100 black \|\| 100 white
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?brightness=20
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

![https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?brightness=20](../../.gitbook/assets/image%20%2815%29.png)

## Canvas

Set the size of the canvas around the image without changing the size of the image itself. This can be used for advanced cropping control. 

![https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?canvas=500,100](../../.gitbook/assets/image%20%2818%29.png)

This parameter takes multiple values which can get complicated, so we included example along the way. The first two represent the desired width and height, either as measurements of pixels, separated with a comma, or as a ratio, separated with a colon. The remaining parameters allow the placement of the image within the canvas to be adjusted. On each dimension, placement can be made either with a position coordinate \(`x` or `y`, which are relative to the top left of the newly-enlarged canvas\) or as a percentage offset from the center of the image using `offset-x` and `offset-y`. 

![https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?canvas=500,400,offset-x20,offset-y20](../../.gitbook/assets/image%20%2816%29.png)

![https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?width=500&amp;canvas=320,100](../../.gitbook/assets/image%20%2817%29.png)

These can be mixed and matched, but only one method can be used for each dimension \(i.e., `x` can be combined with `offset-y` but `x` cannot be combined with `offset-x`\).

![https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?width=1000&amp;canvas=400,130,offset-x50,offset-y95](../../.gitbook/assets/image%20%2814%29.png)

The remaining parameters determine the position of the cropped region.

Offset positioning acts to distribute the remaining space according to the specified offset proportions. For example, `offset-y10` would place the image so that 10% of the leftover space is above the image and 90% below it.

1. `x` and `y` can be set as a value in pixels \(e.g., `40` is 40 pixels\) or as a percentage suffixed with `p` \(e.g., `50p` is 50%\).
2. When `x` and `y` are percentages, they are calculated as percentages of the _image_ size, not the canvas size.
3. `offset-x` and `offset-y` are always interpreted as percentages of the canvas size \(e.g., `25` is 25%\).
4. If no `x`, `y`, `offset-x`, or `offset-y` parameters are supplied, the image is positioned in the center of the canvas.
5. The background color of the canvas will default to transparency for image output formats that support transparency and white for formats that don't. This behavior can be changed by adding the [`bg-color`](https://developer.fastly.com/reference/io/bg-color) parameter.
6. When using `canvas` and [`pad`](https://developer.fastly.com/reference/io/pad) at the same time, [`pad`](https://developer.fastly.com/reference/io/pad) will be ignored.
7. Any fractional pixel measurements will be rounded to the nearest whole pixel.

{% api-method method="get" host="https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg" path="?canvas=500,100" %}
{% api-method-summary %}
Canvas Control: /image.jpg?canvas=
{% endapi-method-summary %}

{% api-method-description %}
Allows the user to precisely crop an image by specific positions.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="canvas" type="string" required=false %}
See above documentation
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
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

{% api-method method="get" host="https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg" path="?contrast=20" %}
{% api-method-summary %}
Contrast: /image.jpg?contrast=
{% endapi-method-summary %}

{% api-method-description %}
Change the image contrast, the value can be anything between -100 and 100, negative numbers start to wash out the image, positive number increase the vibrancy of the images colors.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="contrast" type="integer" required=false %}
-100 to 100
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?contrast=100
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

![https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?contrast=100](../../.gitbook/assets/image%20%2819%29.png)

{% api-method method="get" host="https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg" path="?crop=1:1" %}
{% api-method-summary %}
Crop: /image.jpg?crop=
{% endapi-method-summary %}

{% api-method-description %}
Crop an image evenly from all sides by passing in a ratio 1:1 is a perfect square, 16:9 is letter box, 10:1 is a slim rectangle etc. Great for making thumbnails by passing in a width and a crop, `?crop=1:1&width=50` makes a tiny square, for example.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="crop" type="string" required=false %}
1:1 \|\| 10:1 \|\| 16:9
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?crop=1:1&width=400
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

![Crop Example: https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?crop=1:1&amp;width=200](../../.gitbook/assets/image%20%2823%29.png)

![Crop example: https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?crop=4:1&amp;width=800](../../.gitbook/assets/image%20%2822%29.png)

{% api-method method="get" host="https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg" path="?dpr=2" %}
{% api-method-summary %}
Device Pixel Ratio \(dpr\):   /image.jpg?dpr= 
{% endapi-method-summary %}

{% api-method-description %}
For optimizing delivery of images to devices with high pixel ratios. The iPhone XS, for example, has a resolution of 375x812 pixels, but its device to pixel ration is 3, so it renders 1125x2436. A developer can access this value from JavaScript by calling `window.devicePixelRatio`  
  
DPR will increase the delivered size by a multiple 1-10 to accommodate for the device Pixel Ratio. Use with JavaScript dynamically when rendering a view and you know the clients Device Pixel Ratio. 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="dpr" type="number" required=false %}
1-10
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
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

![DPR example: https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?dpr=2&amp;width=200](../../.gitbook/assets/image%20%2826%29.png)

{% api-method method="get" host="https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg" path="?fit=cover&height=200&width=200" %}
{% api-method-summary %}
Fit: /image.jpg?fit=cover&height=200&width=200
{% endapi-method-summary %}

{% api-method-description %}
The fit parameter controls how the image will be constrained within the provided size \(width and height\) values, in order to maintain proportions that fit within the confines of the width and height.  
  
Note: width and height must be pass with fit to work properly   
  
`bounds`  fit entirely within the specified region, making one dimension smaller if needed.  
  
`cover` cover the specified region, making one dimension larger if needed.  
  
`crop`  Resize and crop the image centrally to exactly fit the specified region.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="fit" type="string" required=false %}
bounds \|\| cover \|\| crop
{% endapi-method-parameter %}

{% api-method-parameter name="width" type="number" required=true %}
width in pixels
{% endapi-method-parameter %}

{% api-method-parameter name="height" type="number" required=true %}
height in pixels
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
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

![Fit Crop Example: https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?fit=crop&amp;width=200&amp;height=400](../../.gitbook/assets/image%20%2827%29.png)

![Fit Bounds example keeps within the width, reducing height: https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?fit=bounds&amp;width=200&amp;height=400](../../.gitbook/assets/image%20%2824%29.png)

![Fit cover fits within the largest bounds, which is height in this examples: https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?fit=cover&amp;width=200&amp;height=400](../../.gitbook/assets/image%20%2821%29.png)

{% api-method method="get" host="https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg" path="?height=200" %}
{% api-method-summary %}
Height:   /images.jpg?height=
{% endapi-method-summary %}

{% api-method-description %}
Control the height of the image, the width, if not provided, will adapt to match the original ratio of the image.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="height" type="number" required=false %}
A height in pixels
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?height=100
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

![https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?height=100](../../.gitbook/assets/image%20%2825%29.png)

{% api-method method="get" host="https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg" path="?optimize=high" %}
{% api-method-summary %}
Image Optimize   /image.jpg?optimize=
{% endapi-method-summary %}

{% api-method-description %}
Difference and output are minimal for most images that use this param, to be more aggressive in sizing, use the QUALITY param.   
  
`log`        Output image quality will be similar to the input image quality.  
`medium`  More optimization is allowed. Visual quality of the input is preserved.  
`high`	  Minor visual artifacts may be visible. This produces the smallest file.  

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="optimize" type="string" required=false %}

{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
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

{% api-method method="get" host="https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg" path="?orient=l" %}
{% api-method-summary %}
Orientation:    /image.jpg?orient=
{% endapi-method-summary %}

{% api-method-description %}
Rotate the image on 90 degree angles  
`r`	   Orient the image right.  
`l`	   Orient the image left.  
`h`	   Flip the image horizontally.  
`v`	   Flip the image vertically.  
`hv`   Flip the image both horizontally and vertically \(also `vh`\).  
`rv`   Flip the image horizontally, then orient the image left \(also `rv` or `vr`\).  
`vl`   Flip the image horizontally, then orient the image right \(also `lv`or `vl`\).
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="orient" type="string" required=false %}
see above docs for options
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?orient=l
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

![Orientation example: https://9skdl6.media.zestyio.com/Arcade-Space-Ship-Example.jpg?orient=l](../../.gitbook/assets/image%20%2820%29.png)

#### About Zesty.io On-The-Fly Media Technology

Zesty.io leverages Fastly's Image Optimization technology layered on top of the Zesty.io DAM Media Manager. Features documented here relate to what is supported through Zesty.io WebEngine and Media services.

