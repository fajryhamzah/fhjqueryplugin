/*!
 * fh-smooth version 1.0.0 (http://www.fajryhamzah.com)
 * Copyright 2016
 * Licensed under the MIT license
 */

(function ( $ ) {
  $.fn.fhsmooth = function(options){
    var size=0;
    var setting = $.extend({
      duration:1000
    },options);

    $(this).click(function(e){
    e.preventDefault();
    var target = $(this).attr("href");
    if(target == "#") target = "body";
    size = $(target).position().top;

    $("html,body").animate({
        scrollTop: size
      },setting.duration); 

    });
  };
}( jQuery ));
