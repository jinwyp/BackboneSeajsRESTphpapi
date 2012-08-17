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

	}
	 

	public function checkUserExist($username, $password, $table = 'test_user'){		
		
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
	
	public function regCheckUserExist($username, $email, $password, $table = 'test_user'){
		
		
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
	
	
	public function addNewUser($table = 'test_user') {
		$data['username'] = $this->input->post('username');
		
		$data['email'] = $this->input->post('email');
		$data['password'] = sha1($this->input->post('password'));
		
	
		return $this->db->insert($table, $data);
				
	}
	
	
	/**********    RESTFul API     **************/
	
	public function getUser($userid, $table = 'test_user'){		
		
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


	public function getUserList($pageno, $table = 'test_user'){		
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
	public function postUser($data, $table = 'test_user') {	
		return $this->db->insert($table, $data);				
	}
	
/*  put 用于修改 */
	public function putUser($userid, $data, $table = 'test_user') {	
	
		$this->db->where('id', $userid);			
		return $this->db->update($table, $data); 		
	}
	
/* delete 用于删除 */
	public function delUser($userid, $table = 'test_user') {	
				
		$data['delstatus'] = 1;		
		$this->db->where('id', $userid);			
		return $this->db->update($table, $data); 			
	}
	
	
	
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */