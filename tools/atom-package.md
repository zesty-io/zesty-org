---
description: >-
  Use the Zesty.io Atom package to edit your instances code files locally and
  get automatic syncing to your remote instance.
---

# Atom IDE Package

## Getting Started 

To get started with the Atom IDE package you must first have the Atom editor installed. After you have Atom installed the next step is to install the Zesty.io package.   
  
1. Download and install the Atom editor directly from [Atom's site](https://atom.io/).  

2. Install the [zestyio-atom package](https://atom.io/packages/zestyio-atom). 

#### Install the Package

Install the [`zestyio-atom`](https://atom.io/packages/zestyio-atom) package. There are two options for installing the package: 

* Atom UI
* Command Line

**Atom UI**

The Atom Editor can be installed through the Atom package manager. When you have [ATOM](https://atom.io) installed, open settings, click on install, search Zesty. Install **zestyio-atom** and **zestyio-parsley-atom**.

![Snap shot of searching for Zesty Plugin in the ATOM Editor](../.gitbook/assets/image%20%283%29.png)

**Command Line**

You can install the zestyio-atom package through the command line as well

```text
apm install zestyio-atom
```

### Accessing Zesty.io via Atom

There are three methods of accessing Zesty.io via Atom:

1. Access token via Accounts UI
2. Access token via API
3.  [User sign-in modal](https://zesty.org/tools/atom-package#user-sign-in-modal)

{% hint style="info" %}
We recommend using method 2: Access token via the Accounts UI.
{% endhint %}

See the steps for each method below. 

### Access token via Accounts UI

### Access token via API

After installing Atom and the zestyio-atom & zestyio-parsley-atom package as necessary follow these steps.

#### 1. Create an empty directory for your instance.

```bash
mkdir mydomain.com
```

Create a file within your instance directory named `zesty.json`.

#### 2. zesty.json file

Add the following JSON to the `zesty.json` file.

```text
{
 "instanceZUID": "INSTANCE_ZUID",
 "token": "INSTANCE_TOKEN"
}
```

In the `zesty.json` file replace `INSTANCE_ZUID` & `INSTANCE_TOKEN` with the values from your instance. _This information can be accessed from the Zesty.io Manager Code Editor tab. From inside that tab, there is a link in the object helper tray labeled "external editing". Click that tray option to find these values._

a\) You can also omit the `INSTANCE_TOKEN` and the package will provide an interative login to Zesty.io. This will also happen if the token becomes stale. The login process will manage writing the new access token to your `zesty.json` file.

#### 3. Open your instance directory 

in Atom to trigger the instance sync. _If Atom is already open you will need to restart it._

**Once syncing is completed you should see your instance code files in your Atom project file tree.**

### User sign-in modal

After installing Atom and the zestyio-atom & zestyio-parsley-atom package as necessary follow these steps.  
This video covers using the sign-in modal method and includes instructions on  downloading Atom: [https://www.youtube.com/watch?v=s98dR1M2u8E](https://www.youtube.com/watch?v=s98dR1M2u8E)

#### 1. Create a folder for your instance. Name your folder the same as your project.

#### 2. In your folder create a file named `zesty.json` and add the following JSON to that file.

```text
{
 "instanceZUID": "INSTANCE_ZUID",
 "token": "INSTANCE_TOKEN"
}
```

In the `zesty.json` file replace `INSTANCE_ZUID` & `INSTANCE_TOKEN` with the values from your instance. _This information can be accessed from the Zesty.io Manager Code Editor tab. From inside that tab, there is a link in the object helper tray labeled "external editing". Click that tray option to find these values._

a\) You can also omit the `INSTANCE_TOKEN` and the package will provide an interative login to Zesty.io. This will also happen if the token becomes stale. The login process will manage writing the new access token to your `zesty.json` file.











a\) This file can also be created by the package using the Atom application dropdown _Packages &gt; Zesty.io &gt; Initialize_, or by using the key command shortcut \(_ctrl + alt + i_\)

#### zesty.json file

Add the following JSON to the `zesty.json` file.

```text
{
 "instanceZUID": "INSTANCE_ZUID",
 "token": "INSTANCE_TOKEN"
}
```

In the `zesty.json` file replace `INSTANCE_ZUID` & `INSTANCE_TOKEN` with the values from your instance. _This information can be accessed from the Zesty.io Manager Code Editor tab. From inside that tab, there is a link in the object helper tray labeled "external editing". Click that tray option to find these values._

a\) You can also omit the `INSTANCE_TOKEN` and the package will provide an interative login to Zesty.io. This will also happen if the token becomes stale. The login process will manage writing the new access token to your `zesty.json` file.

### 4. Open your instance directory 

in Atom to trigger the instance sync. _If Atom is already open you will need to restart it._

**Once syncing is completed you should see your instance code files in your Atom project file tree.**

