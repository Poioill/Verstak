var slider = $('.trainers__slider');
var sliderTwo = $('.serv__slider');
var sliderAbout = $('.about-gallery__slider');
var sliderRules = $('.about-rules__slider');

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

    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })

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
    sliderAbout.slick({
        slidesToShow: 1,
        appendArrows: $('.about__slider-click'),
        infinite: true,
    })
    sliderRules.slick({
        slidesToShow: 1,
        dots: true,
        appendDots: $('.about-rules__slider-click'),
        customPaging: function(slider, i) {
        var li =  $(".rules-list li");
        return (i + 1) + '.  ' + li[i].innerHTML;
           },
        dotsClass: 'news__dots-list',
        infinite: true,
        vertical: true,
    })
    updateSlider();

    $(window).resize(function() {
        updateSlider();
    });
});