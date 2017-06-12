require(['config'],function(){
	require(['jquery'],function($){


		
		var arr;
		
		// console.log($email)
		$.ajax({
				url:'../api/chaid.php',
				
				success:function(res){
					console.log()
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
						// console.log($(item).index());
						idx = item.id;
						console.log(idx)
						// console.log(item.username,item.emil,$email)
						res = true;
							
					}
					console.log(item.password);
					console.log(abb)
					if(item.password == abb){
						// console.log(item);
						idx1 = item.id;
						res1 = true;
					}
			
				});
			// console.log(res1,res)
			if(res && res1){
				console.log(idx,idx1)
				if(idx == idx1){
					location.href = '../index.html?username='+ $email;
				}
				
			}

		});
		


	});
})