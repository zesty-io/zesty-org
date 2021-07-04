---
description: >-
  Automagical HTML output of headless content. Instant access to Content Layout
  output.
---

# Parsley AutoLayout

Parsley AutoLayout \(PAL\) is a function that generates automatic HTML by looking at the content item's fields. It gets the sort order and each field's type and outputs HTML. PAL can be use on Parsley calls that reference a single content items \(this, loop variables, and data calls\). 

**Examples:**

* `{{this.autoLayout()}}`
* `{{each model as item}} {{item.autoLayout(stacked)}} {{end-each}}`
* `{{model.first().autoLayout(auto)}}`

Auto Layout takes a single parameter `autoLayout(mode)`. The default mode is `auto` . `auto` `stacked` and `json` the current available options. The type will change the layout behavior of the auto layout and HTML output, but it will not change the content outputted. Auto will also access output from the [Content ](parsley-autolayout.md#content-designer-layout-behavior)[Layout](parsley-autolayout.md#content-designer-layout-behavior) [Designer tool](parsley-autolayout.md#content-designer-layout-behavior).

If auto layout is called on an illegal parsley reference it will output an error string stating the fact, this error will be suppressed to a comment on live instances.

### Parsley AutoLayout Output Examples

The Inline option stacks html element on top of one another.

{% code title="{{this.autolayout\(stacked\)}} example" %}
```markup
<div class="pal-container">
    <h1 class="pal-text">Hello, World</h1>
    <div class="pal-textarea">This is description text from a textarea input. Description text can be used for many purposes.</div>
    <div class="pal-wysiwyg_basic"><p>I'm gonna fix that last joke by taking out all the words and adding new ones.<br />- Mitch Hedberg&nbsp;</p></div>
    <img class="pal-image" src="https://9skdl6.media.zestyio.com/photo-by-adrian-drebler.f1cb27a519bdb5b6ed34049a5b86e317.jpg" alt="">
    <img class="pal-image" src="https://9skdl6.media.zestyio.com/photo-by-adrian-drebler.f1cb27a519bdb5b6ed34049a5b86e317.jpg" alt="">
    <div class="pal-date">2013-04-18</div>
    <div class="pal-dropdown">option_two</div>
    <!-- number not supported -->
    <!-- files not supported -->
    <div class="pal-markdown"></div>
    <h1 class="pal-text">info@gozesty.com</h1>
    <div class="pal-textarea">&lt;p&gt;I'm gonna fix that last joke by taking out all the words and adding new ones.&lt;br /&gt;- Mitch Hedberg&amp;nbsp;&lt;/p&gt;</div>
</div>
```
{% endcode %}

### CSS Classes

Each HTML element outputs with a class of "pal-\[fieldtype\]" while the encompassing div has the class "pal-container". Developer can control PAL to have custom output by targeting these CSS classes in their own code.

### Content Layout Designer Behavior

The drag n drop Content Layout Designer output will be automatically accessed by default by autoLayout when `auto` or `json` is passed. 

Content Layout Designer write two files when a save or publish occurs, they follow this format `/z/pvl/[ZUID].json` and `/z/pvl/[ZUID].zhtml` When autoLayout\(\) resolves, it looks to see if the associated content item or content model has a related set of files that match this format, if they do, Content Layout Designer will resolve automatically. 

