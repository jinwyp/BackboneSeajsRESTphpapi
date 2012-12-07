define(function(require, exports, module) {


		
	window.UserCollection = Backbone.Collection.extend({
	    model: UserModel,			
	    url: "/index.php/api/restful_user/users"			
	});
	
})