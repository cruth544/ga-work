$(function  () {
  $('body').css('visibility', 'visible')

  function handleDollarString (balance, operator, input) {
    balance           = Number(balance.substr(1))
    input             = Number(input)
    var returnString  = '$'
    returnString += operator(balance, input).toString();
    return returnString
  }

  function operators (operator) {
    var operations = {
      deposit: function (balance, adder) {
        return balance + adder
      },
      withdraw: function (balance, subtractor) {
        return balance - subtractor
      }
    }
    return operations[operator];
  }

  function whichAccout (buttonId) {
    return buttonId.substr(0, buttonId.indexOf('-'))
  }
  function depositWithdraw (buttonId) {
    return buttonId.substr(buttonId.indexOf('-') + 1)
  }

  function controller (button) {
    var account = whichAccout(button.attr('id'))
    var action  = depositWithdraw(button.attr('id'))
    var balance = $('#'+ account +'-balance')
    var input   = $('#'+ account +'-input')

    balance = balance.text(handleDollarString(
      balance.text(),
      operators(action),
      input.val()))
    input.val(null)
  }

  $('.button').click(function() {
    controller($(this))
  })

})
