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

### Step 2: Remove the GA \(analytics\) and GTM \(tag manager\) auto loading

Remove all the GA and GTM script tags stuff from the `loader` view file in the editor and save it. If you are using Zesty.io GA auto loader, you need to delete the setting. You can delete the GA settings in config &gt; settings &gt; analytics.

### Step 3: Create CSS/HTML popup for unrecognized visits.

In your theme, create a page or panel with language about the cookies and some toggle buttons. You will check a cookie using the `getCookie` function to load or not load this.

```javascript
if (getCookie('trackMe') == null) {
	// run popup code
} 
```

![HTML/CSS popup, connect the buttons to your javascript functions.](../../../.gitbook/assets/screen-shot-2019-04-04-at-8.46.31-am.png)

### Step 4: Connect buttons to set a preference on a cookie 

 Setup on clicks to the buttons that setup a cookie `trackMe` to store the user's preference.

```javascript
document.getElementById("myAcceptBtn").addEventListener(
    "click", 
    setCookie('trackMe',true,356)
);

document.getElementById("myRejectBtn").addEventListener(
    "click", 
    setCookie('trackMe',false,356)
);
```

### Step 5: Check the `trackMe` Cookie

```javascript
if (getCookie('trackMe') == true) {
	// run GA tracking scripts
	ga('send', 'pageview');	
} 
```

