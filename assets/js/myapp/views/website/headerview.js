define(function(require, exports, module) {

	app.tpl.headerview = require('tplurl-website/header.tpl');
	
	window.HeaderView = Backbone.View.extend({
		
		initialize: function () {
	        this.render();
	    },
	    
	    	
	    render: function () {
   
			app.tplpre.headerview = Handlebars.compile( app.tpl.headerview );
			
			$(this.el).html(app.tplpre.headerview);
			
	        return this;
	    }

	});


})


