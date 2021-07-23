---
description: >-
  Zesty.io can integrate seamlessly with HubSpot's CRM. Draw customers into a
  website with engaging content and capture lead information with a form that
  then syncs with your Hubspot CRM.
---

# HubSpot CRM Form Integration

Zesty.io can integrate seamlessly with HubSpot's CRM. Draw customers into a website with engaging content and capture lead information with a form that then syncs with your Hubspot CRM.

![HubSpot Logo](http://logonoid.com/images/hubspot-logo.png)

From Hubspot: _“The forms API's principle method is the submit form method, which allows you to pass any information captured on your website or application to HubSpot, including any custom data. This endpoint doesn't require authentication, so you can make the call from a form to our API from the client without needing to worry about insecurity.”_

## How to Submit data to a form

**Prerequisite:** You must have a form pre-built in your Hubspot CRM before integrating. You can see a list of forms on your portal by going to the Contacts &gt; Forms page.

### Steps

**1. Find your form’s GUID.**

You can locate this in HubSpot easily. Navigate to Contacts &gt; Forms from the navigation menu &gt; click to edit the form you wish to connect. When editing a specific form, you can find the Form GUID in the URL. In the URL

`https://app.hubspot.com/forms/62515/78c2891f-ebdd-44c0-bd94-15c012bbbfbf/edit/`

the form GUID is 78c2891f-ebdd-44c0-bd94-15c012bbbfbf

**2. Line up form fields**

**Required Parameters used in the Request URL**

* **Portal ID** \(an alpha numeric chain, like the one we got above\)
* **Form GUID** \(numerical\)

**Optional Parameters**

* **Form Fields** _&{property key}=x_ - You can include any number of Contact Properties in the form data. Use the Key for the property. \(The key for a property is contained in the "name" value when looking up your properties via the Contacts API\)
* **HS Context** _&hs\_context=x_ - Used in the request body, A JSON formatted block that contains contextual information for the form submission. See the following entries for descriptions of the included data, and below for the format of this parameter.
* **HubSpot tracking cookie** _"hutk":x_ - Used in the hs\_context parameter, The tracking cookie token value used for HubSpot lead activity tracking. You can retrieve this value from the "hubspotutk" cookie placed in the user's browser by the HubSpot JavaScript Tracking Code; the tracking code must be installed on the page that contains the form.

  Please Note While the hutk value is not required for the submission to be accepted, this token is used to associate analytics data with a contact record, so without this you will not see any page views or analytics source data for the contact record.

* **IP Address** _"ipAddress":x_ - Used in the hs\_context parameter, The IP Address of the lead converting. You can retrieve this from the server request.
* **Page URL** _"pageUrl":x_ - Used in the hs\_context parameter, The URL the page is submitted on.
* **Page Name** _"pageName":x_ - Used in the hs\_context parameter, The Name or Title of the page the form is submitted on.
* **Redirect URL** _"redirectUrl":x_ - Used in the hs\_context parameter, The url to redirect the visitor to. This value must be an absolute URL that includes the protocol \(http:// or https:// as the case may be\). Please Note If you have a redirect URL set up for the form in the UI, it will override this option, even if no redirect URL is included in the form POST.

**3. Setup URL and Post Request**

_Example URL:_ [https://forms.hubspot.com/uploads/form/v2/GUID](https://forms.hubspot.com/uploads/form/v2/GUID)

_Example body:_

 The hs\_context parameter should contain the following data, formatted in JSON. Please Note All parameters must be URL encoded before being passed through the API, including the hs\_context parameter.

**Example successful json response:**

```text
{
    "hutk": "60c2ccdfe4892f0fa0593940b12c11aa",
    "ipAddress": "192.168.1.12", 
    "pageUrl": "http://demo.hubapi.com/contact/", 
    "pageName": "Contact Us", 
    "redirectUrl": "http://demo.hubapi.com/thank-you/"     
}
```

**4. Test the Response**

The response from this API call will depend on how the call is made. If there is no "redirectUrl" value in the hs\_context parameter, then the response will be as follows:

* 204 when the form submissions is successful
* 302 when the form submissions is successful and a redirect URL is included or set in the form settings.
* 404 when the Form GUID is not found for the provided Portal ID
* 500 when an internal server error occurs

For more details on HubSpot integrations, view their documentation [here](https://developers.hubspot.com/docs/methods/forms/submit_form).

