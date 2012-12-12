<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Model_User extends CI_Model {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	 
	function __construct(){
		parent::__construct();
		date_default_timezone_set('Asia/Shanghai');

	}
	 

	public function checkUserExist($username, $password, $table = 'ci_user'){		
		
		$this->db->where('username', $username);
		$this->db->where('password', sha1($password));
		$this->db->limit(1);
		$query = $this->db->get($table);
		
/* 		echo $query->num_rows(); */
		if($query->num_rows() > 0 ){
			return $query->row();
		}
		return FALSE;
	}
	
	public function regCheckUserExist($username, $email, $password, $table = 'ci_user'){
		
		
		$this->db->where('username', $username);
		$this->db->where('email', $email);
		$this->db->where('password', sha1($password));
		$this->db->limit(1);
		$query = $this->db->get($table);
		
/* 		echo $query->num_rows(); */
		if($query->num_rows() > 0 ){
			return $query->row();
		}
		return FALSE;
	}
	
	
	public function addNewUser($table = 'ci_user') {
		$data['username'] = $this->input->post('username');
		
		$data['email'] = $this->input->post('email');
		$data['password'] = sha1($this->input->post('password'));
		
	
		return $this->db->insert($table, $data);
				
	}
	







	
	/**********    RESTFul API     **************/
	
	public function getUser($userid, $table = 'ci_user'){		
		
		$this->db->where('id', $userid);
		$this->db->where('delstatus', 0);

		$this->db->limit(1);
		$query = $this->db->get($table);
		
/* 		echo $query->num_rows(); */
		if($query->num_rows() > 0 ){
			return $query->row();
		}
		return FALSE;
	}	


	public function getUserList($pageno, $table = 'ci_user'){		
		$temppage = ($pageno - 1) * 10;
		/* $this->db->limit(10, $temppage); */
		
		$this->db->where('delstatus', 0);
		$query = $this->db->get($table);
		

		if($query->num_rows() > 0 ){
			return $query->result();
		}
		return FALSE;
	}	
	
	
	
/* post 用于添加 */
	public function postUser($data, $table = 'ci_user') {	
		$data['password'] = sha1($data['password']);

		return $this->db->insert($table, $data);				
	}
	
	
	
/*  put 用于修改 */
	public function putUser($userid, $data, $table = 'ci_user') {	
		$data['password'] = sha1($data['password']);
		$this->db->where('id', $userid);			
		return $this->db->update($table, $data); 		
	}
	
	
	
/* delete 用于删除 */
	public function delUser($userid, $table = 'ci_user') {	
				
		$data['delstatus'] = 1;		
		$this->db->where('id', $userid);			
		return $this->db->update($table, $data); 			
	}


/* 检查用户是否登陆 */	
	public function checkUserLogin($username, $password, $data, $table = 'ci_user'){		
		
		$this->db->where('username', $username);
		// $this->db->where('password', sha1($password));
		$this->db->where('delstatus', 0);
		$this->db->limit(1);
		$query = $this->db->get($table);
		
/* 		echo $query->num_rows(); */
		if($query->num_rows() > 0 ){

			if($query->row()->password === sha1($password)){

				/* 用户登陆成功记录session */	
				$sessiondata['userid'] = $query->row()->id;
				$sessiondata['lastguid'] = $this->GUID();		
				$this->session->set_userdata($sessiondata);

				/* 用户登陆成功储存access_token */	

				$this->db->where('userid', $query->row()->id);
				$this->db->limit(1);
				$table_accesstoken = 'ci_useraccesstoken';
				$query_accesstoken = $this->db->get($table_accesstoken);

				if($query_accesstoken->num_rows() > 0){
					// 用户如果有accesstoken 就更新

					$data2['accesstoken'] = $this->session->userdata('session_id');
					$data2['ip_address'] = $this->session->userdata('ip_address');
					$data2['user_agent'] = $this->session->userdata('user_agent');
					$data2['last_activity'] = $this->session->userdata('last_activity');
					$data2['lastdate'] = date('Y-m-d H:i:s');

					$this->db->where('userid', $query->row()->id);			
					$this->db->update($table_accesstoken, $data2); 	

				}else{
					//用户没有accesstoken就创建新的

					$data2['accesstoken'] = $this->session->userdata('session_id');
					$data2['userid'] = $query->row()->id;
					$data2['ip_address'] = $this->session->userdata('ip_address');
					$data2['user_agent'] = $this->session->userdata('user_agent');
					$data2['last_activity'] = $this->session->userdata('last_activity');
					$data2['lastdate'] = date('Y-m-d H:i:s');
					$data2['lastguid'] = $this->GUID();		
					$this->db->insert($table_accesstoken, $data2);
				}

				$this->db->where('userid', $query->row()->id);
				$this->db->where('delstatus', 0);
				$this->db->join($table_accesstoken, $table.'.id = '.$table_accesstoken.'.userid');
				$this->db->limit(1);
				$query3= $this->db->get($table);

				return $query3->row();
			}else{
				//密码不正确
			}
		}else{
			//没有该用户
		}
		return FALSE;
	}	


/* 检查用户是否Token */	
	public function checkUserToken($userid, $accesstoken, $data, $table = 'ci_useraccesstoken'){		
		
		$this->db->where('userid', $userid);
		$this->db->where('accesstoken', $accesstoken);
		
		$this->db->limit(1);
		$query = $this->db->get($table);
		
/* 		echo $query->num_rows(); */
		if($query->num_rows() > 0 ){
			if($query->row()->lastdate === $data['lastdate']){
				// 用户如果有accesstoken 就更新

				$data2['accesstoken'] = $this->session->userdata('session_id');
				$data2['ip_address'] = $this->session->userdata('ip_address');
				$data2['user_agent'] = $this->session->userdata('user_agent');
				$data2['last_activity'] = $this->session->userdata('last_activity');
				$data2['lastdate'] = date('Y-m-d H:i:s');

				$this->db->where('userid', $query->row()->userid);			
				$this->db->update($table, $data2); 	

				$table_user = 'ci_user';
				
				$this->db->join($table_user, $table.'.userid = '.$table_user.'.id');
				$this->db->limit(1);
				$query3= $this->db->get($table);
				
				return $query3->row();
			}else{
				//上次登陆时间不对
			}

		}
		return FALSE;
	}	

	public function _get_client_ip() {
        $clientip = '';
        if(getenv('HTTP_CLIENT_IP') && strcasecmp(getenv('HTTP_CLIENT_IP'), 'unknown')) {
                $clientip = getenv('HTTP_CLIENT_IP');
        } elseif(getenv('HTTP_X_FORWARDED_FOR') && strcasecmp(getenv('HTTP_X_FORWARDED_FOR'), 'unknown')) {
                $clientip = getenv('HTTP_X_FORWARDED_FOR');
        } elseif(getenv('REMOTE_ADDR') && strcasecmp(getenv('REMOTE_ADDR'), 'unknown')) {
                $clientip = getenv('REMOTE_ADDR');
        } elseif(isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], 'unknown')) {
                $clientip = $_SERVER['REMOTE_ADDR'];
        }

        preg_match("/[\d\.]{7,15}/", $clientip, $clientipmatches);
        $clientip = $clientipmatches[0] ? $clientipmatches[0] : 'unknown';
        return $clientip;
    }


	public function GUID(){

	    if (function_exists('com_create_guid') === true)
	    {
	        return trim(com_create_guid(), '{}');
	    }else{
        mt_srand((double)microtime()*10000);//optional for php 4.2.0 and up.
        $charid = strtoupper(md5(uniqid(rand(), true)));
        $hyphen = chr(45);// "-"
        $uuid = chr(123)// "{"
                .substr($charid, 0, 8).$hyphen
                .substr($charid, 8, 4).$hyphen
                .substr($charid,12, 4).$hyphen
                .substr($charid,16, 4).$hyphen
                .substr($charid,20,12)
                .chr(125);// "}"
        return $uuid;
	    }
    }
	
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */