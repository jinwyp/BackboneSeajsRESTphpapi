define(function(require, exports, module) {

	var $ = jQuery = require('jquery');
	var Backbone = require('backbone');
	var _ = require('underscore');
		
	window.UserCollection = Backbone.Collection.extend({
	    model: UserModel,			
	    url: "index.php/api/restful_user/users"			
	});
	
	
})