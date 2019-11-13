---
description: >-
  This example builds a version of the ZestyBurger Site by feeding Zesty.io
  content into a statically-generated Hugo Site.Github:
  https://github.com/zesty-io/zesty-hugo
---

# Hugo Static Site

## Getting Started

First, we'll need to install [Hugo](https://gohugo.io).

**macOS**

```text
brew install hugo
```

\(If you aren't using brew, [get it here](https://brew.sh/)\)

**debian / ubuntu**

```text
sudo apt-get install hugo
```

**other platforms**

[See the Hugo Website](https://gohugo.io/getting-started/installing)

Next, let's clone the example project

```text
git clone https://github.com/ronakdev/hugo-project/
cd hugo-project
```

Now, we simply need to install and run the project!

```text
npm install
npm start
```

{% hint style="info" %}
Note how `npm install` runs `pullzesty`
{% endhint %}

The example project's `package.json` also comes pre-equipped with some handy utility commands.

* `npm start` \# rebuilds data from zesty.io and runs a hugo server
* `npm run-script build-hugo` \# rebuilds data from zesty.io and runs hugo to build a folder in `docs/`
* `npm run-script all` \# rebuilds data from zesty.io, runs hugo to build a folder in `docs/`, and runs a hugo server

## Understanding the Example Project

Hugo provides support for front-matter, which `PullZesty` takes advantage of to create the files. The real magic in this project lies in the `zesty.yaml` file, which specifies the proper paths for all of our content. This content is merely consumed by some layouts. When creating your own Hugo project, feel free to look at our [`zesty.yaml`](https://github.com/zesty-io/hugo-project/blob/master/zesty.yaml) file and our [layout files](https://github.com/zesty-io/hugo-project/tree/master/layouts).

{% tabs %}
{% tab title="layouts/\_default/index.html" %}
```markup
{{ define "content" }}
<div data-spy="scroll" data-target="#site-navbar" data-offset="200">
    <section class="site-cover" style="background-image: url({{ with .Params.splash_background }}{{ . | safeHTML }}{{ end }});" id="section-home">
        <div class="container">
            <div class="row align-items-center justify-content-center text-center site-vh-100">
                <div class="col-md-12">
                    <h1 class="site-heading no-site-animate mb-3">{{ with .Params.splash_title }}{{ . | safeHTML }}{{ end }}</h1>
                    <h2 class="h5 site-subheading mb-5 no-site-animate">{{ with .Params.splash_description }}{{ . | safeHTML }}{{ end }}</h2>
                    <p><a href="{{ with .Params.splash_link }}{{ . | safeHTML }}{{ end }}" target="_blank" class="btn btn-outline-white btn-lg no-site-animate" data-toggle="modal" data-target="#reservationModal">{{ with .Params.splash_link_text }}{{ . | safeHTML }}{{ end }}</a></p>
                </div>
            </div>
        </div>
    </section>
</div>
{{ end }}
```
{% endtab %}
{% endtabs %}

As you can see in our [`index.html`](https://github.com/zesty-io/hugo-project/blob/master/layouts/_default/index.html) file, we simply load in the front-matter from the [`content/_index.md`](https://github.com/zesty-io/hugo-project/blob/master/content/_index.md) file.

=======

> > > > > > > bbc9f7e6a46f9544d3d382a9f7faff77ae61b083

