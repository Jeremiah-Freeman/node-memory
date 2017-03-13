var Memory = require('./../js/memory.js').memoryModule;

$(document).ready(function() {
    var clicks = 0;
    var score = 0;
    var firstCLick = "";
    var first="";
    var second = "";
  $(".holder").click(function(){
    if(clicks === 0){
      $(this).children().toggle();
      first = $(this).children(".hideMe").val();
      firstCLick = $(this).attr('id');
      clicks++;
      // alert("first click:" + firstCLick);
    }else if(clicks === 1){
      if(firstCLick === $(this).attr('id')){
        alert("don't click me");
      }else{
        $(this).children().toggle();
        second = $(this).children(".hideMe").val();
        // alert("second click:" + first + ", " + second);
        if(first === second){
          score ++;
        } else{
          $(this).children("img").fadeOut(1000);
          $("#"+firstCLick).children("img").fadeOut(1000);
        }
        clicks = 0;
      }
    }
    $('#score').text(score);
    if(score === 5){
      alert("You Win!!");
      score = 0;
      $('.holder').children('img').fadeOut(1000);
      $('#score').delay(1000).text(score);

    }
  });

});
