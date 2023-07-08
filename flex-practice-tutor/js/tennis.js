var slider = $('.trainers__slider');
var sliderTwo = $('.serv__slider');

function updateSlider() {
    var windowWidth = $(window).width();

    var slidesToShow = 6;
    if (windowWidth < 1242) {
      slidesToShow = 5;
    }
    if (windowWidth < 1096) {
      slidesToShow = 4;
    }
    if (windowWidth < 840) {
        slidesToShow = 3;
    }
    if (windowWidth < 640) {
        slidesToShow = 2;
    }
    if (windowWidth < 440) {
        slidesToShow = 1;
    }

    slider.slick('slickSetOption', 'slidesToShow', slidesToShow);
  }
  

$(document).ready(function(){

    slider.slick({
        slidesToShow: 6,
        appendArrows: $('.trainers__slider-click'),
        infinite: true,
    })
    sliderTwo.slick({
        slidesToShow: 1,
        appendArrows: $('.ps__slider-click'),
        infinite: true,
    })
    updateSlider();
    
    $(window).resize(function() {
        updateSlider();
    });
});