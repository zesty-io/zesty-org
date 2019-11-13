---
description: Globals are a unique Content Model included with every Zesty.io instance.
---

# Globals

### Overview

Globals \(formerly Content Clippings\) is a Content Model designed to store content not assigned to any one page or other content entry. Often these content pieces are used site wide or control settings and default behavior.

### Default fields

Globals comes default with three fields: Site Name, Site Logo, and Footer Text. Site Name has a reference name of `site_name` and it is a text field. Site Logo is an image field with a reference name of `logo`. And Footer Text is another text field with a reference name of `footer_text`. These fields can be deactivated, renamed, reordered, or otherwise edited. They are not required.

### Assigning fields and entering content

You can assign fields and enter content similar to how you would any custom content set. To add fields, find `Globals` under Headless in the Schema section. To edit content, find `Globals` near the bottom of the Content Structure List under Headless in the Content section.

### Referencing in Parsley

To reference a field in Globals use `{{ globals.field_name }}` where `field_name` is replaced with the reference name to the field you want to access.

