---
description: >-
  Fields are added to each of the high-level components in the Content
  Structure. All of your site's content will be added into fields.
---

# Adding Fields

### Get Started

After you've created a Page, Page Group, or Data Set, you're ready to start adding fields for your content. Adding fields is done in the Schema section. Select the set that you would like to add fields to from the left sidebar list and then click on the Add Fields button.

### Datatypes

Each field is defined by its datatype and some datatypes are more specialized than others. For example, the Date field datatype only takes a date in the form of YYYY-MM-DD. Please see a list of all our field datatypes and their descriptions [here.](/fields) You'll need to select a datatype for the the field you are adding then give it label which will be used throughout the interface and a code reference name which will be used with Parsley.

### Label v. Reference Name

A field's label will be what's displayed throughout the Content entry interface to help you quickly spot what that entry is being used for. The reference name is what is used for your HTML templating on the backend using Parsley.

### Deactivating Fields

Fields can also be deactivated if they are no longer useful to you. To deactivate a field follow these steps: 1. Navigate to the Schema section 2. Select the content model that contains the field that you want to deactivate 3. Find the field that you want to deactivate and select it 4. The selected field should have opened and there will be a red-orange "Deactivate" button located on the right-hand side of the row. Click the "Deactivate" button. 5. Confirm that you want to deactivate that field by clicking the green "Yes, Deactivate it" button in the confirmation pop-up.

Note that fields can be re-activated at any time if you'd like to bring them back to the content model. Because of this, the reference names are appended to the fields even if they are deactivated. If you would like to deactivate a field but keep the same reference name for a new field, first change the reference name of the field that you want to deactivate, and then add a new field and assign the reference name that you would like. Duplicate Labels and Reference names are not allowed if they're within the same content model.

