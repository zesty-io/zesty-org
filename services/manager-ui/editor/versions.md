---
description: >-
  Learn about Zesty.io's Web IDE file versioning.
---

# Versioning

Code views (*single-page, multi-page and headless*), resources (*JavaScript and Stylesheets*) and custom endpoints are versioned whenever a save action occurs. As there can be multiple API consumers these save actions can result from different clients, such as; the Manager [Web IDE](https://zesty.org/services/manager-ui/editor), [Atom IDE](https://zesty.org/tools/atom-package), [node-sdk](https://zesty.org/tools/node-sdk), your internal scripts.


## Diffing Versions

<img src="https://kfg6bckb.media.zestyio.com/08-diff-view.png" data-id="3-a0c2abf-z47g3" title="08-diff-view.png" alt="08-diff-view.png" />

You may need to understand the difference between two versions of a code file. This can be done by using the diff button located on the file action bar. <img src="https://kfg6bckb.media.zestyio.com/09-action-bar.png" data-id="3-a0c2abd-ejswb" title="09-action-bar.png" alt="09-action-bar.png" />  The diff view will allow you to select two versions of the same file and see the changes that have occurred between them. This can be helpful to debug a code issue or to revert to a prior version of a file. Using the "Load Version X" button will update the code editor to the selected versions code. Once loaded you can either make additional changes to the code or save it as is.

### Version Rollbacks

In order to revert code you will need to follow these 3 steps.

1. Use the diff view to load a prior version of the code.
2. Save the now loaded prior version of code. Saving creates a new version. At this point you have reverted the files code.
3. Publish the new version. By publishing you will make the reverted code live.

**For example**, *if I am working on version 4 but I wanted to revert to version 2, I would select and load version 2. And on save, I would create version 5. If I wanted to send that code live, I would then publish it. When accessing and restoring (saving/publishing) older versions of your code you’re creating new versions.*


