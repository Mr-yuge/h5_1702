require(['config'],function(){

	require(['jquery','gdszoom','common'],function($,gds){

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
		var $qian;
		var $setid;
		var $imgurl;
		var $spname;
		var $indext;
		var qty1;
		$.ajax({
			url:'../api/getlist.php',
			async:false,
			success:function(res){
				var $list = JSON.parse(res);
				$indext = $list;
				$list.forEach(function(goods){
					
					if(goods.id === nidx){
						$title.html(goods.titlename);
						$img.attr({src:goods.img});
						$img.attr('data-big',goods.img);
						$img.appendTo($imgtu);
						$price.html(goods.price);
						$jiaspan.html(goods.dis);
						$del.html(goods.cost);
						$imgurl = goods.img;
						$qian = goods.price;
						$setid = goods.id;
						$spname = goods.titlename;
						qty1 = goods.qty;
					}
				});

			}
		})
		
		// console.log($qian)
		
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


		


		var qfy = 1;

		var ind = 0;
		// 下面的代码是飞入购物车效果
		var $goodsList = $('.imgtu');
		var $buy = $('.buy');
		var $right = $('.right ul');
		var $title = $('.title p');
		var $idx = $('#BarCart');
		
		var setli = $right[0];
		var getli = setli.children;
		
		var $topright = $('.topright strong');
		
		






		//添加cookie
		var goodslist = getCookie('goodslist')
		goodslist = goodslist ? JSON.parse(goodslist) : [];
		



		$right.html(goodslist.map(function(item){
				
					ind += item.qty;
               		return `<li data-guid=${item.guid}>
								<img src="${item.imgurl}">
								<p>${item.name}</p>
								<h4>￥${item.price}&times;${item.qty}</h4>
								<span class="btn-close">&times;</span>


               		`

               	}).join(''));

		$idx.html(ind);
		$topright.html(ind);
		// console.log(ind);




		$buy.on('click','button',function(){
			var $img = $goodsList.children('img');
			var $cloneImg2 = $img.clone();
			
			for(var i=0;i<goodslist.length;i++){
				if(goodslist[i].guid == $setid){
						
						goodslist[i].qty++;			
						break;		
					
				}
			}
			
			if(i ==goodslist.length){
				// console.log(666);
				var goods = {
							guid:$setid,
							imgurl:$imgurl,
							name:$spname,
							price:$qian,
							qty:1
						};
						
				goodslist.push(goods);

			}	
				// console.log(goodslist);
			setCookie('goodslist',JSON.stringify(goodslist),'Session','/');
			

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
                ind++;
              $right.html(goodslist.map(function(item){
              		
               		return `<li data-guid=${item.guid}>
								<img src="${item.imgurl}">
								<p>${item.name}</p>
								<h4>￥${item.price}&times;${item.qty}</h4>
								<span class="btn-close">&times;</span>


               		`
               		
               	}).join(''));
                	$idx.html(ind);
					$topright.html(ind);
                
                   // 删除动画图片
                   $cloneImg.remove();
                });
			
		});
		
		
		var dange = $('.dange');
		// console.log(goodslist);

		$right.on('click','span',function(){
			var $culist = this.parentNode;
			
		
			var guid = $culist.getAttribute('data-guid');
				
			for(var i=0;i<goodslist.length;i++){
				if(goodslist[i].guid === guid){
					
					goodslist.splice(i,1);
					setCookie('goodslist',JSON.stringify(goodslist),'Session','/');
					
					break;
				}
			}

			$culist.remove();
		
		});

		





		var $width = $('#dialog').outerWidth();
		var $height = $('#dialog').outerHeight();

		

			var $datalist = $('.shoptable tbody');
			var $goshop;
			var $tr;


			// console.log($datalist);






		
			var totalPrice = 0;

		
			$goshop = goodslist.map(function(goods){
			totalPrice += goods.price*goods.qty;
			return `
			<tr data-id="${goods.guid}">
						<td width="100"><img src="${goods.imgurl}" width="90" height="57"></td>
						<td width="500">${goods.name}</td>
						<td>
							<div class="select">
								<input type="button" class="reduce" value="-">
								<input type="text" class="inp4" value="${goods.qty}">
								<input type="button" class="add" value="+">
							</div>
						</td>
						<td>${goods.price}</td>
						<td>0</td>
						<td class="xiaoji">${goods.price*goods.qty}</td>
						<td><a href="#" class="haha">删除</a></td>
				</tr>`
				}).join('');

			$tr = $('<tr/>').html(`<td colspan="7" class="align">
										<span class="font">商品数量：<span class="qian">${ind}</span>件</span>
										<span class="font">
											商品总价(不含邮费)：
											<span class="total">￥${totalPrice.toFixed(2)}</span>
										</span>
									</td>`);
			// console.log($goshop,$datalist)
		$datalist.html($goshop).append($tr);
		

		var reduce = $('.reduce');
		var syQty;
		var jiaQty;
		var shanQty;
		var qian = $('.qian');
		var total = $('.total');
		var $total1;
		var $total2;
		var $total3;
		var $srong =$('.shuL');
		var xixi =$('.haha');
		console.log($('.haha'))
		xixi.on('click',function(){
			$total3 = 0;
			shanQty=0;
			var $culist = this.parentNode.parentNode;
			var $next = $(this).prev();
			// var $culist = this.parentNode.parentNode.parentNode;
			var xiaoji = this.parentNode.parentNode;
			
			var guid = $culist.getAttribute('data-id');
			console.log(guid);
			for(var i=0;i<goodslist.length;i++){
				if(goodslist[i].guid === guid){
					
					goodslist.splice(i,1);
					setCookie('goodslist',JSON.stringify(goodslist),'Session','/');
					
					break;
				}
			}


			for(var i=0;i<goodslist.length;i++){
					shanQty +=goodslist[i].qty ;
					$total3+= goodslist[i].price * goodslist[i].qty;

				}
				
				qian.html(shanQty);
				total.html($total3.toFixed(2)*1);
				
				$idx.text(shanQty);
				$topright.text(jiaQty);
				$srong.html(shanQty);
			$culist.remove();
		})




		
		
		// var xiaoji = $('.xiaoji');
		
		reduce.on('click',function(){
			syQty = 0;
			$total1 = 0;
			var $next = $(this).next();
			var xiaoji = this.parentNode.parentNode;
			var xiaoji1 = $(xiaoji).next().next().next();
			
			var $culist = this.parentNode.parentNode.parentNode;

			var jisuan = $culist.children;
			
			
			var guid = $culist.getAttribute('data-id');
				for(var i=0;i<goodslist.length;i++){

					if(goodslist[i].guid === guid){
						
						goodslist[i].qty--;
						
						setCookie('goodslist',JSON.stringify(goodslist),'Session','/');
						$next.val(goodslist[i].qty);
						xiaoji1.html((goodslist[i].qty*goodslist[i].price).toFixed(2)*1);
						break;
					}
				}	

				for(var i=0;i<goodslist.length;i++){
					syQty +=goodslist[i].qty ;
					$total1+= goodslist[i].price * goodslist[i].qty;
					if(goodslist[i].qty <= 0){
						
						goodslist.splice(i,1);
						setCookie('goodslist',JSON.stringify(goodslist),'Session','/');
						$culist.remove();
					break;
					}
				}
				qian.html(syQty);
				total.html($total1.toFixed(2)*1);

				$idx.text(syQty);
				$topright.text(syQty);
		});

		

	
		var add = $('.add');
		add.on('click',function(){
			$total1 = 0;
			jiaQty=0;
			var $next = $(this).prev();
			var $culist = this.parentNode.parentNode.parentNode;
			var xiaoji = this.parentNode.parentNode;
			var xiaoji1 = $(xiaoji).next().next().next();
	
			var guid = $culist.getAttribute('data-id');
				for(var i=0;i<goodslist.length;i++){
					if(goodslist[i].guid === guid){
						// console.log(6666);
						goodslist[i].qty++;
						setCookie('goodslist',JSON.stringify(goodslist),'Session','/');
						$next.val(goodslist[i].qty);
						xiaoji1.html((goodslist[i].qty*goodslist[i].price).toFixed(2)*1);
						break;
					}
				}

				for(var i=0;i<goodslist.length;i++){
					jiaQty +=goodslist[i].qty ;
					$total1+= goodslist[i].price * goodslist[i].qty;

				}
				
				qian.html(jiaQty);
				total.html($total1.toFixed(2)*1);
				
				$idx.text(jiaQty);
				$topright.text(jiaQty);
		});
		

		

		let pageNo = 1;
		let qty = 9;



		var listP = $('.listP');
		$.ajax({
			url:'../api/list.php',
			dataType:'json',
			async:false,
			data:{
				page:pageNo,
				qty:qty
			},
			success:function(data){
				
				
					showList(data);
				var pageQty = Math.ceil(data.total/data.qty);

				var page_str = '';
				for(var i=1;i<=pageQty;i++){
					page_str += `<li><a href="#">${i}</a></li>`
				}
			
				$('.pagination').html(page_str)
			}
		});


		



		

		$('.pagination').on('click','a',function(e){
			e.preventDefault();
			$(this).parent().addClass('active').siblings().removeClass();
			pageNo = $(this).text();

			$.ajax({
				url:'../api/list.php',
				dataType:'json',
				async:false,
				data:{
					page:pageNo,
					qty:qty
				},
				success:function(data){
					showList(data);
				}
			});
			$('.home li').hover(

			function(){
				$(this).addClass('abchover');
			},
			function(){
				$(this).removeClass('abchover');
			}
			)
			return false;
		});



		function showList(data){
			let html = data.data.map(function(item){
					return `<li>
								<h4>${item.titlename}</h4>
								<div class="pic">
									<div class="cc">
										<img src="${item.img}" alt="" width="299">
									</div>
								</div>
								<span>原价：<del>${item.cost}</del></span>
								<h5>折扣：<b>${item.dis}</b></h5>
							</li>`
				}).join('');
				listP.html(html)
		}
		

		console.log($('.home li'))
		$('.home li').hover(

			function(){
				$(this).addClass('abchover');
			},
			function(){
				$(this).removeClass('abchover');
			}
			)


		$('.imgtu').gdszoom({
			height:280,
			 width:320,
			 position:'right'
		});
	});
})