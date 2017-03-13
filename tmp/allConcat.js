var Memory = require('./../js/memory.js').memoryModule;

$(document).ready(function() {
    var clicks = 0;
    var score = 0;
    var firstCLick = "";
    var first="";
    var second = "";
    var image0 = "https://pbs.twimg.com/profile_images/541920956449435651/iHq9_qcq.png";
    var image1 = "http://pix.iemoji.com/images/emoji/apple/ios-9/256/money-mouth-face.png";
    var image2 = "http://pix.iemoji.com/images/emoji/apple/ios-9/256/thinking-face.png";
    var image3 = "http://pix.iemoji.com/images/emoji/apple/ios-9/256/nerd-face.png";
    var image4 = "http://cdn.cultofmac.com/wp-content/uploads/2015/11/face_with_tears_of_joy.png";
    var imgObject = {tongue:[image0, "tongue", 0], tongue2:[image0, "tongue", 1], money:[image1, "money", 2], money2:[image1, "money", 3], think:[image2, "think", 4], think2:[image2, "think", 5], nerd:[image3, "nerd", 6], nerd2:[image3, "nerd", 7], tears:[image4, "tears", 8], tears2:[image4, "tears", 9]};
    var holderID = 0;

    for(var key in imgObject){
      $('#holder'+imgObject[key][2]).append(
        "<img src='" + imgObject[key][0] + "'>" +
        "<input type='hidden' class='hideMe' value='" + imgObject[key][1] + "'>"
      );
      console.log(imgObject[key][0] + ", " + imgObject[key][1] + ", " + imgObject[key][2]);
    }

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
