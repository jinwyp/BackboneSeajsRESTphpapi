define(function(require, exports, module) {

	app.tpl.regview = require('tplurl-website/user/reg.tpl');
	
	
	window.RegView = Backbone.View.extend({

		
		initialize: function () {
			this._modelBinder = new Backbone.ModelBinder();
	        this.render();
	    },
	
	    render: function () {
		   	app.tplpre.regview = Handlebars.compile( app.tpl.regview );
			$(this.el).html(app.tplpre.regview);
			
			Backbone.Validation.bind(this, {
				valid: function(view, attr, selector) {
					var control = view.$('[' + selector + '=' + attr + ']');
					var group = control.parents(".control-group");
					group.removeClass("error");
					group.addClass("success");
					
					if (control.data("error-style") === "tooltip"){
						// CAUTION: calling tooltip("hide") on an uninitialized tooltip
						// causes bootstraps tooltips to crash somehow...
						if (control.data("tooltip"))
							control.tooltip("hide");
					}else if (control.data("error-style") === "inline"){
						group.find(".help-inline.error-message").remove();
					}else{
						group.find(".help-block.error-message").remove();
					}
				},				
				invalid: function(view, attr, error, selector) {
					var control = view.$('[' + selector + '=' + attr + ']');
					var group = control.parents(".control-group");
					group.removeClass("success");
					group.addClass("error");
					
					if (control.data("error-style") === "tooltip"){
						var position = control.data("tooltip-position") || "right";
						control.tooltip({
							placement: position,
							trigger: "manual",
							title: error
						});
					
						control.tooltip("show");
					}
					else if (control.data("error-style") === "inline"){
						if (group.find(".help-inline").length === 0){
							group.find(".controls").append("<span class=\"help-inline error-message\"></span>");
						}
						var target = group.find(".help-inline");
						target.text(error);
					}else {
						if (group.find(".help-block").length === 0) {
							group.find(".controls").append("<p class=\"help-block error-message\"></p>");
						}
						var target = group.find(".help-block");
						target.text(error);
					}
				}
			});
			
/*
			this.model.on('validated:valid', this.valid, this);
			this.model.on('validated:invalid', this.invalid, this);
*/
	
			this._modelBinder.bind(this.model, this.$('#registerform'));

		    return this;
	    },
	    
	    events: {
	        "blur input" : "changeModel",
			"click #regbutton": "regsubmit"
	    },
	    
	    changeModel: function (event) {

/*	        app.temp.change = {};
	        app.temp.change[event.target.name] = event.target.value;
	        this.model.set(app.temp.change);

			var $el = $(event.target);
			this.model.set($el.attr('name'), $el.val());
*/
			
	        console.dir(this.model.toJSON());
	    },
	    
/*
		valid: function(){
			this.$('.alert-error').hide();
			this.$('.alert-success').fadeIn();
		},
		invalid: function(){
			this.$('.alert-success').hide();
			this.$('.alert-error').fadeIn();
		},
		
*/
		regsubmit: function(e){
			e.preventDefault();
			this.$('.alert').hide();
					
			if(this.model.isValid(true)){
				

		        this.model.save(null, {
		            success: function (model, response) {	              
						this.$('.alert-success').fadeIn();
						console.log(model,response);
		            },
		            error: function (model, response) {
		                this.$('.alert-error2').fadeIn();
						
		            }
		        });
			}
			else {
				this.$('.alert-error').fadeIn();
			}
		}	    
	    
	    
	});


})


