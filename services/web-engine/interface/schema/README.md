---
description: >-
  The Schema section is where you control all of the Content Models, fields,
  settings, and variables for the instance.
---

# Schema

### Overview

The Schema section is essential for the initial build process and continues to be the starting point for major updates and additions to instances. An instance which uses the Schema section well creates an intuitive interface for content editors and a smooth build process for developers.

The Schema section is made up of three sections: the Content Structure, the Less Variables, and the Site Settings. This article will give a brief over of each section. More details are available in additional articles.

### Content Structure

The Content Structure is where content models and fields are created, edited, and deactivated. There are three types of Content Models: single pages, page groups, and data sets. The purpose and differences between each are outlined in the article [Content Models](/content-models/).

There are over 20 types of fields from basic text fields to dynamic relational content fields. Each content component has two names, a Display Name and a Reference Name. The display name is used in the Content section and the reference name is used in Parsley in the Editor section. Click this article to learn more about [Fields](/adding-fields/).

### LESS Variables

This section is generally only used in Zesty.io templated sites. The styles entered here are available in the Editor when editing a LESS style sheet file. Which variables are available and their default value can be set through the blueprint Github repository in the blueprint-variables.yaml. Go to the [LESS Variables](/less-variables/) article to learn more.

### Site Settings

The Site Settings section is important during initial set up of an instance, but usually unused after launch. This area controls settings such as elements that affect the head of a website, CORS controls for endpoints, API Keys for integrations, and forwarding preferences for www. To review in more detail the available settings, go to the [Site Settings](/site-settings/) article.

