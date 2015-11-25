$(function () {
  console.log("Everything is ready!")

  $('#title').css({
    'color': 'green',
    'text-align': 'center'});

  $('tr').eq(0).css({
    'text-align': 'center',
    'color': 'black'});

  function setBackgroundColor () {
    for (var i = 0; i < $('td').length; i++) {
      if (i % 4 === 1) {
        var color = $('td').eq(i).text().toLowerCase();
        $('tr').eq(Math.floor(i / 4) + 1).css({
          'background-color': color,
          'color': 'white'
        })
      }
    }
  }
  setBackgroundColor();

  $('#toggleButton').click(function () {
    $('#disclaimer').toggle();
  })

  var newP = $('<p>My new paragraph</p>');
  newP.addClass('new');

  $('<input type="button" value="New Turtle?" id="newTurtleButton">').insertAfter('#turtles')
  $('#newTurtleButton').click(function() {
    $('<tr class="rembrandt"><td>Rembrandt</td><td>Green</td><td>Snapping Bite</td><td>Never fully mutated</td></tr>').appendTo('#turtles tbody')
    setBackgroundColor()
    $(this).off('click')
    $(this).prop('value', 'Show Turtles')
    $(this).click(function () {
      $('#turtle-pic').toggle()
      $('#fifth-turtle').toggle()
      $(this).val(
        $(this).val() === "Show Turtles" ? "Hide Turtlse" : "Show Turtles")
    })
  })

})

