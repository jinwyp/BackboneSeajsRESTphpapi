define(function(require) {	
	
	var $ = jQuery = require('jquery');
	var Backbone = require('backbone');
	var _ = require('underscore');
	var Handlebars = require('handlebars');

	window.$ = $;
	window.Backbone = Backbone;
	window._ = _;
	window.Handlebars = Handlebars;

	Backbone.Validation = require('backbonevalidation');
	Backbone.ModelBinder = require('backbonemodelbinder');

	
	require('bootstrap')($);
/*
	require('tbs-affix')($);	
	require('tbs-alert')($);
	require('tbs-button')($);
	require('tbs-carousel')($);
	require('tbs-collapse')($);
	require('tbs-dropdown')($);
	require('tbs-modal')($);
	require('tbs-popover')($);
	require('tbs-scrollspy')($);
	require('tbs-tab')($);
	require('tbs-tooltip')($);
	require('tbs-transition')($);
	require('tbs-typeahead')($);
*/

	
	$(function() {				
		var BBRouter = require('./myapp/webrouter');
        BBRouter.initialize();
		
	});
});


