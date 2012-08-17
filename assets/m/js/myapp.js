jQuery('#gotop').tap(function(){
    $.mobile.silentScroll(10);
});

jQuery("div[data-role*='page']").live('pagehide', function(event, ui) {
    if (jQuery(this).children("div[data-role*='content']").is(".command-no-cache"))
        jQuery(this).remove();
});
