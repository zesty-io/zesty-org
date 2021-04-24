---
description: >-
  Adding image alt text helps describe the image for screen readers and makes a
  site more accessible.
---

# Adding Image Alt Text

### Overview

Adding alt text to images makes sites more accessible for users who are unable to see them. 

### Implementation

There are several ways that alt text can be implemented in Zesty.io. We recommend using the [Media section](https://zesty.org/services/manager-ui/media)'s Title field, or a text [field](https://zesty.org/services/manager-ui/schema/fields) in the [Content section](https://zesty.org/services/manager-ui/content) to make the alt description easily accessible to and editable by the content owner. 

Alt text can also be hardcoded in via the [Web IDE](https://zesty.org/services/manager-ui/editor), however this approach will not give your content owners the flexibility to edit that text as necessary. 

The steps below will cover how to use the Media sections Title field or a text field in the Content section to add alt text.  

### Steps: Media Section Title Field

1. Navigate to the Media section.

![Navigate to the Media section.](../.gitbook/assets/manager-ui-media.png)

2. Upload an image via drag n' drop or via the file manager.

![Upload images with the blue Upload button.](../.gitbook/assets/02-upload-image.png)

3. The Title field will automatically be filled out with the image's file name. Edit the Title field and add your image alt text. 

![Image settings modal shows information about an image.](../.gitbook/assets/03-image-title-update.png)

4. Save your changes to the Title field by clicking the green Save button.

![After changing your title click the green Save button.](../.gitbook/assets/04-update-title-and-save.png)

5. Navigate to the Content section.

![Navigate to the Content section.](../.gitbook/assets/media-man-ui-nav-to-content.png)

6. Add your image to your content and save \(and publish as necessary\).

![Add your image and save.](../.gitbook/assets/06a-alt-text-add-image-and-save.png)

7. Navigate to the Web IDE. 

![Navigate to the Web IDE.](../.gitbook/assets/07ab-alt-text-navigate-to-ide.png)

8.  Locate your view and add an HTML image tag and with an alt attribute. Fill out the alt attribute with the Parsley {{ .getImageTitle\(\) }} call. 

![Code in your image tag with alt text attribute.](../.gitbook/assets/08a-alt-text-code-in-title-field.png)

### Steps: Content Section Text Field

1.Navigate to the Media section. 

![Navigate to the Media section.](../.gitbook/assets/01ab-alt-text-navigate-to-media.png)

2. Upload an image via drag n' drop or via the file manager. 

![Upload an image.](../.gitbook/assets/02ab-alt-text-add-an-image.png)

3. Navigate to the Schema section.

![Navigate to the Schema section.](../.gitbook/assets/03b-alt-text-navigate-to-schema.png)

4. Locate the content model that you want to add the your alt text field to. In this example we're adding it to the About Us page.

![Locate the Content Model that you want to add a field to.](../.gitbook/assets/04b-alt-text-schema-locate-content-model.png)

5. Add a text field type called Image Alt Text. 

![Add a text field type for your alt image text.](../.gitbook/assets/05b-alt-text-add-text-field.png)

6. Navigate to the content section and locate the content model that you added your alt text field to.

![Locate the content model that you added your alt text field to.](../.gitbook/assets/06b-alt-text-locate-content-model.png)

7. Add or update your image, and add your alt text and save \(and publish as necessary\).

![Add or update an image, and add alt text, and save.](../.gitbook/assets/07b-alt-text-add-save-new-alt-text.png)

8. Navigate to the Web IDE.

![Navigate to the Web IDE](../.gitbook/assets/07ab-alt-text-navigate-to-ide.png)

9.  Locate your content model's related view. Add an HTML image tag and with an alt attribute. Fill out the alt attribute with the Parsley {{ this. }} call and complete the call with the name of the field that you created in step 2.

![Code in your image tag and alt attribute.](../.gitbook/assets/09b-alt-text-code-in-image-alt-text-field.png)

