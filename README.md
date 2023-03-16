# Pixel Extended Official Site
### by AidanWarner97
#

This site uses JS to fetch data to automatically add data to the downloads area.  
There are currently 3 sections, for each separate manufacturer we maintain official versions for.  
**OnePlus, Samsung and Xiaomi.**  
___

## Adding devices
To add a device to a pre-existing manufacturer, take a look in the file `js/fetchData.js`  
At the very top, you'll see the const variables setting out an array for each.  
  
>`const xiaomiDevices = ["raphael", "alioth", "violet", "munch", "perseus"];`  

Simply find the manufacturer for your device, and add your device codename to the list as shown above.

___

## Creating new Manufacturer section
Take a look in `js/fetchData.js` and see the top const variables on how to setup your new manufacturer.  
>`const xiaomiDevices = ["raphael", "alioth", "violet", "munch", "perseus"];`  
  
For example, to add a Google section, you'd create something like:
>`const googleDevices = ["codename", "codename2"];`
  
Once you've added this, scroll down to around line 49, and copy the section down to, roughly, line 69.  
Then create some space and paste the code you've copied.  
Now, you'll just need to modify that copied code for every occurrence of `xiaomiDevices` to `googleDevices`.  
  
Now you've one more task to do in that file.  
Scroll to the bottom, and copy the code:
```
function showXiaomi() {
    document.getElementById("samsung-devices").classList.add("none");
    document.getElementById("xiaomi-devices").classList.remove("none");
    document.getElementById("oneplus-devices").classList.add("none");
}; 
```
Simply paste this at the bottom of the code, changing as appropriate.  For example:
```
function showGoogle() {
    document.getElementById("samsung-devices").classList.add("none");
    document.getElementById("xiaomi-devices").classList.add("none");
    document.getElementById("oneplus-devices").classList.add("none");
    document.getElementById("google-devices").classList.remove("none");
};
```

You'll also need to add the following line to the other sections:
>`document.getElementById("google-devices").classList.add("none");`
  
Once you've done all of that, we need to add a simple line of html.  So open `index.html` and find `<div id="device-list">`  
In that div, simply add a new div to the list like `<div id="google-devices" class="none"></div>`  
You should end up with something like this:
```
<div id="device-list">
    <div id="samsung-devices"></div>
    <div id="oneplus-devices" class="none"></div>
    <div id="xiaomi-devices" class="none"></div>
    <div id="google-devices" class="none"></div>
</div>
```
The class "none" is to purely to stop all the different sections showing at the same time as by default, the Samsung section shows on page load.  
  
Finally, modify this README at the very top to update the current number of sections and the manufacturer array.
___

## You're done!
As it's all basic html/javascript, you can test your changes locally by simply opening up your html file in your preferred browser.  
As long as it all works, you can create a PR.  
Any questions/problems, file an issue and I'll get back to you ASAP.