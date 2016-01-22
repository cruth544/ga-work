$(function () {
  var doughnutList
  function populateDougnutList (list) {
    list.forEach(function (obj) {
      $('#doughnuts').append(liHtmlHelper(obj))
      addClick()
    })
  }

  function liHtmlHelper (doughnut) {
    var str = "<li>"
    str += doughnut.style
    str += " - <i>"
    str += doughnut.flavor
    str += "</i>"
    str += " <button class='delete'>X</button></li>"
    return str
  }

  $.ajax('https://api.doughnuts.ga/doughnuts', {
    success: function (data) {
      doughnutList = data
      populateDougnutList(data)
    }
  })

  $('#new-doughnut').on('submit', function(e) {
    e.preventDefault()
    var newDoughnut = $(this).serializeArray()
    $.ajax('https://api.doughnuts.ga/doughnuts', {
      type: "POST",
      data: {flavor: newDoughnut[0].value,
             style: newDoughnut[1].value},
      success: function (data) {
        $('#doughnuts').prepend(liHtmlHelper(data))
        addClick()
      }
    })
  })

  function addClick () {
    $('.delete').on('click', function (e) {
      $.ajax('https://api.doughnuts.ga/doughnuts/:id', {
        type: "DELETE",
        success: function (data) {
          $(e.currentTarget).parent().remove()
        }
      })
    })
  }


















































})
