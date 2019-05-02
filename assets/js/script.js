$(document).ready(function(){
  var getRandomColors = function(){
    var colors = ["#ec1750","#d5d829","#184a46","#6d1211","#ffc638","#faab20","#df4c9b","#000000","#9bd4be","#ffd500","#fff200","#b8d432","#f0525a","#506830","#8cc63f","#ef3842","#232021","#54c6f0","#f04e36","#0cb0d9","#9d85be","#cae9ea"];
    var randomColors = Math.floor(Math.random() * 22);
    return colors[randomColors];
  };

  for (var i = 0; i < 30; i++) {
    var randomRotate = Math.random()*360;

    var randomLeft = Math.random()*(window.innerWidth-160);
    var randomTop = Math.random()*(window.innerHeight-60);
    var drawing = $('<div class="drawing"></div>').css({
        background: getRandomColors(),
        overflow: 'hidden',
        width: '160px',
        height:'60px',
        position: 'absolute',
        left: randomLeft,
        top: randomTop,
        transform: 'rotate(' + randomRotate + 'deg)',

    });
    drawing.appendTo("#elements-container");
  }

  $(".designers-title").click(function(){
    $( ".designers" ).toggleClass('designers-on');
    $( ".title" ).toggleClass('title-designers-on');
  });
  $(".title-title").click(function(){
    $( ".title" ).toggleClass('title-on');
    $( ".designers" ).toggleClass('designers-title-on');
  });
  $(".drawing").draggable(function(){
  });

});
