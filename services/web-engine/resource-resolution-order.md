---
description: >-
  The order in which specific types of behavior or views load, from 301
  redirects to 404s.
---

# Resource Resolution Order

When a request is served by WebEngine, it reads the url path and attempts to match the url path to a content item resources. URL are checked against resource in a specific order, and will resolve the resource first if a match is found. If two resources share a URL path, then the one that loads first will resolve and the other is ignored.

**Resource load order:**

1. 301 redirects
2. Content Models Views if a content item's meta path matches the request page _e.g. /about/team/_
3. Instant JSON API _e.g. /-/instant/7-zyx-zyxzyc.json_
4. GQL API _e.g. /-/gql/\*_
5. Legacy html endpoints _e.g. /ajax/\*_
6. Legacy json endpoints _e.g. /-/custom/\*_
7. Custom endpoints e.g. _/custom/endpoints.json_
8. Wild Card Views e.g. _/store/12345/cool-shirt/_
9. 404 Pages e.g. when no resources match the url pattern

