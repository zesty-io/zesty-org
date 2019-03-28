---
description: >-
  Zesty.io's Fields Content Models create content entry fields for a content set
  and a view (page). Multiple field datatypes can be added to any content set or
  page
---

# Fields

### Overview

Zesty.io has approximately 20 field datatype options. Each option is named and describe below. As you go through adding fields to your Content Models, you'll give each field a label and reference name. The label is what you'll see in the Content section as you're making your entries. The reference is what you'll use to call that field using Parsley for templating your views, snippets, and/or feeds in the Editor section.

### Table of Field Types

| Field Name | Field Description | XML Syntax |
| :--- | :--- | :--- |
| Article Writer | This is a field that you can type in and add images to. You can drag and drop images into the field, and when you highlight text that you've already typed a box pops up with simple formatting options such as bold, italic, blockquote, and more. | `<article_writer name="articlewriter_field" name_friendly="Article Writer Field" />` |
| Brandisty Logo | This field allows you to upload a logo from Brandisty. Please note, to use this  field a Brandisty account is required. | `<brandisty name="brandisty_field" name_friendly="Brandisty Field" />` |
| Color | This is a field where you can enter color values such as '\#ffffff' or 'blue'. It has a limit of 150 characters. It currently does not validate the hex code or have a color picker. | `<color name="color_field" name_friendly="color_field" />` |
| Currency | This is a field where you can enter a dollar sign \($\), numbers, and up to 2 decimal points. For example: $15.99. It has a limit of 150 characters. | `<currency name="currency_field" name_friendly="Currency Field" />` |
| Date | This is a field where you can select a date from a pop-up calendar, you cannot type a date into the field, it must be selected from the calendar. The date is string-formatted as YYYY-MM-DD. To apply date formatting use ".date\(\)" call and include PHP data format characters. | `<date name="date_field" name_friendly="Date Field" />` |
| DateTime | This is a field where you can select a date from a pop-up calendar. After you've selected a date from the calendar, a time pop-up allows you to select a time from a 24-hour digital clock. The DateTime is string formatted YYYY-MM-DD HH-MM-SS. To apply date formating use ".date\(\)" call and include PHP data format characters. | `<datetime name="datetime_field" name_friendly="Datetime Field" />` |
| Dropdown | This field creates a dropdown with different options made up of key:value pairs. | `<dropdown name="default_fields" name_friendly="Default Form Fields" options="no_form:No Form;basic_form:Patient Basic Form;adv_form:Patient Advanced Form;" />` |
| Files | This is a field where you can click a button to upload a file from the media bin. | `<files name="files_field" name_friendly="Files Field" />` |
| FontAwesome | This is a text field for the name of a font-awesome icon. Field uses the name of the icon only. For example, if you wanted an icon for Facebook, you would type 'facebook' \(no quotes\) in the text field, instead of the 'fa fa-facebook' syntax. [Font Awesome Icon List](https://fortawesome.github.io/Font-Awesome/icons/)  _Printout Notes:_ Prints out exact characters represented in the backend. To use with "fa" syntax, use "substring\(4,100\)" to strip "icon" from the icon name. | `<fontawesome name="fontawesome_field" name_friendly="Font Awesome Icon" />` |
| Images | This creates a field for inserting an image from the Media Bin. The number of images can be limited by using the 'limit' parameter in your image tag. Note that when calling the field in your view, you must use the `getImage()` Parsley call to access the file URL, if not the file's CDN ID number will print out on the page. | `<images name="main_image" name_friendly="Main Image" limit="1" />` |
| Internal Link | This field creates a dropdown with all available internal links. The dropdown will have all the pages on the site, sorted alphabetically by Navigation title. In the View what prints out is the ZID associated with the selected page. Use the Parsley call `truepath()` to access the page URL. | `<internal_link name="btn_links_to" name_friendly="Button Links To" />` |
| Link | This creates a text field for a link which requires the form of a URL, e.g., http:// or https://. It has a maximum character limit of 150 characters. | `<link name="link_field" name_friendly="Link Field" />` |
| Markdown | This field creates an open text area that accepts markdown syntax and formatting. | `<markdown name="markdown_field" name_friendly="Markdown Field"/>` |
| Number | This creates a field for numbers \(with optional decimal point\), with a max input of 150 characters. Commas or currency signs are not allowed. | `<number name="number_field" name_friendly="Number Field" />` |
| One to Many | This field allows users to create one-to-many relationship between a page and a dataset, a pageset and a dataset, or a dataset and a dataset. | `<one_to_many name="additional_fields" name_friendly="Additional Form Fields" relationship="custom_form_fields" relationship_field="custom_field_name" />` |
| One to One | This field allows users to create one-to-one relationship between a page and a dataset, a pageset and a dataset, or a dataset and a dataset. | `<one_to_one name="employee_category" name_friendly="Employee Category" relationship="employee_category" relationship_field="employee_category" list="1" />` |
| Sort | This creates a unique field to allow for a numerical sorting of pagesets and datasets. You can change the default sort number with the plus and minus buttons in the pageset or dataset, as well as in the table view. | `<sort name="sort_order" name_friendly="Sort Order" />` |
| Text | This field creates a text field limited to 150 characters. | `<text name="homepage_title" name_friendly="Homepage Title" />` |
| Textarea | This creates an open text area with an unlimited character count. The bottom right corner is draggable for resizing. Line breaks print out as   tags unless you add '\_raw' to the end of the field name in the Parsley call. | `<textarea name="bubble_blurb" name_friendly="Bubble Blurb" list="1" />` |
| WYSIWYG Advanced | This creates a 'What You See Is What You Get' \(WYSIWYG\) text field, i.e., all formatting that you have, such as bolded text, font size, italics, etc. will be exactly what you see on your site. Note, there is currently no difference between the advanced and basic WYSIWYG. | `<wysiwyg_advanced name="image_caption" name_friendly="Image Caption" />` |
| WYSIWYG Basic | This creates a 'What You See Is What You Get' \(WYSIWYG\) text field, i.e., all formatting that you have, such as bolded text, font size, italics, etc. will be exactly what you see on your site. Since there is currently no difference between the advanced and basic WYSIWYG, we recommend using WYSIWYG Advanced. |  |
| Yes/No | This creates a customized toggle field made up of key:value pairs. The key will either be 0 \(zero\) or 1 \(one\), however the value is customizable. Since the key is either 0 or 1, the logic for if-statements or where-statements will take the form of `{{ if {this == 0} }}`. | `<yes_no name="field_type_toggle" name_friendly="Field Type (text: 150 character limit; textarea: unlimited)" options="0:Text;1:Textarea;"  list="1"/>` |

