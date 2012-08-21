					<div class="rightmenubar hero-unit">
						<div class="span11 ">
							<H3>
								<a href="#admin/user/list">用户管理</a>
							</H3>
						</div>
						<div class="span1 ">
								<button href="#admin/user/add" class="btn btn-primary ">新增</button>
						</div>
					</div>
					
					<div class="rightinputbox hero-unit">
						<div class="row-fluid">
							<div class="span6 inputbox">
								<label>User ID:</label>
								<%= id %>
							</div>
						</div>
						<div class="row-fluid">
							<div class="span6 inputbox">
								<label>用户名:</label>
								<input type="text" placeholder="请填入用户名" name="username" id="username" value="<%= username %>"/>
							</div>
						</div>
						<div class="row-fluid">
							<div class="span6 inputbox">
								<label>E-mail:</label>
								<input type="text" placeholder="请填入邮箱地址" name="email" id="email" value="<%= email %>" />
							</div>
						</div>
						<div class="row-fluid">
							<div class="span6 inputbox">
								<label>密码:</label>
								<input type="text" placeholder="请填入密码" name="password" id="password" value="<%= password %>"/>
							</div>
						</div>
						<div class="row-fluid">
							<div class="span6 inputbox">
								<label>手机:</label>
								<input type="text" placeholder="请填入手机" name="mobile" id="mobile" value="<%= mobile %>"/>
							</div>
						</div>
						<div class="row-fluid">
							<div class="span6 inputbox">
								<label>姓名:</label>
								<input type="text" placeholder="请填入姓名" name="firstname" id="firstname" value="<%= lastname %><%= firstname %>"/>
							</div>
						</div>	    
		    
		  

						<div class="row-fluid">
							<div class="span2 inputbox">
								<button id="modify_button" class="btn btn-large btn-primary searchbutton">保存修改</button>
							</div>
							<div class="span2 inputbox">
								<button id="del_button" class="btn btn-large btn-primary searchbutton">删除</button>
							</div>


						</div>
					</div>
					

					



