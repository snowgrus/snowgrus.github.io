$(function() {
  $(document).on('click', '.rw-menuButton', function(event) {
    event.preventDefault();
    $('body').addClass('rw-body--open-menu');
  }).on('click', '.rw-nav-close', function(event) {
    event.preventDefault();
    $('body').removeClass('rw-body--open-menu');
  })
})