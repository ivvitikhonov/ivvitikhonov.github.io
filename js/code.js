var JsCode = JsCode || {};

JsCode = (function () {
  var that = {};

  that.init = function () {
    $(document).ready(function () {
      that.initScrollButton();
      $("#certs .sub-title").click(that.selectCertsMode);
    });
  }

  that.initScrollButton = function(){
    var btn = $('#btn_up');

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
    });
  }

  that.selectCertsMode = function () {
    var $currentLink = $(this);

    var targetId = $currentLink.data("source");
    var $targetBlock = $("#certs [data-target='" + targetId + "']");

    var $blocks = $("#certs [data-target]");
    $blocks.addClass("hidden");

    $("#certs [data-source]").css("color", "#ffa547");
    $currentLink.css("color", "#181e52");

    $targetBlock.removeClass("hidden");
  }

  return {
    Init: that.init
  };
})();

JsCode.Init();