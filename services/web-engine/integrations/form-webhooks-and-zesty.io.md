# Form Webhooks and Zesty.io

![Zesty.io outbound webhook](https://wyp1jm.media.zestyio.com/zestyio-outbound-webhook.png)This document explains what a **form Webhook** is, how they work, and how to use Webhooks available in Zesty.io. This tutorial expects you to have a Zesty.io site ready to work in, and have roughly 15-30 minutes to test from start to finish.

### What are Webhooks?

Webhooks are a simple way to interconnect computer systems. Webhooks work by passing a payload of information \(in Zesty.io's case, the information your HTML form asks for\) to a specific URL endpoint. That URL endpoint is typically a remote server, controlled by you, and can be on any server, anywhere on the internet. The server that the URL address is connected too should be fabricated to accept this payload, and from their make decisions on what to do with it. [Learn more about Webhooks](http://www.programmableweb.com/news/what-are-webhooks-and-how-do-they-enable-real-time-web/2012/01/30).

What is makes Zesty.io form Webhooks different from traditional GET or POST form actions is the way they are processed. Zesty.io Webhooks were engineered to operate on a different thread, which means your website will never waiting for a response.

## Steps to set up a Form Webhook in Zesty.io

_15-30 minute start to finish_

We have set up a simple example that leverages a free server on [Heroku](https://www.heroku.com/) which deploys a codebase from Github. It will capture a Zesty.io Form Hook and post that information to the chat application [Slack](https://slack.com/) . To get started you need a [Slack account](https://slack.com/create#email) and a [Heroku account](https://signup.heroku.com/). Both are free and only take a few minutes to get started.

* [GitHub: Example Form Webhook Project for Node.js](https://github.com/zesty-io/example-form-webhook-slack-node-js)
* [GitHub: Example Form Webhook Project for PHP](https://github.com/zesty-io/example-form-webhook-slack-php)

The instructions below use the Node.js example.

### Step 1: Setup a slack account. \(5 minutes\)

If you're already an admin to a slack chat room, you can skip to step 2. Otherwise, create a [slack team chatroom here](https://slack.com/create#email), it's free. Once you have slack running, invite some friends to show off your your new cool tricks and proceed to step 2.

### Step 2: Prepare Slack for integration by generating a webhook url \(5 minutes\)

Once you have your slack account created, you're going to create an incoming webhook. When the Slack application is open, click on the team name, a drop down will appear, in that drop down click Apps & Integrations.

![Click the team name](https://wyp1jm.media.zestyio.com/slack-integrations.png)

From there a search box will appear, in that search box type `incoming webhook` ![search incoming webhooks](https://wyp1jm.media.zestyio.com/incoming-web-hook.png)

That will open your incoming webhooks dashboards. You will see your chat room team name with a `configure` button next to it. Click the configure button. ![configure your webhook](https://wyp1jm.media.zestyio.com/incoming-web-hooks-dashboard.png)

You will now see a button that says `add configuration`, click that button. It will open a prompt that lets you choose your channel, select `general` and click `add incoming Webhooks integration`. After doing this you will see a url that will look like this: `https://hooks.slack.com/services/XxXxXxXxX/XxXxXxX/XxXxXxXXxXxXxXXxXxXxX`, copy your webhook url to your clipboard, as you will need it for step 3.

### Step 3: Deploy your Heroku Server

If you already have a Heroku account, proceed to click the button below. If you do not have an account, [create one here](https://signup.heroku.com/), then click the **Depoly to Heroku** button below.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/zesty-io/example-form-webhook-slack-node-js)

That button will open a heroku prompt to create a new server. This prompt asks for config variables, paste your slack webhook url in to the config variable _SLACK\_WEBHOOK\_URL_, then click `Deploy for Free` ![Heroku config screen](https://wyp1jm.media.zestyio.com/heroku-screen1.png)

After clicking deploy, you will see two buttons `manage app` and `view`, click `manage app`. It will open a dashboard with six menu items. The last one is `settings`, click settings. Scroll down to domains, and copy the _Heroku Domain_ provided.

### Step 4: create the Form Webhook in Zesty.io

Take your copied Heroku domain from step 3 and prepend `https://` to it and append `/submission`. The full URL should look something like this: `https://zesty-webhook-test.herokuapp.com/submission`. This is the URL you will put in the hidden field named `_zesty_webhook` on the form you create in Zesty.io.

**Example form HTML code to put on your Zesty.io template in the Code Editor:**

Save in Zesty.io, goto the page in Zesty.io's live preview, and Submit a form and watch watch for your slack channel to light up with the form info you submitted.

### Congratulations! Now let's dive deeper.

You just successfully connected three applications together: Zesty.io, your own Node.js Heroku server, and Slack. Congratulations, you rock! Being able to network applications together allows you to maximize the benefits of each application without running into the security or update risks that occur when you customize a softwares codebase!

**Zesty.io** is a SaaS software that does not let you modify its codebase, which the same goes for **Slack**, but both application allow you to leverage Webhooks to integrate into other applications. Since Zesty.io and Slack are not directly integrated for form posting, you created a "middleware" server with **Heroku** to connect them. ![Zesty.io Heroku Slack Integration](https://wyp1jm.media.zestyio.com/zestyio-heroku-slack-diagram-transparent.png) We got you going quickly by providing a preconfigured Heroku server with Node.JS and a simple Slack integration. The cool thing is you did not have to use Heruko, Node.js, or Slack! You could for example send the Webhook to an existing server or web application you run. From there you could to do more than post to Slack, it could connect to Mailchimp, Salesforce, or store that information to a database on AWS. The possibilities are endless!

### Modifying the Node.js middleware server

If you wish to modify the codebase you deployed to Heroku, start by checking out the Github Repo example we used: [https://github.com/zesty-io/example-form-webhook-slack-node-js](https://github.com/zesty-io/example-form-webhook-slack-node-js) the two files you should be most interested in are `index.js` in the main directory, and `/src/sendFormToSlack.js` file in the `/src/` directory. `index.js` tells the server to accept a data post to `/submission` and have `/src/sendFormToSlack.js` handle that request. Read line by line and check out the comments, as they will help explain what some lines do.

### **index.js**

This file start the service and handles the requests into the server.

 \#\#\*\*/src/sendFormToSlack.js\*\* This file include the Slack dependency and uses \[https://www.npmjs.com/package/slack-node\]\(https://www.npmjs.com/package/slack-node\) to connect to slack.

To start modifying these files, you will want to connect your Heroku app to a forked version of this GitHub repository, from there you can modify files and have them instantly deployed for testing. You can learn more about connecting GitHub and Heroku [here](https://devcenter.heroku.com/articles/github-integration).

Have fun!

