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



	$page = isset($_GET['page']) ? $_GET['page'] : 1;
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 10;




	//查询数据库
	$sql = "select * from good limit ".($page-1)*$qty.",".$qty;
	// echo $sql;
	//获取查询结果
	$res = $conn->query($sql);

	// 使用查询结果集
	$row = $res->fetch_all(MYSQLI_ASSOC);

	$result = array(
			'page'=>$page,
			'qty'=>$qty,
			'total'=>$conn->query('select count(*) from good')->fetch_row()[0],
			'data'=>$row,

		);





	echo json_encode($result,JSON_UNESCAPED_UNICODE);

	$conn->close();
?>