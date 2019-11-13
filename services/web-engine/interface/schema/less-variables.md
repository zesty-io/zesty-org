---
description: >-
  Access and edit style variables through the config tab using a non-technical
  interface to update colors, fonts, and other design elements.
---

# Less Variables

### What are LESS Variables?

LESS Variables part of the Schema Section that provides a non-technical interface for updating style variables.

When it comes to style sheets, you have the option of using LESS, SCSS, or CSS. Zesty.io is equiped to compile style sheets written in LESS or SCSS so there is no need to install any precompilers to use these. Simply create your style sheet and the rest is taken care of.

### Editing your variables

LESS Variables can be found as a subsection in the Schema section. The left-hand sidebar has all the available categories while the main content to the right has the editable fields for you to start customizing the variables. The available LESS variable will depend on your selected Blueprint.

### Accessing your variables in Parsley

In the Editor section, you can add your LESS variables to a LESS file in the under Style Sheets. To access the variable names, click on the palette icon on the upper left hand side. This will display all the available LESS variables we looked at earlier in the Schema section.

In this example, we will be calling the Body Background Color. The variable name is shown on the right, which in this case is `@body-bg-color` Note that the LESS variables can also be edited here and saved by clicking Save Variables on the top right. Now the variable can be accessed in a LESS file using the reference name `@body-bg-color` to define a style property.

Check out the official [LESS website](http://lesscss.org/features/#variables-feature) to brush up on using LESS variables.

