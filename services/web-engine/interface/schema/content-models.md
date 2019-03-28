---
description: >-
  This article reviews what a Content Model is and the three different Content
  Model types: Single With View, Group With View, and Headless. We cover what
  makes them different and when to use each.
---

# Content Models

### Overview

A simplified way to think about Content Models is to think of tables in a database; each field creates a column, each entry draft creates a row. But a Content Model isn't just a store of data it also comes with an interactive interface for managing content, automated JSON and dynamic feeds, and can be connected to view files in the editor. How to control all those aspects of a content model depend on the type of model you start with and the fields you assign to it. There are three different types of Content Models and over twenty types of fields to allow you to create the most intuitive content managment interface for the requirements specific to each use.

### Content Model Types

The three types of Content Models are: Single With View \(Single\), Group With View \(Group\) and Headless. The difference between the three boils down to two questions. First, do the entries in the content model generate a URL? And second, in the Content section, are the entries displayed together in a table or is each entry listed separately on the left hand column?

For the first questions, if the answer is yes, the entries do need to generate their own URL, then use either a Single or a Group type. Those two types do two important things. First they automatically add required fields for info all pages need, like a url path, meta information, and SEO settings. Second, they create a corresponding view file in the Editor to be used for the HTML markup for this content model's template. If the answer is no, the entries in this content model do not need to generate a URL, use a Headless type. The additional fields and view file will not be added.

Once you know your Content Model needs to generate URLs, the second question determines whether to use a Single or Group. If the entries should be displayed together in a table in the Content section use a Group type. If the entries need to be displayed individually in the Content section, use a Single type.

### **Single With View**

A Single Content Model is used for content entries that each generate a page and are listed separately in the content section sidebar. Examples of this Content Model type are Homepage, Blog Landing Page, Standard Page Template. Contrary to what the name might imply, a Single Content Model can have multiple entries. These entries would share the same fields, and use the same view file for a template, but would be listed independently in the Content section.

### **Group With View**

A Group Content Model is used for groups of entries \(pages\) which share a layout and can be viewed as a table in the Content section. Examples of this Content Model type are Articles, Team Members, Categories.

### **Headless**

A Headless Content Model is used for content entries which don't generate their own URL and are viewed as a table in the Content section. Examples of this type are Carousel Items, Testimonials, Client Logos or any on page item with multiple entries which do not click through to their own page or URL.

### Fields

Adding a field to a Content Model adds an input to the Content Model entries in the Content Tab and creates a column to store the content in the Content Model database table. The different types of fields create different inputs. For example a `text` type field creates a text type input and restricts the total number of characters that can be stored to that field. Where as an `image` type field creates a custom input that prompts a media selection modal and stores comma-separated media ids according to what's selected.

