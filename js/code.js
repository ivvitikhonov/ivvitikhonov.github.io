var JsCode = JsCode || {};

JsCode = (function(){
    var that = {};

    that.init = function(){
        $(document).ready(function(){
            var btn = $('#btn_up');

            $(window).scroll(function() {
              if ($(window).scrollTop() > 300) {
                btn.addClass('show');
              } else {
                btn.removeClass('show');
              }
            });
            
            btn.on('click', function(e) {
              e.preventDefault();
              $('html, body').animate({scrollTop:0}, '300');
            });
        });
    }

    return {
        Init : that.init
    };
})();

JsCode.Init();