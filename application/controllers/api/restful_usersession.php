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

class Restful_UserSession extends REST_Controller {
	
/*     检查用户登陆 并返回session信息 */
    function user_post()
    {
        $data['accesstoken'] = $this->post('access_token');
        $data['userid'] = $this->post('user_id');
        $data['username'] = $this->post('user_name');               
        $data['useremail'] = $this->post('user_email');
        $data['lastdate'] = $this->post('user_lastdate');
        $data['password'] = $this->post('user_password');

        if($this->post('user_name')){        	

            //通过username检查用户密码
        	$result = $this->Model_User->checkUserLogin($data['username'], $data['password'], $data);
	        
	        if($result === FALSE)  
	        {  
	            $message = array( 'status' => 0, 'message' => '您输入的用户名或密码不正确!');
                $this->response($message, 200); // 200 being the HTTP response code 
	        }else  
	        {  
	            $message = array( 'status' => 1, 'access_token' => $result->accesstoken, 'user_id' => $result->id, 'user_name' => $result->username, 'user_lastdate' => $result->lastdate,  'message' => '您登陆成功!');
        		$this->response($message, 200); // 200 being the HTTP response code
	        }
        }


        if($this->post('access_token')){ 
            //通过userid检查access_token是否过期
            $result = $this->Model_User->checkUserToken($data['userid'], $data['accesstoken'], $data);  
            if($result === FALSE)  
            {  
                $message = array( 'status' => 0, 'message' => '授权的access_token已过期!');
                $this->response($message, 200); // 200 being the HTTP response code 
            }else  
            {  
                $message = array( 'status' => 1, 'access_token' => $result->accesstoken, 'user_id' => $result->id, 'user_name' => $result->username, 'user_lastdate' => $result->lastdate,  'message' => '授权成功,并更新授权!');
                $this->response($message, 200); // 200 being the HTTP response code
            }          
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