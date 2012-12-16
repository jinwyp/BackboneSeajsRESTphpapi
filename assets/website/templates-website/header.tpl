		<div class="navbar-inner">

			<div class="container-fluid">
				<a class="brand" href="#">个税计算器 logo</a>

				<div class="nav-collapse collapse">	
					<ul class="nav">
						<li class="active"><a href="#index">首页</a></li>
						<li><a href="#about">关于</a></li>
						<li><a href="#contact">联系我们</a></li>

					</ul>
				</div><!--/.nav-collapse -->

				
				<div class="navbar-text pull-right" id="loginnot">
					<a href="#login" class="navbar-link menubar">登陆</a>
					<a href="#reg" class="navbar-link menubar" >注册</a>
				</div>

				<div class="btn-group pull-right loginhidden" id="logined">
					<a class="btn dropdown-toggle" data-toggle="dropdown" >
						<i class="icon-user"></i> {{user_name}}
						<span class="caret"></span>
					</a>
					<ul class="dropdown-menu">
						<li>
							<a id="usercenterbutton">个人信息</a>
						</li>
						<li class="divider"></li>
						<li>
							<a id="persontaxbutton">常规个税计算</a>
						</li>
						<li>
							<a id="taxfeebutton">地区税率设置</a>
						</li>
						<li>
							<a id="employeebutton">员工设置</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#loginout">退出登录</a>
						</li>
					</ul>
				</div>				

			</div>

		</div>