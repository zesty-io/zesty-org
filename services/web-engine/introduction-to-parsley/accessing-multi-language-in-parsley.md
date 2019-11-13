# Accessing Multi-language in Parsley

Accessing content in multiple languages is very simple in Parsley.

You simply access the properties of the page in the same way \(`page.title` for example\). Content will automatically be loaded in the correct language based on the current visitors language.

### HTML changes based on language

To make a html change specific for the current visitor's language code.

```text


    {{ if {site.current_lang} == 'es' }}
    Hola!
    {{ else }}
    Hello!
    {{ end-if }}


```

