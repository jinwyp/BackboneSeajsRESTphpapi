
define(function(require, exports, module) {

	require('jquerycookie');

	window.UserSession = Backbone.Model.extend({
		urlRoot: "/index.php/api/restful_session/",

	    defaults: {
	        access_token: null,
	        user_id: null,
	        user_email: null,
	        user_password: null,
	        login_state:0
	    },		

	    initialize: function () {
	    	return this.loadsession();
	    },

	    savesession: function(auth_hash){
	    	
	    	$.cookie('access_token', auth_hash.access_token);
	    	$.cookie('user_id', auth_hash.id);
	    	$.cookie('user_email', auth_hash.user_email);
	    	$.cookie('user_password', auth_hash.user_password);
	    	
	    	return $.cookie('access_token', auth_hash.access_token);

	    },

	    loadsession: function(){
	        this.set({
	        	access_token: $.cookie('access_token'),
	        	user_id: $.cookie('user_id'),
	        	user_email: $.cookie('access_token'),
	        	user_password: $.cookie('access_token')

	        });
	        return this;
	    },

	    authenticate: function(){
	    	if (Boolean(this.get("access_token"))) {
		    	this.set({ login_state: 1 });

	    	}else{
	    		this.set({ login_state: 0 });
	    	}

	    	return this.get("login_state");
	    }
	    	
	});	
	
})

