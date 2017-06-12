<?php
	// 引入其他php文件
	include 'connect.php';

	$username = isset($_GET['username']) ? $_GET['username'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';
	$emil = isset($_GET['email']) ? $_GET['email'] : '';
	$password = md5($password);


		$sql = "insert into user(username,password,emil) values('$username','$password','$emil')";


	//执行sql语句
	$res = $conn->query($sql);

	if($res){
		echo "ok";
	}else{
		echo "Error: " . $sql . "<br>" . $conn->error;
	}

	// 关闭数据链接
	$conn->close();
?>