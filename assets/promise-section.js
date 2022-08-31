jQuery_T4NT(document).ready(function ($) {
  console.log("ready");

  $(".incards").hover(function () {
    console.log("mouseover");
  });

  $(".incards").hover(
    function () {
      console.log("hover");
      $(this).children(".hover-content").addClass("active"); //Add an active class to the anchor
    },
    function () {
      $(this).children(".hover-content").removeClass("active"); //Remove an active class to the anchor
    }
  );
});