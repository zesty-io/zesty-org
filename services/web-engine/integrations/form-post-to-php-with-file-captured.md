---
description: >-
  This document walks you through posting a form with a file payload from a
  Zesty.io website to a remote PHP server that will capture the information,
  store the file to a temporary directory, and return
---

# Form Post to PHP with File Captured

![Zesty.io outbound webhook](https://wyp1jm.media.zestyio.com/zestyio-outbound-webhook.png)This document walks you through posting a form with a file payload from a Zesty.io website to a remote PHP server that will capture the information, store the file to a temporary directory, and return back to the Zesty.io website. This tutorial expects you to have a Zesty.io site ready to work in, and have roughly 10-20 minutes to test from start to finish.

## Steps to set up a Form File Capture in Zesty.io

_10-20 minute start to finish_

We have set up a simple example that leverages a free server on [Heroku](https://www.heroku.com/) which deploys a codebase from Github. It will capture a Zesty.io Form post and store information locally, then return to a website thank you page . To get started you need a [Heroku account](https://signup.heroku.com/), it is free and only take a few minutes to create.

### Step 1: Deploy your PHP Heroku Server

If you already have a Heroku account, proceed to click the button below. If you do not have an account, [create one here](https://signup.heroku.com/), then click the **Depoly to Heroku** button below.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/zesty-io/example-form-file-post-with-return-php)

That button will open a Heroku prompt to create a new server using this PHP repository we created for this tutorial: [Example Post File Capture Project for PHP](https://github.com/zesty-io/example-form-file-post-with-return-php). When you are done with this tutorial you may fork this repository and customize it to suit your needs. In the Heroku prompt, it will ask for a config variable: your file size limit **FILE\_SIZE\_LIMIT**

After clicking deploy, you will see two buttons `manage app` and `view`, click `manage app`. It will open a dashboard with six menu items. The last one is `settings`, click settings. Scroll down to the Domains section, and copy the _Heroku Domain_ provided.

### Step 2: create the Form with Files in Zesty.io

Take your copied Heroku domain from step 1 and prepend `https://`. The full URL should look something like this: `https://zesty-php-file-capture-test.herokuapp.com/`. This is the URL you will put in the form action parameter on the `<form>` tag.

**Example form HTML Form code to put on your Zesty.io template in the Code Editor:**

```text
<form enctype="multipart/form-data" action="http://zesty-php-file-capture-test.herokuapp.com/" method="POST">
    
    <!-- MAX_FILE_SIZE must precede the file input field -->
    <input type="hidden" name="MAX_FILE_SIZE" value="30000" />
    
    <!-- RETURN_URL must precede the file input field, used after file is uploaded -->
    <input type="hidden" name="redirect_target" value="http://www.your-website.com/thank-you/" />
    
    
    <!-- Name of input element determines name in $_FILES array -->
    <label>Send this file: <input name="userfile" type="file" /></label>
    <br>
    <input type="submit" value="Send File" />
</form>
```

Save in Zesty.io, goto the page in Zesty.io's live preview, and Submit a form. Depending on your file size and internet connection, the time may vary before the page return to the thank you call back. You can verify the file uploaded by visting your Heroku domain `https://zesty-php-file-capture-test.herokuapp.com/list.php` as that will show you files uploaded. Note, every time to redeploy the Heroku site, all files will be wiped out. From here you pass the files to your favorite storage service like AWS S3 or Dropbox.

### Congratulations! Now let's dive deeper.

You just successfully connected Zesty.io to your own custom PHP server hosted on Heroku. Congratulations, you all star! Being able to network applications together allows you to maximize the benefits of each application without running into the security or update risks that occur when you customize a softwares codebase!

### Modifying the PHP middleware server

If you wish to modify the codebase you deployed to Heroku, start by checking out the Github Repo example we used: [https://github.com/zesty-io/example-form-file-post-with-return-php](https://github.com/zesty-io/example-form-file-post-with-return-php) the two files you should be most interested in are `/public/index.php` in the `/public/` directory, and `/public/list.php` file in the `/public/` directory. `index.php` does all the heavy lifting of accepting the payload and saving the file to the server's `/tmp/` directory. `list.php` is there to verify your file uploads are working.

You can Fork the [https://github.com/zesty-io/example-form-file-post-with-return-php](https://github.com/zesty-io/example-form-file-post-with-return-php), hook it up to Heroku or your own server, are start making changes to connect to any service you wish.

Have fun!

