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

**Set one content in each page view**

```html
<div class="onepage-wrapper" id="onepage-wrapper">
    <div id="onepage">
        <section class="page_view" id="first"><h1>First View</h1></section>
        <section class="page_view" id="second"><h1>Second View</h1></section>
        <section class="page_view" id="third"><h1>Third View</h1></section>
    </div>
</div>
```
**Set multi content in some page views**

insert `page_content` class in page_view

```html
<div class="onepage-wrapper" id="onepage-wrapper">
    <div id="onepage">
        <section class="page_view" id="first"><h1>First View</h1></section>
        <section class="page_view" id="second">
            <div class="page_content">
                <h1>second view first content</h1>
            </div>
            <div class="page_content">
                <h1>second view second content</h1>
            </div>
        </section>
        <section class="page_view" id="third"><h1>Third View</h1></section>
    </div>
</div>
```

**Set the header anchor link**

```html
<a href="#first" class="header-choice-link">choice1</a>
<a href="#second" class="header-choice-link">choice2</a>
<a href="#third" class="header-choice-link">choice3</a>
```


### Initialization
Default Initialization:

```javascript
$("#onepage").onepage();
```
Alter options:

```javascript
$("#onepage").onepage({
    'resize': true,
    'navLink': '.header-choice-link',
    'sectionSelector': '.page_view',
    'bg_color': '["yellow", "blue"]'
});
```


### Options

| Options         | value       | default             | explain                                   |example|
|-----------------|--------------|---------------------|--------------------------------------------|--------------------------------------------|
| resize          | true / false | true                | true: page_view is full height; vice versa ||
| navLink         | class name   | .header-choice-link | customize your header link class           ||
| sectionSelector | class name   | .page_view          | customize your section view class          ||
| bkg_color | [section color]   | [ ]         | customize your section color         |[["#aaa","blue"], "tomato"]|


## Develop
### Environment

First, install the needed ruby gem
    
    bundle install

### Compile css file

    compass watch

    
#License

MIT
