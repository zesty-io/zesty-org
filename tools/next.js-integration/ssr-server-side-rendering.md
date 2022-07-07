---
description: How to build Next.js with server side rendering with Zesty.io
---

# SSR: Server Side Rendering

The Zesty nextjs-starter example starts by using server side rendering. Use this guide to help you end to end deploy your next.js app to Google Cloud Platform.

### Data & Delivery Pipeline for Next.js with Zesty.io

![Next.js & Zesty.io SSR Pipeline](<../../.gitbook/assets/Nextjs Zesty.io SSR Pipeline.png>)

### Before Implementation

Before the implementation of the Next.js application please have the following items installed and available:

**Required:**

1. Have your preferred code editor installed (VS Code, Atom, etc.)
2. If you haven’t already, create a Zesty.io account here:
   * [Create an Account](https://accounts.zesty.io/signup)
3. Ensure that you have Node.js version 14 or higher and npm version 8 or higher installed (displayed below in installation order):
   * Node.js installation: [https://nodejs.org/en/](https://nodejs.org/en/)
   * NPM installation: [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
   * Command-line installation of NPM (optional install method): `npm install -g npm`
   * To check which version of Node.js and npm you have installed you can use the following commands:
     * Node: `node -v`
     * NPM: `npm -v`
4. Install Docker Desktop: [Docker Desktop](https://www.docker.com/products/docker-desktop/)
5. Create a GitHub account, if you are already an account holder please log in: [Github Sign up](https://github.com/signup?ref\_cta=Sign+up\&ref\_loc=header+logged+out\&ref\_page=%2F\&source=header-home)
6. Install GitHub Desktop: [Github Desktop](https://desktop.github.com/)
7. Create a GCP account: [Cloud Computing, Hosting Services, and APIs | Google Cloud](https://cloud.google.com/gcp/?utm\_source=google\&utm\_medium=cpc\&utm\_campaign=na-US-all-en-dr-bkws-all-all-trial-p-dr-1011347\&utm\_content=text-ad-none-any-DEV\_c-CRE\_532163069700-ADGP\_Desk%20%7C%20BKWS%20-%20PHR%20%7C%20Txt%20\~%20Google%20Cloud%20\~%20General-KWID\_43700064911472519-kwd-350210914281\&utm\_term=KW\_google%20cloud%20registration-ST\_google%20cloud%20registration\&gclid=EAIaIQobChMI3tDctqij-AIVORmtBh0YqgpiEAAYASAAEgK4k\_D\_BwE\&gclsrc=aw.ds)
8. Install Google Cloud CLI: [Install the gcloud CLI](https://cloud.google.com/sdk/docs/install)
9. Google Cloud Auth login (authenticate with google)

### GCP Project Setup

1. Create a GCP project
   * Naming should be specific to the project. I.e. _<mark style="color:orange;">company-website</mark>_&#x20;
2. Roles and Permissions assigned to collaborators on the GCP project - each role will need to be added to each collaborator:
   * Editor
   * Cloud Build
   * Cloud Build Approver
   * Storage Admin
   * Storage object Admin
   * Cloud Run Admin
3. Google Cloud CLI Tools
   * Prior to implementation please install: [Google Cloud CLI Tools](https://cloud.google.com/sdk/docs/install)
   * Use the quickstart installation guide and installer:
     * MSI for Windows
     * Command-line for MAC
   * Check all boxes on the finish screen. After clicking finish Google CLI will open the command line to complete the authentication process.
   * Follow the prompt commands. It will open an authentication page within the browser and provide the link in the terminal if it does not automatically redirect.
   * On the authentication page, allow permissions access to all of the listed items and complete the authorization.
   * Returning to the GCP command prompt, the user will be prompted to connect to a GCP project. Select the project established for the Next.js application. This establishes the default project referenced by the Google Cloud CLI.
   * Complete the prompts and exit the CLI.

### SSR Next.js Setup

The following steps initialize your Next.js application and connect it to your Zesty.io instance. After creating the Next.js app there will be additional steps to configure the connected Zesty Instance.

1. Prior to implementation please be sure to have the following installed:
   * Node.js 14 or higher
   * NPM 8 or higher
2. Prior to implementation please create a GitHub account and login in
3. Setup procedures are provided in the Zesty Next.js starter documentation:
   * [NextJS Starter Example for Running Zesty.io CMS](https://github.com/zesty-io/nextjs-starter)
4. Run the npx installation script in the command line:
   * `npx create-next-app --example https://github.com/zesty-io/nextjs-starter`
5. Following the prompts the next.js starter provides, complete the following:
   * The command line will prompt the user to name the Next.js app. To aid in easy connection recognition, this can be named the same as the connected Zesty Instance.
   * Next, the command line will prompt the user to log into Zesty.io <mark style="color:orange;">**Note:**</mark> This is done using your Zesty.io credentials
   * Command-line will then prompt the user to connect with an existing instance or create a new instance for you. If the instance is already created, select the desired instance from those listed. Otherwise, select create a new instance.
6. Once the installation of the next.js app is complete, cd into the app directory and start the app by running the following:
   * `npm run dev`
   * This will open the app in the browser at: [http://localhost:3000](http://localhost:3000)
7. As new models are added to the connected instance, the following script is used to sync current Models with updated schemas to their components and create new Zesty components connected to newly created Zesty Models. This will not overwrite existing files.
   * `npm run sync`
8. Within the Next.js starter’s initial file structure there are several required files as well as a few optional. For a complete list of each and their functionality, please see the documentation here:
   * [https://github.com/zesty-io/nextjs-starter#custom-integration-and-the-nextconfigjs-file](https://github.com/zesty-io/nextjs-starter#custom-integration-and-the-nextconfigjs-file)
9. Configuration of the next.config.js file:
10. To remove the Next.js starter tutorials include in the app, use the following in the command line:
    * `rm -Rf views/tutorials`

### Github Repository and Collaborators Setup

Once the Next.js installation is complete, the next steps will establish a connected GitHub repository for version control

1. Once the installation and configuration are complete, you will need to create a GitHub repo and connect the repo to your Next.js app. This can be accomplished in one of two ways: through terminal/Git or through GitHub Desktop. Both processes allow the user to quickly create and connect to a repo that has the same name as the Next.js app. The following steps can be used to accomplish this, please choose Step 2 or 3. After completion of either continue on to Step 4.
2. **GitHub & GitHub Desktop:**
   * In GitHub Desktop select the ‘**File**’ button:
     * In the dropdown select: **Add local repository**
   * The user will be prompted with a form
     * Within the form browse and select the root directory of the Next.js application
     * The form will inform the user: ‘The directory does not appear to be a Git repository.’ Allowing the user to select the ‘create a repository’ link. This link will redirect to a create a repository form with the appropriate information filled.
     * Within the form be sure the options for initializing a README.md, .gitignore, and license are all unchecked. This will alleviate the process of overwriting your current local files and the possibility of unrelated histories creating merge conflicts. Then select **Create repository**.
     * As Github Desktop creates the repo it will stage and commit the Next.js app as the initial commit. This will also establish the **main** branch.
   * GitHub Desktop will then prompt the user to publish the repository to GitHub. Click the **Publish repository** button to initialize.
     * The user will be presented with a form that allows the selection of GitHub or GitHub Enterprise. Along with other options regarding the repo’s creation. (i.e. descriptions and organization)
     * When completed select **Publish repository**
   * With the publishing of the repo, GitHub will establish the main branch as the default/production branch.
   * Select the **Current branch** tab within GitHub Desktop:
     * In the provided dropdown, select **Branches**
     * **Branches** provide an input that will allow the user to create a new branch in the GUI
     * In the input add dev or the desired branch name for the staging branch
     * The GUI will provide the 'merge into **main**' branch workflow immediately unless otherwise specified. It will prompt verification of this before creating the branch.
   * While in the **dev** branch, select **Open in Visual Studio Code**
     * This will open VS Code in the **dev** branch
     * Update the README.md with the branching workflow
   * Moving back into GitHub Desktop, the changes will be staged and ready to commit:
     * Add commit comment and description
     * Click **Commit to dev**
     * The branch will now be available to publish by selecting the **Publish branch** button
   * GitHub Desktop will then prompt the user to create a new pull request. Selecting Create Pull Request will redirect the user to GitHub.
     * From here the pull request can be completed and merged into **main**
3. **GitHub & Terminal/Git:**
   * Log into GitHub and create a new repository:
     * Initialize the repository without a README.md or .gitignore. This will alleviate unrelated history conflicts.
     * Name the repository the same name you create for the Next.js app.
     * Lowercase letters and hyphen-separated words are the best practice for this setup.
     * Copy the git add remote URL provided in the repo after creation
   * From the terminal/GitBash, navigate to the root directory of the Next.js app and run the following commands:
     * `git init`
     * `git add -A`
     * `git commit -m "your message here"`
     * `git branch -M main`
     * <mark style="color:orange;">**Note:**</mark> the GitHub URL below is an example, you will want to replace it with the remote repo URL you copied from GitHub. This will set your origin to the remote repo.
     * `git add remote origin git@github.com:username/repo-name.git`
     * `git push -u origin main`
   * Run the following commands to create a new branch for development. This branch can have a name of your choosing, the below example creates a 'dev' branch:
     * `git checkout -b dev`
     * Open your app in VS Code and be sure the dev branch is selected.
       * You can use the `code .` command, from the terminal, to open the code editor.
     * Update the README, outlining the branch's workflow: **main** is the production branch and **dev** is the development branch.
     * From the terminal run the following commands:
     * `git add -A`
     * `git commit -m "your message here"`
     * `git pull origin main`
     * `git push origin dev`
   * The above process will establish the `'dev'` branch and allow you to create a pull request. Once approved dev can be merged into production.
   * The pull request can be done on GitHub by selecting the repository.
     * From within the repo, select **Pull requests**
     * click **Create Pull Request**
     * The provided form will allow users to select the dev merge into the main branch workflow. Complete the form and create the pull request to be reviewed
     * <mark style="color:orange;">**Note:**</mark> reviewers can be added in the form or after the pull request has been created.
4. **Adding collaborators to the GitHub repository:**
   * In the GitHub repository follow these instructions to add collaboration users:
     * select Settings
     * select Collaborators in the side navigation
     * click Add people
     * You can search for GitHub users by their username, full name, or email
     * After users have been added they will receive an invite email. If the email was not received, a link to the invitation is provided in the Collaborations screen. This link can be sent to users as well.

### Instance Settings & Configurations

Within the instance, there are a few required settings and suggested settings to enable the full potential of the Next.js integration.

**Required:**

1. **WebEngine Mode** setting: the rendering mode functionality is based on how the data is accessed for rendering. When using the Next.js app integration Headless or Hybrid are the Modes available. This setting is located in the Settings App, under the General section.
   * **Hybrid:** this mode will allow for content to render HTML at their routes or as a JSON object. This does allow for a fallback for routes to render a traditional Zesty view when the Next.js rendering is unavailable.
   * **Headless:** this mode only allows routes to render as JSON.
2. **Proxy** settings within Zesty allow users to render from an outside bucket. When utilizing the Next.js app, the external bucket will be the GCP project URL. The setting is located in the Settings App, under the section Proxy. One field will be for the project staging URL and the other will be for the project production URL.

**Suggested:**

1. The following settings can be updated in the Settings App, under the section Security. It will allow Duo-Mode preview to display in your instance and secure previews.
   * **Header: X-Frame-Options:** this field should be empty
   * **Referrer-Policy:** this field should be empty
   * **Preview Lock Password:** this field should be a password that is used to look at preview links

### Docker Setup

The Docker file is established with a set of commands to be run in succession when the docker build is triggered.

1. Prior to implementation install Docker Desktop. The installation link is provided [here](ssr-server-side-rendering.md#before-implementation).
2. Within the root of your Next.js application create a file titled `Dockerfile`
   * <mark style="color:orange;">**Note:**</mark> the file does not need an extension
3. After the creation of the file add the following code and save:

```
FROM node:16.4.2
 
WORKDIR /usr/src/app
 
COPY . ./
RUN npm install
 
EXPOSE 8080
 
ENV HOST=0.0.0.0
ENV PORT=8080
 
RUN npm run build
 
CMD [ "npm", "start" ]
```

###
