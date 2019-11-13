---
description: >-
  The Publish and List Statuses affect the visibility and accessibility of a
  content entries on the preview and live environments.
---

# Assigning Publish and List Status

### Summary

A practical way to think about publish and list statuses and the difference between them is that publish status only affects the live domain and list status is global \(live and preview\). An unlisted entry will disappear from the live and preview environments. However, an unpublished entry will disappear from the live environment only.

Keep reading to learn more about how this works .

### Overview

There are two primary statuses, the publish status and the list status. The list status controls whether or not a content entry is accessible in Parsley calls in both the preview and live environments. The publish status controls whether a page is accessible in any way on the live environment, and which version of the content is live. Unpublished pages will be a 404 page at the URL path on the live site and will functionally be unlisted for the live site.

### List Status

When an entry is set to Listed it is accessible via parsley calls. This includes each loops iterating through the Content Model the entry belongs to, direct set references with `filter/first/last/random`, and auto navigation calls, like `navigation`, `sectionlinks`, and `breadcrumbs`.

An unlisted entry would not be accessible to any of those calls. An unlisted page would still be accessible via it's direct link, except on the live site, if it is also set to unpublished.

### Publish Status

When an entry is published, the most recently published draft for that entry is accessible to the live site. If the entry is a page, it will be accessibly through it's direct link. If the entry is both published and listed it will be accessible on the live site through parsley calls. When an entry is unpublished, it is not accessible on the live site.

An unpublished page will 404 in the live environment and all unpublished entries are not accessible through parsley in the live environment. Publish status has no affect on the content in the preview environment.

When a draft of an entry is scheduled, the current publish status will remain until it's scheduled time to be published in the interface. Once the scheduled time occurs, the entry will be set to published if it's not already and the content assigned to the draft that's scheduled will be used in the live environment.

#### Possible Publish and List Statuses

* **Published and Listed:** The content entry will be accessible via parsley calls and via direct url in both preview and live environments
* **Published and Unlisted:** The content entry will NOT be accessible via parsley calls in both preview and live environments but will be accessible via direct url in both preview and live environments.
* **Unpublished and Listed:** The content entry will be accessible via parsley calls and via direct url in the preview environment only but will NOT be accessible via parsley calls nor via direct url in the live environment.
* **Unpublished and Unlisted:** The content entry will not be accessible via parsley calls in the preview or live environments but will be accessible via direct url in the preview environment only.

