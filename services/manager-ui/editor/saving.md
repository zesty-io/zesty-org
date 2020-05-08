---
description: >-
  In the Editor section, you are able to use hidden saving and publishing
  functionalities.
---

# Saving

When initially writing or modifying code it only exists in your browser. The new experience uses your browser's localStorage to hold onto changes, thus reducing the risk of losing in-development work, but it is still important to save your work. When saving a file it will create a new immutable version. Once saved, your code is stored on the cloud instance and available to other team members.

Saving can be accomplished with either a manual press of the green Save button or using the CMD/CTRL + S key command. 03-save-button-with-context.png Mac systems use the CMD \(Command\) key while Windows and Unix systems use the CTRL \(Control\) key.

![Save Button](https://kfg6bckb.media.zestyio.com/03-save-button-with-context.png)

{% hint style="info" %}
Note: Learn more about the [Web IDE key command workflows](https://zesty.org/services/web-engine/interface/editor#shortcuts).
{% endhint %}

If you are working on a file and have not saved it you will see a white dot on the file tab to indicate it has changes which are not persisted.

![Example of an unsaved file display the white dot indicator](https://kfg6bckb.media.zestyio.com/04-white-dot-tab-unsaved-file.png)

Once you've made an unsaved change or if a team member has changed the code the file will then be out of sync. This is indicated by an orange dot on the file tab.

Out-of-sync files need to be "[diffed](https://zesty.org/services/manager-ui/editor/versions#diffing-versions)" in order to determine which version of the code should be chosen and saved.

