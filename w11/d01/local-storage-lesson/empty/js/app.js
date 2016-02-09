console.log("Hello world")
$("#login-form").submit(function (e) {
  console.log("Submitting")
  e.preventDeafault()
  if ($('#checkbox-login').val()) {
    window.localStorage.username = $('#username-login').val()
  }
})
