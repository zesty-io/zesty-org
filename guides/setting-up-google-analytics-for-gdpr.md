---
description: >-
  How to be GDPR compliant with Google Analytics and Tag Manager using cookies
  and Javascript
---

# Setting up Google Analytics for GDPR

We are going to check for a cookie named trackMe, if that cookie is null, we will show a popup asking the user if its ok to run GA, if the cookie value is true, we will run the GA script. If it is false, we do not run the GA script.

### Step 1: Prepare Javascript to Check and Set Cookies

Javascript can access cookies, use these handy functions to set and check a cookie value. You'll want to load this function up first. This is vanilla Javascript, no framework needed.

```javascript
function setCookie(name,value,days=30) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}
```

### Step 2a: Remove the GA \(analytics\) and GTM \(tag manager\) auto loading

Remove all the GA and GTM script tags stuff from the `loader` view file in the editor and save it. If you are using Zesty.io GA auto loader, you need to delete the setting. You can delete the GA settings in config &gt; settings &gt; analytics.

### Step 2b: Create an Analytics Loading Function

We will want to setup a function to run Google Analytics, that way we can run it as a user accepts, and run it when we check the `trackMe` cookie.

```javascript
 function loadGoogleAnalytics(){
    var UACODE = "UA-XXXXXXX-X";
    var GTMCODE = "GTM-XXXXXXX";
	// run GA tracking scripts
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        
        ga('create', UACODE, 'auto');
        ga('send', 'pageview');
        
        document.write('<script async src="https://www.googletagmanager.com/gtag/js?id='+UACODE+'"><\/script>');
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', UACODE);
        
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',GTMCODE);
        
        document.write('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RKTZZ4" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>');
  }
```

### Step 3: Create CSS/HTML popup for unrecognized visits.

In your theme, create a page or panel with language about the cookies and some toggle buttons. You will check a cookie using the `getCookie` function to load or not load this.

```javascript
if (getCookie('trackMe') == null) {
	// run popup code
} 
```

![HTML/CSS popup, connect the buttons to your javascript functions.](../.gitbook/assets/screen-shot-2019-04-04-at-8.46.31-am.png)

### Step 4: Connect buttons to set a preference on a cookie 

 Setup on clicks to the buttons that setup a cookie `trackMe` to store the user's preference.

```javascript
document.getElementById("myAcceptBtn").addEventListener(
    "click", 
    setCookieAndLoad()
);

// this function is set this way so we do not have to reload the page
function setCookieAndLoad(){
    setCookie('trackMe',true,356);
    loadGoogleAnalytics();
}

document.getElementById("myRejectBtn").addEventListener(
    "click", 
    setCookie('trackMe',false,356)
);
```

### Step 5: Check the `trackMe` Cookie

If the trackMe cookie is true, we will want to run the load

```javascript
if (getCookie('trackMe') == true) {
   loadGoogleAnalytics();
} 
```

### Testing Cookies

Use Google Chrome and [download the EditThisCookie plugin](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=en).  Once installed, a cookie icon will appear on your toolbar. Use that to check if the `trackMe` cookie is there, you can also delete the cookie there.

