---
description: >-
  The Web IDE is where HTML, CSS, Javascript and Parsley templates are authored.
---

# Web IDE \(Code Editor\)

## Overview

The Web IDE serves as the in-app editor of your instances code. Powered by the [Microsoft Monaco Editor](https://microsoft.github.io/monaco-editor/) it provides an experience similiar to [VS Code](https://github.com/Microsoft/vscode). It allows for instant development of instance code. The code which can be managed is comprised of the following types.

- [Parsley](https://zesty.org/services/web-engine/introduction-to-parsley) & HTML Views
- [Style Sheets](https://zesty.org/services/manager-ui/editor/stylesheets) 
- [JavaScript](https://zesty.org/services/manager-ui/editor/javascript) 
- Snippets
  - *Chunks of code which can be reused and included into other files*
- Custom Endpoints
  - *Allow for generating a variety of file types accessible via an instance URL* 


{% hint style="success" %}
In addition to the Web IDE code can be authored locally using the [Atom IDE package](https://zesty.org/tools/atom-package).
{% endhint %}


## Keyboard Shortcuts

### Standard

**Saving:** CTRL/CMD+s  
**Copy:** CTRL/CMD+c  
**Paste:** CTRL/CMD+v  
**Search:** CTRL/CMD+f  

### Movement

**Skip word right:** CTRL/CMD+right arrow  
**Skip word left:** CTRL/CMD+left arrow  
**Highlight word right:** CTRL/CMD+shift+right arrow  
**Highlight word left:** CTRL/CMD+shift+left arrow 
**Highlight lines up:** CTRL/CMD+shift+up arrow  
**Highlight lines below:** CTRL/CMD+shift+down arrow


## HTML Views

For every [Schema](https://zesty.org/services/manager-ui/schema) model created there is an associated model view created with the same model reference name. These model views allow for all the the inclusion of HTML. e.g. Inline style sheets and JavaScript. 

### Templating With Parsley

Along with HTML you can use the [Parsley templating language](https://zesty.org/services/web-engine/introduction-to-parsley) to dynamically reference your models and their fields. By using Parsley to reference model fields you are making the content rendered dynamic. In addition the Web IDE has the ability to auto-suggest the properties of your schema. For example, if you wanted to loop through a set of items, after typing `each` a list of content model names is shown for you to choose from and the completed statement would be similar to the each loop declaration below.

`{{each products as product sort by product.id asc}}`

Therefore you can build your schema and develop against it instantly which allows your content editors and developers to work concurrently.

[Give Parsley a try,](http://parsley.gozesty.com/) we are confident you will enjoy it.


## Style Sheets

Zesty.io is equipped to compile LESS, SCSS, and CSS files for styling. There is no need to download any preprocessors. Simply add your code and the style sheets will integrate seamlessly. Learn more about style sheets [here](https://zesty.org/services/manager-ui/editor/stylesheets).

## JavaScript

Similarly JavaScript files are ready to to be added and edited. These are rendered and linked in the head of the instance following the style sheets. Learn more about JavaScript [here](https://zesty.org/services/manager-ui/editor/javascript).


## Snippets
Snippets allow for resuable pieces of code which can be included into other views. They work well for dynmaic sections of content which do not require URLs. e.g. A contact form. Building this as a snippet allows for it's reuse across a website.


## Custom Endpoints

Every instance is able to serve custom endpoints, all of which have access to your instances models. These are files created in the Web IDE which get their URL and file extension determined by the provided file name. Their URLs follow the pattern of `example.org/-/custom/MY-ENDPOINT-FILE-NAME.EXT`. Zesty.io hosted domains must allow for the root level directory of `/-/` being reserved for routing by Zesty.io. This the platforms signal for routing to specific internal services.  

**Supported Custom Endpoint Extensions:**

- `.csv`
- `.tsv`
- `.js`
- `.rss`
- `.xml`
- `.otf`
- `.png`
- `.svg`
- `.ics`
- `.json`
- `.css`
- `.html`
- `.markdown`
- `.md`
- `.vcf`
- `.txt`

{% hint style="success" %}
Do not see a file extension you need? The platform is designed to allow for additional file formats. [Get in touch with us](https://www.zesty.io/). 
{% endhint %}


## Multitenancy

Zesty.io is a multi tenant platform. This means there are multiple independent users operating against a shared environment. Said more simply, team members and yourself can work on the same files. While this provides powerful colloabrative workflows it introduces some complex questions for the application to answer. One of those being, when two or more users are working on the same file and introduce different changes which is the correct one?

The Web IDE is powered by the [instances API](https://zesty.org/apis/instances-api) which takes a simple approach of the last request made is the current state of the data. Meaning if you are working on `file A` and save the following code `var foo = "bar"` but then afterwards a teammate is working on the same `file A` and saves the code `var foo = "baz"` then that will be the current state of the code when it is next requested.

What to do then when you have multiple changes being built at the same time? E.G. A developer is working on the new homepage redesign while another developer is updating the current homepage title. This is where the external concept of version control comes in handy. Version control provides workflows which allow you to "branch" and "merge" code in these complex situtations. It is a very well solved problem and as such isn't something we look to reimplement. How can you combine version control on your computer with the remotely hosted code on Zesty.io? By using our [Atom IDE package](https://zesty.org/tools/atom-package) you can integrate development workflows on your computer with your remote Zesty.io instance. 


### Local Storage

In a multitenant application you can have changes locally which differ from the remote state as well as your fellow team members local state. When developing locally using the Atom IDE package you get the benefit of your operating systems file storage which can contain changes even if they have not been synced to the remote instance. Providing you with confidence your in development work will not be lost if a remote file changes. In the Web IDE we use the [localStorage browser API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to achieve the same affect. This means if working on a file and you change views or close your browser your work will not be lost.

### Syncing

If your, in development, work is stored in your browsers localStorage what to do then when the remote file has changed? This is handled by syncing. Whenever you edit a file the Web IDE marks it as `dirty`. This means it has changes which need to be saved in order to presist them on the instance making the changes available to other team members. Sometimes the file is changed by another teammate before you are able to save your Web IDE changes. Whenever a file change is saved we make a new version and whenever you load a file we fetch the latest from your instance. If your Web IDE file is behind the latest remote file version and has unsaved changes (a.k.a is `dirty`) we mark it as being out-of-sync. 

What does syncing mean? When a file is marked as out-of-sync the Web IDE will load the [file diffing view](https://zesty.org/services/manager-ui/editor/versions#diffing-versions) and you will need to make a choice. You will have to choose between saving your changes and overwriting the current remote file or choosing the remote file and losing your local changes. This choice allows you to think critically about which code should be the current state shared across your team.