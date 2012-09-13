
					
					<div class="rightsearchoptionbox hero-unit">
						<div class="row-fluid">
							<div class="span2">
								<div class="btn-group">
									<button data-toggle="dropdown" class="btn dropdown-toggle">ALL 所有
									<span class="caret"></span></button>
									<ul class="dropdown-menu">
										<li>
											<a href="#">网站注册</a>
										</li>
										<li>
											<a href="#">手机注册</a>
										</li>


										<li class="divider"></li>
										<li>
											<a href="#">这里放链接</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="span4 inputbox">
								<label>E-mail:</label>
								<input type="text" placeholder="请填入邮箱地址" />
							</div>
							<div class="span5 inputbox">
								<label>Mobile手机:</label>
								<input type="text" placeholder="请填入手机号" />
							</div>
						</div>
						<div class="row-fluid">
							<div class="span4 inputbox">
								<label>开始日期:</label>
								<input type="text" placeholder="请填入开始日期" />
							</div>
							<div class="span5 inputbox">
								<label>结束日期:</label>
								<input type="text" placeholder="请填入结束日期" />
							</div>
						</div>
						<div class="row-fluid">
							<div class="span4 inputbox">
								<button href="#" class="btn btn-large btn-primary searchbutton">查询</button>
							</div>
							<div class="span4 inputbox">
								<button href="#" class="btn btn-large btn-primary searchbutton">导出Excel</button>
							</div>

						</div>
					</div>
					
					<div class="row-fluid" >
						<table class="table table-bordered" id="userlistbox"  >
							<thead>
								<tr>									
									<th>会员号</th>
									<th>用户名</th>
									<th>邮箱</th>									
									<th>手机</th>
									<th>姓名</th>
									<th>注册时间</th>
									<th>管理</th>
								</tr>
							</thead>

							<tbody id="userlistview" >
								{{#each userlist}}  
								<tr>
									<td><a href="#user/{{ id }}" >{{ id }} </a></td>
									<td><a href="#user/{{ id }}" >{{ username }}</a></td>
									<td>{{ email }}</td>
									<td>{{ mobile }}</td>
									<td>{{ lastname }}{{ firstname }}</td>
									<td>{{ datecreated }}</td>
									<td>
										是 <a href="" id="" onclick="return confirm('确定吗?');">取消资格</a>
									</td>
								</tr>
								{{/each}}
							</tbody>
						</table>
						
					</div><!--/row-->