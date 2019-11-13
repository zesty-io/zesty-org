# Marketo Realtime Personalization Integration \(RTP Tag\)

Integrating RTP JavaScript API extends Marketo to your Zesty.io site easily. Using this script enables teams to track events and customize web pages dynamically in accordance to your Marketo campaigns with this script. You can also incorporate custom data events, display dynamic content, get visitor data, and exclude tag for specific bots.

_Note: You must be a Marketo Web Personalization customer and have the RTP tag deployed on your site prior to using the JavaScript API to utilize all of the possible integrations with Marketo listed above._

![Marketo Logo](http://logonoid.com/images/marketo-logo.png)

### Quick Tag Setup

The RTP tag should be inserted into the page you which to personalize. You can also have it present on every page by putting it into the zesty.io `loader` file.

### Account Setup

This method is called automatically on the tag level to set the relevant account id. You can set the account id when you wish to split between different domains.

Method Name: 'setAccount'

Parameter: accountId \(passed as a string\)

Example: `var accountId = '561-HYG-937';` `rtp('setAccount', accountId);`

### Personalizing Div Elements

_Note: In Marketo, you company must be a Web Personalization account and have the RTP tag deployed on your site prior to using the Dynamic Content API._ [_Read More_](http://developers.marketo.com/documentation/websites/rtp-dynamic-content-api/)

If autoRender parameter is passed as true, then this function will automatically render the content in the designated DOM element. `var autoRender = true;` `rtp('get', 'campaign', autoRender);`

`<div>` elements can be personalized by designated them with ID tags. For example you can create the div `<div id="my-marketo-personalization"></div>` , in Marketo's interface you need to setup a personalized space and input the target id to `my-marketo-personalization`.

### More learning

For full details on the RTP integration, visit the [Marketo documentation](http://developers.marketo.com/documentation/websites/rtp-js-api/)

