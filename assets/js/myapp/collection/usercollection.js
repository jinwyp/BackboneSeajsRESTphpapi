define(function(require, exports, module) {


		
	window.UserCollection = Backbone.Collection.extend({
	    model: UserRegModel,			
	    url: "/index.php/api/restful_user/users"			
	});
	
})