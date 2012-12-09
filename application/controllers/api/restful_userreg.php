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

class Restful_UserReg extends REST_Controller {
	function user_get()
    {
        if(!$this->get('id'))
        {
        	$this->response(NULL, 400);
        }

        $user = $this->Model_User->getUser( $this->get('id') );
    	/*
$users = array(
			1 => array('id' => 1, 'name' => 'Some Guy', 'email' => 'example1@example.com', 'fact' => 'Loves swimming'),
			2 => array('id' => 2, 'name' => 'Person Face', 'email' => 'example2@example.com', 'fact' => 'Has a huge face'),
			3 => array('id' => 3, 'name' => 'Scotty', 'email' => 'example3@example.com', 'fact' => 'Is a Scott!', array('hobbies' => array('fartings', 'bikes'))),
		);
*/

        if($user)
        {
            $this->response($user, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => '用户没找到 User could not be found'), 404);
        }
    }
    
/*     添加用户 */
    function user_post()
    {
        if(!$this->post('id')){        	
        	$data['username'] = $this->post('username');		
			$data['email'] = $this->post('email');
			$data['password'] = $this->post('password');
			$data['mobile'] = $this->post('mobile');
			$data['firstname'] = $this->post('firstname');
			$data['lastname'] = $this->post('lastname');
        	
        	$result = $this->Model_User->postUser($data);
	        
	        if($result === FALSE)  
	        {  
	            $this->response(array('status' => 'failed'));  
	        }else  
	        {  
	            $message = array( 'username' => $data['username'], 'email' => $data['email'],  'message' => '您已注册成功!');
        		$this->response($message, 200); // 200 being the HTTP response code
	        }
        }
    }
    
    /* 修改用户 */
    function user_put()
    {
        if($this->put('id')){
        	
			$data['username'] = $this->put('username');		
			$data['email'] = $this->put('email');
			$data['password'] = $this->put('password');
			$data['mobile'] = $this->put('mobile');
			$data['firstname'] = $this->put('firstname');
			$data['lastname'] = $this->put('lastname');
        
	        $result = $this->Model_User->putUser( $this->put('id'), $data);  
	          
	        if($result === FALSE)  
	        {  
	            $this->response(array('status' => 'failed'));  
	        }else  
	        {  
	            $message = array( 'username' => $data['username'], 'email' => $data['email'],  'message' => '您已修改成功!');
        		$this->response($message, 200); // 200 being the HTTP response code
	        }
        }
    }
    
    
    function user_delete()
    {
    	$result = $this->Model_User->delUser( $this->get('id') );
    	
    	if($result === FALSE)  
        {  
            $this->response(array('status' => 'failed'));  
        }else{  
            $message = array('id' => $this->get('id'),  'message' => 'DELETED!');
        
	        $this->response($message, 200); // 200 being the HTTP response code
        }

    }
    
    
/*     用户列表获取 */ 
    function users_get()
    {
        $users = $this->Model_User->getUserList( $this->get('pageno') );
/*
        $users = array(
			array('id' => 1, 'name' => 'Some Guy', 'email' => 'example1@example.com'),
			array('id' => 2, 'name' => 'Person Face', 'email' => 'example2@example.com'),
			3 => array('id' => 3, 'name' => 'Scotty', 'email' => 'example3@example.com', 'fact' => array('hobbies' => array('fartings', 'bikes'))),
		);
*/
        
        if($users)
        {
            $this->response($users, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'Couldn\'t find any users!'), 404);
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