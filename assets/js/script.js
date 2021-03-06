// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(document).ready(function(){
  var getRandomColors = function(){
    var colors = ["#ec1750","#d5d829","#184a46","#6d1211","#ffc638","#faab20","#df4c9b","#000000","#9bd4be","#ffd500","#fff200","#b8d432","#f0525a","#506830","#8cc63f","#ef3842","#232021","#54c6f0","#f04e36","#0cb0d9","#9d85be","#cae9ea"];
    var randomColors = Math.floor(Math.random() * 22);
    return colors[randomColors];
  };
  var getRandomPNG = function(){
    var pngBase = "assets/img/pics/"
    var pngs = [];
    for (var i = 1; i < 65; i++) {
      pngs.push("Pattern" + i);
    }
    var randomPNG = Math.floor(Math.random() * 64);
    return pngBase + pngs[randomPNG] + ".png";
  };
  if (window.innerWidth<768) {
    var picNumbers = 11;
  } else {
    var picNumbers = 22;
  }
  var randomNUM = Math.floor(Math.random() * 4);
  console.log(randomNUM)
  if(randomNUM === 0){
    var rotateNUM = 0;
  }
  if(randomNUM === 3 ){
    var rotateNUM = 90;
  }

  for (var i = 0; i < picNumbers; i++) {
    if(randomNUM === 1 || randomNUM === 2 ){
      var rotateNUM = Math.random()*180;
    }
    var randomRotate = rotateNUM;
    var randomLeft = Math.random()*(window.innerWidth-160);
    var randomTop = Math.random()*(window.innerHeight-60);
    // var getRandomPNG = "assets/img/pics/Pattern11.png"
    var drawing = $('<div class="drawing"></div>').css({
        // background: getRandomColors(),
        backgroundImage: 'url(' + getRandomPNG() + ')',
        overflow: 'hidden',
        width: '210px',
        height:'60px',
        position: 'absolute',
        left: randomLeft,
        top: randomTop,
        transform: 'rotate(' + randomRotate + 'deg)',
    });
    drawing.appendTo("#elements-container");
  }

  $(".title-center-close, .designers-center-close, .close-trigger, .clicked").click(function(){
    $( "#seniorshow, #designers" ).removeClass("clicked");
    $( ".designers-center-close,.title-center-close,.close-trigger, .designers-body, .title-body, .center-container" ).css({"display":"none"});
  });
  $("#designers").click(function(){
    $( this ).addClass("clicked");
    $( "#seniorshow" ).removeClass("clicked");
    $( ".designers-center-close,.close-trigger, .center-container, .designers-body,.trigger-center-close" ).css({"display":"block"});
    $( ".title-center-close,.title-body" ).css({"display":"none"});
  });
  $("#seniorshow").click(function(){
    $( this ).addClass("clicked");
    $( "#designers" ).removeClass("clicked");
    $( ".title-center-close,.close-trigger, .title-body, .center-container" ).css({"display":"block"});
    $( ".designers-center-close,.designers-body" ).css({"display":"none"});
  });
  $(".drawing").draggable(function(){
  });

});
