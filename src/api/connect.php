<?php
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'butao';

 	
	$conn = new mysqli($servername,$username,$password,$database);

	if($conn->connect_errno){
		die('链接失败'.$conn->connect_error);
	}


	// 设置字符集
	$conn->set_charset('utf8'); 

?>