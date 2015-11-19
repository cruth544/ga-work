document.getElementById('nav').addEventListener('click', function(event) {
  event.preventDefault();
  $document.getElementById("body").toggleClass('open-nav');
});
