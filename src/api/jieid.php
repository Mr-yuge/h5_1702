<?php
	$password = isset($_GET['password']) ? $_GET['password'] : '';

	$password = md5($password);

	echo $password;

	
?>