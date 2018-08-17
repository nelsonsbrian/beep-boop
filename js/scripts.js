// business logic
var numberTranslate = function(inputString) {
  var inputArr = inputString.split('');
  var outputArr = [];
  var output;
  if (inputString.match(/[a-z]/i)) {
    outputArr.push("beepboop?");
  } else if (/[0]/.test(inputString)) {
    inputArr.forEach(function(number) {
      var index = '';
      if (number === "0") {
        index = "Beep!";
      } else if (number === "1") {
          index = "Boop!";
      } else {
        index = number;
      }
      outputArr.push(index);
    });
  } else {
    outputArr.push(inputString);
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
    var userInput = $("#inputtxt").val();
    output = numberTranslate(userInput);
    $("#result").text(output);
  });
});
