---
description: >-
  The Editor is where the HTML, CSS and Javascript code lives. This is where the
  programming language of Zesty.io, Parsley, is used.
---

# Editor

### Overview

The Editor section houses all of your property's backend components. On the left sidebar you can find the backend files. The editor utilities are shown in the bottom section and it holds the Parsley helper, publish history, media files, available webfonts, and head attributes.

Zesty.io includes a built-in code editor. By having an editor in the context of your content you get powerful features like templating that is aware of your content structure. This allows for quick development against your content.

When you open a file from the left sidebar, you'll see it open in the right-side of the screen. These tabs can be dragged and reordered as well as closed for your quick reference while editing. To reorder a tab, click and hold on the tab name and drag left or right to reposition the tab. Tabs can also be closed with command \(or CTRL\)+e.

Editor shows all of your HTML views, stylesheets, and JavaScript files on the left-hand nav and uses a REPL to code the views for your site with Parsley pre-built in so you can quickly code your views.

### HTML Views

There is no need to download your files locally. Everything is ready for you to work, save, and publish right from your web browser. Pages will be automatically created under HTML views when a Page or Page Group is created in Content Structure. You can create additional HTML snippets and AJAX files by clicking the + symbol next to the column header title views.

### Style Sheets

Zesty.io is equipped to compile LESS, SCSS, and CSS files for styling. There is no need to download any preprocessors. Simply add your code and the CSS will integrate seamlessly. Learn more about style sheets [here](/stylesheets).

### JavaScript

Similarly JS files are ready to to be added and edited. These are rendered and linked at the Head of the property following the style sheets. Learn more about JavaScript [here](/javascript).

### Templating

Parsley, Zesty.io's templating language, has the ability to auto suggest the properties of your content schema. For example a loop would look like this.

`{{each products as product sort by product.id asc}}`

Now you can construct your content structure and develop against it instantly. Allowing content editors and developers to work in tandem.

[Give Parsley a try,](http://parsley.gozesty.com/) we are confident you will enjoy it.

