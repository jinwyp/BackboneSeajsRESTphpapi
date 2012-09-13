define(function(require, exports, module) {


		
	window.UserCollection = Backbone.Collection.extend({
	    model: UserModel,			
	    url: "./api/restful_user/users"			
	});
	
})