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
});
