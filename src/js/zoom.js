require(['config'],function(){

	require(['jquery','gdszoom'],function($,gds){












		var data = location.search.substring(1);

		// var acc = data.split('&');
		var temp = data.split('=');
		if(data !== ''){
				var $span = $('<span/>');
				var $a = $('<a/>');
				
				$a1 = $('<a/>').attr({href:'#'});
				$a1.append($span);
				if(temp[0] === 'username'){
					$span.html(temp[1]);
					console.log(data);
					$a.html('生活商城 ！').attr({href:'#'});
					var $welcome = $('.welcome');
					$welcome.html('欢迎来到步淘').prepend($a1).append($a);
					var $next = $welcome.next();
					var $next1 = $next.next();
					$next.html('').attr({border:0});
					var $a2 = $('<a/>').attr({href:'#'});
					$a2.html('退出');
					$next1.html('').attr({border:0}).append($a2);
					$a2.on('click',function(){
						location.href = 'http://localhost:3000';
				
					});
				}
				
				
		}
		var nidx = temp[1];
		var $title = $('.title p');
		var $imgtu = $('.imgtu');
		var $img = $('<img/>');
		var $price = $('.price strong');
		var $jiaspan = $('.jiaspan');
		var $del = $('.price del');
		console.log($del);
		console.log($imgtu);
		console.log($title);
		console.log($price);
		$.ajax({
			url:'../api/getlist.php',
			async:false,
			success:function(res){
				var $list = JSON.parse(res);

				$list.forEach(function(goods){
					if(goods.id === nidx){
						$title.html(goods.titlename);
						$img.attr({src:goods.img})
						$img.attr('data-big',goods.img);
						$img.appendTo($imgtu);
						$price.html(goods.price);
						$jiaspan.html(goods.dis);
						$del.html(goods.cost);
					}
				});

			}
		})
		


		
		$('.heise').on('mouseenter','a',function(){

			
			$(this).addClass('beijing');
		}).on('mouseleave','a',function(){
			$(this).removeClass('beijing');
		}).on('click','a',function(e){
			e.preventDefault();		
		})


		var res = false;

		$('.tebei').on('click',function(){
			var $parent = $(this).closest('#rightbar');
			
			
			if(!res){
				$parent.css({right:0});
				res = true;
			}else{
				$parent.css({right:-303});
				res = false;
			}
			// console.log(res)
		})


		// 表头移入事件
		$('#qkln a').hover(
				function(){
					// console.log($(this).find('dd'))
					$(this).find('b').addClass('hover');
					$(this).next().show();
				
				},
				function(){
					$(this).find('b').removeClass('hover');
					$(this).next().hide();
				}
				
			);

		$('.shopnav li').hover(
			function(){
				$(this).addClass('yanse');
			},
			function(){
				$(this).removeClass('yanse');
			}
			);


		$('.imgtu').gdszoom({
			height:280,
			 width:320,
			 position:'right'
		});




		var ind = 0;
		// 下面的代码是飞入购物车效果
		var $goodsList = $('.imgtu');
		var $buy = $('.buy');
		var $right = $('.right ul');
		var $title = $('.title p');
		var $idx = $('#BarCart');
		// console.log(ind);
		var $topright = $('.topright strong');
		console.log($topright);
		$buy.on('click','img',function(){
			alert('不要想太多你')
		})
		$buy.on('click','button',function(){
			var $img = $goodsList.children('img');
			var $cloneImg2 = $img.clone()
			ind++;

			var $cloneImg = $img.clone();
			var $li = $title.clone();
			 $cloneImg.css({
                    position:'absolute',
                    left:$img.offset().left,
                    top:$img.offset().top,
                    width:$img.outerWidth(),
                    height:$img.outerHeight()
                }).appendTo('body');

			var $span = $('<span/>').html('&times;');
			 
			  $cloneImg.animate({
                    left:$right.offset().left,
                    top:$right.offset().top + $right.outerHeight(),
                    width:10,
                    height:10
                },function(){
                 $('<li/>').append($li).prepend($cloneImg2).append($span).appendTo($right);
                 console.log($cloneImg)
                   // 删除动画图片
                   $cloneImg.remove();
                });
			$idx.html(ind);
			$topright.html(ind);
		});
		 
		$right.on('click','span',function(){
			var $culist = $(this).parent('li');
			ind--;
			console.log(ind);
			$culist.remove();
			$idx.html(ind);
			$topright.html(ind);
		})




	});
})