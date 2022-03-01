---
description: >-
  This article uses a standardized XML output to generate a Custom content
  experience served with Commerce Cloud loaded from Zesty.io.
---

# Salesforce Commerce Cloud

### Building out the Content Experience

The first step is to build out the HTML, Javascript and CSS for the content experience you want to serve from your Commerce Cloud website. You can do this in any environment, including locally or within your Zesty.io instance.&#x20;

Once built, configure the experience in Zesty.io for content editing by building out content models and fields to replace the dynamic pieces with [Parsley](../services/web-engine/view-templating.md#zesty-ios-templating-language-parsley) references.&#x20;

### Starting the XML <a href="#starting-the-xml" id="starting-the-xml"></a>

The next step is to set up a custom XML endpoint within your Zesty.io instance. Within that paste in this XML code:

```markup
<library xmlns="http://www.demandware.com/xml/impex/library/2006-10-31" library-id="SiteGenesisSharedLibrary">
    <folder folder-id="root">
        <online-flag>true</online-flag>
        <page-attributes>
            <page-title xml:lang="x-default">
               [site name]
            </page-title>
            <page-description xml:lang="x-default">
                [page-description]
            </page-description>
        </page-attributes>
        <refinement-definitions>
            <refinement-definition type="folder" bucket-type="none">
                <display-name xml:lang="x-default">Folder</display-name>
                <sort-mode>folder-position</sort-mode>
                <cutoff-threshold>5</cutoff-threshold>
            </refinement-definition>
        </refinement-definitions>
    </folder>
    <folder folder-id="[folder id]">
        <display-name xml:lang="x-default">[display-name]</display-name>
        <description xml:lang="x-default"/>
        <online-flag>[boolean]</online-flag>
		<template>[template]</template>
		<parent>[parent folder id]</parent>
		<position>[position]</position>
        <page-attributes/>
    </folder>
    <content content-id="[content id]">
        <display-name xml:lang="x-default">[display-name]</display-name>
        <description xml:lang="x-default"/>
        <online-flag>true</online-flag>
        <searchable-flag>[boolean]</searchable-flag>
        <template>
            [template]        
        </template>
        <page-attributes>
            <page-title xml:lang="x-default">[page-title]</page-title>
            <page-description xml:lang="x-default"/>
        </page-attributes>
        <custom-attributes>
            <custom-attribute attribute-id="body" xml:lang="x-default"> 
                [custom html template]
            </custom-attribute>
        </custom-attributes>
        <folder-links>
            <classification-link folder-id="[folder id]"/>
        </folder-links>
    </content>
 </library>
```

&#x20;Content marked with single brackets, `[]`, will be replaced with Parsley references.

### Building out the content models. <a href="#building-out-the-content-models" id="building-out-the-content-models"></a>

To update this XML with dynamic content calls we need to build out the Content Models and fields to replace the variable content pieces in the XML.

#### Folders <a href="#folders" id="folders"></a>

First we need a top-level page group for the `Folders`. This content model needs six fields and it needs one entry for `Root`, which will act as a top-level indicator.

| Field Name   | Field Type                                                                  |
| ------------ | --------------------------------------------------------------------------- |
| Display Name | Text                                                                        |
| Description  | Textarea                                                                    |
| Online Flag  | Yes/No                                                                      |
| Template     | Text                                                                        |
| Parent       | <p>One to Many <br><em>(Relate to: Folders, Display: Display Name)</em></p> |
| Position     | Text                                                                        |

#### Content Pages

Next we need to modify all the page type content models created in the first step for generating the content experience. These content models requires 5 fields for the Meta info and any additional fields specific to the html template being created. The 5 required fields are:

| Field Name            | Field Type                                                                  |
| --------------------- | --------------------------------------------------------------------------- |
| Display Name          | Text                                                                        |
| Description           | Textarea                                                                    |
| Online Flag           | Yes/No                                                                      |
| Searchable Flag       | Yes/No                                                                      |
| Folder Classification | <p>One to Many <br><em>(Relate to: Folders, Display: Display Name)</em></p> |

### Updating the XML with Parsley

The next step is putting it all together in Zesty.io. We need to modify the XML to dynamically generate based on the entries available in the Content Models. The new XML Should look something like this.&#x20;

```markup
<?xml version="1.0" encoding="UTF-8"?>
<library xmlns="http://www.demandware.com/xml/impex/library/2006-10-31" library-id="SiteGenesisSharedLibrary">
	{{ each folders as folder  }}
	{{ if {folder.path_part} == root }}
	<folder folder-id="root">
		<online-flag>true</online-flag>
		<page-attributes>
			<page-title xml:lang="x-default">{{ folder.display_name }}</page-title>
			<page-description xml:lang="x-default">{{ folder.description }}</page-description>
		</page-attributes>
		<refinement-definitions>
			<refinement-definition type="folder" bucket-type="none">
				<sort-mode>folder-position</sort-mode>
				<cutoff-threshold>5</cutoff-threshold>
			</refinement-definition>
		</refinement-definitions>
	</folder>
	{{ else }}
	<folder folder-id="{{ folder.path_part }}">
		<display-name xml:lang="x-default">{{ folder.display_name }}</display-name>
		<description xml:lang="x-default">{{ folder.description }}</description>
		<online-flag>{{ if {ofolderne.online_flag} == 1 }}true{{else}}false{{ end-if }}</online-flag>
		{{ if {folder.template} }}
		<template>{{ folder.template }}</template>
		{{ end-if }}
		{{ if {folder.parent} }}
		<parent>{{ folders.filter(z.zuid = '{folder.parent}').path_part }}</parent>
		{{ end-if }}
		{{ if {folder.position} }}
		<position>{{ folder.position }}</position>
		{{ end-if }}
		<page-attributes/>
	</folder>
	{{ end-if }}
	{{ end-each }}	
	{{ each standard_pages as one }}
	<content content-id="{{ one.path_part }}">
		<display-name xml:lang="x-default">{{ one.display_name }}</display-name>
		{{ if {one.description} }}
		<description xml:lang="x-default">{{ one.description }}</description>
		{{ end-if }}
		<online-flag>{{ if {one.online_flag} == 1 }}true{{else}}false{{ end-if }}</online-flag>
		<searchable-flag>{{ if {one.searchable_flag} == 1 }}true{{else}}false{{ end-if }}</searchable-flag>
		<page-attributes/>
		<custom-attributes>
			<custom-attribute attribute-id="body" xml:lang="x-default"><![CDATA[{{ include standard_pages }}]]></custom-attribute>
		</custom-attributes>
		{{ if {one.folder_classification} }}
		<folder-links>
			<classification-link folder-id="{{ folders.filter(z.zuid = '{one.folder_classification}').display_name }}"/>
		</folder-links>
		{{ end-if }}
	</content>
	{{ end-each }}
</library>
```

Notice in this example, we are only generating a custom content experience based on one content model, called `Standard Pages`. Within the `custom-attribute` element we include the view file for this content model. The HTML markup for this custom element needs to be written on the `standard_pages` view file in order for it to be included in the XML. You will want to repeat the loop used for `standard_pages` in this example for each Content Model that generates a custom content experience. \


### Importing into Commerce Cloud

The final step is to prompt your Commerce Cloud account to crawl the Zesty.io XML endpoint from your instance. You will want to copy the endpoint URL and paste it into the content import field in Commerce Cloud and submit. This will prompt any new pages or folders to be created and any changes to existing content to be updated.&#x20;
