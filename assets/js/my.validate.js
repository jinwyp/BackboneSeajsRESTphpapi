jQuery("#frmLogin").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 20
        }
    },

    messages: {
        email: {
            required: "请输入Email地址",
            email: "请输入正确的email地址"
        },
        password: {
            required: "请输入密码",
            minlength: jQuery.validator.format("密码不能小于{0}个字符"),
            maxlength: jQuery.validator.format("密码不能最多超过{0}的字符")
        }
    }
});

jQuery("#frmgetpassword").validate({
    errorElement:"span",
    rules: {
        email: {
            required: true,
            email: true
        }
    },

    messages: {
        email: {
            required: "请输入Email地址",
            email: "请输入正确的email地址 / 填写的用户名不存在"
        }
    }

});


jQuery("#frmReg").validate({
    errorElement:"span",
    rules:{
        email:{
            required:true,
            email:true
        },
        password:{
            required:true,
            minlength:6,
            maxlength:20
        },
        confirm_password:{
            required:true,
            minlength:6,
            maxlength:20,
            equalTo:"#password"
        },
        mobile:{
            required:true,
            number:true},
			
        checkbox_agree:{
            required:true
            }
    },

    messages:{
        email:{
            required:"请输入Email地址",
            email:"请输入正确的email地址"
        },
        password:{
            required:"请输入密码",
            minlength:jQuery.validator.format("密码不能小于{0}个字符"),
            maxlength:jQuery.validator.format("密码不能最多超过{0}的字符")
        },
        confirm_password:{
            minlength:jQuery.validator.format("确认密码不能小于{0}个字符"),
            required:"请输入确认密码",
            maxlength:jQuery.validator.format("密码不能最多超过{0}的字符"),
            equalTo:"两次输入密码不一致"
        },
        mobile:{
            required:"请输入手机号",
            number:"请输入有效的手机号码"

        },
        checkbox_agree:{
            required:"您还没有同意母婴之家”注册条款“！"

        },
        year:{
            required:"请您填写宝宝生日或预产期"

        },
        month:{
            required:"请您填写宝宝生日或预产期"

        },
        day:{
             required:"请您填写宝宝生日或预产期"

    }
     },
    groups: {
           username: "year month day"
       },
   errorPlacement: function (error, element) {
           if (element.attr("name") == "year" || element.attr("name") == "month" || element.attr("name") == "day")
                    error.appendTo("div.error");
              else
              error.insertAfter(element);
}

});



var BasicModel = Backbone.Model.extend({
	validation: {
		firstName: {
		required: true,
		msg: 'Please provide your first name'
		},
		lastName: {
		required: true,
		msg: 'Please provide your last name'
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


var BasicView = Backbone.View.extend({
	events: {
		'click #submit': 'submit'
		},
		render: function() {
			$(this.el).html(_.template($('#basic-template').html(), {legend: 'Basic example'}));
			Backbone.Validation.bind(this);
			return this;
		},
		
		submit: function(e){
		e.preventDefault();
			this.$('.alert').hide();
		var data = this.$('form').serializeObject();
		if(this.model.set(data)){
		this.$('.alert-success').fadeIn();
		}
		else {
		this.$('.alert-error').fadeIn();
		}
	}
});


var OnBlurView = Backbone.View.extend({
	events: {
		'click #submit': 'submit',
		'blur input': 'updateModel'
	},
	render: function() {
		$(this.el).html(_.template($('#basic-template').html(), {legend: 'Validation on blur'}));
		Backbone.Validation.bind(this);
		this.model.on('validated:valid', this.valid, this);
		this.model.on('validated:invalid', this.invalid, this);
		return this;
	},
	
	updateModel: function(el){
		var $el = $(el.target);
		this.model.set($el.attr('name'), $el.val());
	},
	valid: function(){
		this.$('.alert').hide();
		this.$('.alert-success').fadeIn();
	},
	invalid: function(){
		this.$('.alert').hide();
		this.$('.alert-error').fadeIn();
	},
	submit: function(e){
		e.preventDefault();
		this.$('.alert').hide();
		if(this.model.isValid(true)){
		this.$('.alert-success').fadeIn();
	}
	else {
		this.$('.alert-error').fadeIn();
	}
	}
});


_.extend(Backbone.Validation.callbacks, {
	valid: function(view, attr, selector){
		var control = view.$('[' + selector + '=' + attr + ']');
		var group = control.parents(".control-group");
		group.removeClass("error");
		if (control.data("error-style") === "tooltip"){
		// CAUTION: calling tooltip("hide") on an uninitialized tooltip
		// causes bootstraps tooltips to crash somehow...
		if (control.data("tooltip"))
			control.tooltip("hide");
		}
		else if (control.data("error-style") === "inline"){
			group.find(".help-inline.error-message").remove();
		}
		else{
			group.find(".help-block.error-message").remove();
		}
	},
	
	invalid: function(view, attr, error, selector) {
	var control = view.$('[' + selector + '=' + attr + ']');
	var group = control.parents(".control-group");
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
	}
	else {
	if (group.find(".help-block").length === 0) {
	group.find(".controls").append("<p class=\"help-block error-message\"></p>");
	}
	var target = group.find(".help-block");
	target.text(error);
	}
	}
});
