require(['config'],function(){
	require(['jquery'],function($){


		
		var arr;
		
		// console.log($email)
		$.ajax({
				url:'../api/chaid.php',
				
				success:function(res){
				
					arr= JSON.parse(res);
				
				}
			});
		var abb;
		$('button').on('click',function(e){
			var $email = $('#email').val();
			var $password = $('#password').val();
			e.preventDefault();
				$.ajax({
					url:'../api/jieid.php',
					async:false,
					data:{
						password:$password
					},
					success:function(data){
						abb = data;
					}
				});
			var res = false;
			var res1 = false;
				if($email ===  ''){
					alert('请输入用户名');
					
				}else{
					if($password === ''){
						alert('请输入密码');
					}
				}
				
				var idx = 0;
				var idx1 = 0;
				arr.forEach(function(item){

					if((item.username || item.emil) === $email){
						
						idx = item.id;
						
					
						res = true;
							
					}
					
					if(item.password == abb){
						
						idx1 = item.id;
						res1 = true;
					}
			
				});
			
			if(res && res1){
				
				if(idx == idx1){
					location.href = '../index.html?username='+ $email;
				}
				
			}

		});
		


	});
})