# Guide

## Getting Started

First, we'll need to install the `pull-zesty` package.

```bash
git clone https://github.com/zesty-io/pullzesty
cd pullzesty
npm link
```

Next, we can create your hugo site

```text
cd path/to/your/projects/folder
hugo new Zesty-Hugo
cd Zesty-Hugo
```

`pull-zesty`works by pulling data from a `zesty.yaml` file. You can generate one from your website by going to `yourwebsite.com/-/zesty.yaml`

{% hint style="info" %}
You can always modify your `zesty.yaml` to fit your purposes.
{% endhint %}

Now, you can pull content from zesty just by calling `pullzesty`

```text
# include --verbose to see where the files are created
pullzesty zesty.yaml --verbose
```

### Understanding zesty.yaml

Your `zesty.yaml` file defines the structure of where your data will be downloaded and refreshed to, as well as what data is downloaded.

{% code-tabs %}
{% code-tabs-item title="example\_zesty.yaml" %}
```yaml
instanceURL: http://burger.zesty.site # this is the url of your zesty site
contentZuids:
    items: # templateset / single pages
        6-4ac048-ksk3gq: content/homepage.md
        6-adc030-h0lgs4: content/blog.md
        6-4b5c74-fg83s2: content/about.md
        6-524458-d5wjpw: content/events.md
        6-f5f094-ggchl1: content/careers.md
        6-2c1804-2w70lf: content/locations.md
        6-e8ebe0-1wns63: content/menu.md
        6-693008-j6h1nv: content/usa_locations.md
    arrays: # pagegroup pages
        6-552d64-9rp79b: content/articles
        6-8d6f30-zc84qx: content/event_list
        6-9bfe5c-ntqxrs: content/location_pages
        6-ca7ed0-bx3vpj: content/local_events
        6-192984-tjwntl: content/career_list
        6-4a7e40-3sld16: content/foods
        6-1efbc8-c4x74s: content/drinks
        6-df06e8-np6wzp: content/local_careers_list
        6-94ecbc-pzz5cr: content/local_menu
        6-bfb9d0-5tpp6m: content/menu_categories
        6-97a8f4-td4p72: content/menu_items
        6-b2a8b4-nftph9: content/menu_tagsendpoints
endpoints:
    custom: # custom created endpoints 
        /-/custom/menulist.json: data/menulist.json
        /-/custom/menulist.json?featured=true: data/featured.json
        /-/custom/invite.ics?id=: data/invite.ics
    items: # single pages / items
        7-468214-r277lp: data/menuMetaData.json
    arrays:
        6-e07c5c-qnbx7v: data/clippings
        6-202668-2mdd7d: data/widgets 
        6-6b70ec-rjxlm5: data/footer 
        6-4ea27c-45qz75: data/coupons
```
{% endcode-tabs-item %}
{% endcode-tabs %}

