---
description: >-
  Zesty.io Content Instances are comprised of Content Models, which are data
  representations to guide data entry to create content items.
---

# Content Schema

## What is Content Schema

Content Schema is the combination of **Content Models**, **Content Fields**, and their respective behaviors. Content Schema provides the guidelines for creating, editing, and accessing content in a Zesty.io Content Instance. Changes to Content Schema also shapes the patterns of a Content Instance's auto generated API by assigning unique identifiers.

{% hint style="info" %}
Content Schema is most commonly created and controlled through the Zesty.io Content Manager User Interface, but it can also be created through the API.
{% endhint %}

### Content Models

Content Models contain instructions \(options and fields\) that determine the format of the content items that can be created and stored in them. For example, let's pretend we created a **content model** called _Person_, and _Person_ has two fields: _name_ and _date of birth_. Person now serves as a model to follow when entering or editing content in the Person content model.   

### Content Fields

Content Fields are stored on a content model to determine what type of content can be stored.  Content fields are created with three key attributes:

1. **Name** \(A label used to guide people conducting content entry\) 
2. **Reference Name** \(used by programmers, only alphanumeric characters and underscores\)
3. **Data Type** \(used to determine input options and data requirements\)

#### **Content Model Example: Person**

| Content Fields Names  | Reference Name | Field Type |
| :--- | :--- | :--- |
| Name  | name | text |
| Date of Birth | date\_of birth | date |

Fields can control what type of data is stored, for example, text or number, They also determine what the editing interface for a user is. Fields can be one of many types.

### Content Fields Types

|  Type | Description |
| :--- | :--- |
| text | Simple text, limit 160 characters |
| textarea | Simple text, can contain HTML, limit 1000 characters, produces a larger input area |
| wysiwyg | What You See is What You Get \(wysiwyg\) is a rich editor that provides the user with tools to format text with titles, bolding, italics, links, Instagram embeds, video embeds, etc. |
| markdown | A text editing area that supports the [markdown format](https://www.markdownguide.org/basic-syntax/) |
| number | A numeric character 0-9999999999 |
| currency | A float style number i.e. 99.99 |
| sort | A numeric character -9999999 - 9999999 |
| image | A field that stores an image reference Zesty.io Micro DAM |
| files | A field that stores a file reference from Zesty.io Micro DAM |
| link | Accepts a full URL |
| internal\_link | Accepts a ZUID to a content item |
| datetime | Accepts a date in the format YYYY-MM-DD HH:mm:SS  |
| date | Accepts a date in the format YYYY-MM-DD |
| yes\_no | A boolean field that can have custom labels on a toggle |
| dropdown | Creates a pre-populated dropdown controlled by the user generated options |
| one\_to\_one | One to one relationship to another content model's content item \(requires relationship field on creation\) |
| one\_to\_many | One to many Relationship to another content model's content item. \(requires relationship field on creation\) |



