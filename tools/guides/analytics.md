---
description: Zesty.io supports a range of analytics products.
---

# Analytics

## Google Analytics

{% hint style="warning" %}
**Making Changes to Existing Integrations**: After making changes to an existing GA integration you must publish a file \(either in the Editor or Content section\) before you will see the changes on the live site.
{% endhint %}

### Getting Started

To setup Google Analytics for your cloud content instance, you will need to first sign up with Google and obtain an Urchin ID and Profile ID from them.  Once you have those, follow these steps:

* Open the Manager
* Click on the "Schema" tab
* Click on the "Site Settings" button
* Click on the "Analytics" tab in the left hand menu
* Set your Google Urchin ID
* Set your Google Profile ID
* Make sure that the "Use Google Universal Code" toggle is on \(green\)
* Click "Save"

{% hint style="warning" %}
Analytics are no longer accessible via the content manager homescreen. 

Analytics are now located at `/analytics`.   
  
Only users with Owner, Admin, and Developer roles can setup Google Analytics.
{% endhint %}

#### Verifying Setup

Visit a page on your instance's **live domain** and inspect the &lt;head&gt; element. 

{% hint style="info" %}
Google Analytics setup can only be verified by inspecting the &lt;head&gt; of the _live_ domain. If your instance is not live use the zesty.dev domain to send your instance live and verify your Google Analytics setup. 
{% endhint %}

You should see a Google Analytics &lt;script&gt; tag that looks something like this \(with your ID replacing the demo data "99999"\):

```text
<!-- Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', '99999', 'auto');ga('send', 'pageview');
</script>
<!-- Google Analytics -->
```

Over time, you should see analytics data build up on the dashboard in your Google Analytics account.

### Cross Domain Tracking

Zesty.io also supports configuration of cross domain tracking when using Google Analytics.  This makes it possible for Google Analytics to see sessions on two related sites as a single session.

#### Cross Domain Tracking Setup

To configure this for your Zesty instance:

* Open the Manager
* Click on the 'Config' tab
* Click on the 'Site Settings' button
* Click on the 'Analytics' tab in the left hand menu
* Set your Google Urchin ID
* Set your Google Profile ID
* Ensure that the "Use Google Universal Code" toggle is on \(green\)
* Add a comma separated list of domains you wish to link for tracking into the "Google Auto Linker" field \(example: domain1,domain2,domain3\)
* Click "Save"

\(If you don't see "Google Auto Linker" in your settings, contact Zesty.io support to have it added\).

#### Verifying Cross Domain Tracking Setup

To check your changes, visit a page on your instance's live domain and inspect the &lt;head&gt; element. You should see a Google Analytics &lt;script&gt; tag that looks something like this:

```text
<!-- Google Analytics -->
 <script>
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i
 [r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsB
 yTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'sc
 ript','//www.google-analytics.com/analytics.js','ga');ga('create', '99999999', 'auto'
 , {'allowLinker': true});ga('require', 'linker');ga('linker:autoLink', ['domain1.com'
 ,'domain1.org','domain2.com']);ga('send', 'pageview');
 </script>
 <!-- Google Analytics -->
```

That's all you need to do!

