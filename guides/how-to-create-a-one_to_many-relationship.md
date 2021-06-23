# How to Create a one\_to\_many Relationship

## Getting Started

A good way to explain one-to-many relationships is through tags. In Zesty.io blogs, tags can be used to tie related content together.

To demonstrate how to use tags, lets make a blog content model. Once the blog is created, create a new Article Tag from the content page.

![contentTab](https://wyp1jm.media.zestyio.com/screen-shot-2016-07-07-at-12-33-26-pm.png)

Now in the Articles section, you can select a tag from the 'Article Tags' field.

![articleTag](https://wyp1jm.media.zestyio.com/screen-shot-2016-07-07-at-1-24-23-pm.png)

The one-to-many relationship here works in that you can have many tags to one article. This is particular useful for organizing your content, or even doing creative things like looping through the tags to create a way to filter through articles by the tags themselves. For a guide to do just that, click [here](https://zesty.org/guides/how-to-filter-by-tags)

## In Parsley:

When you create a blog in zesty, the logic behind the tags is already set up. Lets take a look at how tags are connected to articles in Parsley:

{% embed url="https://gist.github.com/Slunk32/4ea1c2033455c3dce273d383da5ada64" caption="" %}

The above code creates the listing of tags in the article 'tag' page:

![tags](https://wyp1jm.media.zestyio.com/screen-shot-2016-07-07-at-5-34-30-pm.png)

