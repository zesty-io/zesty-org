---
description: >-
  Access and edit style variables through the Settings section using a
  non-technical interface to update colors, fonts, and other design elements.
---

# Styles

### Overview

The Styles subsection will only be available if your blueprint has style variables built-in. A blueprints styles are defined on instance creation via a file called plate-variables.xml. If you do not see a Styles subsection then your blueprint does not have styles. 

### What are style variables?

Each of the styles have an associated variable. That variable is denoted by the `@` followed by its name, for example: `@body-bg`.  Each of these variables is defined in the instance's [style sheet](https://zesty.org/services/web-engine/interface/editor/stylesheets). 

### Editing your variables

Styles offer a variety of options from font style to colors. The left-hand sidebar shows all the available categories. Once a category is selected from the left-hand navigation the main portion of the screen to the right will show the editable fields for you to start customizing the variables. The available style variables will depend on your selected Blueprint. Once you're finished editing your styles be sure to save them so your changes populate. 

{% hint style="info" %}
In order for the style variables to work they must be defined in the style sheet _before_ you edit them.
{% endhint %}

### Accessing your variables in the Editor

In the Editor section, you can add your style variables to a LESS/SCSS file in the under Style Sheets section. All variable names are listed in the Styles subsection. Add those variable names to your style sheet and define them, for example: `@body-bg-color: #997379`.

