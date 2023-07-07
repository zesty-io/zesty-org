---
description: >-
  Map through Layouts App components programmatically and always have the latest
  components loaded within Layouts
---

# Programmatically mapping through Layouts components

This guide is a continuation of [https://zesty.org/tools/nextjs/connecting-layouts-app-to-react](https://zesty.org/tools/nextjs/connecting-layouts-app-to-react)

⌛️ Estimated implementation time: 15 minutes

Programmatic component mapping allows developers to dynamically add components without the need to create a manual reference in their project after a new Layouts component is configured in Zesty.&#x20;

In this doc, we will walk you through setting up a folder of components that dynamically map to the Zesty Layouts integration. Here is the **example repo**: [https://github.com/zesty-io/nextjs-custom-integration/blob/main/pages/layouts-test-page.js](https://github.com/zesty-io/nextjs-custom-integration/blob/main/pages/layouts-test-page.js)

Lets get started! 🙌

### Creating ComponentSelector Component <a href="#_y542s3a2c5fr" id="_y542s3a2c5fr"></a>

In your React/Next.js project create all your custom components in a components folder.

Create a **`ComponentSelector.js`** component and include your custom components. The following snippet is an example of the **`ComponentSelector.js`** file

<pre class="language-javascript" data-overflow="wrap" data-full-width="false"><code class="lang-javascript">import * as zestyBlocks from '../components';
const ComponentSelector = (props) => {
const componentName = props.data.name;
const Component = zestyBlocks[componentName];
<strong>    return (
</strong>        &#x3C;>
        &#x3C;Component />
        &#x3C;/>
    );
};
export default ComponentSelector;
</code></pre>

First, we import all components from index.js as **zestyBlocks**. The return value of **zestyBlocks** will be all of the modules we export from index.js as objects.

Next, we declared the **ComponentSelector** component which accepts props from the react-auto-layout package. Props will have all the data from Layouts that we will set up in the next section.

### Initialize **AutoLayout** component.&#x20;

AutoLayout is expecting a **`content`** object from the Zesty integration to be passed to the AutoLayout object. It is also expecting components to be passed as objects. In our example, we will be passing our **ComponentSelector** as a component.

If you are using one of Zesty's Next.js starter templates ([nextjs-starter](https://github.com/zesty-io/nextjs-starter) or [nextjs-v13-starter](https://github.com/zesty-io/nextjs-v13-starter)) here is an example snippet:&#x20;

```javascript
import { AutoLayout } from '@zesty-io/react-autolayout';
import ComponentSelector from '../components/ComponentSelector';
export default function Home({ content }) {
    return (
        <>
        <AutoLayout
        content={content}
        components={{
        component: ComponentSelector,
        }}
        />
    </>
    );
}

```

If you are **NOT** using one of Zesty's Next.js starter templates, you will need to ensure that you have installed our [webengine-json](https://github.com/zesty-io/webengine-json) package in order to fetch the content object you are targeting. Here is an example snippet using Next.js `getServerSideProps`. Be sure to replace `my-item-path` and `my-password` with their corresponding values according to your content item's path and instance settings.

```javascript
import { toJSON } from "@zesty-io/webengine-json";
import { AutoLayout } from "@zesty-io/react-autolayout";

import ZestyConfig from "/zesty.config.json";
import ComponentSelector from "../components/ComponentSelector";

export const getServerSideProps = async (context) => {
  console.log("the url can be used to auto fill the path", context.resolvedUrl);
  const content = await toJSON(ZestyConfig.stage, "/my-item-path", "my-password");
  return { props: { content } };
};

export default function Home({content}) {
  return (
    <div>
      <main>
        <AutoLayout
      content={content}
      components={{
        /**
         * Autolayout will automatically pass in all props to ComponentSeletor
         * Component Selector is the one responsible mapping the components from auto-layout to the react component
         */
        component: ComponentSelector,
      }}
    />
       </main>
    </div>
  )
}

```

&#x20;🎉 Congratulations! You are now iterating through your custom Layouts components without the need to manually reference these components after each new configuration. So long as your Zesty component name matches your applications component name, you are all set to go!&#x20;
