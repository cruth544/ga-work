$(function  () {
  $('body').css('visibility', 'visible')
  $('.balance').addClass('zero')

  function handleDollarString (balance, operator, input, overdraft) {
    balance           = Number(balance.substr(1))
    input             = Number(input)
    var returnString  = '$'

    returnString += operator(balance, input, overdraft).toString();
    return returnString
  }

  function operators (operator) {
    var operations = {
      deposit: function (balance, adder) {
        return balance + adder
      },
      withdraw: function (balance, subtractor, overdraft) {
        if (balance - subtractor < 0) {
          if (!overDraft(subtractor, overdraft)) {
            return balance
          }
        }
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

  function overDraft (subtractor, overdraft) {
    var overAccount    = $('#'+ overdraft +'-balance')
    var extraAccount   = overdraft === 'checking' ? 'savings' : 'checking'
    extraAccount       = $('#'+ extraAccount +'-balance')


    if (Number(overAccount.text().substr(1)) + Number(extraAccount.text().substr(1)) - subtractor >= 0) {
      var total = handleDollarString(
        overAccount.text(),
        operators('deposit'),
        extraAccount.text().substr(1))
      var leftOver = handleDollarString(
        total,
        operators('withdraw'),
        subtractor.toString())
      extraAccount.text(leftOver)
      if (extraAccount.text() === '$0') {
        extraAccount.addClass('zero')
      }
      return true
    } else {
      console.log("too much")
      return false
    }
  }

  function controller (button) {
    var account       = whichAccout(button.attr('id'))
    var action        = depositWithdraw(button.attr('id'))
    var balance       = $('#'+ account +'-balance')
    var input         = $('#'+ account +'-input')
    var finalBalance  = handleDollarString(
                          balance.text(),
                          operators(action),
                          input.val(),
                          account)
    balance = balance.text(Number(finalBalance.substr(1)) > 0 ? finalBalance : '$0')
    balance.text() === '$0' ? balance.addClass('zero') : balance.removeClass('zero')
    input.val(null)
  }

  $('.button').click(function() {
    controller($(this))
  })
})
