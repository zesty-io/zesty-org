# Atom Package

> Use the [Zesty.io Atom package](https://atom.io/packages/zestyio-atom) to edit your instances code files locally and get automatic syncing to your remote instance.

## [Getting Started](https://atom.io/packages/zestyio-atom)

1. Install the [`zestyio-atom`](https://atom.io/packages/zestyio-atom) package.

   ```text
   apm install zestyio-atom
   ```

2. Create an empty directory for your instance.

   ```bash
   mkdir mydomain.com
   ```

3. Create a file within your instance directory named `zesty.json`.

   a\) This file can also be created by the package using the Atom application dropdown _Packages &gt; Zesty.io &gt; Initilize_, or by using the key command shortcut \(_ctrl + alt + i_\)

4. Add the following JSON to the `zesty.json` file.

   ```text
   {
    "instanceZUID": "INSTANCE_ZUID",
    "token": "INSTANCE_TOKEN"
   }
   ```

5. In the `zesty.json` file replace `INSTANCE_ZUID` & `INSTANCE_TOKEN` with the values from your instance. _This information can be accessed from the Zesty.io Manager Code Editor tab. From inside that tab, there is a link in the object helper tray labeled "external editing". Click that tray option to find these values._

   a\) You can also omit the `INSTANCE_TOKEN` and the package will provide an interative login to Zesty.io. This will also happen if the token becomes stale. The login process will manage writing the new access token to your `zesty.json` file.

6. Open your instance directory in Atom to trigger the instance sync. _If Atom is already open you will need to restart it._

**Once syncing is completed you should see your instance code files in your Atom project file tree.**

