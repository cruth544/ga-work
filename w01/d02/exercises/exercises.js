function findFibonacci (max) {
  var currentNumber = 0;
  var array = [1];
  for (var i = 0; i <= max; i++) {
    if (i !== 0 ) currentNumber = array[i - 1];
    currentNumber += array[i];
    array.push(currentNumber);
  };
  return array;
}

function recursiveFibonacci (max) {
  var array = [];
  function recurse (current, prior) {
    if (array.length >= max - 1) {
      return current;
    };
    array.push(current);
    return recurse(current + prior, current);
  }
  array.push(recurse(0,1));
  return array;
}

function printASCIITriangle (char, max) {
  var str = char;
  for (var i = 0; i < max; i++) {
    console.log(str);
    str += char;
  };
}

function recursiveASCIITraingle (char, max) {
  function printChar(str, count) {
    if (count >= max) {
      return str;
    };
    console.log(str);
    return (printChar(str + char, count + 1));
  }
  return printChar(char, 0);
}

function possibleSums (firstArray, secondArray) {
  var sumArray = [];
  for (var i = 0; i < firstArray.length; i++) {
    for (var j = 0; j < secondArray.length; j++) {
      var tmpSum = firstArray[i] + secondArray[j];
      if (sumArray.indexOf(tmpSum) === -1) {
        sumArray.push(tmpSum);
      };
    };
  };
  return sumArray;
}

function recursiveSums (firstArray, secondArray) {
  var summedArray = [];

  function sumRecurse (argument) {

  }


  summedArray.push(sumRecurse(argument));
  return summedArray;
}

// console.log(recursiveFibonacci(20));
// recursiveASCIITraingle("1", 10);
console.log(possibleSums([1,2], [3,4]));
























