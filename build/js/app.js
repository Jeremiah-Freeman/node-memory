(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Memory(skinName) {
  this.skin = skinName;
}

Memory.prototype.something = function() {
  
};


exports.memoryModule = Memory;

},{}],2:[function(require,module,exports){
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

},{"./../js/memory.js":1}]},{},[2]);
