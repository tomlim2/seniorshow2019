$(document).ready(function(){

  for (var i = 0; i < 22; i++) {
    var randomRotate = Math.random()*180;
    var randomColor;
    randomColor = Math.random() * 0x1000000; // 0 < randomColor < 0x1000000
    randomColor = Math.floor(randomColor); // 0 < randomColor <= 0xFFFFFF
    randomColor = randomColor.toString(16); // hex representation randomColor
    randomColor = ("000000" + randomColor).slice(-6); // leading zeros added
    var randomLeft = Math.random()*1100;
    var randomTop = Math.random()*600;
    var drawing = $('<div class="drawing"></div>').css({
        background: "#" + randomColor,
        overflow: 'hidden',
        width: '160px',
        height:'80px',
        position: 'absolute',
        left: randomLeft,
        top: randomTop,
        transform: 'rotate(' + randomRotate + 'deg)',
    });
    drawing.appendTo("#elements-container");
  }

  // for (var i = 0; i < unitsWide * unitsTall; i++) {
  //     var randomColor;
  //     randomColor = Math.random() * 0x1000000; // 0 < randomColor < 0x1000000
      // randomColor = Math.floor(randomColor); // 0 < randomColor <= 0xFFFFFF
  //     randomColor = randomColor.toString(16); // hex representation randomColor
      // randomColor = ("000000" + randomColor).slice(-6); // leading zeros added
  //     randomColor = "#" + randomColor; // # added
  //     $('<span class="square"></span>').css({
  //         display: 'block',
  //         float: 'left',
  //         width: unitSize,
  //         height: unitSize,
  //         'background-color': randomColor
  //     }).appendTo(drawing);
  // }
  // drawing.appendTo($(".container"));

  $(".designers-title").click(function(){
    $( ".designers" ).toggleClass('designers-on');
  });
  $(".drawing").draggable(function(){
  });

});
