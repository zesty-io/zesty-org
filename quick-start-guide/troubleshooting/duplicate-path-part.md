---
description: Duplicate path part errors.
---

# Duplicate Path Part

As your content grows there are times that may arise when content overlaps. These overlaps can prevent Content Items from saving and publishing. Duplicate Content Item URL path parts will return an error in the Manager when trying to save or create the item. &#x20;

### URL Path Part

URL path parts are located in the SEO & Meta section of the Content Item. When creating an Item the initial URL path part is established by the content of the first text field. There are two aspects at play that can cause a duplication of path parts:

1. The Item's Parent path: this is located in the _**Select this Page's Parent**_ field of the SEO & Meta section.
2. The Item's URL path part: this is located in the _**URL Path Part**_ field of the SEO & Meta section.&#x20;

![Meta settings in the creation of an Item & updating an Item](../../.gitbook/assets/meta\_settings.png)

#### Duplication Error During Creation

Creating two Content Items with the **same** parent and URL path part will block the item from creating. Content Items that have the same URL path part **but** different parent path routing will not block one another. At the bottom of the Item creation screen, the user will have access the to parent path and URL path part. These can be modified before the item is created and &#x20;

When creating an item that has a duplicate path, the user will be presented with the following error:

![Duplicate URL routing error on creation of new Content Item](../../.gitbook/assets/dup\_url\_creation.png)

Scrolling to the bottom of Item creation will give the user access to the SEO & Meta fields shown below:

#### Duplication Error During Saving

A similar error will occur when trying to save an item with duplicate routing. Updating the parent path and/or URL path part to a URL that is currently assigned to another Item, causes the Manager to respond with the following error:&#x20;

![Duplicate URL routing error on update and save of Content Item](../../.gitbook/assets/dup\_url\_save.png)

The duplication can be seen in the SEO & Meta section of the content item, shown below. It will show the assigned parent URL routing as well as the item specific URL path part.&#x20;

### Resolving Duplication Errors

To resolve either of these errors one of the following updates will need to be made:

1. Update the URL path part to an endpoint not currently assigned to another item with the same parent page routing.&#x20;
   * Updating an Item's URL path part may better suit use cases where the parent path lends additional information about the content or categorizes the content based on its relationship with another set of data.&#x20;
   * By changing the content in the _**URL Path Part**_ field, the item keeps its parent routing but removes the conflict of two different sets of content routed to the same endpoint.&#x20;
   * _**Note:**_ Changes do not have to be made to the first text field of the content item, in order to change the path part. These two items can be updated independently of one another.
2. Change the Page's Parent routing by selecting a different parenting path.
   * When changing the parent routing, the user ensures the two items that have the same URL path part are routed from different parent locations. This removes the conflict between the two items.
   * _**Note:**_ updating the Page's Parent routing may not always be ideal, especially in circumstances where the parent routing lends additional information regarding the content. _For example_, the parent routing establishes an item category and its relationship to a category model. In these use cases, option two is more appropriate.
