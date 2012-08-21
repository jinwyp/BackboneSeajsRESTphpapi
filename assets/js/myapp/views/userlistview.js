define(function(require, exports, module) {

	var $ = jQuery = require('jquery');
	var Backbone = require('backbone');
	var _ = require('underscore');

	require('./userlistsingleview');
	
			
	
	window.UserListView = Backbone.View.extend({
		initialize: function () {
	        this.render();
	    },
	
	    render: function () {
	        var usermodels = this.model.models;
	        var len = usermodels.length;
	
	        $(this.el).html('<ul class="userlistred"></ul>');
	
	        for (var i = 0; i < len; i++) {
	            $(this.el).append(new UserListSingleView({model: usermodels[i]}).render().el);
	        }

	        return this;
	    }
	});


})


