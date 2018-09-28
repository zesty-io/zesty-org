---
description: Building apps for Amazon Fire TV and Roku with Zesty.io
---

# Amazon Fire TV and Roku

## Introduction

With Zesty.io, it is easy to host and maintain content that can be used in an app on the Amazon Fire TV, or a channel on the Roku platform.  Both device families support this using MRSS format feeds.  Here, we'll look at how to build a suitable feed to power both as well as the specific steps needed to create the app for Amazon Fire and the channel for Roku.

## Creating a Video MRSS Feed

An MRSS feed is an extension of the standard RSS feed format with extra treatment for enclosures, used for syndicating audio, video and other multimedia content.  As with RSS, the feed is XML, and the basic structure looks like this:

```markup
<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
  <channel>
    <!-- Meta information about the feed -->
    <title>Lorem Ipsum...</title>
    <link>https://zesty.io</link>
    <language>en-us</language>
    <pubDate>Fri, 28 Sep 2018 20:15:31 GMT</pubDate>
    <lastBuildDate>Fri, 28 Sep 2018 20:15:31 GMT</lastBuildDate>
    <managingEditor>hello@zesty.io (Zesty.io)</managingEditor>
    <description>Lorem Ipsum...</description>
    <image>
      <!-- Logo image for the channel -->
      <link>https://...</link>
      <title>Zesty.io Presents...</title>
      <url>https://...</url>
      <description>Lorem Ipsum...</description>
      <height>500</height>
      <width>500</width>
    </image>
    <!-- The URL that the feed is served from -->
    <atom:link href="http://..." rel="self" type="application/rss+xml" />
    <item>
      <!-- Details about an individual item in the feed -->
      <title>Coffee Time!</title>
      <pubDate>Fri, 07 Sep 2018 00:00:00 GMT</pubDate>
      <link>https://zesty.io</link>
      <description>Lorem Ipsum...</description>
      <guid isPermaLink="false">https://zesty.io/7-6ee68ef-xv2ljs</guid>
      <!-- Item can be in many categories -->
      <media:category>All</media:category>
      <media:category>Food</media:category>
      <media:content url="https://..." duration="13.0" medium="video" isDefault="true">
        <media:title type="plain">Lorem Ipsum...</media:title>
        <media:description type="html">Lorem Ipsum...</media:description>
        <media:thumbnail url="https://..." />
        <media:credit role="author" scheme="urn:ebu">Zesty.io</media:credit>
        <!-- URL to the license terms for the content if applicable -->
        <media:copyright url="http://..." />
      </media:content>
    </item>
    <!-- ... more items -->
  </channel>
</rss>
```

#### Video MRSS Content Schema

From the above, we can see that we need to create the following headless content schemas \(datasets\) in Zesty.io:

**Categories:** a set of possible values to categorize items into.  Name this "categories", it will need mandatory fields as follows:

* category\_name: A string \(e.g. Nature, Documentary, Comedy\).

**Videos:** for our content items.  Call this "videos", and use these fields:

* title: A string \(the video title\)
* publication\_date: A date or date/time \(the date and optionally time that the video was added\)
* description: A text area \(description of the video's contents\)
* credit: A string \(string describing the author or content creator\)
* cover\_image: An image \(if you want to host images on Zesty.io\) or a URL \(if you want to host images elsewhere\)
* video\_file: An image \(which will be a video file hosted on Zesty.io\) or a URL \(if you want to host your video files elsewhere\).  Use .mp4 files or other supported formats for Fire TV
* duration: A number \(video play time in seconds\)
* categories: A one to many relationship with the "categories" headless dataset, allowing a video to be in one or more categories
* copyright\_url: URL to a webpage where the copyright information for the video can be found

**Channel Settings:** for our meta data \(channel name etc\).  We'll call this "video\_channel\_settings" and it will need the following fields, all of which are mandatory:

* channel\_title: A string \(the channel name\)
* channel\_link: A URL \(URL for the website associated with the channel\)
* channel\_editor: A string \(name / email of the channel's contact point\)
* channel\_description: A text area \(description of what viewers may find on the channel\)
* channel\_logo: An image \(if you want to host images on Zesty.io\) or a URL \(if you want to host images elsewhere\)

Then, simply add some content to each headless dataset using the Content tab in the Zesty.io manager.

#### Video MRSS Data Endpoint

The next step is to create an XML endpoint in Zesty.io that serves the content as an MRSS feed.  This is achieved by using values from "video\_channel\_settings" for the channel metadata fields, and "videos" and "categories" for each video item.

```markup
<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
   <channel>
      <title>{{video_channel_settings.first().channel_title}}</title>
      <link>{{video_channel_settings.first().channel_link}}</link>
      <language>en-us</language>
      <pubDate>{{site.date(D, d M Y H:i:s)}} GMT</pubDate>
      <lastBuildDate>{{site.date(D, d M Y H:i:s)}} GMT</lastBuildDate>
      <managingEditor>{{video_channel_settings.first().channel_editor}}</managingEditor>
      <description>{{video_channel_settings.first().channel_description}}</description>
      <image>
         <link>{{video_channel_settings.first().channel_link}}</link>
         <title>{{video_channel_settings.first().channel_title}}</title>
         <url>{{video_channel_settings.first().channel_logo.getImage()}}</url>
         <description>{{video_channel_settings.first().channel_description}}</description>
         <height>{{video_channel_settings.first().channel_logo.getImageHeight()}}</height>
         <width>{{video_channel_settings.first().channel_logo.getImageWidth()}}</width>
      </image>
      <atom:link href="http://{{site.domain}}{{page.getUrl()}}" rel="self" type="application/rss+xml" />
      {{each videos as video}}
      <item>
         <title>{{video.title}}</title>
         <pubDate>{{video.publication_date.date(D, d M Y H:i:s)}} GMT</pubDate>
         <link>{{video_channel_settings.first().channel_link}}</link>
         <description>{{video.description}}</description>
         <guid isPermaLink="false">https://zesty.io/{{video._item_zuid}}</guid>
         {{ each categories as cat where find_in_set(cat.zuid, '{video.categories}') sort by cat.category_name}}
         <media:category>{{cat.category_name}}</media:category>
         {{ end-each }}
         <media:content url="{{video.video_file.getMediaURL()}}" duration="{{video.duration}}.0" medium="video" isDefault="true">
            <media:title type="plain">{{video.title}}</media:title>
            <media:description type="html">{{video.description}}</media:description>
            <media:thumbnail url="{{video.cover_image.getImage()}}" />
            <media:credit role="author" scheme="urn:ebu">{{video.credit}}</media:credit>
            <media:copyright url="{{video.copyright_url}}" />
         </media:content>
      </item>
      {{end-each}}
   </channel>
</rss>
```

Save the endpoint in the editor as "/videofeed.rss", publish everything, then you should see your MRSS feed at "http://&lt;your\_zesty\_instance\_domain&gt;/videofeed.rss".

## Consuming the MRSS Feed with Amazon Fire TV

Amazon provides an online tool that allows you to create a Fire TV app from an MRSS feed.  Simply go to [Amazon Creator](https://creator.amazon.com/), login with your regular Amazon.com account and hit "Create New App".  You will be guided through a wizard and asked for the URL of your MRSS feed.  You can then test our your auto generated app in the online preview tool, set some color and other theme preferences and submit it to be published for all Fire TV users to discover and install.

Here's an example of what the auto generated app experience looks like using Amazon's preview tool:

![Previewing a Fire TV app powered by MRSS feed from Zesty.io](../../.gitbook/assets/firemrss.gif)

## Consuming the MRSS Feed with Roku

Details coming soon!

