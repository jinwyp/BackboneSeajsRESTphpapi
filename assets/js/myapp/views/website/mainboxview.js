define(function(require, exports, module) {

	app.tpl.mainboxview = require('tplurl-website/mainbox.tpl');
	
	window.MainboxView = Backbone.View.extend({
		
		initialize: function () {
	        this.render();
	    },
	    
	    	
	    render: function () {
   
			app.tplpre.mainboxview = Handlebars.compile( app.tpl.mainboxview );
			
			$(this.el).html(app.tplpre.mainboxview);
			
	        return this;
	    }
	});
})