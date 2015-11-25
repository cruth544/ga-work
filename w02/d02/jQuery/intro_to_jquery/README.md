![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")

# Introduction to jQuery

---


### Overview

* Including jQuery correctly
* Selectors
* Manipulating the DOM
* Play with jQuery

---

## Including jQuery
* how can you include it?
	- cdn
	- download
	
---

## Element selectors

Thus far, you have been used to using ```document.getElementBy...``` to select DOM elements. jQuery does this slightly differently. With a $ sign.

> The **$** sign **doesn't** mean that you're rich (just yet)

---

Element, Descendant, Child, Multiple & First(pseudo) Selectors:
I
```javascript
$("element, #id or .class")
```

```javascript
$("#id")
$(".class")
```

```javascript
$(".class > **child**")
```

```javascript
$("#id1, #id2, .class1")
```

```javascript
$("li :first")
```

---

A few useful jQuery methods that will also help with selection:

```javascript
$("").first()
```

```javascript
$("").last()
```

```javascript
$("").next()
```

```javascript
$("").prev()
```

(More on these when we look at traversing the DOM)

---

#jQuery basics

---

###Making Sure the Page Is Ready

vanilla javascript style

```javascript
$(document).ready(function(){
  alert("Everything is ready, let's do this");
});
```

jQuery includes a shortcut version

```javascript
$(function(){
  alert("Everything is ready, let's do this");
});
```

---

##Selecting. The core of JQuery

> Load the file tmnt.html

---

####Selecting

You may use `jQuery` or `$` which are equivalent.
`jQuery(<selector goes here>)` does the same as `$(<selector here>)`

Just like .querySelector, jQuery uses css selectors, so you can do
`$('#my-element-with-id')` or `$('.my-element-with-a-class')`

You can select the table by id like so: `$('#turtles')` or `$('.data')`

We can narrow down our selection like so `$('#turtles tr')` or be even more specific like`$('#turtles thead tr')`

---

#Setting CSS properties

---

Setting properties individually:

```javascript
$('#turtles tbody tr:even').css('background-color','#dddddd');
$('#turtles tbody tr:even').css('color','RGB(90,50,90)');
```

Setting multiple properties:

```javascript
$('#turtles tbody tr:even').css({
  'background-color':'#dddddd',
  'color': 'RGB(90,50,90)'
});
```

---

![lab](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/Exercise_icon_md.png?raw=true)

---

####Take a few minutes and add the following css styling to elements in our HTML using jQuery:

> Write your work in app.js

* Access the title above our table and center it
* Change the color of our title text to green
* Access each row in the table and change the background color to match each turtles signature color AND change the text color on all of them to White.
	* Hint: remember `$('...').first`? Well, in order to access a specific element when there are many we can use another syntax to call them by the index value in which they appear
	`$('...').eq(1)` < will grab the second element of this type

---

#Adding and Removing Classes

---

It's better to add classes rather than inline styling.
JQuery allows us to add and remove classes dynamically.

```javascript
$('#turtles tbody tr:even').addClass('badass');
$('#turtles tbody tr:even').removeClass('badass');
```

---

#Hiding and Revealing Elements

---

We can easily hide elements by using the hide method. So if for example
we have a disclaimer in our html page we could hide it like so.

> In tmnt.html

```html
<input type="button" id="hideButton" value="hide" />
<p id="disclaimer">
    This information was taken from the internet here
    http://wiki.answers.com/Q/_What_are_the_ninja_turtles_names_colors_and_weapons
</p>
```
> In app.js

```javascript
$('#hideButton').click(function() {
  $('#disclaimer').hide();
});
```

---

####Or...
### we can show it:

![lab](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/Exercise_icon_md.png?raw=true)

#### Take 5 minutes to add a show button and the javascript code to make it functional.

---

Since this action is so pervasive, jQuery comes with a toggle.

```javascript
$('#toggleButton').click(function() {
  $('#disclaimer').toggle();
});
```

---

#Adding new elements

---

First let's create an element

```javascript
var newP = $('<p>My new paragraph</p>')
```

---

We can add a class to our newly created element

```javascript
newP.addClass('new');
```

---

Or create elements and then insert them into the live DOM

```javascript
$('<input type="button" value="new turtle?" id="newTurtleButton">')
  .insertAfter('#turtles');
$('#newTurtleButton').click(function() {
  $('<tr class="rembrandt"><td>Rembrandt</td><td>Brown</td><td>Snapping Bite</td><td>Never fully mutated</td></tr>').appendTo('#turtles tbody');
  $('.rembrandt').css('background-color', 'brown');
});
```

---

![lab](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/Exercise_icon_md.png?raw=true)

---

####Complete the following:

* That "new turtle" button we just added will continue to add Rembrandt over and over again, make it so that once it is clicked the first time it disappears.
* There is a hidden photo at the bottom of our html. In the following steps you will use jQuery to make it appear.
* There is a hidden div with the TMNT lost fifth member. In the following steps you will use jQuery to make it appear.
	* Create create a button that reads "show the turtles"
	* Add a jQuery listener that will allow you to toggle the image of the turtles and the div with the lost fifth member.
	* Bonus: Get the text inside the button to change back and forth between "show the turtles" and "hide the turtles"

---

###References for self-study:
	
jQuery documentation <http://api.jquery.com/>

codeschool.com "introduction to jQuery" <http://try.jquery.com/>