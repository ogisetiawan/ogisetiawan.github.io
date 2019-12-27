window.onload = function() {
  $("html, body").animate({ scrollTop: 0 }, 11);
  let loadTime =
    (window.performance.timing.domComplete -
      window.performance.timing.navigationStart) /
      50 +
    " sec.";
  let loadTimeAdd =
    window.performance.timing.domComplete -
    window.performance.timing.navigationStart +
    50;
  // $('#body').children('.loader').show().delay(2020).fadeOut('slow');
  setTimeout(function() {
    $("#body")
      .children(".loader")
      .fadeOut()
      .hide();
    $("html").css("background", "transparent");
    $("body").css("background", "transparent");
    $("svg").css("position", "initial");
    $("svg").css("width", "auto");
    $("svg").css("height", "auto");
    $("#body")
      .children(".content")
      .removeClass("hidden");
    $("#body")
      .children(".content")
      .addClass("show");
  }, 2020);
  console.log("Page load time is " + loadTime);
};
$(document).ready(function() {
  // <!--/ initializeTypeWriter  -->
  var app = document.getElementById("writer");
  var typewriter = new Typewriter(writer, {
    loop: true
  });
  typewriter
    .typeString("Im, Ogi Setiawan!")
    .pauseFor(2500)
    .deleteChars(13)
    .typeString("Web Developer!")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Enjoy My Site :)")
    .pauseFor(1000)
    .start();
});
