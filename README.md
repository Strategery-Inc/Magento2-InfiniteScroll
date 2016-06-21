Strategery InfiniteScroll - Magento 2 Module
=====================
This extension is for when the user reaches the end of the current product list, the next page is loaded automatically by AJAX after the end of the list. Easy to install and configure, this module works 100% out of the box with Magento's default theme, and also gives to you the posibility to configurate the custom selectors of your custom theme. Now you can get a more friendly UI by helping the user to save clicks and time.

#### Composer (Development)
Useful for quickly grabbing development copy.

1. Add a requirement:
    `"strategery-inc/magento2-infinitescroll": "dev-master"`
2. Run `composer update` to install.

### Useful Links
<table>
<tr>
  <td>Repository</td><td>https://github.com/webcreate/infinite-ajax-scroll</td>
</tr>
</table>

### Development Notes
To hook to window.ias you need to listen the window.onload event:

`jQuery(window).load(function() {
    console.log('window load jquery');
    console.log(window.ias);
});`

------------------
### Release Notes
##### v1.0.0
- Refactored Module for Magento 2 version.


Copyright 2014 Strategery, Inc. Licensed under the Academic Free License version 3.0
