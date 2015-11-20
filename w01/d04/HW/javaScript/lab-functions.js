function print (something) {
  console.log(something);
}
function isType (array, type) {
  if (typeof type === "string") {
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] !== type) {
        return false;
      }
    }
  }
  return true;
}
function returnArguments (args) {
  return arguments;
}
function putArgumentsIntoAnArray () {
  var argumentArray = [];
  for (var i = 0; i < arguments.length; i++) {
    argumentArray.push(arguments[i]);
  }
  return argumentArray;
}

// #1
var maxOf2Numbers = function (x, y) {
  if (isType(returnArguments.apply(this, arguments), "number")) {
    if (x > y) {
      return x;
    } else {
      return y;
    }
  }
}
print("1: ");
print(maxOf2Numbers(4,1));

// #2
var maxOfThree = function (a, b, c) {
  if (isType(returnArguments.apply(this, arguments), "number")) {
    if (a > b && b > c) {
      return a;
    } else if (b > a && b > c) {
      return b;
    } else {
      return c;
    }
  }
}
print("2: ");
print(maxOfThree(4, 9, 2));

// #3
var isCharAVowel = function (char) {
  if (isType(returnArguments.apply(this, arguments), "number")) {
    var vowels = ["a", "e", "i", "o", "u"];
    return vowels.indexOf(char) > -1;
  }
}
print("3: ");
print(isCharAVowel("t"));
print(isCharAVowel("e"));

// #4
var sumArray = function (array) {
  if (array instanceof Array) {
    var runningTotal = 0;
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] === "number") {
        runningTotal += array[i]
      }
    }
    return runningTotal;
  }
}
print("4: ");
print(sumArray([5,2,6,3,7]));

// #5
var multiplyArray = function (array) {
  if (array instanceof Array) {
    var runningProduct = 1;
    for (var i = 0; i < array.length; i++) {
      runningProduct *= array[i];
    }
    return runningProduct;
  }
}

print("5: ");
print(multiplyArray([2, 4, 5]));

// #6
var numArguments = function () {
  return arguments.length;
}
print("6:");
print(numArguments(1,4,3,4,3,6));

// #7
var reverseString = function (str) {
  if (isType(returnArguments.apply(this, arguments), "string")) {
    var reversedString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      reversedString += str.charAt(i);
    }
    return reversedString;
  }
}
print("7:");
print(reverseString("rockstar"));

// #8
var longestWordLength = function (arrayOfStrings) {
  if (arrayOfStrings instanceof Array) {
    var lengthOfLongest = 0;
    for (var i = 0; i < arrayOfStrings.length; i++) {
      if(arrayOfStrings[i].length > lengthOfLongest) {
        lengthOfLongest = arrayOfStrings[i].length;
      }
    }
  }
  return lengthOfLongest;
}
print("8:");
print(longestWordLength(['touch', 'me', 'in', 'the', 'morning']));

// #9
var stringsLongerThan = function (arrayOfStrings, num) {
  if (arrayOfStrings instanceof Array && typeof num === "number") {
    for (var i = arrayOfStrings.length - 1; i >= 0; i--) {
      if (arrayOfStrings[i].length <= num) {
        arrayOfStrings.splice(i, 1);
      }
    }
    return arrayOfStrings;
  }
}

print("9:");
print(stringsLongerThan(['touch', 'me', 'in', 'the', 'morning'], 2));











