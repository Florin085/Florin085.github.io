$(document).ready(function() {

  $('.hero-x').delay(0).queue(function(){
  $(this).toggleClass("inactive-hero");
  });



});

$(document).ready(function(){

    $("hero").delay(2000).queue(function(){
        $("hero-1").toggleClass("inactive-hero");
    });


});
