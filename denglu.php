<?php
	$usn = $_REQUEST['username'];
	$pwd = $_REQUEST['password'];
	$code = $_REQUEST['code'];
	$codeStr = $_REQUEST['codeStr'];

	// {isOk:false, msg:"用户名或密码错误"}
	$result = array("isOk"=>true);
	if($usn == "17714392331" && $pwd == "123456" && $code == $codeStr){
		print json_encode($result);
	} else {
		$result["isOk"] = false;
		if($code != $codeStr){
			$result['msg'] = ('验证码输入有误');
		} else{
			$result['msg'] = "用户名或密码错误";
		}
		print json_encode($result);
		}
?>
