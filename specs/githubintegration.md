

## Zesty.io Code Github.com Integration Specification
Introduced 2.1.18

**Overview**

Zesty.io is a 100% SaaS browser based content management system. This unique technology has forced development to happen in-browser through the Zesty.io Manager IDE. Developers working inside of this environment have overwhelming had common specific demands.


1.  A templating and coding experience outside of the browser.
2.  The ability to work in multiple testing environments.
3.  More robust code history and roll back abilities

Aside from the asks, we have noticed a few prevalent issues as the product grows.

1.  Code collision, overwriting or publishing items without awareness of the other developer.
2.  Not able to keep feature parity to modern IDEs
3.  Lack of access to growing open source packages
4.  No access to dependency controllers like NPM or Bower

**Roadblocks to Solving these Demands**

Zesty.io is a content management company, not a IDE software company. Keeping a web IDE up to par to modern IDEs with large communities behind them is not how we allocate resources.

**Proposed Solution**

Give developers the option to edit Zesty.io templates and files locally. This can be done by using Github's API to sync a Git repository with Zesty.io template files. Though simple in explanation, there are a lot of colliding scenarios to consider when doing this. This specification is put together to discover and solve for as many of those collision scenarios as possible, as well as describe to the Zesty.io developer how it will work in practice.

*   Local development would be first supported on Atom.io, which provides a rich developer experience with a large community to support it. The ability to extend this IDE makes it a good candidate for parsley syntax and auto completion. This satisfies Demand 1 and Issues B, C, and D.
*   The SaaS git manager Github provides an API that would enable Zesty.io to sync a local repository to a specific Zesty.io instance's files. This satisfies Demand 2 and 3, and Issue A.


## Zesty.io Github Integration Workflow

### Connecting to Zesty.io

User will authenticate their Github account through the Zesty.io accounts interface. Each Zesty.io instance would be connected to a Github repo through the editor tab in the Zesty.io manager, through a Github sync button. Zesty.io would create the repository through the Github API.

### How GIT Syncing Will Work

Each branch on a GIT repository would be synced to Zesty.io. The primary branch, Master, would be synced to as the `dev` files in Zesty.io. In order to publish changes, this must occur from the Zesty.io manager interface, just as it does now.


<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline drawings not supported directly from Docs. You may want to copy the inline drawing to a standalone drawing and export by reference. See <a href="https://github.com/evbacher/gd2md-html/wiki/Google-Drawings-by-reference">Google Drawings by reference</a> for details. The img URL below is a placeholder. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![drawing](https://docs.google.com/a/google.com/drawings/d/12345/export/png)

_Notes to Zesty.io Engineers: currently Zesty.io files have two branches (stored in the database as status) the branches are `live` (published) and `dev` (being edited). New branch would sync all files to a new 'status'. The master branch will sync to `dev` files. Being able to edit both locally and in Zesty.io will be a feature saved for later development._

**Files Syncing from Zesty.io to GIT**

If a new collection (dataset, pageset, or templateset) is created, a new file will be pushed into all branches using the [GITHUB api create/commit call](https://developer.github.com/v3/repos/contents/#create-a-file), followed by a



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline drawings not supported directly from Docs. You may want to copy the inline drawing to a standalone drawing and export by reference. See <a href="https://github.com/evbacher/gd2md-html/wiki/Google-Drawings-by-reference">Google Drawings by reference</a> for details. The img URL below is a placeholder. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![drawing](https://docs.google.com/a/google.com/drawings/d/12345/export/png)


## Managing Files


*   General Rules
    *   Rule 1: Template File `file_names` in the repo need to match the `set_zuid` reference name (really should be entity_zuid) or name of the set itself.
        *   Files can be located in any directory structure so long they match Rule #1 [ homepage [11-ZXYz#-314134].tpl ]
    *   Rule 2: Less/CSS/SCSS files must be located in a folder structure that matches `/stylesheets/less/`, `/stylesheets/scss/` etc.
        *   /scss/ can have subfolders, and the compiler will search through them for any file with the .scss extension. Behavior also mimicked for .css or .less.
    *   Rule 3: If there was no compile map, Stylesheets will compile by an order using their name or number
        *   Example 1: 100.main.less 201.buttons.less will compile > 1. main.less 2. buttons.less
        *   Example 2: main.less buttons.less will compile > 1. buttons.less > 2. main.less
    *   Rule 4: stylesheets of different compilers compile in this order, always. 1. CSS 2. LESS 3. SCSS
    *   Rule 5: Compile map = YAML (because of comments) or a main.less (which allows CSS includes)
        *   If you had a compile map, only files in the map would be compiled, all others ignored
    *   Javascript compile rules?
        *   Assign files to head or at bottom of body?
    *   Linked files in the head (e.g. cdn for js or css libraries)?
*   File Creation
    *   new snippets == New ajax files
    *   Live Preview: It would hold a cookie with the branch name, and which branch is rendered is based on the cookie name
    *   A cookie could be set by setting ?\_branch=branch_name (which stores to the session)
    *   Any interface options for displaying which branch you're currently viewing, and or dropdown options for switching between available branches while viewing?
*   Editor
    *   A user can only publish from dev (master), so all changes need to be merged into master and pushed to Github.
    *   All files in the Zesty.io Editor would be read only, editing may only happen locally. This will most likely only be for the first iteration of the Zesty.io/Github integration. To gain access to edit files on the spot, Github integration would need to be disconnected.
*   Collection
    *   Reference Name can no longer be changed, they are unique and tied to the file TPL name


## Considerations / Ideas

*   Using only org repos (could cause approval time or barrier to entry + $25)
*   Naming conventions for new branches? Restricted names?
*   User Permissions
*   Question and concerns from Dustin: [https://docs.google.com/document/d/1yem4d62kqKKqZYT_aSj9Lf0wjzn6j77CfOFuf_MMDk0/edit](https://docs.google.com/document/d/1yem4d62kqKKqZYT_aSj9Lf0wjzn6j77CfOFuf_MMDk0/edit)
