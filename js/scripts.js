// business logic
var numberTranslate = function (inputString) {
  if (inputString.match(/[a-z]/i)) {
    return "beepboop?";
  }
  return inputString;
}
// user logic
$(document).ready(function() {
  $("form#toTranslate").submit(function(event) {
    event.preventDefault();
    var userInput = $("#inputtxt").val();
    output = numberTranslate(userInput);
    $("#result").text(output);
  });
});
