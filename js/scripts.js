$(document).ready(function() {
  $("#quiz-form").submit(function(event) {
    var okay = $("select#okay-check").val();

    var year = parseInt($("input#year").val());

    if (okay-check === 'okay' && year < 2019) {
      $("#ok-past").show()
    }
    else if (okay-check === 'okay' && year === 2019) {
      $("#ok-present").show()
    }
    else if (okay-check === 'okay' && year > 2019) {
      $("#ok-future").show()
    }
    else if (okay-check === 'not-okay' && year > 2019) {
      $("#nok-future").show()
    }
    else if (okay-check === 'not-okay' && year === 2019) {
      $("#nok-present").show()
    }
    else if (okay-check === 'not-okay' && year < 2019) {
      $("#nok-past").show()
    }
    event.preventDefault();
  });
});
