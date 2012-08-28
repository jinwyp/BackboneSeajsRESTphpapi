define(function(require, exports, module) {


	
	var userviewTemplate = require('template-webmanagement/user/userview.tpl');

	window.UserView = Backbone.View.extend({		
	
		initialize: function(){
			$(this.el).empty();
			this.render();
		},

		render: function(){
/* 			var template = _.template( $("#userview_template").html(), this.model.toJSON() );   */
/* 			var template = _.template( userviewTemplate, this.model.toJSON() ); */
			var template = Handlebars.compile( userviewTemplate );
			$(this.el).html(template( this.model.toJSON()));
	        return this;
		},			
		
		
		events: {
	        "change .rightinputbox.hero-unit" : "change",
	        "click #modify_button" : "SaveUser",
	        "click #del_button" : "delUser"	        
	    },	
	    
        change: function (event) {
	        console.log(event.target);
	        // Apply the change to the model
	        var target = event.target;	 
			app.temp.change = {};
	        app.temp.change[target.name] = target.value; 
	        
	        console.log(app.temp.change);
	        this.model.set(app.temp.change);	
	    },

	    SaveUser: function () {
	        var self = this;
/* 	        console.log(this.model); */
	        this.model.save(null, {
	            success: function () {	              
	                alert('用户信息保存成功了啊啊');
/* 	                self.render(); */
	            },
	            error: function () {
	                alert('用户信息保存失败');
	            }
	        });
	    },
	
	    delUser: function () {
	        this.model.destroy({
	            success: function () {
	                alert('User deleted successfully');
	                window.history.back();
	            }
	        });
	        
	    },
	    
	    
	});


})


