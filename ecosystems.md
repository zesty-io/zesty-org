---
description: >-
  Zesty.io Cloud Content Instances can share code, media and data between each
  other to create rich distributed systems. We describe how it works here.
---

# EcoSystems

## Zesty.io EcoSystems

EcoSystems are used to connect and share content and media between designated groups of Content Instances. EcoSystems are an add on product in the Zesty.io Platform. Common uses include

* Mass multisite installations 
* Brands managing multiple instances
* Information Intranets
* Reseller/Partner Templates

## EcoMedia \(Shared Media\)

Zesty.io [Cloud Content Instances](content-instance.md) are launched with a Media Bin. EcoMedia allows Media Bins to be shared between Cloud Content Instances. This is useful for mass multisite installations or just when a couple company Instances want to share brand elements. 

The EcoMedia experience blends seamlessly into the Content Manager user interface, and appear as top level folder which the user can browse, access, and upload to.

{% hint style="success" %}
**Ways to Use EcoMedia**

* Shared branding Elements
* Multi-site Shared Images
{% endhint %}

## EcoCode \(Shared View Templates\)

Zesty.io Cloud Content Instances are launched with the Web\[Site\] Engine option which allows for custom view and template creation. EcoCode allows for view template code written in HTML and Parsley \(not excluding inline CSS or Javascript\) to be shared as amongst other Cloud Content Instances in the same EcoSystem. 

{% hint style="success" %}
**Ways to Use EcoCode**

* Multi-site Shared Template Code
* Consistent Footers and Headers
* Shared Endpoint Logic
* Widgets and HTML Page Components
{% endhint %}

### Implementing EcoCode

EcoCode can be accessed by any Content Instance that is part of an EcoSystem. EcoCode is implemented as Parsley code, and can be accessed from any view. It is simply done by knowing two pieces of information: the ZUID of an Instance and the name of a view.

```php
{{include 8-x1y2z3-b4c5d6f7.footer}}
```

The above line of Parsley code would attempt to access the Instance's \(with the ZUID `8-x1y2z3-b4c5d6f7`\) footer view.

### EcoCode Scope

EcoCode shared a view from an instance, but not the data in that Instance. It will reference the data on the instance that loads the view. Let's say we have two Cloud Content Instances.

1. **Instance One** `8-x1y2z3-b4c5d6f7` has a view named `footer`
2. **Instance Two** `8-b4c5d6-t4z3x2y1` has a view `homepage` that references the `footer` view in **Instance One**

{% tabs %}
{% tab title="Footer view file on Instance One" %}
```markup
<div class="container">
	<div class="structure copyright">
		<h1>{{page.seo_meta_title}}</h1>
		<a href="https://www.zesty.io">
			<img src="https://b4bf8f5fd4f88798b353-e0ad6217c420dd1c49b31c5c906a8967.ssl.cf2.rackcdn.com/or-zesty-logo-stand-alone.png" />
		</a>
		<p>&copy;2012-{{site.date(Y)}} Parsley is proudly brought to you by <br/><a href="https://www.zesty.io">Zesty.io Platform, Inc.</a>  </p>		
	</div>
</div>
```
{% endtab %}

{% tab title="Homepage view file on Instance Two" %}
```markup
<section>
    Bunch of custom code here.....
</section>
<section class="footer">
    {{include 8-x1y2z3-b4c5d6f7.footer}}
</section>
```
{% endtab %}
{% endtabs %}

The homepage view file will include the foreign view from Instance One. Scope wise, the Parsley call to `{{page.title}}` in the footer view on **Instance One** will attempt to access the page data from **Instance Two,** not Instance One. This means that EcoCode shared views references local data on the instance its shared onto, not the remote data.

