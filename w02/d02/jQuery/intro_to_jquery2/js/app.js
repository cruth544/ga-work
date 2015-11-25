$(function () {
  $('body').css('visibility', 'visible')

  $("#movie-search").keyup(function(event){
    if(event.keyCode === 13){
        $("#submit").click()
    }
  })

  $('#submit').click(function() {
      $.getJSON("http://www.omdbapi.com/?t=" + $('#movie-search').val(), function(response, status, jqXHR){

      $('img').remove();
      console.log("response:", response);
      console.log("status:", status);
      // jQuery XMLHttpRequest
      console.log("jqXHR:", jqXHR);
      //Prints title to header tag
      $(".pane").find('h3').eq(0).html(response['Title']);
      //Prints plot to 'pane' paragraph
      $(".pane").find('p').eq(0).html(response['Plot']);
      $('<img>', {src: response['Poster'], class: 'poster'}).appendTo(".pane")
    })
  })
})






































