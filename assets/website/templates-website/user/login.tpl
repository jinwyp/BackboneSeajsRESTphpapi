<div class="row-fluid">
	<div class="span8 offset2 regtitle">

		<h2>登陆个税计算器后 享受更多高级功能</h2>
		<p>如果您还不知道中国的个税有多重，快试试吧。你本来可以拿双倍工资，但一半都被国家拿走了</p>
		<hr>

		<div class="span10  form-horizontal" id="loginform" >

			<div class="control-group">
				<label for="username" class="control-label">用户名：</label>
				<div class="controls">
					<input type="text" name="user_name" id="username" data-error-style="inline" placeholder="请输入用户名">
				</div>
			</div>

			<div class="control-group">
				<label for="password" class="control-label">密码：</label>
				<div class="controls">
					<input type="password" name="user_password" id="password" data-error-style="inline" placeholder="请输入密码">
				</div>
			</div>

			<div class="control-group">
				<label  class="control-label"></label>
				<div class="controls">
					<button  id="loginbutton" class="btn btn-primary btn-large" >登陆</button>
				</div>
			</div>

				<div style="display:none" class="alert alert-error offset1">
					<strong>哎呀!</strong> 您还没有填写完整！
				</div>
				<div style="display:none" class="alert alert-error2 offset1">
					<strong>糟糕!</strong> 登陆失败，服务器打瞌睡了！
				</div>

				<div style="display:none" class="alert alert-success offset1">
					 您登陆成功!
				</div>
		</div>   

	</div><!--/span8-->	
</div><!--/row-->