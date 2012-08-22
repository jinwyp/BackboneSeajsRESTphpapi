
define(function(require) {	
	
	var $ = jQuery = require('jquery');
	var Backbone = require('backbone');
	var _ = require('underscore');
	
	window.$ = $;
	window.Backbone = Backbone;
	window._ = _;

	require('tbs-affix')($);	
	require('tbs-alert')($);
	require('tbs-button')($);
	require('tbs-carousel')($);
	require('tbs-collapse')($);
	require('tbs-dropdown')($);
	require('tbs-modal')($);
/* 	require('tbs-popover')($); */
	require('tbs-scrollspy')($);
	require('tbs-tab')($);
	require('tbs-tooltip')($);
	require('tbs-transition')($);
	require('tbs-typeahead')($);




/*
    $.mobile.changePage.defaults.changeHash = false;	
	
	$('body').bind('pagebeforeshow', function(event) {
	   var currentPage = event.currentTarget;
	   $(currentPage).trigger('create');
	});
	
*/
	
/*
	$(document).bind("mobileinit", function () {
		console.log(123);
	    $.mobile.ajaxEnabled = false;
	    $.mobile.linkBindingEnabled = false;
	    $.mobile.hashListeningEnabled = false;
	    $.mobile.pushStateEnabled = false;
	
	    // Remove page from DOM when it's being replaced
	    $('div[data-role="page"]').live('pagehide', function (event, ui) {
	        $(event.currentTarget).remove();
	    });
	});
*/
	
	$(function() {				
		var BBRouter = require('./myapp/bbrouter');
        BBRouter.initialize();
		
/*
		require('jqm');
	    $.extend($.mobile, {
	
	        // Don't allow jQM to handle link clicks and form submissions through Ajax
	        ajaxEnabled: false,
	
	        // Prevent jQuery Mobile from handling hash changes so we can handle them in Backbone
	        hashListeningEnabled: false,
	
	        // Don't use history.replaceState at this time for browser compatibility reasons.
	        pushStateEnabled: false,
	
	        // Prevent all anchor click handling including the addition of active
	        // button state and alternate link bluring. This is we can allow Backbone
	        // to handle these requests.
	        linkBindingEnabled:false
	    });
*/

		
	});
	
	

});


