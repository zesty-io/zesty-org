# Guide

## Getting Started

First, we'll need to install [Jekyll](https://jekyllrb.com).

### Installing Jekyll

```text
gem install bundler jekyll
```

[See the Jekyll Website For More Help](https://jekyllrb.com/docs/installation/)

Next, let's clone the example project

```text
git clone https://github.com/zesty-io/jekyll-zesty/
cd jekyll-zesty
```

Now, we simply need to install and run the project!

```text
npm install
```

{% hint style="info" %}
Note how `npm install` runs `pullzesty`
{% endhint %}

The example project's `package.json` also comes pre-equipped with some handy utility commands.

* `npm start` \# rebuilds data from zesty.io and runs a jekyll server
* `npm run-script build-jekyll` \# rebuilds data from zesty.io and runs jekyll to build a folder in `docs/`
* `npm run-script all` \# rebuilds data from zesty.io, runs jekyll to build a folder in `docs/`, and runs a jekyll server

## Understanding the Example Project

Jekyll provides support for front-matter, which `PullZesty` takes advantage of to create the files. The real magic in this project lies in the `zesty.yaml` file, which specifies the proper paths for all of our content. This content is merely consumed by some layouts. When creating your own Jekyll project, feel free to look at our [`zesty.yaml`](https://github.com/zesty-io/jekyll-zesty/blob/master/zesty.yaml) file and our [layout files](https://github.com/zesty-io/jekyll-zesty/blob/master/_layouts/).

{% code-tabs %}
{% code-tabs-item title="\_layouts/home.html" %}
```markup
--- layout: default ---
<div dat
a-spy="scroll" data-target="#site-navbar" data-offset="200">
    <section class="site-cover" style="background-image: url({{page.splash_background}});" id="section-home">
        <div class="container">
            <div class="row align-items-center justify-content-center text-center site-vh-100">
                <div class="col-md-12">
                    <h1 class="site-heading no-site-animate mb-3">{{page.splash_title}}</h1>
                    <h2 class="h5 site-subheading mb-5 no-site-animate">{{page.splash_description}}</h2>
                    <p><a href="{{page.splash_link}}" target="_blank" class="btn btn-outline-white btn-lg no-site-animate" data-toggle="modal" data-target="#reservationModal">{{page.splash_link_text}}</a></p>
                </div>
            </div>
        </div>
    </section>
</div>
```
{% endcode-tabs-item %}
{% endcode-tabs %}

As you can see in our [`home.html`](https://github.com/zesty-io/jekyll-zesty/blob/master/_layouts/home.html) file, we simply load in the front-matter from the [`index.md`](https://github.com/zesty-io/jekyll-zesty/blob/master/index.md) file.

