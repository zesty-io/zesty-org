# Accessing Multi-language in Ajax files

For AJAX "files" \(served as `/ajax/example`\), the language can be specified via a GET query parameter. Example: `/ajax/example?lang=fr-ca`.

A helpful tip for doing this automatically in ajax calls is to use the parsley call for the current language: `{{ site.current_lang }}`.

