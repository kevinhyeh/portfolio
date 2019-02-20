const $window = $(window),
      $html = $('html');

const resize = () => {
  if ($window.width() > 950) {
    $('.sidebar').removeClass('sidebar-show');
    $('.sidebar-arrow').removeClass('active');
    $('.sidebar-arrow').removeClass('inline-block');
    $('.sidebar-content').removeClass('inline-block');
    $('.opacity').removeClass('inline-block');
    $('.sidebar-arrow').find('.sidebar-arrow-content').html('&#xbb;');
  }

  $html.removeClass('mobile');
}

$window.resize(resize).trigger('resize');

const openSidebar = () => {
  if (!$('.sidebar-arrow').hasClass('active')) {
    $('.sidebar-arrow').addClass('active');
    $('.sidebar-arrow').addClass('inline-block');
    $('.sidebar').addClass('sidebar-show');
    $('.sidebar-content').addClass('inline-block');
    $('.opacity').addClass('inline-block');
    $('.sidebar-arrow').find('.sidebar-arrow-content').html('&#xab;');
  } else {
    $('.sidebar-arrow').removeClass('active');
    $('.sidebar-arrow').removeClass('inline-block');
    $('.sidebar').removeClass('sidebar-show');
    $('.sidebar-content').removeClass('inline-block');
    $('.opacity').removeClass('inline-block');
    $('.sidebar-arrow').find('.sidebar-arrow-content').html('&#xbb;');
  }
}

$('.sidebar-arrow').on('click', function() {
  openSidebar();
});


$('.sidebar-links').on('click', function() {
  if (window.matchMedia("(max-width: 950px)").matches) {
    openSidebar();
  }
});
