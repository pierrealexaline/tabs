# Simple and responsive Pure JS and css tab function (only 2.1kb)

## Code tutorial

### Installation

No need Jquery, or over frameworks or even libraries.

Just add this in the head section of your page : 
`<link rel="stylesheet" href="tabs.css" />`

and this just before the `</body>` tag :
```javascript
    <script src="tabs.js"></script>
    <script>tabs('tabwrapper');</script>
```

### Html

```html
    <div id="tabwrapper">
        <div class="tab_linker">
            <span id="tabs1" class="tablinks">HTML</span>
            <span id="tabs2" class="tablinks">CSS</span>
            <span id="tabs3" class="tablinks">JS</span>  
        </div>
        <div id="tab1" class="tabcontent fade">First tab ! ...</div>
        <div id="tab2" class="tabcontent fade">... second tab ...</div> 
        <div id="tab3" class="tabcontent fade"><p>...and last tab content ! </p></div>
    </div>
```

## CSS classes and id used in JS

### id

`tabwrapper` div contenaire to wrap content inside

`tab_linker` wrapper for links/button

`tabs1` span for link/button

`tab1`  div for content

### classes

`tablinks` span for link/button

`tabcontent` div for content

`fade` only for effect (optional) 


## Options

X = integer
x must be suitable !

### Add a tab

just add :

* a new span for link/button with id `tabsX`
* a new div for content with id `tabX`

### Remove a tab

just remove :

* a remove a span for link/button with id `tabsX`
* a remove a  div for content with id `tabX`

### Multiple tab

just add a new tab structure with a div to wrape content 

with a new id like this :

`<div id="tabwrapper_1"> ...`

`<div id="tabwrapper_2">...`

## Information

Version 1.0 février 2019