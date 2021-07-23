# Marketo: Custom Integration

Zesty.io can integrate seamlessly with Marketo's Rest API. Draw customers into a website with engaging content and capture lead information with a form that then syncs seamlessly with Marketo.

![Marketo Logo](http://logonoid.com/images/marketo-logo.png)

### Get started with Marketo’s REST API

You must have created a designated API only user before integrating with Zesty.io. For documentation, please visit [Marketo’s Quick Start Guide](http://developers.marketo.com/blog/quick-start-guide-for-marketo-rest-api/).

1. A Custom service is required to uniquely identify your client application. To create a custom application, go to the Admin-&gt;LaunchPoint screen and create a new service.
2. From the services options, choose "Custom." Input an appropriate Display Name, Description. It may be best to choose a descriptive Display Name and Description such as “ZESTY.IO INTEGRATION,” for clarity. For the user email address, select the API only user previously created.
3. After you create your custom service, click on “View Details” link on the grid.
4. Your client application will be able to use the Client Id and Client Secret to generate an access token. ![Marketo Example](https://wyp1jm.media.zestyio.com/marketo-example.png)
5. Copy and paste your authentication token into a text editor for your reference. Your authentication token will look similar to the example below: cdf01657-110d-4155-99a7-f986b2ff13a0:int
6. Now you’ll want to find the endpoint URL. All requests to the Marketo REST API will follow the format: `<REST API Endpoint URL>/rest/` To find your REST API Endpoint URL, go to Marketo Admin -&gt;Web Services. Scroll down to REST API. Your Marketo endpoint URL structure should look similar to the example below: `http://100-AEK-913.mktorest.com/rest/v1/lead/{id}.json`
7. Now you’ve got everything together to use your Authentication Token to Call Get Lead by Id API!
8. The easiest way to make your request to Marketo REST API is to paste the URL into your web browser’s address bar. Follow the format below: `http://<REST API Endpoint URL for your Marketo instance>/rest/v1/<API you are calling>?<access_token>` Example `http://100-AEK-913.mktorest.com/rest/v1/lead/318581.json?access_token=cdf01657-110d-4155-99a7-f986b2ff13a0:int`
9. If your call is successful, it will return JSON with the format below.

Learn more about [Authentication with Marketo](http://developers.marketo.com/documentation/rest/authentication/)

