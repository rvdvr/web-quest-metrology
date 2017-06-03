$(document).ready(function () {
  $(function () {
    $('.common-menu__btn').on('click', function () {
      $('.common-menu__sidebar').addClass('common-menu__sidebar_active');
    });
  }());

  $(function () {
    $('.common-menu__sidebar-burger').on('click', function () {
      $('.common-menu__sidebar').removeClass('common-menu__sidebar_active');
    });
  }());

  $(function () {
    $(document).on('mouseup', function (e) {

      var container = $(".common-menu__sidebar");

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.common-menu__sidebar').removeClass('common-menu__sidebar_active');
      }
    });
  }());

  $(function () {
    $('#slide-section').on('click', function () {

      var scrollElem = $(this).attr('href');

      if ($(scrollElem).length != 0) {
        $('html, body').animate({ scrollTop: $(scrollElem).offset().top }, 200);
      }
      return false;
    });
  }());

  $(function (){

  var accordionList = $(".accordion__list");

  if (accordionList.length) {

    $('.accordion__trigger').on('click', function(e) {

      var
          $this = $(this),
          container = $this.closest('.accordion'),
          item = $this.closest('.accordion__item'),
          currentContent = item.find('.accordion__content')
          duration = 200;

      if (!item.hasClass('accordion__item_active')) {

          item.addClass('accordion__item_active')
          .siblings()
          .removeClass('accordion__item_active')
          .find('.accordion__content')
          .slideUp();

          $this.addClass('accordion__trigger_active')
          .parent()
          .siblings()
          .children()
          .removeClass('accordion__trigger_active');

          currentContent.stop(true, true).slideDown(duration);
      } else {
          $this.css('border-color','transparent');
          item.removeClass('accordion__item_active');
          currentContent.stop(true, true).slideUp(duration);
      }
    });
  };
}());
});
