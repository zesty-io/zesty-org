---
description: >-
  Zesty.io can display video through 3rd party video services or self hosted
  videos uploaded to the media service.
---

# Video Embedding or Streaming Capabilities

### Embedding Video from Youtube, Instagram and Vimeo

Standard embed codes provided by social media sites may be copy and pasted into a WYSIWYG Editor or directly into the content model HTML view file.

![In youtube, click share, then click the embed option to get this view.](../.gitbook/assets/image%20%284%29.png)

Web Developers can take advantage of parsley by adding a field to a content model called "youtube\_id" \(for example\), and can make dynamic template views by using code like this:

```markup
<iframe width="560" 
        height="315" 
        src="https://www.youtube.com/embed/{{this.youtube_id}}" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>
```

### Streaming Video 

For running your own stream, we suggest using a third party like [Mux.com](https://www.mux.com). A Mux stream can be put into any Zesty.io view, and a content model field and parsley can be used to give the Content Editor control of the stream id. In this example, we use the field name _playback\_id_ for the Mux stream ID

```markup

<video id="liveStream" autoplay controls height="900" width="1600"></video>

<!-- Use HLS.js to support the HLS format in browsers. -->
<script src="https://cdn.jsdelivr.net/npm/hls.js@0.8.2"></script>
<script>
	(function(){
		// Replace with your asset's playback ID
		var playbackId = "{{this.playback_id}}";
		var url = "https://stream.mux.com/"+playbackId+".m3u8";
		
		// HLS.js-specific setup code
		if (Hls.isSupported()) {
			var video = document.getElementById("liveStream");
			var hls = new Hls();
			hls.loadSource(url);
			hls.attachMedia(video);
		}
	})();
	</script>
```

### Video Conferencing

You can run your own video conferencing setup on Zesty.io using Vidyo \([https://www.vidyo.com/](https://www.vidyo.com/)\), create an account. The setup requires view editing with javascript and an external server server call to issue a connection token. 

**View Code Example**

```markup

<script>
	function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Add Vidyo Libray Callback
function onVidyoClientLoaded(status) {
  switch (status.state) {
    case "READY":
      // Create Vidyoconnector
      VC.CreateVidyoConnector({
		  viewId: null, //"renderer",
        viewStyle: "VIDYO_CONNECTORVIEWSTYLE_Default",
        remoteParticipants: 3,
        logFileFilter: "warning info@VidyoClient info@VidyoConnector",
        logFileName: "",
        userData: "",
      }).then(function (vidyoConnector) {
        //For acessing camera, microphone and speaker in chrome for latest vidyo library 4.1.24.15 register this device listener
        vidyoConnector
          .RegisterLocalCameraEventListener({
            onAdded: function (localCamera) {
              // New camera is available
            },
            onRemoved: function (localCamera) {
              // Existing camera became unavailable
            },
            onSelected: function (localCamera) {
              // Camera was selected/unselected by you or automatically
            },
            onStateUpdated: function (localCamera, state) {
              // Camera state was updated
            },
          })
          .then(function () {
            console.log("RegisterLocalCameraEventListener Success");
          })
          .catch(function () {
            console.error("RegisterLocalCameraEventListener Failed");
          });

        // Handle appearance and disappearance of microphone devices in the system
        vidyoConnector
          .RegisterLocalMicrophoneEventListener({
            onAdded: function (localMicrophone) {
              // New microphone is available
            },
            onRemoved: function (localMicrophone) {
              // Existing microphone became unavailable
            },
            onSelected: function (localMicrophone) {
              // Microphone was selected/unselected by you or automatically
            },
            onStateUpdated: function (localMicrophone, state) {
              // Microphone state was updated
            },
          })
          .then(function () {
            console.log("RegisterLocalMicrophoneEventListener Success");
          })
          .catch(function () {
            console.error("RegisterLocalMicrophoneEventListener Failed");
          });

        // Handle appearance and disappearance of speaker devices in the system
        vidyoConnector
          .RegisterLocalSpeakerEventListener({
            onAdded: function (localSpeaker) {
              // New speaker is available
            },
            onRemoved: function (localSpeaker) {
              // Existing speaker became unavailable
            },
            onSelected: function (localSpeaker) {
              // Speaker was selected/unselected by you or automatically
            },
            onStateUpdated: function (localSpeaker, state) {
              // Speaker state was updated
            },
          })
          .then(function () {
            console.log("RegisterLocalSpeakerEventListener Success");
          })
          .catch(function () {
            console.error("RegisterLocalSpeakerEventListener Failed");
          });
		 		  
		  
        let user = makeid(5);
        
        let tokenEndpoint =
          "https://XXXXX.cloudfunctions.net/vidyo-token-generator?userName=" +
          user;

        fetch(tokenEndpoint)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            var token = data.token;
            vidyoConnector.Connect({
              host: "prod.vidyo.io",
              token: token,
              displayName: user,
              resourceId: "testRoom", //Conference Name
              onSuccess: function () {
                console.log("Sucessfully connected");
              },
              onFailure: function (reason) {
                console.log("Error while connecting ", reason);
              },
              onDisconnected: function (reason) {
                console.log("Disconnected ", reason);
              },
            })
              .then(function (status) {})
              .catch(function () {});
          });
      });
      break;
    case "RETRYING":
      console.log("Retrying");
      break;
    case "FAILED":
      console.log("Failed");
      break;
    case "FAILEDVERSION":
      console.log("Failed Version");
      break;
    case "NOTAVAILABLE":
      console.log("Not Available");
      break;
  }
  return true;
}

</script>
<div id="renderer" style="position: absolute; top: 50px; left: 0px; bottom: 0px; z-index: 99; height: 100%; width: 100%;"></div>
<script src="https://static.vidyo.io/latest/javascript/VidyoClient/VidyoClient.js?onload=onVidyoClientLoaded&webrtc=true&plugin=false"></script>

```

**GCP Cloud Function that issues a Token**

```javascript
exports.vidyoToken = (req, res) => {
  const cors = require("cors")();

  cors(req, res, () => {
    exportVidyoToken(req, res);
  });
};

const exportVidyoToken = async (req, res) => {
  
    if (!req.hasOwnProperty('query') && !req.query.hasOwnProperty('userName')) {
        return res.status(400).send("Error: expected userName param.");
    }

    jsSHA = require('jssha');
    btoa = require('btoa');
    fs = require('fs');
    var tokenGenerated = false;
   
   
    function generateToken(key, appID, userName, expiresInSeconds, vCard) {
        var EPOCH_SECONDS = 62167219200;
        var expires = Math.floor(Date.now() / 1000) + expiresInSeconds + EPOCH_SECONDS;
        var shaObj = new jsSHA("SHA-384", "TEXT");
        shaObj.setHMACKey(key, "TEXT");
        jid = userName + '@' + appID;
        var body = 'provision' + '\x00' + jid + '\x00' + expires + '\x00' + vCard;
        shaObj.update(body);
        var mac = shaObj.getHMAC("HEX");
        var serialized = body + '\0' + mac;
        return btoa(serialized);
    }

    let userName = req.query.userName
    let expiresInSeconds = 99999;
    let expiresAt = '';
    let appID = process.env.APP_ID
    let key = process.env.DEVELOPER_KEY
    let vCard = ''

    let token = generateToken(key, appID, userName, expiresInSeconds, "");
    
    return res.status(200).json({
        'token': token,
        'user': userName
    });
}




```

### WebRTC Options

Here is a list of 3rd party service options for peer to peer streaming through a website or mobile app.

1. [**Zoom**](https://zoom.us/plan/api) **- $100 for 4000 minutes \($0.025/minute\)**
   1. Pros - Large-scale, reliable company with solid, proven tech, robust API
   2. Cons - Expensive, lots of features, could potentially restrict content
2. [**Vidyo**](https://vidyo.io/) **- $3000 for 250,000 minutes \($0.012/minute\)**
   1. Pros - Simple html code to get started
   2. Cons - Company is focused on medical, large-scale accounts, weak support
3. [**EasyRTC**](https://easyrtc.com/) **- Free if you host your own**
   1. Pros - Do it yourself, more control, free
   2. Cons - Bare bones, no support
4. [**Twilio**](https://www.twilio.com/docs/video) **Video - $0.0015/minute for peer-to-peer, $0.01/minutes for room features**
   1. Pros - Great price for peer-to-peer only meaning you don’t get server-based room features 
   2. Cons - Only 10 people per room max, no group room features like recording, messaging, etc
5. [**AppRTC**](https://zoom.us/plan/api) **- Free, DIY**
   1. Pros - The ultimate bare bones, google sample app for WebRTC
   2. Cons - Online demo had maybe 1- 1.5s delay, probably harder to implement
6. [**Agora.io**](https://www.agora.io/en/pricing/) **- $2.50 per/1,000 minutes \($0.0025/minute\) for 720p**
   1. Pros - No limit on rooms, inexpensive, lots of features such as broadcasting, solid codebase
   2. Cons - Website not as enticing as Twilio but not bad either

