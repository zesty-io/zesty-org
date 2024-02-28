---
description: Zesty.io Supports multiple locales/languages for each content item
---

# Locales / Multi-Lang Content

When a Zesty.io Content Instance is created, it uses English as the default language. It is possible to add more languages to a Zesty.io Content Instance. Multi-lang content is premium feature of Zesty.io, reach out to your account manager to learn more.

## Adding Multi-lang Content

The API must be used to add additional locales/languages to a Content Instance.

{% hint style="info" %}
Note: adding a language makes that language's relative pages available in preview, to have a added language be accessible to the live production domain, you need to activate the language&#x20;
{% endhint %}

{% swagger baseUrl="https://8-XYZ-XYZXYZ.api.zesty.io" path="/v1/env/langs/" method="post" summary="Adding a Language" %}
{% swagger-description %}
Posting to the \`/env/langs/\` API endpoint will create a new language for all content items in a Zesty.io Content Instance. Rest Documentation: https://instances-api.zesty.org/#082ef04e-b251-493f-92c1-062994292702
{% endswagger-description %}

{% swagger-parameter in="path" name="code" type="string" %}
Chose a code from the Table Below
{% endswagger-parameter %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

## What happens when a new language is added?

When a new language is created, Zesty.io's API will automate a process to duplicate all content into a language specific version of that content. The default language is content is copied into the new language version (it is not automatically translated). For example, if you had an english about page (url `/about/`), and added Spanish with the locale of Mexico, a new content items would be created with the URL `/es-mx/about/` and the content item would be pre-filled with the default language content. These means you would have a Spanish placeholder content item with english words in it to start. All copied new language pages start at version one (with default language content pre-filler) and have their own version control.

{% hint style="info" %}
The default language can only be chosen at the creation of a content instance. Talk to a Zesty.io support tech for help doing this.
{% endhint %}

## How to Activate a language

Languages are added "non-active" meaning they are not accessible via the published website. It is setup that way so developers can add a language and prepare all the content by updates and publishing without affecting the live website. Once a language is ready to go live, it must be activated.&#x20;

{% swagger baseUrl="https://8-XYZ-XYZXYZ.api.zesty.io" path="/v1/env/langs/fr-FR?action=activate" method="put" summary="Activating a Language" %}
{% swagger-description %}
Set a language to activate, which means the language's published pages become accessible to the live website. See REST docs here https://instances-api.zesty.org/#a8e6496e-c430-4a75-9ab3-8479b74e479c
{% endswagger-description %}

{% swagger-response status="200" description="" %}
```
```
{% endswagger-response %}
{% endswagger %}

## How Does Web Engine Handle Multi-lang/Multi-Locale Content

When Web Engine detects there are multiple languages on a Content Instance it will add specific code that is read by browsers, screen readers, and search engines to direct users to different languages/locales of the content it serves.

For example purposes, let's use the domain www.acme.com, and assume it has two languages, English (en-us) and Spanish (es-mx).

**Server Headers Appended for Locale/Multi-lang, per** [**MDN Specs**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language)\*\*\*\*

{% code title="Server headers served when accessing https://www.acme.com/about/" %}
```
Content-Language: en-us
```
{% endcode %}

**HTML Appended for Locale/Multi-lang, per** [**Google Specs**](https://support.google.com/webmasters/answer/189077?hl=en)\*\*\*\*

{% code title="Head and HTML additions on page https://www.acme.com/about/" %}
```markup
<html lang="en-us">
<head>
  <title>About Acme, Inc</title>
  <link rel="alternate" hreflang="en-us"
        href="https://www.acme.com/about/" />
  <link rel="alternate" hreflang="es-mx"
        href="https://www.acme.com/es-mx/about/" />
  <link rel="alternate" hreflang="x-default"
        href="https://www.acme.com/about/" />
</head>
```
{% endcode %}

**XML Sitemap**

Auto-generated sitemap gets additional language qualifiers and pointers.

{% code title="Served at https://www.acme.com/sitemap.xml" %}
```markup
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>http://www.example.com/english/page.html</loc>
    <xhtml:link 
               rel="alternate"
               hreflang="de"
               href="http://www.example.com/deutsch/page.html"/>
    <xhtml:link 
               rel="alternate"
               hreflang="de-ch"
               href="http://www.example.com/schweiz-deutsch/page.html"/>
    <xhtml:link 
               rel="alternate"
               hreflang="en"
               href="http://www.example.com/english/page.html"/>
  </url>
```
{% endcode %}

## Accessing Multi-Lang Locales with Parsley

Accessing the current language using Parsley is done by calling&#x20;

* `{{instance.current_lang.code}}`
* `{{instance.current_lang.id}}`
* `{{instance.current_lang.name}}`

```markup
  <!-- to access them globally with javascript, add this to the top of the loader file-->
  <script>
  CURRENT_LANG_ID = '{{instance.current_lang.id}}'; // 1
  CURRENT_LANG_NAME = '{{instance.current_lang.name)}}'; // English (United States) 
  CURRENT_LANG_CODE = '{{instance.current_lang.code)}}'; // en-us
  </script> 
  <!-- this method is useful to array filter out locale content when using headless endpoint with client side javascript-->
```

Parsley can be used to iterate through available languages. `{{each langs as lang}}` give you access to&#x20;

* `{{lang.code}}` string e.g. `en-US` , `es-MX`
* `{{lang.default}}` Boolean 1 or 0, 1 is true
* `{{lang.name}}` string e.g. `English (United States)`, `Spanish (Mexico)`

![](<../.gitbook/assets/image (110).png>)

{% code title="Parsley example usage for each looping through langs" %}
```markup
{{each langs as lang}}
	{{if {lang.default} == 1}}
	{{$path = / }}
	{{else}}
	{{$path = /{lang.code}/ }}
	{{end-if}}
	<a class="navbar-item" href="{{$path}}">
		<span class="icon mr-2">
			<img src="https://4q6k83l9.media.zestyio.com/{{lang.code}}.png?width=32" alt="{{lang.name}} flag"/>
		</span>
		<span>
			{{lang.name}}
		</span>
	</a>
{{end-each}}
```
{% endcode %}

## List of Languages Zesty.io Supports

Each language has an associated code, that code is used in the API to create a new language for a Content Instance.

| Code   | Language                                                |
| ------ | ------------------------------------------------------- |
| af     | Afrikaans                                               |
| af-ZA  | Afrikaans (South Africa)                                |
| ar     | Arabic                                                  |
| ar-AE  | Arabic (U.A.E.)                                         |
| ar-BH  | Arabic (Bahrain)                                        |
| ar-DZ  | Arabic (Algeria)                                        |
| ar-EG  | Arabic (Egypt)                                          |
| ar-IQ  | Arabic (Iraq)                                           |
| ar-JO  | Arabic (Jordan)                                         |
| ar-KW  | Arabic (Kuwait)                                         |
| ar-LB  | Arabic (Lebanon)                                        |
| ar-LY  | Arabic (Libya)                                          |
| ar-MA  | Arabic (Morocco)                                        |
| ar-OM  | Arabic (Oman)                                           |
| ar-QA  | Arabic (Qatar)                                          |
| ar-SA  | Arabic (Saudi Arabia)                                   |
| ar-SY  | Arabic (Syria)                                          |
| ar-TN  | Arabic (Tunisia)                                        |
| ar-YE  | Arabic (Yemen)                                          |
| az     | Azeri (Latin)                                           |
| az-AZ  | Azeri (Azerbaijan)                                      |
| be     | Belarusian                                              |
| be-BY  | Belarusian (Belarus)                                    |
| bg     | Bulgarian                                               |
| bg-BG  | Bulgarian (Bulgaria)                                    |
| bs-BA  | Bosnian (Bosnia and Herzegovina)                        |
| ca     | Catalan                                                 |
| ca-ES  | Catalan (Spain)                                         |
| cs     | Czech                                                   |
| cs-CZ  | Czech (Czech Republic)                                  |
| cy     | Welsh                                                   |
| cy-GB  | Welsh (United Kingdom)                                  |
| da     | Danish                                                  |
| da-DK  | Danish (Denmark)                                        |
| de     | German                                                  |
| de-AT  | German (Austria)                                        |
| de-CH  | German (Switzerland)                                    |
| de-DE  | German (Germany)                                        |
| de-LI  | German (Liechtenstein)                                  |
| de-LU  | German (Luxembourg)                                     |
| dv     | Divehi                                                  |
| dv-MV  | Divehi (Maldives)                                       |
| el     | Greek                                                   |
| el-GR  | Greek (Greece)                                          |
| en     | English                                                 |
| en-AU  | English (Australia)                                     |
| en-BZ  | English (Belize)                                        |
| en-CA  | English (Canada)                                        |
| en-CB  | English (Caribbean)                                     |
| en-GB  | English (United Kingdom)                                |
| en-IE  | English (Ireland)                                       |
| en-JM  | English (Jamaica)                                       |
| en-NZ  | English (New Zealand)                                   |
| en-PH  | English (Republic of the Philippines)                   |
| en-TT  | English (Trinidad and Tobago)                           |
| en-US  | English (United States)                                 |
| en-ZA  | English (South Africa)                                  |
| en-ZW  | English (Zimbabwe)                                      |
| eo     | Esperanto                                               |
| es     | Spanish                                                 |
| es-AR  | Spanish (Argentina)                                     |
| es-BO  | Spanish (Bolivia)                                       |
| es-CL  | Spanish (Chile)                                         |
| es-CO  | Spanish (Colombia)                                      |
| es-CR  | Spanish (Costa Rica)                                    |
| es-DO  | Spanish (Dominican Republic)                            |
| es-EC  | Spanish (Ecuador)                                       |
| es-ES  | Spanish (Spain)                                         |
| es-GT  | Spanish (Guatemala)                                     |
| es-HN  | Spanish (Honduras)                                      |
| es-MX  | Spanish (Mexico)                                        |
| es-NI  | Spanish (Nicaragua)                                     |
| es-PA  | Spanish (Panama)                                        |
| es-PE  | Spanish (Peru)                                          |
| es-PR  | Spanish (Puerto Rico)                                   |
| es-PY  | Spanish (Paraguay)                                      |
| es-SV  | Spanish (El Salvador)                                   |
| es-UY  | Spanish (Uruguay)                                       |
| es-VE  | Spanish (Venezuela)                                     |
| et     | Estonian                                                |
| et-EE  | Estonian (Estonia)                                      |
| eu     | Basque                                                  |
| eu-ES  | Basque (Spain)                                          |
| fa     | Farsi                                                   |
| fa-IR  | Farsi (Iran)                                            |
| fi     | Finnish                                                 |
| fi-FI  | Finnish (Finland)                                       |
| fo     | Faroese                                                 |
| fo-FO  | Faroese (Faroe Islands)                                 |
| fr     | French                                                  |
| fr-BE  | French (Belgium)                                        |
| fr-CA  | French (Canada)                                         |
| fr-CH  | French (Switzerland)                                    |
| fr-FR  | French (France)                                         |
| fr-LU  | French (Luxembourg)                                     |
| fr-MC  | French (Principality of Monaco)                         |
| gl     | Galician                                                |
| gl-ES  | Galician (Spain)                                        |
| gu     | Gujarati                                                |
| gu-IN  | Gujarati (India)                                        |
| he     | Hebrew                                                  |
| he-IL  | Hebrew (Israel)                                         |
| hi     | Hindi                                                   |
| hi-IN  | Hindi (India)                                           |
| hr     | Croatian                                                |
| hr-BA  | Croatian (Bosnia and Herzegovina)                       |
| hr-HR  | Croatian (Croatia)                                      |
| hu     | Hungarian                                               |
| hu-HU  | Hungarian (Hungary)                                     |
| hy     | Armenian                                                |
| hy-AM  | Armenian (Armenia)                                      |
| id     | Indonesian                                              |
| id-ID  | Indonesian (Indonesia)                                  |
| is     | Icelandic                                               |
| is-IS  | Icelandic (Iceland)                                     |
| it     | Italian                                                 |
| it-CH  | Italian (Switzerland)                                   |
| it-IT  | Italian (Italy)                                         |
| ja     | Japanese                                                |
| ja-JP  | Japanese (Japan)                                        |
| ka     | Georgian                                                |
| ka-GE  | Georgian (Georgia)                                      |
| kk     | Kazakh                                                  |
| kk-KZ  | Kazakh (Kazakhstan)                                     |
| kn     | Kannada                                                 |
| kn-IN  | Kannada (India)                                         |
| ko     | Korean                                                  |
| ko-KR  | Korean (Korea)                                          |
| kok    | Konkani                                                 |
| kok-IN | Konkani (India)                                         |
| ky     | Kyrgyz                                                  |
| ky-KG  | Kyrgyz (Kyrgyzstan)                                     |
| lt     | Lithuanian                                              |
| lt-LT  | Lithuanian (Lithuania)                                  |
| lv     | Latvian                                                 |
| lv-LV  | Latvian (Latvia)                                        |
| mi     | Maori                                                   |
| mi-NZ  | Maori (New Zealand)                                     |
| mk     | FYRO Macedonian                                         |
| mk-MK  | FYRO Macedonian (Former Yugoslav Republic of Macedonia) |
| mn     | Mongolian                                               |
| mn-MN  | Mongolian (Mongolia)                                    |
| mr     | Marathi                                                 |
| mr-IN  | Marathi (India)                                         |
| ms     | Malay                                                   |
| ms-BN  | Malay (Brunei Darussalam)                               |
| ms-MY  | Malay (Malaysia)                                        |
| mt     | Maltese                                                 |
| mt-MT  | Maltese (Malta)                                         |
| nb     | Norwegian (Bokm?l)                                      |
| nb-NO  | Norwegian (Bokm?l) (Norway)                             |
| nl     | Dutch                                                   |
| nl-BE  | Dutch (Belgium)                                         |
| nl-NL  | Dutch (Netherlands)                                     |
| nn-NO  | Norwegian (Nynorsk) (Norway)                            |
| ns     | Northern Sotho                                          |
| ns-ZA  | Northern Sotho (South Africa)                           |
| pa     | Punjabi                                                 |
| pa-IN  | Punjabi (India)                                         |
| pl     | Polish                                                  |
| pl-PL  | Polish (Poland)                                         |
| ps     | Pashto                                                  |
| ps-AR  | Pashto (Afghanistan)                                    |
| pt     | Portuguese                                              |
| pt-BR  | Portuguese (Brazil)                                     |
| pt-PT  | Portuguese (Portugal)                                   |
| qu     | Quechua                                                 |
| qu-BO  | Quechua (Bolivia)                                       |
| qu-EC  | Quechua (Ecuador)                                       |
| qu-PE  | Quechua (Peru)                                          |
| ro     | Romanian                                                |
| ro-RO  | Romanian (Romania)                                      |
| ru     | Russian                                                 |
| ru-RU  | Russian (Russia)                                        |
| sa     | Sanskrit                                                |
| sa-IN  | Sanskrit (India)                                        |
| se     | Sami (Northern)                                         |
| se-FI  | Sami (Finland)                                          |
| se-NO  | Sami (Norway)                                           |
| se-SE  | Sami (Sweden)                                           |
| sk     | Slovak                                                  |
| sk-SK  | Slovak (Slovakia)                                       |
| sl     | Slovenian                                               |
| sl-SI  | Slovenian (Slovenia)                                    |
| sq     | Albanian                                                |
| sq-AL  | Albanian (Albania)                                      |
| sr-BA  | Serbian (Bosnia and Herzegovina)                        |
| sr-SP  | Serbian (Serbia and Montenegro)                         |
| sv     | Swedish                                                 |
| sv-FI  | Swedish (Finland)                                       |
| sv-SE  | Swedish (Sweden)                                        |
| sw     | Swahili                                                 |
| sw-KE  | Swahili (Kenya)                                         |
| syr    | Syriac                                                  |
| syr-SY | Syriac (Syria)                                          |
| ta     | Tamil                                                   |
| ta-IN  | Tamil (India)                                           |
| te     | Telugu                                                  |
| te-IN  | Telugu (India)                                          |
| th     | Thai                                                    |
| th-TH  | Thai (Thailand)                                         |
| tl     | Tagalog                                                 |
| tl-PH  | Tagalog (Philippines)                                   |
| tn     | Tswana                                                  |
| tn-ZA  | Tswana (South Africa)                                   |
| tr     | Turkish                                                 |
| tr-TR  | Turkish (Turkey)                                        |
| tt     | Tatar                                                   |
| tt-RU  | Tatar (Russia)                                          |
| ts     | Tsonga                                                  |
| uk     | Ukrainian                                               |
| uk-UA  | Ukrainian (Ukraine)                                     |
| ur     | Urdu                                                    |
| ur-PK  | Urdu (Islamic Republic of Pakistan)                     |
| uz     | Uzbek (Latin)                                           |
| uz-UZ  | Uzbek (Latin) (Uzbekistan)                              |
| vi     | Vietnamese                                              |
| vi-VN  | Vietnamese (Viet Nam)                                   |
| xh     | Xhosa                                                   |
| xh-ZA  | Xhosa (South Africa)                                    |
| zh     | Chinese                                                 |
| zh-CN  | Chinese (S)                                             |
| zh-HK  | Chinese (Hong Kong)                                     |
| zh-MO  | Chinese (Macau)                                         |
| zh-SG  | Chinese (Singapore)                                     |
| zh-TW  | Chinese (T)                                             |
| zu     | Zulu                                                    |
| zu-ZA  | Zulu (South Africa)                                     |

[https://support.google.com/webmasters/answer/189077?hl=en](https://support.google.com/webmasters/answer/189077?hl=en)
