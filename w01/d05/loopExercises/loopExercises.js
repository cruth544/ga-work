function print (printThis) {
  console.log(printThis);
}
// ## 0) Create an Array that will hold movie objects.
movieArray = [];
function Movie (name, rating) {
  if (typeof name === "string") {
    this.name = name;
  }
  if (typeof rating === "number") {
    this.rating = rating;
  }
}
movieArray.push(new Movie("Titanic", 8), new Movie("Avatar", 8), new Movie("Uncle Buck", 10), new Movie("The Cay", 1));

// ​
// * Give each object a *property* of name, and *property* of rating from 1-10.
// * Create a few of these movie objects by picking a few random movies and assigning their values.
// * Create a for loop that iterates over the array, looks at each movie objects rating and prints the movie name + " it's great!", if
// not it prints movie name + " it's terrible!".
// ​

function checkRating (obj) {
  //check if obj is a movie
  if (obj instanceof Movie) {
    //start with name of movie for statement
    var statement = obj.name;
    if (obj.rating < 5) {
      statement += " is terrible!";
    } else {
      statement += " is great!";
    }
  }
  return statement;
}

function loopThrough (array) {
  for (var i = 0; i < array.length; i++) {
    print(checkRating(array[i]));
  }
}

// ### 1) You have an array of integer numbers, remove a value from the beginning of the array. Be careful, you mustn't leave
// a hole in your array at the beginning. You may not use the 'unshift' method.
// ​
// * Input: You are given an array like [1,2,3,4,5,6,7,8,9,10]
// * Output: an array of the form [2,3,4,5,6,7,8,9,10]
// ​

function removeFirstIndex (array) {
  if (array instanceof Array) {
    for (var i = 0; i < array.length; i++) {
      array[i] = array[i + 1];
    }
    array.length = array.length - 1;
  }
  return array;
}
// ​
// ### 2) Create a text input box on a webpage, create a button that when pressed adds the text a user enters to
// an array. The contents of the array is displayed to the user below the input box. Do not allow a user to empty
// blank text.
// ​


function addTextBox () {
  var array = [];
  var div = document.getElementsByClassName('child')[0];
  var inputBox = document.createElement("input");
  var submitButton = document.createElement("button");
  var divBelowBox = document.createElement("div");
  function buttonClick (string) {
    if (string) {
      array.push(string);
      divBelowBox.innerHTML = array.join(", ");
      inputBox.value = "";
    }
  }
  inputBox.placeholder = "Add Something";
  submitButton.innerHTML = "Add";
  submitButton.onclick = function () {buttonClick(inputBox.value)}
  div.appendChild(inputBox);
  div.appendChild(submitButton);
  div.appendChild(divBelowBox);

}
// ### 3) Create a two dimensional array(an array of arrays) that can contains the following data:
// ​
// ​
function twoDimensionArray (array) {
  var evenArray = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] % 2 === 0) {
        evenArray.push(array[i][j]);
      }
    }
  }
  return evenArray.join(", ");
}
// ```javascript
// ​
//   //just hard code these values
//   12 13 14 15 16 30
//   20 89 54 34 23 29
// ​
// ```
// ​
// Create a loop that will loop over this two dimensional array and output only the items with an *even* index.
// ​
// Desired output:
// ​
// 12
// 14
// 16
// 20
// 54
// 23
// ​
// ### 4) Write some lines of code that will calculate the sum 1+2+3+...+300. Log only the final sum from within your function.
// ​
function sigma (finalNumber) {
  if (finalNumber > 0) {
    return finalNumber + sigma(finalNumber - 1);
  }
  return 0;
}
// ​
// ### 5) Write a program to calculate 10! ("10 factorial"), which is defined to be 10*9*8*7*6*5*4*3*2*1. Use a loop, and write a function
// that works for any number you give it, not just 10.

function factorial (num) {
  if (num > 0) {
    return num * factorial(num - 1);
  }
  return 1;
}








