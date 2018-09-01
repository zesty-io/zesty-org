# Guide

## Getting Started with the Example App

Let's start by cloning [the example app](https://github.com/zesty-io/Zesty-Remote-React-Ruby-Example)

```bash
cd path/to/your/projects/folder
git clone https://github.com/zesty-io/Zesty-Remote-React-Ruby-Example
cd Zesty-Remote-React-Ruby-Example
```

Now, let's install and run the app \(Make sure you have Ruby version 2.4.4 or higher. To manage your versions and to keep your system Ruby separate, we recommend using [`rvm`](https://rvm.io)`)`

```bash
bundle install
rails g react:install
rails s
```

### Understanding the Example Project

In this project, we are using two custom endpoints, [`/-/basic-api/homepage.json`](https://6c706l48-dev.preview.zestyio.com/-/basic-api/homepage.json) and [`/-/custom/menulist.json`](https://6c706l48-dev.preview.zestyio.com/-/custom/menulist.json). To retrieve this data, we've put a React component inside our Ruby app. This streamlines the process significantly, since now we can simply use the same code as that from our[ Remote React App Guide](../react/remote-guide.md). 

In our React code, we perform a `GET` request to these endpoints. This can be seen in [`app/assets/javascripts/components/_home.js.jsx`](https://github.com/zesty-io/Zesty-Remote-React-Ruby-Example/blob/master/app/assets/javascripts/components/_home.js.jsx) and [`app/assets/javascripts/components/_menu.js.jsx`](https://github.com/zesty-io/Zesty-Remote-React-Ruby-Example/blob/master/app/assets/javascripts/components/_menu.js.jsx).

{% code-tabs %}
{% code-tabs-item title="Home.js" %}
```jsx
class Home extends Component {
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

Using `componentDidMount`, we're able to fetch our JSON and render it accordingly. After we load it in, it's just a matter of parsing a JS Object.

