define(function(require, exports, module) {

	app.tpl.indexview = require('tplurl-website/index.tpl');
	
	window.IndexView = Backbone.View.extend({
		
		initialize: function () {
	        this.render();
	    },
	    
	    	
	    render: function () {
   
			app.tplpre.indexview = Handlebars.compile( app.tpl.indexview );
			
			$(this.el).html(app.tplpre.indexview);
			
	        return this;
	    }
	});
})