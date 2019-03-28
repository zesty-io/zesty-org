---
description: Learn how to filter through your content using tags
---

# How to Filter by Tags

In this guide we will walk through the process of using tags to filter through articles.

The first step is to create a one-to-many dataset with a text-field.

From page groups:

![onetomany](https://wyp1jm.media.zestyio.com/screen-shot-2016-06-29-at-2-31-27-pm.png)

From the data set:

![tags](https://wyp1jm.media.zestyio.com/screen-shot-2016-06-29-at-12-30-55-pm1.png)

Result:

![articleex](https://wyp1jm.media.zestyio.com/screen-shot-2016-06-29-at-11-35-39-am.png)

Now that we have our articles with tags constructed, we can start by creating buttons out of our tags. IMPORTANT: Be sure to set the value of the zid to each button as this is what will reference which tag is being called

You will also need to make a div for the results of your request.

Now that you have your buttons, you need to create the Ajax HTML file that will be called on each button press. AJAX files are templates that we write JavaScript AJAX requests against and get an HTML response. We plan on posting the user entered search term to this file so we know the Parsley get\_var property will be available for us to fuzzy match against. Lets have the results of our search display the title and body of the article.

Lastly, we have to write the javascript to add the click event to the buttons. To do this, let's put it in script tags at the bottom of the article file.

