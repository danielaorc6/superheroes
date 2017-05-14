$(document).ready(function(){

  //configuration
  var width = 430;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  //cache DOM

  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  var interval;

  function startSlider() {

   interval = setInterval(function () {
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
      currentSlide++;
      if (currentSlide == $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
      }
  });
  }, pause);

}

  function pauseSlider(){
      clearInterval(interval);
  }

    $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

    startSlider();


    // --------------------SUPERMAN-------

      var currentSlide2 = 1;

    var $slider2 = $('#slider2');
    var $slideContainer2 = $slider2.find('.slides2');
    var $slides2 = $slideContainer2.find('.slide2');

    var interval2;

    function startSlider2() {

     interval2 = setInterval(function () {
      $slideContainer2.animate({'margin-left': '-='+width}, animationSpeed, function(){
        currentSlide2++;
        if (currentSlide2 == $slides2.length) {
            currentSlide2 = 1;
            $slideContainer2.css('margin-left', 0);
        }
    });
    }, pause);

  }

    function pauseSlider2(){
        clearInterval(interval2);
    }

      $slider2.on('mouseenter', pauseSlider2).on('mouseleave', startSlider2);

      startSlider2();


});
