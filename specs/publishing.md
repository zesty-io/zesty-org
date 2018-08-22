# Publishing

## Zesty.io Publishing Specification

v0.1 last updated 4.11.18

**Overview**

Zesty.io allows for creating drafts, publishing, un-publishing, and scheduled publishing for multiple versions of content. This document explains the effect of each publish action on content.

**Basic Rules to publishing**

* Draft content is only available through the development preview.
* Published content is available through the live public domain.
* Only one published version content is available at a time
* Only one version can be scheduled to be published at a time

## Creating / Saving Drafts

When creating new content, the most common operation is to save a draft. Upon first save, a draft is created, and every subsequent save, another draft is saved. Drafts are not publicly available through live API calls or Parsley. Drafts become publicly available when they are published.

## Publishing

Publishing will take the current content version you are working on and make it public immediately. If you are using our Global Web Caching feature, than it may take 10-20 seconds to replace a previously published version.

Publishing when Content is Scheduled will clear the scheduling.

## Scheduling

A version of content can be scheduled to publish on a certain date and time, to the minute. Whether content is yet to be published, or in a published state, a scheduled time can be set. Once the scheduled time is hit \(GMT/UTC\) the previously published version of the content will expire and the new version will resolve. If there was no previously published page, the content url will go from 404 status to 200 status.

If content is published while a previous version of that content is scheduled to publish on a future date, the scheduled date will be voided.

To schedule a different version of content to be published while an earlier version is scheduled, you must first cancel to original schedule.

## Unpublishing

Unpublishing instantly removes the content from public view, and cancels any future scheduled dates to publish. If the content was associated with a page url, that url will 404.

