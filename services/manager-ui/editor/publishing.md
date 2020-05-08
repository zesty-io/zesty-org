---
description: >-
  Learn about Zesty.io's Web IDE publishing flows.
---

# Publishing Files

Once you have code which is ready to be made public it will need to be published. There are a few ways this can be done. If you want to publish an individual file that can be accomplished with either the file’s "Publish Version X" button or on the file list by clicking the orange up arrow next to the file name. 

![Publish buttons with call outs](https://kfg6bckb.media.zestyio.com/05-publish-buttons-with-callouts.png)

Sometimes you'll have multiple files which need to be published at the same time. This can be done by using the "Publish All" button. Clicking this will open a modal showing you a list of file names and their current version. Confirming the "Publish All" action will then publish all the files shown in the list.

![Publish All Button](https://kfg6bckb.media.zestyio.com/06-publish-all-button.png)

![Publish All Confirmation Modal](https://kfg6bckb.media.zestyio.com/07-publish-all-modal.png)

When a publish event occurs it will cause a cache purge. This is the process of telling the CDN that the file is now out of date and it should return to the origin ([WebEngine](https://zesty.org/services/web-engine)) and fetch the latest version.