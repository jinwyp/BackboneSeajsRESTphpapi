
			<div data-role="header" data-theme="a">
				<div class="header">
					<div class="logo">
						<a href="index.html"> <img src="../assets/m/images/logo.png" />
						</a>
					</div>
					<div class="nav">
						<a href="category.html" class="menu"></a>
						<a href="myaccount.html" class="user"></a>
						<a href="shoppingcart.html" class="cart"></a>
					</div>
				</div>
				<div data-role="navbar" data-iconpos="left">
					<ul>
						<li>
							<a href="index.html" data-theme="c" data-icon="home">首页</a>
						</li>
						<li>
							<a href="login.html" data-theme="e" data-icon="grid">登录</a>
						</li>				
					</ul>
				</div>
			</div>
			<div data-role="content">
				<form id="frmLogin" action="">
					<div data-role="fieldcontain">
						<fieldset data-role="controlgroup" id="test">
							<label for="email">邮箱地址</label>
							<input type="text" id="email" name="email" class="required email" placeholder="请填写Email地址" value="" />
						</fieldset>
					</div>
					<div data-role="fieldcontain">
						<fieldset data-role="controlgroup">
							<label for="password">密码</label>
							<input type="password" id="password" name="password" class="required" placeholder="请输入密码" value="" />
						</fieldset>
					</div>
					<input data-theme="b" value="登录" type="submit" />
					
					<div class="ui-grid-a p10">
						<div class="ui-block-a">
							<a href="#forgetpassword" >忘记密码</a>
						</div>
						<div class="ui-block-b">
							<a href="registration.html" >立即注册</a>
						</div>
					</div>
					<ul data-role="listview" data-divider-theme="c" data-inset="true">
						<li data-role="list-divider" role="heading">使用其他合作网站登录</li>
						<li>
							<a href="#page1" >
							<img src="../assets/m/images/16-sinaweibo.png" class="ui-li-icon" />新浪微博登录</a>
						</li>
						<li>
							<a href="#page1"  style="padding-left:60px;">
							<img src="../assets/m/images/alipay.png" class="ui-li-icon" />支付宝登录</a>
						</li>
						<li>
							<a href="#page1" >
							<img src="../assets/m/images/qq.png" class="ui-li-icon" />QQ登录</a>
						</li>
					</ul>
				</form>
				
			</div>
			<div data-role="footer" data-theme="c" class="p10">
				<div class="ui-grid-b" style="padding-bottom:5px;">
					<div class="ui-block-a">
						<a href="login.html" rel="external">登录</a>
					</div>
					<div class="ui-block-b">
						<a href="registration.html" rel="external">注册</a>
					</div>
					<div class="ui-block-c">
						<a href="http://www.muyingzhijia.com" >电脑版</a>
					</div>
				</div>
				<div>
					<span data-role="button" data-icon="arrow-u" data-iconpos="left" id="gotop">回顶部</span>
				</div>
				<div>Copyright 2004 - 2012 muyingzhijia.com All Rights Reserved</div>
			</div>
