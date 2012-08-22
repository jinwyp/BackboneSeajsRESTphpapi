define(function(require, exports, module) {


	
	window.UserModel = Backbone.Model.extend({
		urlRoot: "index.php/api/restful_user/user/id",
	
	    defaults: {
	        id: null,
	        username: "",
	        password: "",
	        email: "",
	        mobile: "",
	        firstname: "",
	        lastname: "",
	        datecreated: ""
	    }			
	});	
	
})