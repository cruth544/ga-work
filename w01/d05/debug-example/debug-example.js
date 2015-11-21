//this code sucks, it has problems.....can you find out what's wrong with it...and fix it???
//Can you enumerate and explain what the problems are??


function incrementNumberThenFactor(n) {
    console.assert(typeof n === 'number', "n is not a number")
    console.log('incrementing number');
    var newNumToFactor = incrementNumber(n);
    return printIntegerFactors(newNumToFactor);
}

function incrementNumber(number) {
    if (number) {
        number++;
    } else {
        number = 1;
    }
    return number;
}


function printIntegerFactors(n) {
    var factor = n - 1;
    if (n === 1 || n === 2 || n === 3) {
        console.log('first primes');
        return;
    }

    do {
        var x = n % factor;
        if (x === 0) {
          console.log("factor: " + factor);
        }
        factor--;
    } while (factor > 0);
}

console.log(incrementNumberThenFactor(32));

//Now write a test to verify that your function works, including tests that would catch the previous bugs in the code.

//Once you have fixed the code, see if you can write some simple asserts to test for, and prevent the introduction of new bugs
//into these functions

//Example:
console.assert(incrementNumber(2) == 3,'incrementNumber() incorrectly increments number');

//Another Example:
//You can also try an approach like this, assuming you define a function that creates Square:

function Square (x, y) {
  this.x = x;
  this.y = y;
}

function testVector() {
    var p1 = new Square(10, 20);


    if (p1.x !== 10) return "fail: x property";
    if (p1.y !== 10) return "fail: y property";
    return "everything ok";
}
console.log(testVector());














