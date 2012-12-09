
define(function(require, exports, module) {

	require('jquerycookie');

	window.UserSession = Backbone.Model.extend({
		urlRoot: "/index.php/api/restful_usersession/user/id",

	    defaults: {
	        access_token: null,
	        user_id: null,
	        // user_name:null,
	        // user_email: null,
	        // user_password: null,
	        login_state:0
	    },

	    validation: {
		    user_name: [{
		        required: true,
				msg: '请填写用户名'
		    },{
		    	rangeLength: [6, 16],
		    	msg: '用户名长度为6-16个字符或数字'
		    }],	
			
		    user_password: [{
		        required: true,
				msg: "请填入密码"
		    },{
		    	rangeLength: [6, 20],
		    	msg: '密码长度为6-20个字符或数字'
		    }]
	    },			

	    initialize: function () {
	    	return this.loadsession();
	    },

	    savesession: function(auth_hash){
	    	
	    	$.cookie('access_token', auth_hash.access_token, { expires: 7 });
	    	$.cookie('user_id', auth_hash.user_id, { expires: 7 });
	    	$.cookie('user_email', auth_hash.user_email, { expires: 7 });
	    	// $.cookie('user_password', auth_hash.user_password, { expires: 7 });
	    	
	    	return this;
	    },

	    delsession: function(){
	    	
	    	$.removeCookie('access_token');
	    	$.removeCookie('user_id');
	    	$.removeCookie('user_email');
	    	// $.removeCookie('user_password');
	    	app.model.session.set({login_state: 0} );

	    	//退出登陆后页面 修改右上登陆状态输入框
	    	$("#logined").addClass("loginhidden");
    		$("#loginnot").removeClass("loginhidden");
			
	    	return this;
	    },

	    loadsession: function(){
	    	if($.cookie('access_token')){
		        this.set({
		        	access_token: $.cookie('access_token'),
		        	user_id: $.cookie('user_id'),
		        	user_email: $.cookie('user_email'),
		        	// user_password: $.cookie('access_token')
		        });
	    	}

	        return this;
	    },

	    authenticate: function(){
	    	if (Boolean(this.get("access_token"))) {
	    		// 验证access_token 是否过期 // Previous session found, fetching session vars

	        	this.save(null ,{
		            success: function (model, response) {
		            	if(response.status === 1){
							console.log(response.message);
							app.model.session.set({login_state: 1} );
							app.model.session.savesession(response);

							//进入登陆后页面 修改右上登陆状态输入框
				    		$("#loginnot").addClass("loginhidden");
							$("#logined").removeClass("loginhidden");
		            	}else{
							console.log(response.message);

		            	}
        		 
		            },
		            error: function (model, response) {
		                console.log('fetching prev session auth error');
						app.model.session.set({login_state: 0} );
						
		            }
		        });

	    	}else{
	    		// No authToken found
	    		console.log('No authToken found');
	    		app.model.session.set({login_state: 0} );
	    	}
	    	console.log (app.model.session.get("login_state") );
	    	return this.get("login_state");
	    }
	    	
	});	
	
})

