---
description: >-
  This guide is a continuation from "Manually integrating a Next.js project to
  Zesty content"
---

# Connecting Layouts App to React

### Install Autolayout package <a href="#_88p2jjoi6r81" id="_88p2jjoi6r81"></a>

Reference: [https://github.com/zesty-io/react-autolayout](https://github.com/zesty-io/react-autolayout)

```
npm install @zesty-io/react-autolayout
```

### Ensure Zesty is integrated to your React app <a href="#_4bsbk1z4bdlq" id="_4bsbk1z4bdlq"></a>

The AutoLayout package expects a content object from the Zesty toJSON API. If that is not configured, see these references for configuration:

Please review this doc to ensure your setup is integrated properly: [https://zesty.org/tools/nextjs/manually-integrating-a-next.js-project-to-zesty-content](https://zesty.org/tools/nextjs/manually-integrating-a-next.js-project-to-zesty-content)

### AutoLayout Component <a href="#_sbd4r07xsfe9" id="_sbd4r07xsfe9"></a>

Here is an example of an AutoLayout component which manually maps through the custom components in the React project to the components built in the Zesty Layouts App

#### QUICKSTART: <a href="#_40unrv9d7r4g" id="_40unrv9d7r4g"></a>

```javascript
Add this to the top of your file
import { AutoLayout } from "@zesty-io/react-autolayout";
// Add this into your JSX body
<AutoLayout content={content} />s
```

Here is a full example snippet of running AutoLayout and mapping them to your own custom components.

See more custom component example here [https://nextjs-marketing-nine.vercel.app/layouts/](https://nextjs-marketing-nine.vercel.app/layouts/)

```javascript
import React from "react";
import { AutoLayout } from "@zesty-io/react-autolayout";
import { CustomTextarea } from "./CustomTextarea";
import { CustomColumn } from "./CustomColumn";
import { CustomRow } from "./CustomRow";
export default function Page({ content }) {
<AutoLayout content={content} components={{
"wysiwyg_basic": CustomTextarea,
"text": CustomText,
"column": CustomColumn,
"row": CustomRow,
"design": CustomDesign,
"link": CustomLink
}} />
}
```
