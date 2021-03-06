![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")

#jQuery pt. 2
###(more jaQwurry)

---

	Objectives
	- Learn more about jQuery
	- Revisit jQuery selectors
	- Understand jQuery chaining
	- Make cool animations with jQuery!

---

Let's set up our file structure

	mkdir jQuery_pt_2
	cd jQuery_pt_2
	touch index.html
	mkdir css js
	touch css/style.css js/app.js

###OK. Now let's get started

---

You can use jQuery by downloading it and placing it in your js file or simply applying the google hosted library into your index.html like so...

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
```

---

Let's set up your index.html

```html
<!DOCTYPE html>
<html>
<head>
  <title>jQuery Demo</title>	
  <link rel="stylesheet" type="text/css" href="css/app.css">
</head>
<body>	
	
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script type="text/javascript" src="js/app.js"></script>
</body>
</html>
```

---

####Why is it beneficial to load our javascript at the bottom of the HTML page?

#####What are some possible issues that come from that?

---

Remember to set up jQuery to wait for the document to load before running the script 

> app.js

```javascript
$(document).ready(function(){
	
});
```

Or the shorthand 

```javascript
$(function(){
		
});
```
---

#Getters & Setters in JQuery

---

```javascript

// This is a getter
$("h1").html();

//In JS this is written as document.querySelector('h1').innerHTML

// This is a setter
$("h1").html("hello");

//In JS this is written as document.querySelector('h1').innerHTML = "hello"

```

---

In the last slide we see a `setter` that would append the word *"hello"* to an h1 tag.

Let's take that element and add it to our app.js (don't forget to put it within our document ready function)

Let's now go into our index.html and add a blank h1 tag so that our message has an element that it can print to.

---

###Now we should see "hello" on our screen

Add another h1 tag to your HTML. 
Refresh the page... what do you see?

---

Let's add some text to our first h1 tag

```html
<h1>Some Text</h1>
```

Refresh the page a few times rapidly. What do you notice?
Our message of "hello" doesn't appear right away and we notice a flash of "Some Text". We don't want that!
####Why is this happening?

---

If we moved our script tags up to the head section and reload the page we will notice that "hello" is there on load. This is because we are loading our js before displaying our body. But doing that means that our body of content will not display until after the js has fully loaded. This results in a lag time when loading the page.

So, what if we would rather load our body first before our js? And so we load our javascript at the bottom of the page. How could we fix the momentary flash of the wrong text using jQuery?

---

>app.css

```css
body {
  visibility: hidden;
}
```

Now we use jQuery to add visibility only after our javascript file has loaded.

>app.js

```js
$('body').css('visibility', 'visible');
```

---

Now try reloading the page. Can you still see "Some Text"?

No?

*Looks like we got rid of that pesky DOM element.*

`AWESOME! Moving right along...`

---

#Creating a sliding panel effect

---

First lets add a button and a panel inside our index.html after our h1 tags

```html
<button id="btn-slide">Slide panel</button>
<div id="panel"></div>
```

--

Apply CSS to the panel in app.css

```css
#panel {
  background: hotpink;
  height: 200px;
  width: 150px;	
  display: none;	
}
```

---

And write jQuery into app.js

```js
//When document is loaded
$('#btn-slide').click(function(){
  $("#panel").slideToggle("slow");
});
```

---

#Disappearing pane effect

---

<p style="margin-top: -60px"></p>

Create a pane in index.html, copy the following code after the panel that we just made

```html
<div class="pane">

  <br>
  <button id="delete">delete pane</button>
  <h3>Sample header</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore We're no strangers to love You know the rules and so do I A full commitment's what I'm thinking of You wouldn't get this from any other guy. I just wanna tell you how I'm feeling Gotta make you understand. Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
	
</div>
```

---

Now, in app.js

```js
// Disappearing panel effect
$("#delete").click(function(){
  $(this).parents(".pane").animate({opacity: 'hide'}, "slow");
});
```

---

#####Now for the magic!
Load the browser and click on the button "delete pane"

---

![lab](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/Exercise_icon_md.png?raw=true)

Break into groups of two. Create a cool effect using jQuery animate (10 mins)

Need help or inspiration? [click here](http://lmgtfy.com/?q=jquery+animate+examples)

Be prepared to share what you find

---

#Easily access the DOM in jQuery

---

##Grabbing children of an element

This will return an array filled with all the children of the body

```js
$(document.body.children);
```

You can grab the first child of document.body like this

```js
$(document.body.children[0]);
```

---

Let's make the second element of the body slide away, we don't need that extra hello anyways

```javascript
$(document.body.children[1]).click(function(){
  $(this).slideToggle('fast');
});
```

---

#Creating HTML elements using jQuery 

---

Add the following button to the very top of the body in index.html

```html
<!-- Append a paragraph to all body's children -->

<button id="append-p">Append a paragraph</button>
```

---
	
> In app.js

```js
// Append a paragraph to elements

$('#append-p').click(function(){
  $(document.body.children).append("<p>Lucky!</p>");
});
```

---

![lab](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/Exercise_icon_md.png?raw=true)

Make the button that we just created append to only the 2nd item in the document.body (3min)

---

**Important To Note: The jQuery objects are always truthy, so use the length to check for the right condition**

To check if selections exist, you will have to check the length 

```js

if ( $( '#nonexistent' ) ) {
  // Wrong! This code will always run!
}
	
if ( $( '#existent' ).length > 0 ) {
  // Correct! This code will only run if there's an element in your page
  // with an ID of 'existent' present
}
```

---

If you can add elements, you can remove them as well (app.js)

```js
// Append a paragraph to elements

$('#append-p').click(function(){

  if($(this).html() !== "Now you see it!"){
    $(document.body.children[1]).append("<p class='p'>Hello, can you hear me?<br>I'm in California dreaming about who we used to be</p>");
    $(this).html("Now you see it!");
  }else{
    $('p').remove(":contains('Hello')");
    $(this).html("Now you don't!");
  }

});
```

---
	
Using alternate syntax with $ function, you can create elements like this (app.js):

```js
// Creating an element in jQuery
	
$('<h5>', {html: 'Keyan was here!', class: 'greet'}).appendTo(document.body);
```	

---

#Chaining in jQuery

---

Using dot notation we can chain several commands in jQuery

```js
// end method specifies that we are getting back to the original selection

$(".pane").find("button").eq(0).html("Lol. You Got Rick Rolled").end().end().find("h3").eq(0).html("Fun title");

//.end() in this case is similar to using '../' in command line
```

###What is going on in the code above?

---

#$.AJAX example
AJAX (Asynchronous JavaScript and XML) allows us to create interactive apps without having to reload the entire page

---

Let's do an AJAX request to OMDB grab some movie data (not affiliated with IMDB)

```js
// AJAX demo (.getJSON is a jquery method to return plain objects or strings from JSON)
$.getJSON("http://www.omdbapi.com/?t=Lucky Number Slevin", function(response, status, jqXHR){

  console.log(response);
  console.log(status);
  // jQuery XMLHttpRequest
  console.log(jqXHR);
});
```

Check the console in chrome dev tools and see what returned

---

Now lets use jQuery to print some of our results to existing elements on the DOM. (Put this code within the ajax function we just created)

```js
//Prints title to header tag
$(".pane").find('h3').eq(0).html(response['Title']);
//Prints plot to 'pane' paragraph
$(".pane").find('p').eq(0).html(response['Plot']);
```

---

Let's use jQuery to add a new element to the DOM.

```js
$('<img>', {src: response['Poster'], class: 'poster'}).appendTo(".pane");
```

---

![lab](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/Exercise_icon_md.png?raw=true)

###Take the rest of the module to create a search bar for our API AJAX!

Use jQuery to replace our title, plot and poster image with a movie from the search bar.

---

##Awesome! You are now doubly familiar with jaQwurry

#####Resources:

[More about AJAX](http://api.jquery.com/jQuery.ajax/#jqXHR)