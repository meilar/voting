$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));
  if (age <= 17) {
    $('#underage').show();
  } else {
      $('#voter').show();
    }
});
