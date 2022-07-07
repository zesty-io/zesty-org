---
description: Load manager controlled redirects from zesty.io in next.js
---

# Zesty.io Redirects in Next.js

Zesty provides a function, fetchZestyRedirection, as seen here [https://github.com/zesty-io/nextjs-starter/blob/main/lib/zesty/fetchRedirects.js](https://github.com/zesty-io/nextjs-starter/blob/main/lib/zesty/fetchRedirects.js), load this function inside of next.config.js and place it as the return results next async redirects() function.&#x20;

```javascript
// next.config.js
const { fetchZestyRedirects } = require('./lib/zesty/fetchRedirects');

module.exports = {
  async redirects() {
    return await fetchZestyRedirects()
  },
  ...
}
```

If you wish to combine redirects from multiple sources, fetch the  `await fetchZestyRedirects()` into a separate variable and join the array [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Array/concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Array/concat)

Example of joining zesty redirects to your customer redirects.

```javascript
// next.config.js
const { fetchZestyRedirects } = require('./lib/zesty/fetchRedirects');

module.exports = {
  async redirects() {
    let myRedirects = [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ];
    const zestyRedirects = await fetchZestyRedirects();
    
    myRedirects.concat(zestyRedirects );
    return myRedirects
  },
  ...
}
```

