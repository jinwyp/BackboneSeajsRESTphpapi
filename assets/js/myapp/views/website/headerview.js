define(function(require, exports, module) {



	var headerviewTemplate = require('template-website/header.tpl');
	
	window.HeaderView = Backbone.View.extend({
		
		initialize: function () {
	        this.render();
	    },
	
	    render: function () {
   
			app.tpl.headerview = Handlebars.compile( headerviewTemplate );
			
			$(this.el).html(app.tpl.headerview);
			
	        return this;
	    }
	});


})


