# Guide \(Remote React App\)

Github repository for this Walkthrough Guide: [https://github.com/zesty-io/zesty-remote-react-example](https://github.com/zesty-io/Zesty-Remote-React-Example#zesty-remote-react-example)​

## Getting Started with the Example App

Let's start by cloning [the example app](https://github.com/zesty-io/Zesty-Remote-React-Example)

```bash
cd path/to/your/projects/folder
git clone https://github.com/zesty-io/Zesty-Remote-React-Example
cd Zesty-Remote-React-Example
```

Now, let's install and run the app

```bash
npm install
npm start
```

### Understanding the Example Project

In this project, we are using two custom endpoints, [`/-/basic-api/homepage.json`](https://6c706l48-dev.preview.zestyio.com/-/basic-api/homepage.json) and [`/-/custom/menulist.json`](https://6c706l48-dev.preview.zestyio.com/-/custom/menulist.json)

In our React code, we perform a `GET` request to these endpoints This can be seen in [`src/Home.js`](https://github.com/zesty-io/Zesty-Remote-React-Example/blob/master/src/Home.js) and [`src/Menu.js`](https://github.com/zesty-io/Zesty-Remote-React-Example/blob/master/src/Menu.js).

{% code-tabs %}
{% code-tabs-item title="Home.js" %}
```jsx
import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeData: {}
    };
  }
  componentDidMount() {
    fetch("http://burger.zesty.site/-/basic-api/homepage.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ homeData: data });
      });
  }
  render() { // greatly simplified for explanation, see the full file on Github
    return (
      <div data-spy="scroll" data-target="#site-navbar" data-offset="200">
        <h1 className="site-heading no- mb-3">
          {this.state.homeData.data &&
            this.state.homeData.data.splash_title}
        </h1>
        <h2 className="h5 site-subheading mb-5 no-">
          {this.state.homeData.data &&
            this.state.homeData.data.splash_description}
        </h2>
      </div>
    );
  }
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% hint style="info" %}
Note how the only difference between the [local](https://github.com/zesty-io/zesty-org/tree/afa5f7fa7e3c4a65230b1295ae266512caa516ca/headless/react/local-guide.md#understanding-the-example-project) and [remote](https://github.com/zesty-io/zesty-org/tree/afa5f7fa7e3c4a65230b1295ae266512caa516ca/headless/react/remote-guide.md#understanding-the-example-project) examples is `componentDidMount`
{% endhint %}

Using `componentDidMount`, we're able to fetch our JSON and render it accordingly. After we load it in, it's just a matter of parsing a JS Object.

Additionally, it's not too much different to change this to work locally instead of remotely, as the prior guide shows.

