
		    <p> <label>User ID:</label>  
		    <label><%= id %></label>  </p>
		    		    
		   <p>  <label>User Name:</label>  
		    <input type="text" name="username" id="username" value="<%= username %>" />  	</p>
		    
		    <p>  <label>Email:</label>  
		    <input type="text" name="email" id="email" value="<%= email %>" />  </p>	
		    
		    <p>  <label>PassWord:</label>  
		    <input type="text" name="password" id="password" value="<%= password %>" />  </p>			    
		    
		    
		    <input type="button" id="modify_button" value="保存" />  
		   
		    <input type="button" id="del_button" value="删除" /> 
		    
		    <a href="#user/add">注册一个新用户</a>
