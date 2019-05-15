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
    var pngs = ["Pattern1","Pattern2","Pattern3","Pattern4","Pattern5","Pattern6","Pattern7","Pattern8","Pattern9","Pattern10","Pattern11","Pattern12","Pattern13","Pattern14",
                "Pattern15","Pattern16","Pattern17","Pattern18","Pattern19","Pattern20","Pattern21","Pattern22","Pattern23","Pattern24","Pattern25,
                "Pattern26","Pattern27","Pattern28","Pattern29","Pattern30","Pattern31","Pattern32","Pattern33","Pattern34","Pattern35","Pattern36",
                "Pattern37","Pattern38","Pattern39","Pattern40","Pattern41","Pattern42","Pattern43","Pattern44","Pattern45","Pattern46","Pattern47","Pattern48,
                "Pattern49","Pattern50","Pattern51","Pattern52","Pattern53","Pattern54","Pattern55","Pattern56","Pattern57","Pattern58","Pattern59","Pattern60",
                "Pattern61","Pattern62","Pattern63","Pattern64"];
    var randomPNG = Math.floor(Math.random() * 3);
    return pngBase + pngs[randomPNG] + ".png";
  };
  if (window.innerWidth<768) {
    var picNumbers = 10;
  } else {
    var picNumbers = 30;
  }
  for (var i = 0; i < picNumbers; i++) {
    var randomRotate = Math.random()*360;
    var randomLeft = Math.random()*(window.innerWidth-160);
    var randomTop = Math.random()*(window.innerHeight-60);
    // var getRandomPNG = "assets/img/pics/Pattern11.png"
    var drawing = $('<div class="drawing"></div>').css({
        // background: getRandomColors(),
        backgroundImage: 'url(' + getRandomPNG() + ')',
        overflow: 'hidden',
        width: '180px',
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
