// business logic
var numberTranslate = function(inputString, userName) {
  var inputArr = inputString.split('');
  var outputArr = [];
  var output;
  if (inputString.match(/[a-z]/i)) {
    outputArr.push("beepboop?");
  } else {
    inputArr.forEach(function(number) {
      var index = '';
      if (parseInt(number) % 3 === 0 && parseInt(number) > 0) {
        if (userName === "") {
          userName = "Dave";
        } else {
          userName = userName.charAt(0).toUpperCase() + userName.substr(1,userName.length);
        }
        index = "I'm sorry " + userName + ". I'm afraid I can't do that.";
      } else if (number === "0") {
        index = "Beep!";
      } else if (number === "1") {
          index = "Boop!";
      } else {
        index = number;
      }
      outputArr.push(index);
    });
  }
  output = stringify(outputArr);
  // alert(outputArr);
  return output;
};


var stringify = function(funcInput) {
  output = funcInput.join("").toString();
  return output;
};


// user logic
$(document).ready(function() {
  $("form#toTranslate").submit(function(event) {
    event.preventDefault();
    var userInput = $("#inputTxt").val();
    var userName = $("#inputName").val();
    output = numberTranslate(userInput, userName);
    $(".humanSpeak").prepend('"' + userInput + '"<br>');
    $(".robotSpeak").prepend('"' + output + '"<br>');
    $(".result").show();
    $('.human .imgBox').addClass('animated wobble');
    $('.robot .imgBox').addClass('animated wobble delay-2s');
    // $('form#toTranslate').addClass('animated bounceOutLeft');
  });
});
