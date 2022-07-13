---
description: How to work with cookies in Next.js
---

# Next.js & Cookies

This tutorial assumes you have a Next.js project and are familiar with NPM and React. Final code example is available on g=Github [https://github.com/zesty-io/livestream-examples/blob/main/nextjs-example-website/pages/cookie-example.js](https://github.com/zesty-io/livestream-examples/blob/main/nextjs-example-website/pages/cookie-example.js)

{% hint style="info" %}
W**hat you'll learn in the Next.js Cookies Tutorial**

* What are cookies?
* How set cookies with Next.js
* How get cookies with Next.js
* How to use cookies to personalize the page
{% endhint %}

### What are Cookies?

Cookies are small data storage objects that can written to and accessed from the browser during a user session. &#x20;

Cookies are used for tracking, personalization, app-memory, marketing recognition etc.. There isn't specific scope to which cookies can be used for. Common examples are tracking IDs, login session tokens, and filter option memory.&#x20;

### How to set cookies with Next.js

To access and write cookies in a Next.js React app, we are going to leverage the NPM package [https://www.npmjs.com/package/cookies-next](https://www.npmjs.com/package/cookies-next) to cut down on writing custom code. Thank you  [https://github.com/andreizanik](https://github.com/andreizanik) for the package!

To get started, install `cookies-next` using NPM or Yarn to your project.&#x20;

```bash
npm install -s cookies-next
```

After installing `cookies-next` to your project, open up the Next.js `/page` component you want to test cookies in. We will test on `homepage.js.`

In this example, we will write the cookie using client side code, this will work for both static site generation and server side rendering. To run code after the DOM renders, we will use [React's useEffect](https://reactjs.org/docs/hooks-effect.html) hook.&#x20;

```javascript
import { React, useEffect } from 'react'; // note adding useEffect
import { setCookie } from 'cookies-next'; // the package you installed

export default function Homepage({content}){
    let sortFilterDefault = 'DESC'; // set up default value
    
    // useEffect runs on the client after DOM renders  
    useEffect(() => {
        setCookie('sort', sortFilterDefault );
    })
    
    // JSX output
    return (
        <div>
            Header...
            Body...
            Footer...
        </div>
    );

}
```

### How access (get) cookies with Next.js

To access the cookie we set, we will use both React's useEffect and [React's useState](https://reactjs.org/docs/hooks-state.html) hook connect values we extract from the client side to our JSX output. Nothing to install here as useHook and useEffect are both part of React.&#x20;

A [ternary conditional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional\_Operator) is used to use a fallback value if the cookie isn't set.&#x20;

```javascript
import { React, useEffect, useState} from 'react';
import { getCookie } from 'cookies-next';

export default function Homepage({content}){
    let sortFilterDefault = 'DESC'; // set up default value

    // Declare a new state variable, which we'll call "sortFilter"
    // the inistial default value we pass is 'DESC' for decending sort
    const [sortFilter, setSortFilter] = useState(sortFilterDefault);
  
    useEffect(() => {
        // using a ternary conditional to have a fallback value
        let cookieValue = getCookie('sort') ? getCookie('sort') : sortFilterDefault ;
        setSortFilter(cookieValue);
    })
    
    return (
        <div>
            Header...
            <div>
                Sort Filter Option: {sortFilter}
            </div>
            Footer...
        </div>
    );

}
```

### Using cookies to personalize a Next.js page

Using the same example as above, we will leverage the written cookie value to change the presentation output, and also connect that change to a select input, which will update or write the cookie.

```javascript
import { React, useEffect, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';

export default function Homepage({content}){
    let sortFilterDefault = 'DESC'; // set up default value

    // Declare a new state variable, which we'll call "sortFilter"
    // the inistial default value we pass is 'DESC' for decending sort
    const [sortFilter, setSortFilter] = useState(sortFilterDefault);
 
    // function to use with select to set value
    const handleChange = (event) => {
        const sort = event.target.value;
        setSortFilter(sort);
        setCookie('sort', sort);
    };

    // client execution after dom renders
    useEffect(() => {
        // using a ternary conditional to have a fallback value
        setSortFilter(getCookie('sort'));
       
    })
    
    return (
        <div>
            Header...
            <div>
                <select onChange={handleChange}>
                    <option value="ASC">Ascending</option>
                    <option value="DESC">Descending</option>
                </select>
            
               {sortFilter == 'ASC' && <table>
                   table data sorting ascending order
               </table>}
               
               {sortFilter == 'DESC' && <table>
                   table data sorting decending order
               </table>}
            </div>
            Footer...
        </div>
    );

}
```
