# Zesty Burger: Running the Zesty Burger Demo

### Running the ZestyBurger iOS App

In this tutorial, I'll be building off of the existing [ZestyBurger](http://burger.zesty.site) instance to show you how to setup an iOS App. I'll explain the key components of how the app was built, and how you can do it yourself.

### Table of Contents

1. Getting Xcode
2. Getting the Base Project From Github
3. Installing the required libraries through Cocoapods
4. Setting the base project up with your Zesty.io instance

### Getting Xcode

To follow along this tutorial, you'll need [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12), which also means that you'll need a [Mac](https://www.apple.com/mac/). Once you've installed Xcode, you can move onto the next step.

### Getting the base project from Github

Simply click [here](https://github.com/ronakdev/zestyburger-iOS/archive/master.zip) and unzip the project wherever you want to store your code.

### Installing the required libraries through Cocoapods

Cocoapods is an open source dependency manager for Xcode projects. To streamline the process of getting data from Zesty.io, we've made a simple Cocoapod that you can use.

To install cocoapods, open up your terminal \(Can be found in Launchpad or Spotlight\) and enter in the following commands:

For macOS 10.11 and above \(El Capitan+\)

```text
sudo gem install -n /usr/local/bin cocoapods --verbose
pod setup --verbose
```

For macOS 10.10 and below

```text
sudo gem install cocoapods --verbose
pod setup --verbose
```

Sidenote: the `--verbose` flag is included so you can see the progress of each command, as these commands usually take a while to run.

Now, after Cocoapods has been installed, we'll navigate to your project's directory.

**Note**: If you're unfamiliar with terminal commands, simply open up a terminal window , type in `cd`, then hit space. Then drag the downloaded ZestyBurger folder to the terminal and hit enter.

Once you've navigated to the directory, run `pod install --verbose` and sit back and watch all the libraries install. While they install, here's a quick overview what's being installed:

1. ZestySwiftContentEndpointWrapper : This Cocoapod allows easy retrieval of your Zesty.io data / endpoints without any hassle
2. SwiftyJSON : This Cocoapod is required to manipulate the JSON objects that are returned if you call the `getCustomJSONData` function from the ZestySwiftContentEndpointWrapper

Lastly, you'll need to install [FontAwesome](https://use.fontawesome.com/releases/v5.2.0/fontawesome-free-5.2.0-desktop.zip) in order to see all the icons in the project.

### Setting the base project up with your Zesty.io instance

After you've installed everything, open the `.xcworkspace` file.

First, we'll need to set a development team. If you have an apple iTunes / iCloud account, you're good to go, \([although you may have to setup a developer account first](https://developer.apple.com/account)\). Click on the Blue "ZestyBurger" icon -&gt; Signing -&gt; Team -&gt; Add an account and sign in.

![Image of the select a team interface](https://wyp1jm.media.zestyio.com/xcodeteam.png)

Now, lets take a look at the code.

Inside, there's one line of code you'll need to change in order to set it up with your ZestyBurger-based instance.

Open `Core.swift` \(line 14\) and look at this line:

```text
let zesty = ZestySwiftContentEndpointWrapper(url: "https://6c706l48-dev.preview.zestyio.com/") 
```

Simply change the url to your domain, run the app, and see the magic happen!

**Note**: If your domain isn't on https, you'll need to configure your app to allow insecure connections. For best practices, we strongly recommend using an https domain. If you're using Zesty.io, chances are you already have https. If not, let us know and we can get you on https!

