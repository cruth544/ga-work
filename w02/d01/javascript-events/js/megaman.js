x = 0;
function animateMegaman() {
  var megaman = document.getElementById("megaman");
  x = x+1;
  if (x==1) {
    megaman.style.backgroundPositionX = "-162px";
    megaman.style.width = "190px";
    megaman.style.marginLeft = "-15px";
  } else if (x==2) {
    megaman.style.backgroundPositionX = "-352px";
    megaman.style.width = "116px";
    megaman.style.marginLeft = "22px";
  } else if (x==3) {
    megaman.style.backgroundPositionX = "-468px";
    megaman.style.width = "170px";
    megaman.style.marginLeft = "-6px";
  } else if (x==4) {
    megaman.style.backgroundPositionX = "-1px";
    megaman.style.width = "160px";
    megaman.style.marginLeft = "0px";
    x = 0;
  }
  window.setTimeout(animateMegaman, 2000);
}

left = 0;
function moveMegaman() {
  var megaman = document.getElementById("megaman")
  left += 50;
  megaman.style.left = left + "px";
}

function startup() {
  animateMegaman();
}

document.onkeydown = function(event) {
      var megaman = document.getElementById("megaman");

     if (!event)
          event = window.event;
     var code = event.keyCode;
     if (event.charCode && code == 0)
          code = event.charCode;
        console.log(code);
     switch(code) {
          case 37:
              //Left
              var left = Number(megaman.style.left.replace(/px/, ''));
              left -= 6;
              megaman.style.left  = left + 'px';
              megaman.style.backgroundPositionY = '-187px'
              break;
          case 38:
              //Up
              var up = Number(megaman.style.top.replace(/px/, ''));
              up -= 6;
              megaman.style.top = up + 'px';
              break;
          case 39:
              //Right
              var right = Number(megaman.style.left.replace(/px/, ''));
              right += 6;
              megaman.style.left  = right + 'px';
              megaman.style.backgroundPositionY = '-2px'
              break;
          case 40:
              //Down
              var down = Number(megaman.style.top.replace(/px/, ''));
              down += 6;
              megaman.style.top = down + 'px';
              break;
     }
     event.preventDefault();
};


document.addEventListener("DOMContentLoaded", function () {
  startup();
});
