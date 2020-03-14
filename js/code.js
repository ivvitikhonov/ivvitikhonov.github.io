var JsCode = JsCode || {};

JsCode = (function(){
    var that = {};

    that.init = function(){
        $(document).ready(function(){
            $("#certs .sub-title").click(that.selectCertsMode);           
        });
    }

    that.selectCertsMode = function(){
        var $currentLink = $(this);

        var targetId = $currentLink.data("source");
        var $targetBlock = $("#certs [data-target='" + targetId +"']");

        var $blocks = $("#certs [data-target]");
        $blocks.addClass("hidden");

        $("#certs [data-source]").css("color", "#ffa547");
        $currentLink.css("color", "#181e52");
             
        $targetBlock.removeClass("hidden");
    }

    return {
        Init : that.init
    };
})();

JsCode.Init();