<?php
	include 'connect.php';


	$username = isset($_GET['username']) ? $_GET['username'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';
	$emil = isset($_GET['email']) ? $_GET['email'] : '';
	$password = md5($password);
	
	$sql = "select * from user";


	$res = $conn->query($sql);

	

	$row = $res->fetch_all(MYSQLI_ASSOC);


	
	echo json_encode($row,JSON_UNESCAPED_UNICODE);

	$conn->close();
?>