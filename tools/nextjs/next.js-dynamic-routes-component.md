---
description: Leveraging Next.js's dynamic route capabilities
---

# Next.js Dynamic Routes Component

As seen in Zesty’s nextjs13-starter package:

[https://github.com/zesty-io/nextjs-v13-starter/blob/main/pages/%5B%5B...zesty%5D%5D.tsx](https://github.com/zesty-io/nextjs-v13-starter/blob/main/pages/\[\[...zesty]].tsx)

Create a component called `[[..zesty]].tsx` in your `pages` directory

Here is an example snippet for the catch all component. Note that we are using Material UI components in this example which are not necessary for your custom build. You will want to setup a `<ZestyView>` component that passes the content property. See the following reference: [\<ZestyView> Component](https://docs.google.com/document/d/1aujd6UZRW4rh7Ul1e8LJklOCt9\_Zwb2KMh3E\_aYM7y8/edit)

```javascript
import React from "react";
import { GetServerSideProps } from "next";
import { fetchPageJson } from "@zesty-io/nextjs-sync";
import { ZestyView } from "@/components/zesty/ZestyView";
// main is used here, its a base for layout that uses Material UI (mui), delete it if you dont want it, and just return <ZestyView content={props} />
import Main from "@/layout/Main";
import { ContentItem } from "@/types";
export default function Zesty(props: ContentItem) {
return (
<Main>
<ZestyView content={props} />
</Main>
);
}
// This gets called on every request, its for SSR mode in next
export const getServerSideProps: GetServerSideProps = async (ctx) => {
try {
const data = await fetchPageJson(ctx.resolvedUrl);
// add your own custom logic here if needed, set your data to {data.yourData} ...
// generate a status 404 page
if (data.error) return { notFound: true };
// Pass data to the page via props
return { props: data };
} catch (error) {
// handle unexpected errors
console.error(error);
return { notFound: true };
}
};
```
