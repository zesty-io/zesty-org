---
description: >-
  Learn how to use Parsley image modifiers including resizing, and accessing
  image attributes such as image file name, title, and more.
---

# Image Modifiers

### .getImage\(width, height, type\)

Function takes a width, height, and an optional type \(fit or crop\) parameter and returns a URL to that image. There are many ways to utilize this function. Fit is the default type and does not need to be explicitly declared. Crop type requires 2 parameters and explicit declaration. The list below shows examples of these calls.

```text
// .getImage(W, H, fit or crop)
<img src="{{ thispage.photo.getImage() }}" />
<img src="{{ thispage.photo.getImage(100) }}" />
<img src="{{ thispage.photo.getImage(,100,fit) }}" /> 
<img src="{{ thispage.photo.getImage(100,,fit) }}" />
<img src="{{ thispage.photo.getImage(100,100,fit) }}" />
<img src="{{ thispage.photo.getImage(100,100,crop) }}" />
```

### .getImageFileName\(\)

When called on an image reference, returns the image file name.

```text
{{ page.image.getImageFileName() }}
```

### .getImageTitle\(\)

When called on an image reference, returns the image title.

```text
{{ page.image.getImageTitle() }}
```

### .getMediaURL\(\)

Function does not take parameters and returns the original URL to that file. This is how to access files stored in media that are not images, such as PDFs and MP4s. You can also use this call to access the original file of an image that has not been optimized or altered by Zesty.io.

```text
<a href="{{ page.download_file.getMediaURL() }}" >Download</a>
// <a href="https://domain.com/file.pdf" >Download</a>
```

### .gravatar\(email\)

Function takes a user's email and requests an image from the Gravatar API.

```text
<img src="{{ thispage.author_email.gravatar() }}" />
// <img src="http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
```

