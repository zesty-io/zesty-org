# Security

## Preview Lock Protection

The WebEngine preview url is locked from public consumption. The WebEngine preview URL will not render unless the user is logged in and has access to that instance. Alternatively, a password can be provided if the setting with `category: security` and `key: preview_lock_password` is set, a user may enter the password to start a verified session.

{% hint style="info" %}
**Any instance created on or after Jan 1, 2021 is automatically locked.** If your instance is older and you would like Preview Lock Protection, please reach out to support. 
{% endhint %}

Once a user is verified by \(via password or their user login session\), a unique device imprint cookie \[ZVerified\] is created and is used to quickly bypass the preview lock for every network request.

Preview Lock Protection exists to protect your un-published changes and to prevent users from using the preview URL in production.

