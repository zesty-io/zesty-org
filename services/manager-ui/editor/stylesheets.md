---
description: >-
  Zesty.io supports writing CSS, Less, and SCSS for styling your instances. Upon
  publishing we process all SCSS, Less, and CSS files and build a concatenated
  and minified CSS file to serve for your inst
---

# Style Sheets

### Overview

Zesty.io’s Code Editor supports CSS, LESS, and SCSS/SASS. Every save of a stylesheet will combine, compile, and minify all stylesheet files into a single CSS file. If more than one style of stylesheet is used, they will compile and concat into a single file in the following order of concatenation:  
CSS  
LESS  
SCSS

### Compilers and Minifiers

All files are concatenated based on their type then by their order set in the editor interface of the Zesty.io manager. Each stylesheet type has its own compiler or minifier explained below. Files will transpile with their given type; Less and Sass files will compile with style variables. [Parsley](https://zesty.org/services/web-engine/introduction-to-parsley) is not accessible from to files in the Style Sheet section.  

{% hint style="warning" %}
Comments in Style files can err on compilation especially if they are single-line comments noted by `//` and at the top or bottom of a file. To mitigate this ensure that comments are noted using the multi-line `/* */` syntax. 
{% endhint %}

### CSS

All CSS with the exception of any file named ‘ie8.css’ is concatenated and run through a minification process. The repository used for CSS minification: [https://github.com/matthiasmullie/minify](https://github.com/matthiasmullie/minify)

### LESS

All LESS files are concatenated based on their order in the editor interface and then run through the LESSC compiler with the compressed flag. The repository we use to compile: [https://github.com/leafo/lessphp](https://github.com/leafo/lessphp)

_Errors are returned for broken LESS at compile time._

### SCSS/SASS

All SCSS files are concatenated based on their order in the Editor and run through the SASSC compiler with the flags ‘ --style compressed --stdin’, that behavior is hard coded and cannot be changed. The repository used for compiling SASS: [https://github.com/sass/sassc](https://github.com/sass/sassc%20)

_Errors are returned for broken SASS at compile time._

### Special Files

**ie8.css**

If a file is given the name ie8.css, it will be ignored by the minification process and is included in its own href link in the header after the main minified CSS file is added.

### Auto Added Stylesheet Files

Zesty.io auto appends stylesheets to specific templates \(mostly legacy\). If you experience added CSS and it is a problem please reach out to support on the Zesty.io developer slack channel. Support engineers can remove the base CSS files.

### CSS files migrating from Legacy to ZUID Zesty.io

All old CSS files use to be processed by the LESSC compiler for minification or file compile order. When sites are migrated, old CSS files will be converted to LESS file to maintain the same behavior.

### **Operations that happen on pre-existing CSS files:**

* Head type changes from text/css to text/less  
* View type changes from text/css to text/less  
* File extension changes from .css to .less

New CSS files will abide by the rules in this specification.

