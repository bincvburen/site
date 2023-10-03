// JavaScript Document
console.log("hi");

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.video_wrapper2').css({
        opacity: function() {
          var elementHeight = $(this).height(),
              opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.8) + 0.2;
      
          return opacity;
        }
      });
  });








