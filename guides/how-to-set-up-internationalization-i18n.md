---
description: >-
  Multinational and multilingual websites can be configured to point all
  visitors to a default page through this Setting.
---

# How to Set Up Internationalization \(i18n\)

### Overview 

The Settings section's i18n setting will help users manage internationalization and allow users to switch between different languages with the click of of the mouse. The purpose of this setting is to designate a specific path for the site to start on such as a page with a map that will allow users to choose their localized language.

The purpose of this head tag is to designate the path that you want _all_ users to be directed to no matter what their language is. For example, this is the page that your French-speaking users and American-English speaking users will see. Learn more about this with this [article from Google](https://developers.google.com/search/blog/2013/04/x-default-hreflang-for-international-pages). The page that is commonly designated has a map or links that allows users to select their locale. here. Hence, it's important to have languages setup and activated _before_ designating your the `x-default hreflang` path.

### Before you begin 

Before you setup this path you should have a language added to your instance and have it activated. Languages can be added and activated via [API](https://zesty.org/getting-started/i18n-multi-language).

**How to set up Internationalization**

From the config tab in the header, select ‘Languages’.

![configlanguage](https://wyp1jm.media.zestyio.com/screen-shot-2016-04-27-at-11-50-27-am.png)

**Default Language**

The default language will be the language automatically selected when creating a new page. **Note:** ‘Content Structure’ listed inside of the config tab will only show for the default language.

**Other Languages**

_Set as Default_: Setting a language as default will change the default language to the selected one.

_Activate for Website Visitors_: While adding a language to your site lets you interact with the content of the page through Zesty, the page will not be publically visible until you activate it. To make your page publically visible, select ‘Activate for Website Visitors’.

_Add a Language_: Select a language from the dropdown to store it in your language options. **Note:** Only certain users \(Admin and Developer\) will have access to add a language.

![configlanguage](https://wyp1jm.media.zestyio.com/i18n.gif)

**How to create content in other languages**

Once internationalization is set up, a language selector dropdown will appear in each content page.

![otherlanguage](https://wyp1jm.media.zestyio.com/i18n_lang.gif)

Select your new language option from the dropdown. Once selected, you will be able to edit content from the page specific to the chosen language.

[Contact us](https://www.zesty.io/contact/) to add internationalization to your site.

