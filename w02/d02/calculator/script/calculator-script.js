function setUpCalc (arguments) {
  var buttons = document.getElementsByTagName('td');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      buttonClicked(this)
    });
  }
}

function buttonClicked (button) {
  var buttonGroup = document.querySelectorAll('td');
  for (var i = 0; i < buttonGroup.length; i++) {
    if (buttonGroup[i] === button) {
      return buttonHandler(button)
    }
  }
}

function isNumber (button) {
  if (Number(button) < 10) {
    var output  = document.getElementById('output').value;
    if (operatorWasClicked) {
      output = ''
      operatorWasClicked = !operatorWasClicked
    }
    output += button
    document.getElementById('output').value = output
    return true;
  }
}

function isOperator (button) {
  var operator = document.getElementsByClassName('basic');
  for (var i = 0; i < operator.length; i++) {
    if (operator[i].innerHTML === button) {
      var currentInput = Number(document.getElementById('output').value);
      if (button === '+') {
        operatorClicked = function (last, input) {
          return operators.addition(last, input);
        }
      } else if (button === '-') {
        operatorClicked = function (last, input) {
          return operators.subtract(last, input);
        }
      } else if (button === 'x') {
        operatorClicked = function (last, input) {
          return operators.multiply(last, input);
        }
      } else if (button === '/') {
        operatorClicked = function (last, input) {
          return operators.divide(last, input);
        }
      }
      lastInput = currentInput;
      // document.getElementById('output').value = currentInput;
      break;
    }
    operatorWasClicked = true;
  }
}

function isEnter (button) {
  if (button === document.getElementById('enter').innerHTML) {
    operators.enter(Number(document.getElementById('output').value), function (last, input) {
      return operatorClicked(last, input);
    })
  }
}

function buttonHandler (button) {
  //we only need the inner html of each button
  if (isNumber(button.innerHTML)) return;
  if (isOperator(button.innerHTML)) return;
  if (isEnter(button.innerHTML)) return;
}


///////////////////////////Basic Operators//////////////////////////////

// startLastInput();
setUpCalc();
























