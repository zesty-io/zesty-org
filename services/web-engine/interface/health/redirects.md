# Redirects

### Overview

Part of Zesty.io's Health section is a redirect manager. The redirect manager allows users to create and delete either 301 or 302 redirects, as well as to mass upload redirects without needing access to `.htaccess` files. All of your current redirects are visible upon navigating to your instance's Health section.

### 301 and 302 redirects

Zesty.io allows for the creation of 301 or 302 redirects. Learn more about 301 redirects [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301) and 302 redirects [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302).

Create a 301 or 302 redirects by following these steps: 

1. Add a specific link in the left-hand "From" column. Do not include the domain. 

2. Choose whether you want a 301 or 302 redirect by toggling the switch between the columns. 

3. Select the link from the dropdown that you'd like it to redirect to in the right-hand "To" column. 

4. Click the green "+ Redirect" button to create the redirect.

![Example of a 301 redirect](../../../../.gitbook/assets/redirect-example.png)

## Mass Redirect

To use our mass redirect tool you can import a CSV file or an XML file to create redirects.

### CSV

To create redirects with a CSV you can either have all of your "From" URLs in one column, then choose the "To" URLs in the Health section interface, or you can do it all in the CSV.

To create From/To redirects with a CSV you'll first need to format your CSV. Format your CSV into 2 columns with no headers. The left-hand column is your "From" column and your right-hand column is your "To" column. The "To" column will only work with a relative path - it will not create redirects with a full path.

Once your sheet is properly formatted click the gray "Import CSV/XML" button and import your sheet.

### XML Sitemap

To mass upload from XML, use the XML format required for sitemap.xml files provided to search engines. This format only reads old paths and requires selecting the new path to redirect to using the interface.

