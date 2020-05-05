---
description: >-
  The Web IDE is where the HTML, CSS, and Javascript lives. This is where
  Zesty.io's  templating language, Parsley, is used.
---

# Web IDE \(Code Editor\)

### Overview

Zesty.io's built-in Web IDE section, previously known as the "Editor section", houses all of your instance's backend components. In the left-hand sidebar you can find the backend files: HTML views, style sheets, and JavaScript files. The web IDE utilities are shown in the bottom section which includes the Linked Schema \(formerly called Parsley helper or Code Bank\), [AuditTrail](https://zesty.org/services/manager-ui/audit-trail) history, general file information, and linked content.

By having a web IDE in the context of your content you get powerful features like templating that is aware of your content structure. This allows for quick development against your content.

When you select a file from the left-hand sidebar, you'll see it open in the main portion of the screen just to the right of the sidebar. Each open file is marked by a tab at the top of the editing screen. These tabs allow you to quickly jump from file to file, and can be reordered by dragging, and closed when no longer needed. To reorder your  tabs, click and hold on the tab name, and then drag left or right to reorder it.  

### Shortcuts

#### Standard

**Saving:** CTRL/CMD+s  
**Copy:** CTRL/CMD+c  
**Paste:** CTRL/CMD+v  
**Search:** CTRL/CMD+f  
**Replace:** CTRL/CMD+r

#### Movement

**Skip word right:** ALT/OPT+right arrow   
**Skip word left:** ALT/OPT+left arrow  
**Highlight word right:** ALT/OPT+shift+right arrow  
**Highlight word left:** ALT/OPT+shift+left arrow  
**Skip to end of line:** CTRL/CMD+right arrow   
**Skip to start of line:** CTRL/CMD+left arrow  
**Highlight to end of line:** CTRL/CMD+shift+right arrow  
**Highlight to start of line:** CTRL/CMD+shift+left arrow  
**Highlight lines up:**  CTRL/CMD+shift+up arrow  
**Highlight lines below:**  CTRL/CMD+shift+down arrow

### HTML Views

There is no need to download your files locally. The environment is ready for you to edit, save, and publish right from your web browser. Pages will be automatically created under HTML views when a Page or Page Group is created in the [Schema](https://zesty.org/services/manager-ui/schema). You can create additional HTML snippets and custom endpoints by clicking the + symbol at the top of the left-hand sidebar.

### Style Sheets

Zesty.io is equipped to compile LESS, SCSS, and CSS files for styling. There is no need to download any preprocessors. Simply add your code and the style sheets will integrate seamlessly. Learn more about style sheets [here](https://zesty.org/services/manager-ui/editor/stylesheets).

### JavaScript

Similarly JavaScript files are ready to to be added and edited. These are rendered and linked in the head of the instance following the style sheets. Learn more about JavaScript [here](https://zesty.org/services/manager-ui/editor/javascript).

### Templating

[Parsley](https://zesty.org/services/web-engine/introduction-to-parsley), Zesty.io's templating language, has the ability to auto-suggest the properties of your schema. For example, if you wanted to loop through a set of items, after typing `each` a list of content model names is shown for you to choose from and the completed statement would be similar to the each loop declaration below.

`{{each products as product sort by product.id asc}}`

Therefore you can build your schema and develop against it instantly which allows your content editors and developers to work concurrently. 

[Give Parsley a try,](http://parsley.gozesty.com/) we are confident you will enjoy it.

