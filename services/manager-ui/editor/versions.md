---
description: >-
  Learn about Zesty.io's Web IDE file versioning.
---

# Versioning

Code views (*single-page, multi-page and headless*), resources (*JavaScript and Stylesheets*) and custom endpoints are versioned whenever a save action occurs. As there can be multiple API consumers these save actions can result from different clients, such as; the Manager [Web IDE](https://zesty.org/services/manager-ui/editor), [Atom IDE](https://zesty.org/tools/atom-package), [node-sdk](https://zesty.org/tools/node-sdk) and your teams internal scripts.


## Diffing Versions

You may need to understand the difference between two versions of a code file. This can be done by using the diff button located on the file action bar. 

![Web IDE file action bar](https://kfg6bckb.media.zestyio.com/09-action-bar.png)

![Web IDE file diff view](https://kfg6bckb.media.zestyio.com/08-diff-view.png)

The diff view will allow you to select two versions of the same file and see the changes that have occurred between them. This can be helpful to debug a code issue or to revert to a prior version of a file. Using the "Load Version X" button will update the code editor to the selected versions code. Once loaded you can either make additional changes to the code or save it as is.

### Version Rollbacks

When accessing and restoring (saving/publishing) older versions of your code you’re creating new versions. In order to revert code you will need to follow these 3 steps.

1. Use the diff view to load a prior version of the code.
2. Save the now loaded prior version of code. 
   1. *Saving creates a new version. At this point you have reverted the files code.*
3. Publish the new version. 
   1. **By publishing you will make the reverted code live.**

**For example**, *if working on version 4 but want to revert to version 2, select and load version 2. And on save version 5 is created. To send that code live, you would then publish it.*


## Developing With Version Control. E.G. Git

Version control software provides very standardized and complete solutions for managing code. As such we do not want to duplciate that work. For example; we do not provide a way to [**merge**](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts) code. This should be handled on a local machine using your version control system of choice.

We highly recommend combining version control best practices along with our [Atom IDE package](https://zesty.org/tools/atom-package). Using version control locally will provide you with workflows such as; [branching, merging and making pull requests](https://guides.github.com/introduction/flow/). If code is merged to a master branch that work needs to be synced with your Zesty.io instance. When synced those changes will be on the Zesty.io dev envrionment, allowing for previewing the code effects on content before publishing. When code on your instance is ready to go live you will need to publish it from the Web IDE.
