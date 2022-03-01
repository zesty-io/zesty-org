---
description: >-
  Pagination is a great way to break up content over a number of pages. Whether
  it's a multi-page article or a table of data breaking it across multiple pages
  can help your user navigate more easily.
---

# How to Implement Simple Pagination

### Things to know

This article is going to assume a proficient knowledge of [each loops](https://developer.zesty.io/parsley-templating/iteration-or-looping/) and [variables](https://app.gitbook.com/guides/understanding-and-using-parsley-variables). Specifically we will be heavily using the "limit" filter for each loops and the "get\_var" functionality. For this guide, I will be looping through a pageset named "blog\_article" and will be showing 5 articles per page.

### Step one:

#### &#x20;Write the each loop for the first page using variables for limit operators

To start we want to create the page with the each loop set up to generate the content for the page. We want to add a limit to the each loop. If you write "limit" followed by one number, that is the total number the each loop with show. If you write "limit" followed by 2 numbers, separated by a comma, the first number is how many items to skip, and the second number is how many to show. Our initial loop we will use a limit of 0, 5 so we skip none and show five. We'll set those numbers as variables and then call those variables in the each loop

{% embed url="https://gist.github.com/dustinhorning/400beeb72f3cf28ae71ed220c94bbc9a#file-pagination-step-1" %}

### Step two&#x20;

#### Update the number to skip to be dynamically set by a Get Variable

The only thing that changes between pages in our each loop will be how many entries to skip. So we are going to set up the skip variable to check if there is a Get Variable, a variable in the URL, and if so update the skip variable to that number. If there isn't a Get Variable we know we are on the first page, so we can set the skip variable to zero in that case.

{% embed url="https://gist.github.com/dustinhorning/e5503968d931cc190d14b0746ff15448#file-pagination-step-2" %}

### Step Three

#### Add previous and next buttons that set our Get Variable

Now that our skip variable is ready to be set by a get variable, all we need is a link that updates the url. Our get variable for our next page will always be equal to the number we skipped on our current page, plus the number we've shown, and our get variable for our previous page will always be the number we skipped minus the number we showed. We can use the parsley "math" call to do some basic math in our hrefs.

{% embed url="https://gist.github.com/dustinhorning/58490e7eb862d3c69dbc76367e2dbf08#file-pagination-step-3" %}

### Step Four&#x20;

#### Hide previous link on the first page

Our previous button does no good when we are on the first page, so we need to add an if check to know when to show it. We know the number to skip is always equal to zero on the first page, so we can check if our skip variable is not equal to zero, then show the previous link.

{% embed url="https://gist.github.com/dustinhorning/83e6fe9f9108fab277699ebc8f1766e2#file-pagination-step-4" %}

### Step Five&#x20;

#### Hide next link on the last page

Knowing when you're on the last page is trickier than knowing when you're on the first page. With the first page skip is always zero, but with the last page the number to skips is dynamic and will change as entries are added or removed. We need a way to check if the last item in our each loop is the last item available or if it was stopped because of the limit. Then we know if the last item in our each loop wasn't the last item available then we still need a next button. There are a couple ways to go about this, but my solution is to add a new each loop below our original and exactly like it except with the reverse sort order and a limit of 1. Then set a unique variable in both each loops equal to the item's ZID. Now we can check if these ZIDs aren't the same, we know to show the next button, because there are still more entries that can be shown. Pay attention to line 6 and lines 9 through 13 in the code below.

{% embed url="https://gist.github.com/dustinhorning/05206db9ac9f160a38316ff4d7abe843#file-pagination-step-5" %}

### Here is the complete code

{% embed url="https://gist.github.com/dustinhorning/dddf3d47377b7adeea0289131a45944e#file-pagination-step-6" %}

