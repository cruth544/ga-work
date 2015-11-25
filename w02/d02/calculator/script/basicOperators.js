var lastInput = 0;
var operatorClicked = false;
var wasCleared = true;
var operatorWasClicked = true;

var operators = {
  addition: function (last ,adder) {
    return lastInput + adder
  },
  subtract: function (last, subtracter) {
    return last - subtracter
  },
  multiply: function (last, multiplier) {
    return last * multiplier
  },
  divide: function (last, divisor) {
    return last / divisor
  },
  enter: function (currentInput, operator) {
    currentInput = operator(lastInput, currentInput);
    document.getElementById('output').value = currentInput;
    return currentInput;
  }
}
