
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
	        // csrf_token: null,
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
	    	this.loadsession();

			// Hook into jquery
			// Use withCredentials to send the server cookies
			// The server must allow this through response headers

	    	var _self = this;

			$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
				var metacsrf = $('meta[name=csrf_moneytool]').attr('content');
				
				options.xhrFields = {
						withCredentials: true
					};
					// If we have a csrf token send it through with the next request
				if(typeof _self.get('csrf_token') !== 'undefined') {
					jqXHR.setRequestHeader('X-CSRF-Token', metacsrf);
					console.log(_self.get('csrf_token'));
				}
			});

	    	return this;
	    },

	    savesession: function(auth_hash){
	    	
	    	$.cookie('access_token', auth_hash.access_token, { expires: 3 });
	    	$.cookie('user_id', auth_hash.user_id, { expires: 3 });
	    	// $.cookie('user_email', auth_hash.user_email, { expires: 7 });
	    	// $.cookie('user_password', auth_hash.user_password, { expires: 7 });
	    	$.cookie('user_lastdate', auth_hash.user_lastdate, { expires: 3 });
	    	return this;
	    },

	    delsession: function(){
	    	var _self = this;

	    	$.removeCookie('access_token');
	    	$.removeCookie('user_id');
	    	// $.removeCookie('user_email');
	    	$.removeCookie('user_lastdate');
	    	// $.removeCookie('user_password');
	    	$.removeCookie('csrf_token');
	    	app.model.session.set({login_state: 0} );

	    	//退出登陆后页面 修改右上登陆状态输入框
	    	$("#logined").addClass("loginhidden");
    		$("#loginnot").removeClass("loginhidden");


    		this.destroy({
				success: function (model, response) {
					model.clear()
				
					// Set auth to false to trigger a change:auth event
					// The server also returns a new csrf token so that the user can relogin without refreshing the page
					_self.set({access_token: false, csrf_token: response._csrf});
				}
			}); 
			
	    	return this;
	    },

	    loadsession: function(){
	    	if($.cookie('access_token')){
		        this.set({
		        	access_token: $.cookie('access_token'),
		        	user_id: $.cookie('user_id'),
		        	user_email: $.cookie('user_email'),
		        	
		        	user_lastdate: $.cookie('user_lastdate'),
		        	csrf_token: $.cookie('csrf_cookie_moneytool')
		        });
	    	}

	        return this;
	    },

	    authenticate: function(){
	    	if (Boolean(this.get("access_token"))) {
	    		// 验证access_token 是否过期 // Previous session found, fetching session vars

	        	this.save(null ,{
	        		// async:false,
		            success: function (model, response) {
		            	if(response.status === 1){
							console.log(response.message);

							app.model.session.set({login_state: 1} );
							app.model.session.savesession(response);
							
							app.view.header.render();
							app.view.mainbox = new UserCenterView({ el: $("#mainbox")} );
							//进入登陆后页面 修改右上登陆状态输入框
				    		$("#loginnot").addClass("loginhidden");
							$("#logined").removeClass("loginhidden");

/*					    	$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
						        // Your server goes below
						        options.url = 'http://localhost:8000' + options.url;
						        //options.url = 'http://cross-domain.nodejitsu.com' + options.url;
					        	jqXHR.setRequestHeader("Authorization",  app.model.session.get("access_token"));
					    	});*/

							$.ajaxSetup({
								beforeSend: function(jqXHR, settings){
								    // jqXHR.setRequestHeader("Authorization-",  "Basic ".app.model.session.get("access_token"));
								    jqXHR.setRequestHeader("Authorization-Token",  app.model.session.get("access_token"));
								    console.log(app.model.session.get("access_token"));
								}
							});
		            	}else{
							console.log(response.message);
		            	}
	        		},
		            error: function (model, response) {
		                console.log('fetching prev session auth error');
						app.model.session.set({login_state: 0});
		            }
		        });

	    	}else{
	    		// No authToken found
	    		console.log('No authToken found');
	    		app.model.session.set({login_state: 0} );
	    	}
	    	console.log (app.model.session.get("login_state") );
	    	return this.get("login_state");
	    },

	    loginaction: function(model){
			var _self = model;
					
			if(_self.isValid(true)){

		        _self.save(null, {
		            success: function (model, response) {
		            	if(response.status === 1){
							$('.alert-success').html(response.message);
							$('.alert-success').fadeIn();
							_self.savesession(response);

							app.view.header.render();
							app.view.mainbox = new UserCenterView({ el: $("#mainbox")} );

							//进入登陆后页面 修改右上登陆状态输入框
				    		$("#loginnot").addClass("loginhidden");
							$("#logined").removeClass("loginhidden");
		            	}else{
							$('.alert-error').html(response.message);
							$('.alert-error').fadeIn();

		            	}
        		        
						console.log(model,response);
		            },
		            error: function (model, response) {
		                $('.alert-error2').fadeIn();
						
		            }
		        });
			}
			else {
				$('.alert-error').fadeIn();
			}


	    }
	    	
	});	
	
})

