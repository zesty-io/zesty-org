---
description: >-
  The final step to have your website content ready for publishing is to compile
  it all together using HTML, Style Sheets, and JavaScript for websites, and
  endpoints and files for headless distribution.
---

# Outputting Content

### Overview

A brief overview of our process has us beginning at the Schema section where we add Pages, Page Groups, and/or Data Sets; and then we move on to the Content section where we add content to our Pages, Page Groups, and/or Data Sets. Lastly, we want to move on to the Editor section where we code our HTML view, add styles to our Style Sheets, and JavaScript as necessary.

### Editor

In the Editor section, you will find the Views for all of the Pages and Page Groups that you created. You will also see a Snippet for a 404 page and the Loader. Below, you'll find the Style Sheets and JavaScript sections where you can add your files.

### HTML Views

Single Pages will show a page icon

Page Groups will appear with a table icon.

In both the Page and Page Group views, you'll add HTML and Parsley to create dynamic template layouts which will be visible on that page's corresponding URL. For example, on our home page, we created content entry fields for a hero image and a title. This is what the code might look like in the Editor using HTML and Parsley.

```
<div class="my-hero">
<div class="hero-container" style="background-image:url('{{ page.main_image.getImage() }}')"</div>
<h2>{{ page.page_title }}</h2> 
</div>
```

Use standardized HTML language to create your static webpage layout and add Parsley to create dynamic inputs pulling from your content entries using their respective Parsley code reference names which were created in Schema section.

You can create Snippets to create globally available content such as a header or footer to avoid having to repeat the same code on each page. Click the "+" symbol next to Views and select Snippet.

### Loader

Note that the Loader is the file that loads what you see on your webpage. It is the first file that is loaded in each view and it loads the view via the Parsley call:`{{ current_view }}`. For your newly created HTML and Parsley layout to load, this Parsley call needs to be in the Loader file. This is where you can add your globally available Snippets as well. For example, we created two Snippets: one for our header and another for our footer and named them accordingly. We want our header and footer to show on every webpage so we'll write our loader as follows:

```
{{ include header }}  
{{ current_view }}  
{{include footer }}
```

### 404 Page

If a user happens to stumble upon a broken link, the loader will not render. Users will instead see a 404 page.&#x20;

In the Code App of an Instance, a snippet with the filename `404-page` and file type `404` is provided. When the loader is unable to resolve the requested URL, the `404-page` will render instead.&#x20;

Due to WebEngine rendering of the `404-page` outside of the loader, all necessary scripts and Parsley `{{ includes }}` calls applied to the loader will also need to be applied to the `404-page`.  &#x20;

The 404-page is fully customizable and can be built out similar to a traditional view file. The head tags established for the Instance in the Settings App will output on the 404. Additionally, the file has access to all stored content by using Parsley direct data calls.&#x20;
