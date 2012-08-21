define(function(require, exports, module) {

	var $ = jQuery = require('jquery');
	var Backbone = require('backbone');
	var _ = require('underscore');

	var headerviewTemplate = require('baseurl/website/templates/webmanagement/header.tpl');
	
	window.HeaderView = Backbone.View.extend({
		
		initialize: function () {
	        this.render();
	    },
	
	    render: function () {
   
			var template = _.template( headerviewTemplate );
			
			$(this.el).html(template);
			
	        return this;
	    }
	});


})


