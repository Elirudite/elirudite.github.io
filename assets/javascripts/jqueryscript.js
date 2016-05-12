$("#green-circle").hover(function (){
	$("#changeling").html("We've changed the text!");
  }, function(){
  $("#changeling").html("This is (the same) sentence! :P");
});

$(".red-square").click(function (){
	$(this).css('background-color', 'blue');
});

$(".red-square").hover(function (){
	$(this).css('width', 400);
});


$(function() {
	$('.draggable').draggable();
})

// // Stack Overflow solution: https://stackoverflow.com/questions/14032568/create-a-div-next-to-the-cursor-position-on-click/14032652#14032652
// $(function(){
//     $(document).click(function(e){
//         var x = e.pageX + 'px';
//         var y = e.pageY + 'px';
//         var shape = $('#shape1');
//         var div = $('<div>').css({
//             "position": "absolute",                    
//             "left": x,
//             "top": y
//         });
//         div.append(shape);
//         $(document.body).append(div);        
//     });
// });

// // w3 schools solution
// function createShape() {
// 	var elmnt = document.getElementsByTagName("DIV")[0];
// 	var cln = elmnt.cloneNode(true);
// 	document.body.appendChild(cln);
// 	cln = '.draggable'
// }


// Another Stack Overflow solution (better): http://stackoverflow.com/questions/2458817/jquery-ui-drag-and-clone-from-original-div-but-keep-clones
$(".shapeclone").live('mouseover', function() {
    $(this).draggable({ 
        containment: 'html'
    });
});
$("#shape1, #shape2").draggable({ 
    containment: 'html',
    helper: 'clone',
    stop: function(event, ui) {
        $(ui.helper).clone(true).addClass('shapeclone').appendTo('body');
    }
});

// Tried to create a function myself, failed...
// $("button").click(function(){
// 	$("#spawnCreator")
// })
// function createShape() {
// 	var node = document.createElement("DIV");
// 	var shape = document.getElementById("#shape1");
// 	document.body.appendChild(shape);
// } 







// HERE BE jCanvas!!!

$('#polygons')
.drawArc({
  layer: true,
  draggable: true,
  bringToFront: true,
  fillStyle: '#36c',
  x: 150, y: 150,
  radius: 50
})
.drawRect({
  layer: true,
  draggable: true,
  bringToFront: true,
  fillStyle: '#6c1',
  x: 100, y: 100,
  width: 100, height: 100
});

// Add rectangle layer w/o drawing
$('#resizable').addLayer({
  type: 'rectangle',
  draggable: true,
  fillStyle: '#fff',
  strokeStyle: '#c33',
  strokeWidth: 2,
  x: 160, y: 150,
  width: 150, height: 80,
  handlePlacement: 'both',
  handle: {
    type: 'arc',
    fillStyle: '#fff',
    strokeStyle: '#c33',
    strokeWidth: 2,
    radius: 10
  },
  handlestart: function(layer) {
    // code to run when resizing starts
  },
  handlemove: function(layer) {
    // code to run while resizing
  },
  handlestop: function(layer) {
    // code to run while resizing stops
  }
})
.drawLayers();