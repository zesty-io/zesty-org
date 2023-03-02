# Layouts App

This documentation is an overview of Zesty’s new Layouts app which covers the installation, usage, and creation of custom components.

### Installing the Layouts App

Zesty’s Layouts app is available for download in Zesty’s Marketplace > Apps > [Layouts](https://www.zesty.io/marketplace/apps/page-layout-designer/)

You may also access it from the UI by clicking the +Marketplace tab.

*   Start the installation by selecting an Instance (in Search bar dropdown) that you will be working on with the Layouts app.\


    <figure><img src="https://lh6.googleusercontent.com/5X2sasJp-Hstlnww2Psne0kDw6e6XN3mrBj3tYUKvgFUwUbb5HdnijD40a1iK_iAHkbSS1g4ttBIk2s5j-Kugdy02hN9dRApK2Pj6MgbwgHYln055zNbstC3pwEGo3rE0e5W4JU0ICXe2rjgtC6V8eicWmYO8tiKe5CsdbD6aD-Tz_dpesSBjz9qcVGjiQ" alt=""><figcaption></figcaption></figure>

| Note: Make sure that you are the Owner of the Instance or has “Admin” permission to be able to install the Layouts app to the specific Instance. |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |

*   Click “Install Layouts in \[Instance Name]” and wait for it to be installed in your selected Instance.\

    <figure><img src="https://lh4.googleusercontent.com/Aex2ibZYJ10Ueccd0Z28Wdc8Z8Frh0pKz1rrCkVLi2AbGj_5hxI7YE-aXoWa7R_jEin5g-jeIkxthOJBzw_h_LSS_Z1NC1wjF6Luz6XEGk7eZL6Papz1-7gZlS5PlIfhu2jffRSO28a_dWxM7IZHiuse_mmRUROX1zYPbHfdRb3rk49qGfDt3CSe32spdg" alt=""><figcaption></figcaption></figure>
* Once installed, the Layouts app will be shown at the left navigation pane of your Instance. See below image for reference.

<figure><img src="https://lh4.googleusercontent.com/RsAwFYGZHU1UWnUK28vEKqQ5h79Cl3yE-fgoFB7zc6iXEhRGjtPQjFj4XDwTK2knX_8FItDLxm5TBezQDAGfmZCd0ZgMq7ll9d8lf-KwL7EBIRqY_LhO1FKpzZHGOGvxKJxk9SvQDDlKELviJzeoUy4hpRdloQlm-FbWow0Cfd3219p4F5cw6naX3bpJKQ" alt=""><figcaption></figcaption></figure>

### Layouts UI Overview

The Layouts interface is mainly of file toolbars, canvas/layout preview, content selector, layout design tools, and components tool.

* File - hotkeys
  * Change Model - Ctrl+M / Command+M
  * Save - Ctrl+S / Command+S
  * Publish - Ctrl+P / Command+P

<figure><img src="https://lh6.googleusercontent.com/PQveFlCxsp7LxoRota5_52hcnssBMgni1nnvFJSdSMLCGS4TXgduabHHWXw2azp48WNh36z_yQNprYs8AO2IJls5h7P4t0Pa_OlMSxVvODuqhc5Pbz1Mm-RhFyGoHIczGZOlpdZakqAfzcf5Mjp2U003SXzKF42ogiaCR41aMjzenNlPXXpxjAETEnBsQQ" alt=""><figcaption></figcaption></figure>

* Edit - hotkeys
  * Undo - Ctrl+Z / Command+Z
  * Redo - Ctrl+Y / Command+Y

<figure><img src="https://lh3.googleusercontent.com/vhTr2gw_rDK-zP3GEGahUzazj4z8frp-ozpnp9V7kHmQXbRRA2ICONB8vqtkOKU12suql-lbXaNKYjMNwgCvbcPnVW6Tl4LMeQr5ZMGfHACvGpidTmjHx0LYzKcbNBF3FqdQhpmNVfcOxL32R-1MxFH8d3vZ3rMsqurdX0dgDE5j9tmTozOX52PZbxnlnA" alt=""><figcaption></figcaption></figure>

* View - hotkeys
  *   Visual Layout - Ctrl+1 / Command+1

      ZHTML Output -  Ctrl+2 / Command+2

      JSON Output -  Ctrl+3 / Command+3

      Layout Preview - Ctrl+4 / Command+4

      Page Preview - Ctrl+5 / Command+5

      Toggle Sidebar - Ctrl+B / Command+B\

* Help
  * Hotkeys\
      <figure><img src="../../.gitbook/assets/layouts - hotkeys.png" alt=""><figcaption></figcaption></figure>
  * How it works
      <figure><img src="../../.gitbook/assets/layouts - how it works.png" alt=""><figcaption></figcaption></figure>
  * About\
      <figure><img src="../../.gitbook/assets/layouts - about.png" alt=""><figcaption></figcaption></figure>

      <figure><img src="https://lh6.googleusercontent.com/eW4oKnlN2ItPuKZc53iyg_YKr_rRg4R4ns83zG1pkQnjnd1KQ4o0eyKumrmiJd4HWD3pvw3gfaPodgmZI62KQ4kNMQ3usGAcPBJ_yhMZSh_O1GdSkffj9CqagXxA1xyp4E8J9rF_M3Nuetg5rByoyTzp3rB_qkiBtZuaN4TS0KevWeaC970w_5bGbS32Dg" alt=""><figcaption></figcaption></figure>



* Components
  * Add Component (component / design type)
      * Component : will be any html you like to display on the layout
      <br/>note: if html is leave blank, it will automatically wrap your preview url to `<img src={previewURL} width='100%'/>`
      <figure><img src="../../.gitbook/assets/layouts - add component.png" alt=""><figcaption></figcaption></figure>

      * Design : anything that can be use for improving spacing or designs. like `<br/>`, `<hr/>` etc..
      <figure><img src="../../.gitbook/assets/layouts - add design tools.png" alt=""><figcaption></figcaption></figure>

  *   Manage Model\
      `To manage a model you'll get redirected to the schema route of your instance in order to manager your model.`

      <figure><img src="https://lh6.googleusercontent.com/PcI9bd3VsLS9UQtqutRGR9fBc1iICba3CN9Ki1hymImloq4dfDK4bfg1s8EE1_2OyPm6ZK0vRoxAq1DYs8IOlXHYeXAloqBQrsVufhagz0qqUamZ8VqArxMdBjNhNpzs0HXRm2tia-3s5nyiOsryp3HbGG1l53dQY51I8MgdWNimdry58s2WMQV58WksfA" alt=""><figcaption></figcaption></figure>



* Content Model Selector\
    `Helpful for quick search and selection of your model.`

    <figure><img src="https://lh3.googleusercontent.com/j8oS7BEqpLFSdG51biSMAyxIGIqy7d4miL13X5E29FQ3U7YE9QnNyQ5CTXTR2BD5eUQI-ZA8K19RIcc6yn4UwqQ_2t4pnRLEvGt3tTp5Fyy63OnWOQO9BZlFs38C2tvVVOE0NToZuzAvY3LvWX428GwrC5nGz5eBoy2nvc2BKGohVsUb4YhBpvG9qE_ycg" alt=""><figcaption></figcaption></figure>

* Layout Design Tools\
    `These helps to group your content or put additional design.`

    <figure><img src="https://lh6.googleusercontent.com/lCbS7vq2RxM3yz0LFkfvBOuGG-ZIl8GHamReX4C6trdSNOLHePzFZZF345avU_5-hHbFYaDTfR36f57AL8gH0bWhJjC4fcLAirAvzI8QclBFW0FUkHFwkf7DjtvqniAWsOhfajBhHPmPFZhIGkCOqiBecc4x2ZEuxeHIcsKwFDrhE-XFDNBrSJv2CE0_mg" alt=""><figcaption></figcaption></figure>

*   Component Design Tools\
    `Lists of your created components`

    <figure><img src="https://lh6.googleusercontent.com/Js-V-WHSZRLiFFfdi3Y3UuLT6s5pXAZ0jncXl-Qn2UmUSHZfs0EX33WtStdpNnTm3Ad1Y_oTxnTKv9J3vOKDi5N_eoDCnCoQHcp7voOgIr_xTfTI0a4iqWKUtUElmHE2_FXJasulcJLns25y1E92Okw3g_pwwuIM11ZeJehnNsxCHq1DXvq-ujGv2aFXaw" alt=""><figcaption></figcaption></figure>

* Layout Canvas


1.  Default view - user may collapse each sidebar for a wider canvas.


    <figure><img src="https://lh4.googleusercontent.com/SoKSRZdsPoG92bC4_zPQ-TgkfXUfOX1uVUh5ketDuTePjnnaHk-4X2_wPBHvkfaCX3kZUf3J-Lus6MYuCxwzPKsPo8kOsU8sX_I3UFLvebjfN8rQKRcLihMNoIYpq7OmAiOCycIkjDg9qV7ifKcW1fEEcYkcZFcOGNjqCtNnkwpxpdW4rJiEl8pXs-xmOA" alt=""><figcaption></figcaption></figure>



2. Collapsed view - canvas when each sidebar is collapsed.



    <figure><img src="https://lh4.googleusercontent.com/-CPiqEXcY2Pu8a0DcHKw2LsAGxmD8OryZ6my4aJfXgCjzAyMqDYvzbhMcuiQ3uFJpQfzyO5J8qprz1sal7DjdYKFQQ41Il_UKcKzDIjD-1pVf7c_Y3VLlZODYF-yQnNq_2SpMQ83eyM5Q-PMPTjXKBYMMbbt51bJGH9guE-Vm1Kytd7Uf6JDv1OLG-GiBQ" alt=""><figcaption></figcaption></figure>

Tip: `Ctrl+B` to toggle the view.

### Building Pages using Layouts

Using the Layouts app, you can easily create/design web pages with the pre-built Layout Design Tools\

* Start by selecting a Content Model in the dropdown selection (eg. Articles) to work with Layouts.
* Select a layout design available in the Layout Design Tools which you can drag and drop into your canvas/page view.
