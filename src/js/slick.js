$(function (){

  var sliderList = $('.select-role__slider-list');

  if(sliderList.length){
    sliderList.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      appendArrows: $('.select-role__slide-arrows'),
      prevArrow: $('.select-role__slide-arrow-prev'),
      nextArrow: $('.select-role__slide-arrow-next')
    });
  }
}());
