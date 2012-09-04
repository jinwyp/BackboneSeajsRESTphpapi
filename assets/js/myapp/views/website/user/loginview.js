define(function(require, exports, module) {



	var loginviewTemplate = require('baseurl/website/templates-website/user/login.tpl');
	
	window.LoginView = Backbone.View.extend({
		
		initialize: function () {
	        this.render();
	    },
	
	    render: function () {
   
			app.tpl.loginview = Handlebars.compile( loginviewTemplate );
			
			$(this.el).html(app.tpl.loginview);
			
	        return this;
	    }
	});


})


