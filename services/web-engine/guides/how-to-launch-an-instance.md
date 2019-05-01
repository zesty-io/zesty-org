---
description: >-
  It's easy to launch your instance with Zesty.io. Simply set your domain,
  configure your DNS, and then confirm that your site is live.
---

# How to Launch an Instance

### **Before you begin** 

Before beginning the process to send your site live ensure that all content sets and code that you want to be made available to the public are published and/or listed accordingly.

There are 3 steps to making your site accessible to the public.

1. Set a custom domain
2. Configure your DNS
3. Confirm that your domain is live

### Setting a Custom Domains

First, find the instance that you would like to send live, and click the green "Launch Instance" button. The instance's settings drawer will open and you'll be prompted to set your custom domain. Enter the custom domain name that you would like and click the gray "Save" button. The next step is to configure your DNS settings.

### Configuring your Domain's DNS

There are three values you will need to set, the record type, host, and value. Please note that there are many domain registrars that the following instructions are not one-size-fits-all. See the **Common DNS Registrars** section below for more information.

#### Sending Apex domains live \(e.g. https://mydomain.com\)

To connect an apex domain to Zesty.io you need to set 4 `A Records`

* A Record Name: `@` Value: `151.101.1.161`
* A Record Name: `@` Value: `151.101.65.161`
* A Record Name: `@` Value: `151.101.129.161`
* A Record Name: `@` Value: `151.101.193.161`

If you can only set one A Record, then use `151.101.1.161`

#### Sending Subdomain Live \(e.g. https://www.mydomain.com or https://blog.mydomain.com\)

To connected a subdomain to Zesty.io you need to set a single `CNAME Record`

* CNAME Record Name: `www` Value: `zesty.map.fastly.net`

The Record name: `www` in that example is swapped out with any subdomain like `blog` or `shop` to get `shop.mydomain.com`, or even `blog.shop` to get `blog.shop.mydomain.com`

#### Verify your instance is live

To confirm that your instance is live click the green "? Check DNS" button. You'll see a notification in the bottom left-hand corner of the screen letting you know if your DNS has been verified.

#### Common DNS Registrars

Since there are many places to purchase domains it's difficult to define all-inclusive instructions to setting up a DNS record. Below you'll find some common DNS registrars and their setup instructions.

**NameCheap**

* [Setting a CNAME record for www](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/10/how-can-i-set-up-a-cname-record-for-my-domain)
* [Redirecting example.com to www.example.com](https://www.namecheap.com/support/knowledgebase/article.aspx/385/77/how-do-i-set-up-a-url-redirect-for-a-domain)

**GoDaddy**

* [GoDaddy Managing DNS](https://support.godaddy.com/help/article/680/managing-dns-for-your-domain-names)

