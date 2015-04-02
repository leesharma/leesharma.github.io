// Generated by CoffeeScript 1.6.3
(function() {
  var scrollTo;

  scrollTo = function(buttonId, sectionId) {
    return $(buttonId).click(function() {
      return $('html,body').animate({
        scrollTop: $(sectionId).offset().top
      }, 1000);
    });
  };

  $(document).ready(function() {
    scrollTo("#s1_button", "#section1");
    scrollTo("#s2_button", "#section2");
  });

}).call(this);