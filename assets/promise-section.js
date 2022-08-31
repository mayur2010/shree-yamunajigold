 
      console.log("ready");
      $( ".incards" ).mouseover(function() {
        console.log ("mouseover");
      });

      $('.incards').mouseover(
        function(){ 
          console.log("hover");
          $(this).children(".hover-content").addClass("active"); //Add an active class to the anchor
        },
        function() {
          $(this).children(".hover-content").removeClass("active"); //Remove an active class to the anchor
        }
     )
    