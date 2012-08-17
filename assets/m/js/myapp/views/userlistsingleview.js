define(function(require, exports, module) {

	var $ = jQuery = require('jquery');
	var Backbone = require('backbone');
	var _ = require('underscore');
	
	
	var userlistsingleviewTemplate = require('http://localhost:8080/assets/m/templates/web/userlistsingleview.tpl');	

	window.UserListSingleView = Backbone.View.extend({

	    tagName: "li",		
	    className: "userspan",
	
		
		
	    initialize: function () {
	        this.model.bind("change", this.render, this);
	        this.model.bind("destroy", this.close, this);
	    },
	
	    render: function () {
/* 			var template = _.template( $("#userlistsingleview_template").html(), this.model.toJSON() );  */

			var template = _.template( userlistsingleviewTemplate, this.model.toJSON() );
	        $(this.el).html(template);
	        return this;
	    }
	
	});

})


