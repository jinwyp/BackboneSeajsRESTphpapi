	<div class="row-fluid">
		<div class="span8 offset2 regtitle">

			<h2>欢迎注册个税计算器</h2>
			<p>如果您还不知道中国的个税有多重，快试试吧。你本来可以拿双倍工资，但一半都被国家拿走了</p>
			<hr>
			
			<div class="span12 form-horizontal" id="registerform" >

				<div class="control-group">
					<label for="username" class="control-label">用户名：</label>
					<div class="controls">
						<input type="text" name="username" id="username" data-error-style="inline" placeholder="请输入用户名">
					</div>
				</div>

				<div class="control-group">
					<label for="email" class="control-label">邮箱：</label>
					<div class="controls">
						<input type="text"  name="email" id="email" data-error-style="inline" placeholder="请输入邮箱">
					</div>
				</div>

				<div class="control-group">
					<label for="password" class="control-label">密码：</label>
					<div class="controls">
						<input type="password"  name="password" id="password" data-error-style="inline" placeholder="请输入密码">
					</div>
				</div>

				<div class="control-group">
					<label for="password2" class="control-label">请再次输入密码：</label>
					<div class="controls">
						<input type="password" name="password2" id="password2" data-error-style="inline" placeholder="请输入确认密码">
					</div>
				</div>

				<div class="control-group">
					<label  class="control-label"></label>
					<div class="controls">
						<button id="regbutton" class="btn btn-primary btn-large" >立即注册</button>
					</div>
				</div>

				<div style="display:none" class="alert alert-error offset1">
					<strong>哎呀!</strong> 您还没有填写完整！
				</div>
				<div style="display:none" class="alert alert-error2 offset1">
					<strong>糟糕!</strong> 注册失败，服务器打瞌睡了！
				</div>

				<div style="display:none" class="alert alert-success offset1">
					<strong>恭喜!</strong> 您注册成功!
				</div>
			</div><!--/span10-->	
		</div><!--/span8-->	
	</div><!--/row-->