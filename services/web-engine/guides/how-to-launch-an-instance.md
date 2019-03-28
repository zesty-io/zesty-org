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

### Custom Domains

First, find the instance that you would like to send live, and click the green "Launch Instance" button. The instance's settings drawer will open and you'll be prompted to set your custom domain. Enter the custom domain name that you would like and click the gray "Save" button. The next step is to configure your DNS settings.

### DNS

There are three values you will need to set, the record type, host, and value. Please note that there are many domain registrars that the following instructions are not one-size-fits-all. See the **Common DNS Registrars** section below for more information.

**Record Type**

There are many types of DNS records you can create. We will be setting up an **A record**.

**Record Host**

This is the domain name that you are setting up to be served by Zesty.io. The host value can also be a subdomain you want to route. Common examples are `www` and `ftp`.

_Host values that are_ `@` _characters mean it references the current domain you are setting up DNS for._

**Record Value**

This value depends on the type of record you are setting up. Since we are creating an A record we will want to set it to the IP address of the Zesty.io servers: `130.211.21.25`.

_A records always point to IP addresses._

#### Advanced DNS

**CNAME**

CNAME records, short for Canonical Name record, is how one domain is an alias for a different domain.

When you're configuring your DNS to use a CNAME record to route requests to your Zesty.io hosted instance use the value: `sites2.zesty.zone`

#### Verify your instance is live

To confirm that your instance is live click the green "? Check DNS" button. You'll see a notification in the bottom left-hand corner of the screen letting you know if your DNS has been verified.

#### Common DNS Registrars

Since there are many places to purchase domains it's difficult to define all-inclusive instructions to setting up a DNS record. Below you'll find some common DNS registrars and their setup instructions.

**NameCheap**

* [Setting a CNAME record for www](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/10/how-can-i-set-up-a-cname-record-for-my-domain)
* [Redirecting example.com to www.example.com](https://www.namecheap.com/support/knowledgebase/article.aspx/385/77/how-do-i-set-up-a-url-redirect-for-a-domain)

**GoDaddy**

* [GoDaddy Managing DNS](https://support.godaddy.com/help/article/680/managing-dns-for-your-domain-names)

