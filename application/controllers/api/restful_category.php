<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Restful User
 *
 * This is an example of a few basic user interaction methods you could use
 * all done with a hardcoded array.
 *
 * @package		CodeIgniter
 * @subpackage	Rest Server
 * @category	Controller
 * @author		Phil Sturgeon
 * @link		http://philsturgeon.co.uk/code/
*/

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
require APPPATH.'/libraries/REST_Controller.php';

class Restful_Category extends REST_Controller {

	function category_get(){
        if(!$this->get('id'))
        {
        	$this->response(NULL, 400);
        }

        $category = $this->Model_Category->getCategory( $this->get('id') );
    	/*
$users = array(
			1 => array('id' => 1, 'name' => 'Some Guy', 'email' => 'example1@example.com', 'fact' => 'Loves swimming'),
			2 => array('id' => 2, 'name' => 'Person Face', 'email' => 'example2@example.com', 'fact' => 'Has a huge face'),
			3 => array('id' => 3, 'name' => 'Scotty', 'email' => 'example3@example.com', 'fact' => 'Is a Scott!', array('hobbies' => array('fartings', 'bikes'))),
		);
*/

        if($category)
        {
            $this->response($category, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('status' => 'failed', 'message' => '分类没有找到'), 404);
        }
    }
    
    
/*     添加 */
    function category_post(){
        if(!$this->post('id')){        	

        	$data['level'] = $this->post('level');		
			$data['parentcategoryid'] = $this->post('parentcategoryid');
			$data['categorywebsitename'] = sha1($this->post('categorywebsitename'));
			$data['categorymenuname'] = $this->post('categorymenuname');
			$data['categorymobilename'] = $this->post('categorymobilename');
			$data['displayorder'] = $this->post('displayorder');
			$data['nodisplay'] = $this->post('nodisplay');
			
        	
        	$result = $this->Model_Category->postCategory($data);
	        
	        if($result === FALSE)  
	        {  
	            $this->response(array('status' => 'failed', 'message' => '添加失败'), 404);  
	        }else  
	        {  
	            $message = array( 'categorywebsitename' => $data['categorywebsitename'], 'categorymenuname' => $data['categorymenuname'], 'categorymobilename' =>$data['categorymobilename'],  'message' => '添加成功!');
        		$this->response($message, 200); // 200 being the HTTP response code
	        }
        }
    }
    
    /* 修改 */
    function category_put(){
        if($this->put('id')){
        	
        	$data['level'] = $this->put('level');		
			$data['parentcategoryid'] = $this->put('parentcategoryid');
			$data['categorywebsitename'] = sha1($this->put('categorywebsitename'));
			$data['categorymenuname'] = $this->put('categorymenuname');
			$data['categorymobilename'] = $this->put('categorymobilename');
			$data['displayorder'] = $this->put('displayorder');
			$data['nodisplay'] = $this->put('nodisplay');
        
	        $result = $this->Model_Category->putCategory( $this->put('id'), $data);  
	          
	        if($result === FALSE){  
	            $this->response(array('status' => 'failed', 'message' => '修改失败'), 404);  
	        }else{  
	            $message = array( 'categorywebsitename' => $data['categorywebsitename'], 'categorymenuname' => $data['categorymenuname'], 'categorymobilename' =>$data['categorymobilename'],  'message' => '修改成功!');
        		$this->response($message, 200); // 200 being the HTTP response code
	        }
        }
    }
    
    
    function category_delete()
    {
    	$result = $this->Model_Category->delCategory( $this->get('id') );
    	
    	if($result === FALSE)  
        {  
            $this->response(array('status' => 'failed', 'message' => '删除失败'));  
        }else{  
            $message = array('id' => $this->get('id'),  'message' => '已删除!');
        
	        $this->response($message, 200); // 200 being the HTTP response code
        }

    }
    
    
/*     分类列表获取 */ 
    function categories_get()
    {
        $categories = $this->Model_Category->getCategoryList( $this->get('pageno') );
/*
        $users = array(
			array('id' => 1, 'name' => 'Some Guy', 'email' => 'example1@example.com'),
			array('id' => 2, 'name' => 'Person Face', 'email' => 'example2@example.com'),
			3 => array('id' => 3, 'name' => 'Scotty', 'email' => 'example3@example.com', 'fact' => array('hobbies' => array('fartings', 'bikes'))),
		);
*/
        
        if($categories){
            $this->response($categories, 200); // 200 being the HTTP response code
        }else{
            $this->response(array('status' => 'failed', 'message' => 'Couldn\'t find category!'), 404);
        }
    }


	public function send_post()
	{
		var_dump($this->request->body);
	}


	public function send_put()
	{
		var_dump($this->put('foo'));
	}
}