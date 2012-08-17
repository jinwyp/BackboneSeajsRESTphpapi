define(function(require, exports, module) {

	var $ = jQuery = require('jquery');
	var Backbone = require('backbone');
	var _ = require('underscore');

	var userloginTemplate = require('baseurl/templates/web/user/userlogin.tpl');	
		
			
	
	window.UserLoginView = Backbone.View.extend({
	
		id: 'login',
		attributes:{'data-role': 'page', 'data-title':'登录' },
				
		initialize: function () {
	        this.render();
	    },
	
	    render: function () {
	    	
	        var template = _.template( userloginTemplate, this.model.toJSON() );
			
			$(this.el).html(template);


	        return this;
	    }
	});


})


