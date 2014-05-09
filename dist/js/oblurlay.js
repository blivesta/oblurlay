/*!
 * oblurlay v0.0.0
 * 
 * Licensed under MIT
 * Copyright 2013-2014 blivesta
 * http://blivesta.com
 */
(function($) {
  var namespace = "oblurlay";
  var methods = {
    init: function(options) {
      options = $.extend({
        upper: "oblurlay-upper",
        contents: "oblurlay-contents",
        clone: "oblurlay-contents-clone"
      }, options);
      return this.each(function() {
        var _this = this;
        var $this = $(this);
        var data = $this.data(namespace);
        if (!data) {
          options = $.extend({}, options);
          $this.data(namespace, {
            options: options
          });
          var $cloneWrap = $("<div>").addClass(options.clone);
          var $clone = $("." + options.contents).clone();
          $(this).append('<svg class="oblurlay-svg"><filter id="oblurlay-svg-filter"><feGaussianBlur stdDeviation="10" /></filter></svg>');
          $cloneWrap.append($clone);
          $("." + options.upper).append($cloneWrap);
          $("." + options.clone).css({
            "-webkit-filter": "blur(40px)",
            filter: "url(#oblurlay-svg-filter)"
          });
          $(".oblurlay-svg").css({
            position: "absolute",
            top: "0"
          });
          $(window).on("scroll", function() {
            methods.scrollY.apply(_this);
          });
        }
      });
    },
    scrollY: function() {
      var $this = $(this);
      options = $this.data(namespace).options;
      translation = "translate3d(0," + (-$(window).scrollTop() + "px") + ",0)";
      $("." + options.clone).css({
        "-webkit-transform": translation,
        "-moz-transform": translation,
        transform: translation
      });
    },
    destroy: function() {
      return this.each(function() {
        var $this = $(this);
        $(window).unbind("." + namespace);
        $this.removeData(namespace);
      });
    }
  };
  $.fn.oblurlay = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === "object" || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error("Method " + method + " does not exist on jQuery." + namespace);
    }
  };
})(jQuery);