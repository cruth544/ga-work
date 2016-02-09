angular.module("DomManipulation")
    .directive('myDraggable', DraggableDirective)

function DraggableDirective ($document) {
  return {
    restrict: 'EA',
    link: function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0, h;

       element.css({
           position: 'relative',
           border: '1px solid red',
           backgroundColor: 'lightgrey',
           cursor: 'pointer'
      });

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();

        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        h = document.documentElement.clientHeight

        if (y > h / 2) {
          element.html("I'm at the bottom")
        } else {
          element.html("Drag Me")
        }
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  }
}
