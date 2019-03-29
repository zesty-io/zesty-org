# How to Create one\_to\_one Relationships

### Overview

An easy way to think of one-to-one relationships in Zesty.io is to think of radio buttons.

![radiobuttons](http://i.stack.imgur.com/Ngv2E.png)

As opposed to something like check boxes where you can select many options for one question, with radio buttons you can only select one option for each question. One-to-one relationships in Zesty.io work exactly in this fashion. Lets take a blog for example.

When you create a blog in Zesty.io a one-to-one relationship between an article and an author is created.

#### relationship:

This has to match the name of the data set/template set/page set. Once the name is the same, this will dynamically set the dropdown field with the name of authors.

#### relationship\_field:

This is what the field will be called inside of the content page.

#### required:

This makes the field required to be submitted.

#### list:

This adds the field to the table-view.

## In Manager App:

In the config tab, here is what the above code creates:

![configexample](https://wyp1jm.media.zestyio.com/screen-shot-2016-07-07-at-11-43-53-am.png)

Now if we were to create an author:

![author](https://wyp1jm.media.zestyio.com/screen-shot-2016-07-07-at-11-54-16-am.png)

Each article will have a dropdown populated by the various authors you have saved in your dataset. Each article will have a required field of selecting one author, which is the core of the one-to-one relationship. Now whenever a new author is created, it will automatically be available in the article dropdown when selecting an author.

![authorarticle](https://wyp1jm.media.zestyio.com/screen-shot-2016-07-07-at-11-57-16-am.png)

