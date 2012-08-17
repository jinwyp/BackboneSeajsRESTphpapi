define(function(require, exports, module) {

	var $ = jQuery = require('jquery');
	var Backbone = require('backbone');
	var _ = require('underscore');	
	
	window.UserModel = Backbone.Model.extend({
		urlRoot: "index.php/api/restful_user/user/id",
	
	    defaults: {
	        id: null,
	        username: "",
	        password: "",
	        email: "",
	        datecreated: ""
	    }			
	});	
	
})