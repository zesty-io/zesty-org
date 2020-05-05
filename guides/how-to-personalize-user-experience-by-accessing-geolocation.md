---
description: >-
  If a user's browser has access to the W3C Geoloction API, you can learn the
  latitude and longitude of a user through a couple simple Javascript function.
  This article gives you the example functions,
---

# How to Personalize User Experience by Accessing Geolocation

### Browser Compatibility

The Geolocation API works on the following browser versions and all of their successor editions: Firefox 3.5, Google Chrome, Opera 10.6, Internet Explorer 9.0, and Safari 5.

### Setting up the Javascript

Put this javascript into your `main.js` or inline on page in `<script>` tags, save, and open your site preview.

```text
function geoFindMe() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, geoOptions);
    } else {
        alert("Geolocation services are not supported by your web browser.");
    }
}

function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var accuracy = position.coords.accuracy;
    alert("lat: " + latitude + " long: " + longitude); // for testing purposes, delete this line before sending to production
    // write in your logic here
}

function error(error) {
    alert("Unable to retrieve your location due to " + error.code + ": " + error.message);
}

var geoOptions = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
};
```

### Accessing Latitude and Longitude

To test the script above is working, open your browser developer console and type `geoFindMe();` and hit return. If the above script was installed correctly, your browser should prompt you for permission to access your location. Allow permission. After allowing permission you should see a popup dialog box with your latitude and longitude.

The `success()` function shows you how to access the latitude and longitude values from the position object. Write your custom scripts in there and have fun!

