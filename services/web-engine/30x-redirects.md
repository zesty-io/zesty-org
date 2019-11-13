# 30X Redirects

## How Do Redirects work on Zesty.io Web Engine?

Redirects are created and managed inside the Instance Manager.  In the Manage Redirects section in the Health tab, you can add and maintain 301 and 302 redirects.

You might want to use a redirect if, for example, you have changed the URL of a page or resource and wish user's who visit the old URL to be directed to the new one by their browser.

Add a new redirect by entering the URL path that you want the redirect to take visitors away from, select 301 if it is a permanent move or 302 if temporary, then select the new target URL path that you wish the user to be taken to.

### Redirects with Request Parameters

If you specify a target URL path that has request parameters on it, for example redirecting:

```text
/old/path
```

to:

```text
/my/new/path?a=1&b=2
```

then Zesty.io will redirect visitors to that path, and remove any query parameters present on the from path, as follows:

| From | To |
| :--- | :--- |
| /old/path | /my/new/path?a=1&b=2 |
| /old/path/?a=1 | /my/new/path?a=1&b=2 |
| /old/path/?a=1&c=3 | /my/new/path?a=1&b=2 |

If you do not specify request parameters in your target URL path, Zesty.io will pass through request parameters to the redirect target.  For example, redirecting:

```text
/old/path
```

to:

```text
/my/new/path
```

will cause Zesty.io to redirect as follows:

| From | To |
| :--- | :--- |
| /old/path | /my/new/path |
| /old/path?a=1 | /my/new/path?a=1 |
| /old/path?a=1&b=2 | /my/new/path?a=1&b=2 |

