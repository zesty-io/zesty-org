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

<table>
  <thead>
    <tr>
      <th style="text-align:left">Field Name</th>
      <th style="text-align:left">Field Description</th>
      <th style="text-align:left">XML Syntax</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Article Writer</td>
      <td style="text-align:left">This is a field that you can type in and add images to. You can drag and
        drop images into the field, and when you highlight text that you&apos;ve
        already typed a box pops up with simple formatting options such as bold,
        italic, blockquote, and more.</td>
      <td style="text-align:left"><code>&lt;article_writer name=&quot;articlewriter_field&quot; name_friendly=&quot;Article Writer Field&quot; /&gt;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Color</td>
      <td style="text-align:left">This is a field where you can enter color values such as &apos;#ffffff&apos;
        or &apos;blue&apos;. It has a limit of 150 characters. It currently does
        not validate the hex code or have a color picker.</td>
      <td style="text-align:left"><code>&lt;color name=&quot;color_field&quot; name_friendly=&quot;color_field&quot; /&gt;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Currency</td>
      <td style="text-align:left">This is a field where you can enter a dollar sign ($), numbers, and up
        to 2 decimal points. For example: $15.99. It has a limit of 150 characters.</td>
      <td
      style="text-align:left"><code>&lt;currency name=&quot;currency_field&quot; name_friendly=&quot;Currency Field&quot; /&gt;</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">Date</td>
      <td style="text-align:left">This is a field where you can select a date from a pop-up calendar, you
        cannot type a date into the field, it must be selected from the calendar.
        The date is string-formatted as YYYY-MM-DD. To apply date formatting use
        &quot;.date()&quot; call and include PHP data format characters.</td>
      <td
      style="text-align:left"><code>&lt;date name=&quot;date_field&quot; name_friendly=&quot;Date Field&quot; /&gt;</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">Dropdown</td>
      <td style="text-align:left">This field creates a dropdown with different options made up of key:value
        pairs.</td>
      <td style="text-align:left"><code>&lt;dropdown name=&quot;default_fields&quot; name_friendly=&quot;Default Form Fields&quot; options=&quot;no_form:No Form;basic_form:Patient Basic Form;adv_form:Patient Advanced Form;&quot; /&gt;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">External URL</td>
      <td style="text-align:left">This creates a text field for a link which requires the form of a URL,
        e.g., http:// or https://. It has a maximum character limit of 150 characters.</td>
      <td
      style="text-align:left"><code>&lt;link name=&quot;link_field&quot; name_friendly=&quot;Link Field&quot; /&gt;</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">Media</td>
      <td style="text-align:left">This creates a field for inserting an asset from the Media Bin. The number
        of assets can be limited by using the &apos;limit&apos; parameter in your
        image tag. Note that when calling the field in your view, you must use
        the <code>getImage()</code> Parsley call to access the file URL, if not the
        file&apos;s CDN ID number will print out on the page. The default number
        of assets is 1, however this can be modified upon creation.</td>
      <td style="text-align:left"><code>&lt;images name=&quot;main_image&quot; name_friendly=&quot;Main Image&quot; limit=&quot;1&quot; /&gt;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Internal Link</td>
      <td style="text-align:left">This field creates a dropdown with all available internal links. The dropdown
        will have all the pages on the site, sorted alphabetically by Navigation
        title. In the View what prints out is the ZID associated with the selected
        page. Use the Parsley call <code>truepath()</code> to access the page URL.</td>
      <td
      style="text-align:left"><code>&lt;internal_link name=&quot;btn_links_to&quot; name_friendly=&quot;Button Links To&quot; /&gt;</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">Markdown</td>
      <td style="text-align:left">This field creates an open text area that accepts markdown syntax and
        formatting.</td>
      <td style="text-align:left"><code>&lt;markdown name=&quot;markdown_field&quot; name_friendly=&quot;Markdown Field&quot;/&gt;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Number</td>
      <td style="text-align:left">This creates a field for numbers (with optional decimal point), with a
        max input of 150 characters. Commas or currency signs are not allowed.</td>
      <td
      style="text-align:left"><code>&lt;number name=&quot;number_field&quot; name_friendly=&quot;Number Field&quot; /&gt;</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">One to Many</td>
      <td style="text-align:left">This field allows users to create one-to-many relationship between a page
        and a dataset, a pageset and a dataset, or a dataset and a dataset. There
        may be a limit to how many items can be related.</td>
      <td style="text-align:left"><code>&lt;one_to_many name=&quot;additional_fields&quot; name_friendly=&quot;Additional Form Fields&quot; relationship=&quot;custom_form_fields&quot; relationship_field=&quot;custom_field_name&quot; /&gt;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">One to One</td>
      <td style="text-align:left">This field allows users to create one-to-one relationship between a page
        and a dataset, a pageset and a dataset, or a dataset and a dataset.</td>
      <td
      style="text-align:left"><code>&lt;one_to_one name=&quot;employee_category&quot; name_friendly=&quot;Employee Category&quot; relationship=&quot;employee_category&quot; relationship_field=&quot;employee_category&quot; list=&quot;1&quot; /&gt;</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">Sort</td>
      <td style="text-align:left">This creates a unique field to allow for a numerical sorting of pagesets
        and datasets. You can change the default sort number with the plus and
        minus buttons in the pageset or dataset, as well as in the table view.</td>
      <td
      style="text-align:left"><code>&lt;sort name=&quot;sort_order&quot; name_friendly=&quot;Sort Order&quot; /&gt;</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">Text</td>
      <td style="text-align:left">This field creates a text field limited to 150 characters.</td>
      <td style="text-align:left"><code>&lt;text name=&quot;homepage_title&quot; name_friendly=&quot;Homepage Title&quot; /&gt;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Textarea</td>
      <td style="text-align:left">This creates an open text area with an unlimited character count. The
        bottom right corner is draggable for resizing. Line breaks print out as
        <br
        />tags unless you add &apos;_raw&apos; to the end of the field name in the
        Parsley call. Use carriage returns or HTML to create line breaks.</td>
      <td
      style="text-align:left"><code>&lt;textarea name=&quot;bubble_blurb&quot; name_friendly=&quot;Bubble Blurb&quot; list=&quot;1&quot; /&gt;</code>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">Toggle</td>
      <td style="text-align:left">
        <p>This creates a customized toggle field made up of key:value pairs. The
          key will either be 0 (zero) or 1 (one), however the value is customizable.
          Since the key is either 0 or 1, the logic for if-statements or where-statements
          will take the form of</p>
        <p><code>{{ if {scope.item} == 0 }}       {{ if {this == 0} }} </code>
        </p>
      </td>
      <td style="text-align:left"><code>&lt;yes_no name=&quot;field_type_toggle&quot; name_friendly=&quot;Field Type (text: 150 character limit; textarea: unlimited)&quot; options=&quot;0:Text;1:Textarea;&quot;  list=&quot;1&quot;/&gt;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">UUID</td>
      <td style="text-align:left">This field generates a UUID when your content model is saved.</td>
      <td
      style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">WYSIWYG</td>
      <td style="text-align:left">This creates a &apos;What You See Is What You Get&apos; (WYSIWYG) text
        field, i.e., all formatting that you have, such as bolded text, font size,
        italics, etc. will be exactly what you see on your site.</td>
      <td style="text-align:left"><code>&lt;wysiwyg_advanced name=&quot;image_caption&quot; name_friendly=&quot;Image Caption&quot; /&gt;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">&lt;code&gt;&lt;/code&gt;</td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
    </tr>
  </tbody>
</table>

