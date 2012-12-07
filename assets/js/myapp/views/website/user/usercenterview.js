define(function(require, exports, module) {

	var usercenteriewTemplate = require('tplurl-website/user/usercenter.tpl');
	
	window.UserCenterView = Backbone.View.extend({
		
		initialize: function () {
	        this.render();
	    },
	
	    render: function () {
   
			app.tpl.usercenter = Handlebars.compile( usercenteriewTemplate );
			
			$(this.el).html(app.tpl.usercenter);
			
	        return this;
	    }
	});


})


