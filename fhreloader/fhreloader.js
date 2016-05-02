/*!
 * fhreloader v1.0.0 (http://www.fajryhamzah.com)
 * Copyright 2016
 * Licensed under the MIT license
 */

function createDefaultSplash(){
   html = '<div id="fhreloader-default"><div id="fhreloader-default-load"><h2 class="animated infinite flash">Wait a sec...</h2><i class="fa fa-cog fa-spin fa-5x"></i></div></div>';
   $("body").append(html);

}

$.fn.fhreloader = function(options){
  var setting = $.extend({
    disableScroll:true,
  },options);

  if($(this).length == 0){
    setting.splash = "#fhreloader-default";
    createDefaultSplash();
  }
  else{
    setting.splash = $(this);
    if($(setting.splash).css("display") == 'none'){
      $(setting.splash).css("display","block");
    }
  }

  if(setting.disableScroll == true){
    $("body").addClass("disableScroll");
  }

  $(setting.splash).addClass("fixing-the-preloader");
    
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        if($("body").hasClass("disableScroll")){
          $("body").removeClass("disableScroll");
          $(setting.splash).css("display","none");
        }
    }
  }
};