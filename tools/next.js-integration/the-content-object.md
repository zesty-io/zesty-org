# The Content Object

### How the page content object works

The each Zesty.io content model has an associated react component in the `views/zesty` project folder. Each component is fed a {content} object, which contains content item field data, and meta data. Content is accessed like so: `{content.[field_name]}` See this example of a simple react component for an About Page.

```javascript
// AboutPage React Component for Zesty.io Content Model: About Page
// The About Page content model has two fields
// title: Plain Text
// body: Rich Text
import React  from 'react';

function AboutPage({content}) {
    return (
        <>
            <h1>{{content.title}}></h1>
            <div dangerouslySetInnerHTML={{__html:content.body}} />
        </>
    );
}
```

### How to relational content to work with Next.js

Its best to build content model schema's to include as much of the content on the page for the content author to control, this mean images, text, files, and rich text. To connect related content to a page, using a one to one or many to one fields types will give you access to all the content of the related content item without making additional fetch requests.

```javascript
// title: Plain Text
// body: Rich Text
// team: Many to One Relational to Team Member content item
import React  from 'react';

function AboutPage({content}) {
    return (
        <>
            <h1>{{content.title}}></h1>
            <div dangerouslySetInnerHTML={{__html:content.body}} />
            <h2>Our Team</h2>
            <div>
                {content.team.data.map(member => 
                    <div>
                        <h4>{member.name} - {member.title}</h4>
                        <p>{member.description}</p>
                    </div>
                )}
            </div>
        </>
    );
}
```

### How to fetch content not available in the page content object

When the content you need does not live on the content item, you may fetch it to use in your page.  In this example, instead of using a many to one relational field, we fetch team members remotely.



```javascript
// AboutPage React Component for Zesty.io Content Model: About Page
// The About Page content model has two fields
// title: Plain Text
// body: Rich Text
import React  from 'react';

// fetch for data
const fetchTeamData = async (uri, setFunc) => {
  const res = await fetch(uri).then((response) => response.json());
  res && (await setFunc(res));
};

// AboutPage component
function AboutPage({content}) {

    let zestyURL = content.zestyProductionMode
        ? process.env.zesty.production
        : process.env.zesty.stage;

    const uri = `${zestyURL}/-/team.json`;
    const [teamMembers, setTeamMembers] = React.useState([]);
    
    // get data in initial load
    React.useEffect(() => {
        fetchTeamData(uri, setTeamMembers);
    }, []);

    return (
        <>
            <h1>{{content.title}}></h1>
            <div dangerouslySetInnerHTML={{__html:content.body}} />
            <h2>Our Team</h2>
            <div>
                {teamMembers.data.map(member => 
                    <div>
                        <h4>{member.name} - {member.title}</h4>
                        <p>{member.description}</p>
                    </div>
                )}
            </div>
        </>
    );
}
```
