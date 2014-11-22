# onepage

Simple way to create onepage website.

## Usage

### Including files: 

```html
<link rel="stylesheet" href="onepage.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="vendors/jquery.scrollTo.js"></script>
<script src="js/jquery.onepage.js"></script>
```

### HTML structure

```html
<div class="onepage-wrapper" id="onepage-wrapper">
    <div id="onepage">
        <section class="page_view" id="first"><h1>First View</h1></section>
        <section class="page_view" id="second"><h1>Second View</h1></section>
        <section class="page_view" id="third"><h1>Third View</h1></section>
    </div>
</div>
```

Set the header anchor link

```html
<a href="#first" class="header-choice-link">choice1</a>
<a href="#second" class="header-choice-link">choice2</a>
<a href="#third" class="header-choice-link">choice3</a>
```

### Initialization

```javascript
$("#onepage").onepage();
```

## Develop
### Environment

First, install the needed ruby gem
    
    bundle install

### Compile css file

    compass watch

    
#License

MIT
