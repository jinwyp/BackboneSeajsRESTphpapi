define(function(require, exports, module) {

	window.UserRegModel = Backbone.Model.extend({
		urlRoot: "/index.php/api/restful_userreg/user/id",
	
	    defaults: {
	        id: null
	        // username: "",
	        // password: "",
	        // password2:"",
	        // email: "",
	        // mobile: "",
	        // firstname: "",
	        // lastname: "",
	        // datecreated: ""
	    },	

	    
	    validation: {
		    username: [{
		        required: true,
				msg: '请填写用户名'
		    },{
		    	rangeLength: [6, 15],
		    	msg: '用户名长度为6-16个字符或数字'
		    }],	
		    
			email: [{
				required: true,
				msg: '请填写您常用邮箱'
			},{
				pattern: 'email',
				msg: '邮箱格式不正确，请重新填写'
			}],
			
		    password: [{
		        required: true,
				msg: "请填入密码"
		    },{
		    	rangeLength: [6, 20],
		    	msg: '密码长度为6-20个字符或数字'
		    }],
		    
		    password2: [{
		        required: true,
				msg: "请再次输入密码确认"
		    },{
			    equalTo: 'password',
				msg:'两次输入的密码不一致'
			}]
		    

	    }	
	});	
	
})

