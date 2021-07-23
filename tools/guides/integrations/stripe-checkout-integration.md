---
description: Integrate Stripe and Zesty.io to easily collect fees or donations.
---

# Stripe Checkout Integration

### Get Started

Stripe Checkout makes collecting a fee or donation easier than ever.

First, make sure you set up your API Keys in the Stripe Settings:

![](https://forum.zesty.io/uploads/zesty/original/1X/ad7a4922eed817969a0fdfe10f7340a85be2044f.png)

Once you've set up your API keys, you can add the necessary code:

You should see a button that looks like this:

![Stripe Button Example](https://wyp1jm.media.zestyio.com/stripe_pay_with_card_button.png)

When clicked it will bring a modal that looks like this:

![Stripe Checkout Modal Example](https://wyp1jm.media.zestyio.com/checkout_modal_example.png)

Note: Zesty will automatically use your test Stripe API key if you are on the development preview URL \(the one that looks like abcdef-dev.preview.zestyio.com\).

After the card details are submitted the user will be redirected to the URL you specify in the `success_redirect` value \(if successful\), or to the `failure_redirect` URL if unsuccessful.

### Example \#2: Variable Amount Donation Form

### Example \#3: Subscribe to a Recurring Stripe Plan

Note that the endpoint for the form `action` is slightly different \(`/-api/stripe/subscribe`\).

### Example \#4: Subscribe to a Plan with a Custom Amount

This is a workaround for Stripe having set plan prices. If you submit a new subscription \(via Zesty\) with a interval of `month` and a price of `999`. It will check if a plan `monthly-9.99` exsits. If it doesn't, it will create it. Either way, it will create a new subscription to that plan. See the below the code example below. Note: the endpoint for this is also slightly different \(`/-api/stripe/subscribe-custom`\).

