<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Model_Category extends CI_Model {

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
	 

	
	/**********    RESTFul API     **************/
	
	public function getCategory($categoryid, $table = 'ci_category'){		
		
		$this->db->select('id, level, parentcategoryid, categorywebsitename, categorymenuname, categorymobilename, displayorder, nodisplay');
		$this->db->where('id', $categoryid);
		$this->db->where('delstatus', 0);

		$this->db->limit(1);
		$query = $this->db->get($table);
		
/* 		echo $query->num_rows(); */
		if($query->num_rows() > 0 ){
			return $query->row();
		}
		return FALSE;
	}


	public function getCategoryList($pageno = 1, $table = 'ci_category'){		
/*
		$temppage = ($pageno - 1) * 10;
		$this->db->limit(10, $temppage);
*/

		$this->db->select('id, level, parentcategoryid, categorywebsitename, categorymenuname, categorymobilename, displayorder, nodisplay');
		
		$this->db->where('delstatus', 0);
		$query = $this->db->get($table);
		

		if($query->num_rows() > 0 ){
			return $query->result();
		}
		return FALSE;
	}	
	
	
	
/* post 用于添加 */
	public function postCategory($data, $table = 'ci_category') {	
		return $this->db->insert($table, $data);				
	}
	
	
	
/*  put 用于修改 */
	public function putCategory($categoryid, $data, $table = 'ci_category') {	
	
		
		$this->db->where('id', $categoryid);			
		return $this->db->update($table, $data); 		
	}
	
	
	
/* delete 用于删除 */
	public function delCategory($categoryid, $table = 'ci_category') {	
				
		$data['delstatus'] = 1;		
		$this->db->where('id', $categoryid);			
		return $this->db->update($table, $data); 			
	}
	
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */