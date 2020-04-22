---
description: >-
  It's easy to launch your instance with Zesty.io. Simply set your domain,
  configure your DNS, and then confirm your site is live.
---

# How to Launch an Instance

There are 3 steps to making your instance accessible to the public.

1. Set a custom domain name
2. Configure your DNS
3. Confirm your instance is live

{% hint style="info" %}
Before beginning the process to send your instance live ensure that all content and code that you want to be made available to the public are published and listed accordingly.
{% endhint %}
{% file src="../../../.gitbook/assets/zesty.io-new-site-launch-checklist-includes-links.pdf" caption="New Site Launch Checklist" %}
{% file src="../../../.gitbook/assets/zesty.io-migration-launch-checklist-includes-links.pdf" caption="Site Migration Checklist" %}


## 1. Set a Custom Domain Name

Start by locating the instance that you want to launch in the Accounts Manager interface and then click that instance's "Publish Instance" button.

![To begin launching your instance click the &quot;Publish Instance&quot; button.](../../../.gitbook/assets/screen-shot-2019-08-30-at-1.04.05-pm.png)

After you click the "Publish Instance" button the instance settings will open and prompt you to set a domain name and configure your DNS settings.

![Instance Settings drawer prompts for sending your instance live.](../../../.gitbook/assets/screen-shot-2019-08-30-at-12.41.50-pm.png)

Enter your custom domain name in the textbox and click Save.

![Enter your custom domain name in the textbox and clicking Save.](../../../.gitbook/assets/screen-shot-2019-08-30-at-12.43.30-pm.png)

## 2. Configure you DNS

Configure your domain's DNS settings by following the instructions in the settings drawer.

![DNS instructions in the Instance Settings drawer.](../../../.gitbook/assets/zesty-dns-settings.png)

{% hint style="info" %}
**Please note**: Domain registrars are not one-size-fits-all so each step may not be applicable. See the [**Common DNS Registrars**](https://zesty.org/services/web-engine/guides/how-to-launch-an-instance#common-dns-registrars) section below for more information.
{% endhint %}

{% hint style="warning" %}
**Cloudflare Users**: When setting DNS records in Cloudflare be sure to have the proxied by Cloudflare, an orange cloud icon, turned off on each record. Zesty.io cannot affectively manage the cache if Cloudflare is proxing requests and caching them.
{% endhint %}

There are 2 primary records you will want to ensure are setup.

1. The apex record \(*e.g. example.org*\)
2. The WWW sub-domain record \(*e.g. www.example.org*\)

When creating these records there will be 3 values that are required to set them up. 

1. Record type
2. Host \(or name\)
3. Value.

### Apex Record

[What is an apex record?](https://docs.microsoft.com/en-us/azure/dns/dns-zones-records#record-types)

[Why can't I use a CNAME for my apex record?](https://www.isc.org/blogs/cname-at-the-apex-of-a-zone/)

Create or set an existing apex record with the following values:

- *Record type*: `A`
- *Host*: `@`
- *Value* \(**Create a separate A record for each of these IP addresses**\):
   - `151.101.1.161`
   - `151.101.65.161`
   - `151.101.129.161`
   - `151.101.193.161`

{% hint style="info" %}
The `@` symbol is a special value in DNS that means, the current domain.
{% endhint %}

### WWW Record

Create or set an existing WWW record with the following values:

- *Record type*: `CNAME`
- *Host*: `WWW`
- *Value*: `zesty.map.fastly.net`

![Standard WWW sub-domain request flow for Customers on Zesty.io Cloud](../../../.gitbook/assets/basic-dns-setup.png)


## 3. Confirm your instance is live

To confirm that your instance is live click the green "? Check DNS" button. You should see a notification in the bottom left-hand corner of the screen letting you know if your DNS has been verified.

{% hint style="info" %}
DNS changes can take time to propogate and for your <abbr title="Internet Service Provider">ISP</abbr> to pickup. They can also be cached. If you don't see your changes taking effect try loading the domain in a new browser and/or gibing it more time. Typically an hour or two is enough.
{% endhint %}


## Additional Configurations

### HTTPS & WWW

{% hint style="info" %}
If necessary you can configure your HTTPS and WWW settings before launching your site.
{% endhint %}

Open the Content Manager interface and navigate to the Settings section. Under General you'll find your HTTPS and WWW site settings.

![Settings section with HTTPS and WWW settings.](../../../.gitbook/assets/settings-http-www.png)

Above you can see these settings outlined in orange. The tooltips will help you navigate this area and give you information about each setting.

If you want to always redirect to HTTPS then the "HTTPS on?" setting must be turned on. To turn this setting on click the "HTTPS on?" button and it will turn green.

If you'd like to force prepending your domain with WWW then click the "Always prepend WWW to my domain?" button.

Ensure you save settings before continuing on.


## **Common DNS Registrars**

Since there are many places to purchase domains it's difficult to create all-inclusive instructions to setting up a DNS record. Below you'll find some common DNS registrars and their setup instructions.

{% tabs %}
{% tab title="Name Cheap" %}
* [Setting a CNAME record for www](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/10/how-can-i-set-up-a-cname-record-for-my-domain)
* [Redirecting example.org to www.example.org](https://www.namecheap.com/support/knowledgebase/article.aspx/385/77/how-do-i-set-up-a-url-redirect-for-a-domain)
{% endtab %}

{% tab title="GoDaddy" %}
* [GoDaddy Managing DNS](https://support.godaddy.com/help/article/680/managing-dns-for-your-domain-names)
{% endtab %}

{% tab title="Domain.com" %}
* [Manage DNS settings](https://www.domain.com/help/article/dns-management-how-to-update-dns-records)
* [Updating CNAME records](https://www.domain.com/help/article/dns-management-how-to-update-cname-aliases)
{% endtab %}

{% tab title="bluehost" %}
* [DNS management](https://my.bluehost.com/hosting/help/559)
* [Creating and understanding CNAMEs](https://my.bluehost.com/hosting/help/cname)
{% endtab %}

{% tab title="HostGator" %}
* [DNS management](https://www.hostgator.com/help/article/manage-dns-zones)
{% endtab %}
{% endtabs %}

