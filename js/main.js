'use strict';

(function ($) {
  $(document).ready(function () {
    var $root = $('html, body');

    // Fade in content
    $('body, html').hide();
    $('body, html').fadeIn(500);
    $('.js-only').show();

    // Scroll to links
    $('header a').click(function (e) {
      e.preventDefault();
      var target = $.attr(this, 'href'),
          scrollTop = $(target).offset().top - 18,
          // add 18px of padding on top
      addTargetToURL = function addTargetToURL() {
        return window.location.hash = target;
      }; // allows "back" to work

      $root.animate({
        scrollTop: scrollTop
      }, 500, addTargetToURL);
      return false;
    });
  });
})(jQuery);
