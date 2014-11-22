# onepage

Simple way to create onepage website.

## Usage

### Including files: 

    <link rel="stylesheet" href="onepage.css">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="vendors/jquery.scrollTo.js"></script>
    <script src="js/jquery.onepage.js"></script>

### HTML structure

    <div class="onepage-wrapper" id="onepage-wrapper">
        <div id="onepage">
            <section class="page_view" id="first"><h1>First View</h1></section>
            <section class="page_view" id="second"><h1>Second View</h1></section>
            <section class="page_view" id="third"><h1>Third View</h1></section>
        </div>
    </div>

Set the header anchor link

    <a href="#first" class="header-choice-link">choice1</a>
    <a href="#second" class="header-choice-link">choice2</a>
    <a href="#third" class="header-choice-link">choice3</a>

### Initialization

    $("#onepage").onepage();
## Develop
### Environment

First, install the needed ruby gem
    
    bundle install

### Compile css file

    compass watch

    
#License

MIT
