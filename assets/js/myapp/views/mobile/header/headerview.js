define(function(require, exports, module) {

	var $ = jQuery = require('jquery');
	var Backbone = require('backbone');
	var _ = require('underscore');

	var headerTemplate = require('http://localhost:8080/assets/m/templates/web/header/header.tpl');	
			
	
	window.HeaderView = Backbone.View.extend({
		
		id: 'header',
		attributes:{'data-role': 'header', 'data-theme':'a' },
	
		initialize: function () {
	        this.render();
	    },
	
	    render: function () {

			console.log(this.el);
			
			var template = _.template( headerTemplate, this.model.toJSON() );
			
			$(this.el).html(template);
	        return this;
	    }
	});


})


