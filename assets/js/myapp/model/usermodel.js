define(function(require, exports, module) {

	window.UserModel = Backbone.Model.extend({
		urlRoot: "/index.php/api/restful_user/user/id",
	
	    defaults: {
	        id: null,
	        username: "",
	        password: "",
	        password2:"",
	        email: "",
	        mobile: "",
	        firstname: "",
	        lastname: "",
	        datecreated: ""
	    },		
	    
	    validation: {
		    username: {
		        required: true,
				msg: "11"
		    },
		    password: {
		        required: true,
				msg: "22"
		    },
			email: [{
				required: true,
				msg: 'Please provide your email'
			},{
				pattern: 'email',
				msg: 'Email provided is not correct'
			}]
		    
			
	    }	
	});	
	
})

