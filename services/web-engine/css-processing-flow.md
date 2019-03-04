---
description: >-
  Zesty.io runs CSS pre-processers on save and publish of SASS, SC SS, LESS, and
  CSS files.
---

# CSS Processing Flow

Zesty.io’s Code Editor supports [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [LESS](http://lesscss.org/), and [SCSS/SASS](https://sass-lang.com/). Every save of a stylesheet will combine, compile, and minify all stylesheet files into a single CSS file. If more than one style of stylesheet is used, they will compile and concat into a single file. The order of concatenation:

1. **CSS**
2. **LESS**
3. **SCSS/SASS**

![Compiling Order](../../.gitbook/assets/image.png)

### **Compilers and Minifiers**

All files are concatenated based on their type then by their order set in the editor interface of the Zesty.io manager. Each stylesheet type has its own compiler or minifier explained below.

### **CSS**

All CSS with the exception of any file named ‘ie8.css’ is concatenated and run through a minification process. The repository used for CSS minification: [https://github.com/fmarcia/uglifycss](https://github.com/fmarcia/uglifycss)

### **LESS**

All LESS files are concatenated based on their order in the editor interface and then run through the LESSC compiler with the compressed flag. The repository we use to compile:  [https://github.com/less/less.js](https://github.com/less/less.js)

Errors are returned for broken LESS at compile time.

### **SCSS/SASS**

All SCSS files are concatenated based on their order in the editor and run through the SASSC compiler with the flags ‘ --style compressed --stdin’, that behavior is hard coded and cannot be changed. The repository used for compiling SASS: [https://github.com/sass/sassc](https://github.com/sass/sassc)

The command to compile SCSS to CSS is \`sassc --stdin --style compressed\`

The command to compile SASS to CSS is \`sassc --stdin --sass --style compressed\`

Errors are returned for broken SASS at compile time.

### **Special Files**

#### **ie8.css**

If a file is given the name ie8.css, it will be ignored by the minification process and be included in its own href link in the header after the main minified CSS file is added.

#### **Auto Added Stylesheet Files**

Zesty.io auto appends stylesheets to specific templates \(mostly legacy\). If you experience added CSS and it is a problem please reach out to support on the Zesty.io developer slack channel. Support engineers can remove the base CSS files.  


