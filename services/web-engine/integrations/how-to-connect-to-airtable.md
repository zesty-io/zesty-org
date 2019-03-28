---
description: >-
  This document walks you through posting a form with a file payload from a
  Zesty.io website to a remote PHP server that will capture the information,
  store the file to a temporary directory, then send
---

# How to Connect to Airtable

![Zesty.io outbound webhook](https://wyp1jm.media.zestyio.com/zestyio-outbound-webhook.png)This document walks you through posting a form with a file payload from a Zesty.io website to a remote PHP server that will capture the information, store the file to a temporary directory, then send that information to a dynamic spreadsheet on [Airtable.com](https://www.airtable.com), and return back to the Zesty.io website. This tutorial expects you to have a Zesty.io site ready to work in, and have roughly 10-20 minutes to test from start to finish.

## Steps to set up a Form File Capture in Zesty.io

_15-30 minute start to finish_

### Pregame

**Heroku:** We have set up a simple example that leverages a free server on [Heroku](https://www.heroku.com/) which deploys a codebase from Github. It will capture a Zesty.io Form post and store information locally, then return to a website thank you page . To get started you need a [Heroku account](https://signup.heroku.com/), it is free and only take a few minutes to create.

**Airtable** Heroku will be used to send data to Airtable, so you will need an account on [www.airtable.com](https://www.airtable.com). After you setup an account, they will make you go through a tutorial, get through the tutorial.

### Step 1: Setup Airtable

Create a "From scratch" Airtable, it will start you with a couple of columns, delete them all but the **Name** column. Add one column of the type **URL** and name it **Userfile**. Your table column should like like the example below \(it may not be green\).

![Air table example](https://wyp1jm.media.zestyio.com/air-table-example.png)

Now goto [https://airtable.com/account](https://airtable.com/account) and click Generate API Key and copy your API key. You will need to input this key when you create the Heroku build.

Now open a new tab in your browser and goto [https://airtable.com/api](https://airtable.com/api). Click on the table you just create, and it will open API documentation. On the left navigation, click on Table 1 &gt; create a record. On the right hand side, where the code example for curl are, click "show API key". Your screen should look like this:

![Airtable Example](https://wyp1jm.media.zestyio.com/airtable-api-keys.png)

When you create your Heroku server on the next step, you will be asked for these values:

* Table ID
* API Key
* Table Name

### Step 2: Deploy your PHP Heroku Server

If you already have a Heroku account, proceed to click the button below. If you do not have an account, [create one here](https://signup.heroku.com/), then click the **Depoly to Heroku** button below.

The button below will automatically deploy prewritten code for you that connects Zesty.io to the Airtable API, you can find the code here [https://github.com/ardeay/zesty-io-airtable-php-integration-example](https://github.com/ardeay/zesty-io-airtable-php-integration-example), you may modify that code after you get it working.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/ardeay/zesty-io-airtable-php-integration-example)

That button will open a Heroku prompt to create a new server using this PHP repository we created for this tutorial: [Example Airtable Zesty Integration PHP](https://github.com/ardeay/zesty-io-airtable-php-integration-example). When you are done with this tutorial you may fork this repository and customize it to suit your needs. In the Heroku prompt, it will ask for mentioned in Step 2.

After clicking deploy, you will see two buttons `manage app` and `view`, click `manage app`. It will open a dashboard with six menu items. The last one is `settings`, click settings. Scroll down to domains, and copy the _Heroku Domain_ provided.

### Step 3: Add Form to Zesty.io

Take your copied Heroku domain from **Step 1** and prepend `https://` to it and append `/`. The full URL should look something like this: `https://YOURCUSTOMNAME.herokuapp.com/`. This is the URL you will put in the form action parameter on the `<form>` tag.

**Example form HTML Form code to put on your Zesty.io template in the Code Editor:**

Save in Zesty.io, goto the page in Zesty.io's live preview, and Submit a form. Depending on your file size and internet connection, the time may vary before the page return to the thank you call back. You can verify the file uploaded by visiting your Airtable or your Heroku domain `https://YOURCUSTOMNAME.herokuapp.com/list.php` as that will show you files uploaded. Note, every time to redeploy the Heroku site, all files will be wiped out. From here you pass the files to your favorite storage service like AWS S3 or Dropbox.

### Congratulations! Now let's dive deeper.

You just successfully connected Zesty.io to your own custom PHP server hosted on Heroku. Congratulations, you all star! Being able to network applications together allows you to maximize the benefits of each application without running into the security or update risks that occur when you customize a softwares codebase!

### Using this in Real Life

You can Fork the [https://github.com/zesty-io/example-form-file-post-with-return-php](https://github.com/zesty-io/example-form-file-post-with-return-php), hook it up to Heroku or your own server, are start making changes to connect to any service you wish.

Have fun!

