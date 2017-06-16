require(['config'],function(){

	require(['jquery'],function($){
		// 传递用户信息到后台
		

		
		
		


		var $on1 = $('.on1');
		var $on2 = $('.on2');
		var $on3 = $('.on3');
		var $on4 = $('.on4');
		var $password = $('#password');
		var $email = $('#email');
		var $username = $('#username');
		var $password1 = $('#password1');
		var res1 = true;
		var res2 = true;
		var res3 = true;
		var res4 = true;
		var res5 = true;

		$('button').click(function(e){
			e.preventDefault();
		})

		var arr;

		$.ajax({
			url:'../api/chaid.php',
			async:false,	
			
			success:function(res){
			
				arr= JSON.parse(res);
						
			}
		
			
		});	
	
		
		
			$email.on('blur',function(){
			
				
					var $this = $(this);
					var _email = this.value;
					
					if(_email=== ''){
						$('.on1').attr({class:'tip'});
						var $p = $('<p/>');
						$p.html('请输入邮箱');
						$(this).parent('dd').find('p').remove();
					
							$(this).parent('dd').append($p);
							
							res1 = false;
						
	
					}else{
						if(!/^[\w\-\.]+@[a-z\d\-]{1,63}(\.[a-z]+)+$/.test(_email)){
							
							$(this).parent('dd').find('p').remove();
							var $p1 = $('<p/>').attr({class:'biaoqian'});
							$p1.html('您输入的邮箱有误');
								
							$(this).parent('dd').append($p1);
								
							$on1.attr({class:'tip'});
							
							res1 = false;
						}else{
							$(this).parent('dd').find('p').remove();
							$on1.removeClass('tip');
							$on1.addClass('tib');
							
							res1 = true;
							
							arr.forEach(function(item){
											if(item.emil === $email.val()){

												$this.parent('dd').find('p').remove();
												var $p1 = $('<p/>').attr({class:'biaoqian'});
												$p1.html('您输入的邮箱重复');
													
												$this.parent('dd').append($p1);
													
												$on1.attr({class:'tip'});
												res1 = false;

											}

							});
						}
					}
					
					// 							
			});
				

			$username.on('blur',function(){
			
			
				var $this= $(this);
					var _username = this.value;
					
					if(_username=== ''){
						$on2.attr({class:'tip'});
						var $p = $('<p/>');
						$p.html('请输入用户名');
						$(this).parent('dd').find('p').remove();
					
						// console.log($p);
						
							$(this).parent('dd').append($p);
							
							// console.log(res)
						
							res2 = false;

					}else{
						if(! /^\w{4,16}$/.test(_username)){
							
							$(this).parent('dd').find('p').remove();
							var $p1 = $('<p/>').attr({class:'biaoqian'});
							$p1.html('您输入的用户名有误');
								
							$(this).parent('dd').append($p1);
								
							$on2.attr({class:'tip'});
							
							res2 = false;
						}else{
							$(this).parent('dd').find('p').remove();
							$on2.removeClass('tip');
							$on2.addClass('tib');

							res2 = true;
							
							arr.forEach(function(item){
								
								if(item.username === $username.val()){
									
									$this.parent('dd').find('p').remove();
									var $p1 = $('<p/>').attr({class:'biaoqian'});
									$p1.html('您输入的用户名重复');
									
									$this.parent('dd').append($p1);
									
									$on2.attr({class:'tip'});
									res2 = false;
								}

							});
								
						
						}
					}

			});
			
			
			
	
			$password.on('blur',function(){
				var $this = $(this);
				var _password = this.value;
				
				if(_password=== ''){
					$('.on3').attr({class:'tip'});
					var $p = $('<p/>');
					$p.html('请先输入密码');
					$(this).parent('dd').find('p').remove();
				
					// console.log($p);
					
						$(this).parent('dd').append($p);
						
						res3 = false;
					

				}else{
					if(! /^\S{6,19}$/.test(_password)){
					
						$(this).parent('dd').find('p').remove();
						var $p1 = $('<p/>').attr({class:'biaoqian'});
						$p1.html('您输入的密码有误');
							
						$(this).parent('dd').append($p1);
							
						$on3.attr({class:'tip'});
						
						res3 = false;
					}else{
						$(this).parent('dd').find('p').remove();
						$on3.removeClass('tip');
						$on3.addClass('tib');

						res3 = true;


					
					}
				}
	
			});
	
	
	
			 
			$password1.on('blur',function(){
				var _password = this.value;
				
				if(_password=== ''){
					$on4.attr({class:'tip'});
					var $p = $('<p/>');
					$p.html('请先输入密码');
					$(this).parent('dd').find('p').remove();
				
					
					
					$(this).parent('dd').append($p);
						
					
					
					res4 = false;
				}else{
					if($password.val() !== _password){
						
						$(this).parent('dd').find('p').remove();
						var $p1 = $('<p/>').attr({class:'biaoqian'});
						$p1.html('您输入的密码不一致');
							
						$(this).parent('dd').append($p1);
							
						$on3.attr({class:'tip'});
						
						res4 = false;
					}else{
						$(this).parent('dd').find('p').remove();
						$on4.removeClass('tip');
						$on4.addClass('tib');

						res4 = true;
					}
				}
				
			});
			var $remeber = $('#remeber').get(0);
		
		$('form').on('click',function(){

			
			
			if(!$remeber.checked){
			
				res5 = false;
			}else{
		
				res5 = true;
			}
			console.log(res5);
			if($(this).find('input').val() === ''){
				return;
			}

			if(res1 && res2 && res3 && res4 && res5){
	
				
				$(this).find('button').on('click',function(){
					$.ajax({
						url:'../api/reg.php',
						
						data:{
							username:$username.val(),
							password:$password.val(),
							email:$email.val()
						}
						
						
					});
				
					location.href = '../index.html?username='+ $username.val();
					
					
				})
			}
			
		});	
		




	})
})