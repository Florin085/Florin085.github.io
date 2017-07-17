//=====================SHIRTS===================

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll > $('#shirts').offset().top - ($(window).height() / 1.5)) {
// 1.5 e dimensiunea ecranului la care se intampla animatia
    //console.log("hi");

    $('#shirts figure').each(function(i){


      setTimeout(function(){
        $('#shirts figure').eq(i).addClass('is-showing')
      }, (700 * (Math.exp(i * 0.14))) -700);
    });

  }

});


//=====================#jackets===================


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll > $('#jackets').offset().top - ($(window).height() / 1.5)) {
// 1.5 e dimensiunea ecranului la care se intampla animatia
    //console.log("hi");

    $('#jackets figure').each(function(i){


      setTimeout(function(){
        $('#jackets figure').eq(i).addClass('is-showing')
      }, (700 * (Math.exp(i * 0.14))) -700);
    });

  }

});


//=====================#pants===================


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll > $('#pants').offset().top - ($(window).height() / 1.5)) {
// 1.5 e dimensiunea ecranului la care se intampla animatia
    //console.log("hi");

    $('#pants figure').each(function(i){


      setTimeout(function(){
        $('#pants figure').eq(i).addClass('is-showing')
      }, (700 * (Math.exp(i * 0.14))) -700);
    });

  }

});


//=====================#vests===================


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll > $('#vests').offset().top - ($(window).height() / 1.5)) {
// 1.5 e dimensiunea ecranului la care se intampla animatia
    //console.log("hi");

    $('#vests figure').each(function(i){


      setTimeout(function(){
        $('#vests figure').eq(i).addClass('is-showing')
      }, (700 * (Math.exp(i * 0.14))) -700);
    });

  }

});


//=====================#t-shirts===================


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll > $('#t-shirts').offset().top - ($(window).height() / 1.5)) {
// 1.5 e dimensiunea ecranului la care se intampla animatia
    //console.log("hi");

    $('#t-shirts figure').each(function(i){


      setTimeout(function(){
        $('#t-shirts figure').eq(i).addClass('is-showing')
      }, (700 * (Math.exp(i * 0.14))) -700);
    });

  }

});



//=====================#footwear===================


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll > $('#footwear').offset().top - ($(window).height() / 1.5)) {
// 1.5 e dimensiunea ecranului la care se intampla animatia
    //console.log("hi");

    $('#footwear figure').each(function(i){


      setTimeout(function(){
        $('#footwear figure').eq(i).addClass('is-showing')
      }, (700 * (Math.exp(i * 0.14))) -700);
    });

  }

});


//=====================#accesories===================


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll > $('#accesories').offset().top - ($(window).height() / 1.5)) {
// 1.5 e dimensiunea ecranului la care se intampla animatia
    //console.log("hi");

    $('#accesories figure').each(function(i){


      setTimeout(function(){
        $('#accesories figure').eq(i).addClass('is-showing')
      }, (700 * (Math.exp(i * 0.14))) -700);
    });

  }

});
