define(function(require, exports, module) {

	var $ = jQuery = require('jquery');
	var Backbone = require('backbone');
	var _ = require('underscore');
	
	
	var userlistsingleviewTemplate = require('baseurl/website/templates/webmanagement/user/userlistsingle.tpl');	

	window.UserListSingleView = Backbone.View.extend({

	    tagName: "tr",		
	   /*  className: "userspan", */
	
		
	    initialize: function () {
	        this.render();
	    },
	
	    render: function () {
/* 			var template = _.template( $("#userlistsingleview_template").html(), this.model.toJSON() );  */

			var template = _.template( userlistsingleviewTemplate, this.model.toJSON() );
	        $(this.el).html(template);
	        
	        return this;
	    }	
	});

})