// requiring npm package 'chalk' for error coloring
// FOR THIS PACKAGE TO WORK - First run 'npm install chalk' in your terminal
var chalk = require('chalk');

/*
WELCOME TO TODAY'S JAVASCRIPT CODING CHALLENGE

BELOW ARE SOME PROBLEMS THAT WE WOULD LIKE YOU TO SOLVE

EACH PROBLEM COMES WITH A SIMPLE TEST TO ALERT YOU AS TO WHETHER OR NOT YOU HAVE BUILT THE CORRECT FUNCTIONALITY

GO AHEAD AND RUN IT IN YOUR CONSOLE USING NODE WITH THE FOLLOWING LINE...

"$ node js_challenge.js"

SEE ALL THOSE ERRORS?!

LET'S START MAKING SOME CODE THAT WILL REMOVE THOSE ERRORS

*/

// DO NOT EDIT/CHANGE THE TESTS (IF STATEMENTS) !

// AGAIN: DO NOT EDIT/CHANGE THE TESTS (IF STATEMENTS) !


// HERE IS AN EXAMPLE TEST THAT PASSES
// THIS IF STATEMENT TESTS OUR CODE:
if (fakeFunction() == true) {
	console.log(chalk.cyan("JUST AN EXAMPLE: You did no work to earn this SUCCESS!!!"));
} else {
	console.log(chalk.red("ERROR: This Error Should Not Show!"));
}

// HERE IS AN EXAMPLE OF A PASSING FUNCTION
function fakeFunction(){
	return true
}

// LET'S GET STARTED!


/*EVENLY DIVIDEABLE?
Write a function named "evenlyDivide" that accepts 1 argument, an INTEGER. Return an array filled with numbers that evenly divide into the target number

EXAMPLE:

evenlyDivide(4)  #=> [1,2,4]
evenlyDivide(5)  #=> [1,5]
evenlyDivide(30) #=> [1,2,3,5,6,10,15,30]
*/


// AGAIN: DO NOT EDIT/CHANGE THE TESTS (IF STATEMENTS) !

// THIS IF STATEMENT TESTS OUR CODE:
if (evenlyDivide(4).toString() == [1,2,4].toString() && evenlyDivide(30).toString() == [1,2,3,5,6,10,15,30].toString()) {
	console.log(chalk.cyan("Evenly Divide Function SUCCESS!!!"));
} else {
	console.log(chalk.red("ERROR: Evenly Divide Function Incorrect!"));
}

function evenlyDivide (num) {
  var evenly = [num]
  for (var i = Math.floor(num / 2); i >= 1; i--) {
    if (num % i == 0) {
      evenly.unshift(i)
    }
  }
  return evenly
}


/*AM I A ROBOT?

Inspired by my RedBox viewing of Ex Machina this weekend, I've come to the (ill-conceived) conclusion that we are all possibly robots. Write the function "amIPossiblyARobot" that checks if you are maybe a robot. Oh and the only person who is most certainly not a robot is me, Keyan. I bet you are thinking, "But that's totally something a robot would say!". Well get over it!

amIPossiblyARobot("anyone else") \\ should === true
amIPossiblyARobot("Keyan") \\ should === false
*/

// THIS IF STATEMENT TESTS OUR CODE:
if (amIPossiblyARobot("Keyan") == false && amIPossiblyARobot("Grant") == true) {
	console.log(chalk.cyan("Am I A Robot? Function SUCCESS!!!"));
} else {
	console.log(chalk.red("ERROR: Am I A Robot? Function Incorrect!"))
}


function amIPossiblyARobot(name){
  return name !== "Keyan"
	// If you have to ask a function if you are a robot or not... guess what? You probably are.
}

/*
LAST OF
Write a function that accepts an ARRAY or a STRING as an input and returns the last item.

EXAMPLE:

lastOf( [1,2,3,4] ) # => 4
lastOf( "xyz" ) # => "z"
*/

// THIS IF STATEMENT TESTS OUR CODE:
if (lastOf([1,2,3,4]) == 4 && lastOf("xyz") == "z") {
	console.log(chalk.cyan("Last Of Function SUCCESS!!!"));
} else {
	console.log(chalk.red("ERROR: Last Of Function Incorrect!"));
}

function lastOf(input){
  return input[input.length - 1]
}


/*
PALINDROME

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.

Write a function named "palindrome" that accepts one parameter, a STRING. If the word is a palindrome return true, if not return false.

Remember to consider case-sensitivity

EXAMPLE:

palindrome("Meredith")  #=> false
palindrome("Anna")   #=> true
*/

// THIS IF STATEMENT TESTS OUR CODE:
if (palindrome("Meredith") == false && palindrome("Anna") == true) {
	console.log(chalk.cyan("Palindrome Function SUCCESS!!!"));
} else {
	console.log(chalk.red("ERROR: Palindrome Function Incorrect!"));
}

function palindrome(word){
  word = word.toLowerCase()
  for (var i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false
    }
  }
  return true
}

/*
PLAYING WITH TYPES
JavaScript is a dynamically typed programming language. This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.

You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.

EXAMPLE:

typing(2);    //returns number=2
typing(true); //returns boolean=true
*/

// THIS IF STATEMENT TESTS OUR CODE:
if (typing(2) == "number=2" && typing(true) == "boolean=true") {
	console.log(chalk.cyan("Typing Function SUCCESS!!!"));
} else {
	console.log(chalk.red("ERROR: Typing Function Incorrect!"));
}

function typing(input){
  var str = typeof input
  str += "="
  return str + input
}

/*
SHORT LONG SHORT

Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings should not be the same length, but they may be empty (.length == 0).


EXAMPLE:

    shortLongShort("1", "22") // returns "1221"
    shortLongShort("22", "1") // returns "1221"
*/

// THIS IF STATEMENT TESTS OUR CODE:
if (shortLongShort("1", "22") == "1221" && shortLongShort("22", "1") == "1221") {
	console.log(chalk.cyan("Short-Long-Short Function SUCCESS!!!"));
} else {
	console.log(chalk.red("ERROR: Short-Long-Short Function Incorrect!"));
}

function shortLongShort(str1, str2){
  if (str1.length > str2.length) {
    return str2 + str1 + str2
  } else {
    return str1 + str2 + str1
  }
}

/*
Max of Three!

Write a function named "maxOfThree" that takes three numbers as arguments and returns the largest of them.

maxOfThree(3, 5, 9) //=> 9
maxOfThree(3, 9, 5) //=> 9
*/

// THIS IF STATEMENT TESTS OUR CODE:
if (maxOfThree(3, 5, 9) == 9 && maxOfThree(3, 9, 5) == 9) {
	console.log(chalk.cyan("Max of Three Function SUCCESS!!!"));
} else {
	console.log(chalk.red("ERROR: Max of Three Function Incorrect!"));
}

function maxOfThree(){
  return Math.max.apply(null, arguments)
}

/*
Square root?

Write a function named "squareRoot" that checks if the parameter passed in is a square root.

squareRoot(4096) //=> true
squareRoot(333)  //=> false
*/

// THIS IF STATEMENT TESTS OUR CODE:
if (squareRoot(4096) == true && squareRoot(333) == false) {
	console.log(chalk.cyan("Square Root Function SUCCESS!!!"));
} else {
	console.log(chalk.red("ERROR: Square Root Function Incorrect!"));
}

function squareRoot(num){
  return Math.sqrt(num) % 1 == 0
}

// BONUS ROUND

/*
REVERSE STRING
Create a function named "reverse" for the String prototype that will allow the following functionality:

EXAMPLE:

"String".reverse();         //=> returns "gnirtS"
"I like hippos".reverse(); //=> "soppih ekil I"

HINT: To add functions to the the STRING prototype use the following syntax:

String.prototype.myCoolFunction = function(){
  console.log("My mom says I'm the smartest person ever");
  }

"You're a jerk".myCoolFunction() #=> "My mom says I'm the smartest person ever"

*/

String.prototype.reverse = function() {
  var reverseStr = ""
  for (var i = this.length - 1; i >= 0; i--) {
    reverseStr += this[i]
  }
  return reverseStr
}

// THIS IF STATEMENT TESTS OUR CODE:
if ("String".reverse() == "gnirtS" && "I like hippos".reverse() == "soppih ekil I") {
	console.log(chalk.cyan("SUCCESS!!!"));
} else {
	console.log(chalk.red("ERROR: String Reverse Function Incorrect!"));
}


/*COLOR GHOST

Create a JavaScript object named Ghost that includes a function named "color". When I call this function it should return a random color

EXAMPLE:

ghost.color() //=> "white" or "yellow" or "purple" or "red"

*/

function Ghost(){
	this.color = function(){
    colors = ["white", "yellow", "purple", "red"]
    return colors[Math.floor(Math.random() * colors.length)]
  }
}

ghost = new Ghost;

// THIS IF STATEMENT TESTS OUR CODE:
ghost_color = ghost.color()
if (ghost_color == "white" || ghost_color == "yellow" || ghost_color == "purple" || ghost_color == "red") {
	console.log(chalk.cyan("Ghost Color Function SUCCESS!!!"));
} else {
	console.log(chalk.red("ERROR: Ghost Color Function Incorrect!"));
}



// ADDITIONAL PROBLEMS FOR THE JAVASCRIPT/MATH ENTHUSIASTS!!! (NO TESTS HERE, YOU ARE ON YOUR OWN IN THE DANGER ZONE!)

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
function sum () {
  if (arguments.length == 1) {
    if (arguments[0] instanceof Array) {
      arguments = arguments[0]
    } else {
      return arguments[0]
    }
  }
  var total = 0
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}

function sumOf3sAnd5sUpTo (stop) {
  total = 0
  for (var i = 0; i < stop; i++) {
    if (i % 3 === 0) {
      total = sum(total, i)
    } else if (i % 5 === 0) {
      total = sum(total, i)
    }
  }
  return total
}
console.log(sumOf3sAnd5sUpTo(1000))

/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/


