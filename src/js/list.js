require(['config'],function(){

	require(['jquery','gdszoom','lunbotu','common'],function($,gds,lbt){
		var data = location.search.substring(1);

		// var acc = data.split('&');
		var temp = data.split('=');
		if(data !== ''){
				var $span = $('<span/>');
				var $a = $('<a/>');
				
				$a1 = $('<a/>').attr({href:'#'});
				$a1.append($span);
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



		


		var res = false;
		$('.heise').on('mouseenter','a',function(){

			
			$(this).addClass('beijing');
		}).on('mouseleave','a',function(){
			$(this).removeClass('beijing');
		}).on('click','a',function(e){
			e.preventDefault();		
		})



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

		var b;
		// 表头移入事件
		$('#qkln a').hover(
				function(){
					// console.log($(this).find('dd'))
				b= $(this).find('b')
					b.addClass('hover');
				$(this).next().show();
				
				},
				function(){
					$(this).find('b').removeClass('hover');
					$(this).next().hide();
				}
				
			);
		console.log(b)
		//轮播图的插件
		$('.lunbo').lxCarousel({
			imgs:['img/toubu/001.jpg','img/toubu/002.jpg','img/toubu/003.jpg','img/toubu/004.jpg'],
			width:810,
			height:320

		});
		// console.log($.lxCarousel())

		$('.shopnav li').hover(
			function(){
				$(this).addClass('yanse');
			},
			function(){
				$(this).removeClass('yanse');
			}
			)
		// 给信息添加类
		// console.log(lbt.lxCarousel)
		// 第一行的商品信息
		
			// var title = $title.get(0);
			// console.log($('.title1').scrolTop());
		$(window).scroll(function(){
			// var $title = $('.title')
			var $top = $(window).scrollTop();
			// console.log($(window).scrollTop())
			
		})

		content();

		var $top;
		//所有的商品信息
		function content(){


			var goods = [{
					id:1,
					img:'img/neirong/tu1.jpg',
					titlename:'【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...',
					price:19.9,
					cost:'￥139.00',
					dis:'(1.4折)'
				},{
					id:2,
					img:'img/neirong/tu2.jpg',
					titlename:'【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...',
					price:29.9,
					cost:'￥99.00',
					dis:'(3折)'
				},
				{
					id:3,
					img:'img/neirong/tu3.jpg',
					titlename:'【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...',
					price:29.9,
					cost:'￥129.00',
					dis:'(2.3折)'
				},
				{
					id:4,
					img:'img/neirong/tu4.jpg',
					titlename:'【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...',
					price:19.9,
					cost:'￥109.00',
					dis:'(1.8折)'
				},
				{
					id:5,
					img:'img/neirong/tu5.jpg',
					titlename:'【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...',
					price:69.9,
					cost:'￥69.00',
					dis:'(10折)'
				},
				{
					id:6,
					img:'img/neirong/tu6.jpg',
					titlename:'【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...',
					price:69.9,
					cost:'￥143.00',
					dis:'(4.8折)'
				},
				{
					id:7,
					img:'img/neirong/tu7.jpg',
					titlename:'【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...',
					price:78.00,
					cost:'￥177.00',
					dis:'(4.4折)'
				},
				{
					id:8,
					img:'img/neirong/tu8.jpg',
					titlename:'【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...',
					price:118.00,
					cost:'￥235.00',
					dis:'(5折)'
				},
				{
					id:9,
					img:'img/neirong/tu9.jpg',
					titlename:'【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...',
					price:218.00,
					cost:'￥443.00',
					dis:'(4.9折)'
				},
				{
					id:10,
					img:'img/neirong/tu10.jpg',
					titlename:'【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...',
					price:299.9,
					cost:'￥626.00',
					dis:'(4.8折)'
				},
				{
					id:11,
					img:'img/neirong/tu11.jpg',
					titlename:'【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...',
					price:428.00,
					cost:'￥953.00',
					dis:'(4.5折)'
				},
				{
					id:12,
					img:'img/neirong/tu12.jpg',
					titlename:'【全国包邮】仅19.9元，享原价139元可爱女人2014春夏新品鱼嘴欧洲时尚内增...',
					price:178.00,
					cost:'￥413.00',
					dis:'(4.3折)'
				}
			];

			var $shangP=$('.shangP');
			var $ul = $('<ul/>');
			// 第一个表格的信息
			$ul.html(goods.map(function(item){
				return `
				<li data-id="${item.id}">
					<a href='#'>
						<img src="${item.img}">
					</a>
					<a href="#" class="titlename">
						${item.titlename}
					</a>
					<div>
						<h4>
							<em>
								<p>￥</p>
								<i>${item.price}</i>
							</em>
							<span>
								<u>${item.cost}</u>
								${item.dis}
								<strong><p>新品上市<p></strong>
							</span>
							
						</h4>
						<button>
								
							</button>
					</div>
					
				</li>
				`
			}).join(''));

			$ul.appendTo($shangP);
			// console.log($shangP,$ul)



				var goods1 = [{
							id:13,
							img:'img/neirong/t1.jpg',
							titlename:'森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款',
							price:159.00,
							cost:'￥159.00',
							dis:'(10折)'
							},
							{
								id:14,
								img:'img/neirong/t2.jpg',
								titlename:'森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款',
								price:139.00,
								cost:'￥139.00',
								dis:'(10折)'
							},
							{
								id:15,
								img:'img/neirong/t3.jpg',
								titlename:'森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款',
								price:69.00,
								cost:'￥69.00',
								dis:'(10折)'
							},
							{
								id:16,
								img:'img/neirong/t4.jpg',
								titlename:'森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款',
								price:99.00,
								cost:'￥99.00',
								dis:'(10折)'
							},
							{
								id:17,
								img:'img/neirong/t5.jpg',
								titlename:'森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款',
								price:199.00,
								cost:'￥199.00',
								dis:'(10折)'
							},
							{	
								id:18,
								img:'img/neirong/t6.jpg',
								titlename:'森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款',
								price:199.00,
								cost:'￥199.00',
								dis:'(10折)'
							},
							{
								id:19,
								img:'img/neirong/t7.jpg',
								titlename:'森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款',
								price:179.00,
								cost:'￥179.00',
								dis:'(10折)'
							},
							{
								id:20,
								img:'img/neirong/t8.jpg',
								titlename:'森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款',
								price:199.00,
								cost:'￥199.00',
								dis:'(10折)'
							},
							{
								id:21,
								img:'img/neirong/t9.jpg',
								titlename:'森马半身裙女2017夏装新款A字白丹宁裙学生短款学院风纯棉专柜款',
								price:179.00,
								cost:'￥179.00',
								dis:'(10折)'
							}
				];

				var $shangT=$('.shangT');
				var $ul = $('<ul/>');
				// 第二个表格的信息
				$ul.html(goods1.map(function(item){
					return `
					<li data-id="${item.id}">
						<a href='#'>
							<img src="${item.img}">
						</a>
						<a href="#" class="titlename">
							${item.titlename}
						</a>
						<div>
							<h4>
								<em>
									<p>￥</p>
									<i>${item.price}</i>
								</em>
								<span>
									<u>${item.cost}</u>
									${item.dis}
									<strong><p>新品上市<p></strong>
								</span>
								
							</h4>
							<button>
									
								</button>
						</div>
						
					</li>
					`
				}).join(''));

				$ul.appendTo($shangT);



				var goods2 = [{
							id:22,
							img:'img/neirong/u1.jpg',
							titlename:'森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮',
							price:59.00,
							cost:'￥139.00',
							dis:'(4.3折)'
							},{
							id:23,
							img:'img/neirong/u2.jpg',
							titlename:'森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮',
							price:109.90,
							cost:'￥159.90',
							dis:'(6.9折)'
							},{
							id:24,
							img:'img/neirong/u3.jpg',
							titlename:'森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮',
							price:179.00,
							cost:'￥179.00',
							dis:'(10折)'
							},{
							id:25,
							img:'img/neirong/u4.jpg',
							titlename:'森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮',
							price:139.00,
							cost:'￥139.00',
							dis:'(10折)'
							},
							{
							id:26,
							img:'img/neirong/u5.jpg',
							titlename:'森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮',
							price:89.00,
							cost:'￥89.00',
							dis:'(10折)'
							},{
							id:27,
							img:'img/neirong/u6.jpg',
							titlename:'森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮',
							price:159.00,
							cost:'￥159.00',
							dis:'(10折)'
							},
							{
							id:28,
							img:'img/neirong/u7.jpg',
							titlename:'森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮',
							price:99.00,
							cost:'￥99.00',
							dis:'(10折)'
							},
							{
							id:29,
							img:'img/neirong/u8.jpg',
							titlename:'森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮',
							price:99.00,
							cost:'￥99.00',
							dis:'(10折)'
							},{
							id:30,
							img:'img/neirong/u9.jpg',
							titlename:'森马短袖衬衫 2016夏装新款 男士休闲简约翻领纯棉直筒衬衣韩版潮',
							price:199.00,
							cost:'￥199.00',
							dis:'(10折)'
							}
					];

				var $shangH=$('.shangH');
				var $ul = $('<ul/>');
				// 第三个表格的信息
				$ul.html(goods2.map(function(item){
					return `
					<li data-id="${item.id}">
						<a href='#'>
							<img src="${item.img}">
						</a>
						<a href="#" class="titlename">
							${item.titlename}
						</a>
						<div>
							<h4>
								<em>
									<p>￥</p>
									<i>${item.price}</i>
								</em>
								<span>
									<u>${item.cost}</u>
									${item.dis}
									<strong><p>新品上市<p></strong>
								</span>
								
							</h4>
							<button>
									
								</button>
						</div>
						
					</li>
					`
				}).join(''));

				$ul.appendTo($shangH);






				var goods3 = [{
							id:31,
							img:'img/neirong/f4.jpg',
							titlename:'巴拉巴拉童鞋女童单鞋中大童2017夏季新款凉鞋儿童公主鞋子休闲夏',
							price:149.00,
							cost:'￥199.00',
							dis:'(7.5折)'
					}
				];

				var $shangF=$('.shangF');
				var $ul = $('<ul/>');
				// 第三个表格的信息
				$ul.html(goods3.map(function(item){
					return `
					<li data-id="${item.id}">
						<a href='#'>
							<img src="${item.img}">
						</a>
						<a href="#" class="titlename">
							${item.titlename}
						</a>
						<div>
							<h4>
								<em>
									<p>￥</p>
									<i>${item.price}</i>
								</em>
								<span>
									<u>${item.cost}</u>
									${item.dis}
									<strong><p>新品上市<p></strong>
								</span>
								
							</h4>
							<button>
									
								</button>
						</div>
						
					</li>
					`
				}).join(''));


				$ul.appendTo($shangF);



				var goods4 = [{
							id:32,
							img:'img/neirong/fv4.jpg',
							titlename:'巴拉巴拉童装男童牛仔裤中大童裤子2017新款儿童牛仔长裤男休闲裤',
							price:119.00,
							cost:'￥159.00',
							dis:'(7.5折)'
					}];

				var $shangFV=$('.shangFV');
				var $ul = $('<ul/>');

				$ul.html(goods4.map(function(item){
					return `
					<li data-id="${item.id}">
						<a href='#'>
							<img src="${item.img}">
						</a>
						<a href="#" class="titlename">
							${item.titlename}
						</a>
						<div>
							<h4>
								<em>
									<p>￥</p>
									<i>${item.price}</i>
								</em>
								<span>
									<u>${item.cost}</u>
									${item.dis}
									<strong><p>新品上市<p></strong>
								</span>
								
							</h4>
							<button>
									
								</button>
						</div>
						
					</li>
					`
				}).join(''));

				$ul.appendTo($shangFV);
		}
		


		// 楼梯效果
		$('#LoutiNav').on('mouseenter','a',function(){

			var $img = $(this).children().eq(0);
			var $idx = $(this).parent('li').index();
			
			$img.attr({src:'img/guding/a'+($idx+1*1)+'.jpg'});
			$img.removeClass().addClass('tu');

			

			}).on('mouseleave','a',function(){
				var $img = $(this).children().eq(0);
				var $idx = $(this).parent('li').index();
				// console.log($idx)
				$img.attr({src:'img/guding/0'+($idx+1*1)+'.jpg',border: '1px solid #e6e6e6;'});
				$img.removeClass().addClass('tu'+($idx+1*1));
				
			}).on('click','a',function(){
				var $idx = $(this).parent('li').index();
				
				
				// var arr = [492,1744,3044,4327,5012,5708];
				if($idx ===0 || $idx ===7){
					$('body').animate({scrollTop:0});
					
					
				}else{
					console.log($top);
					$top = $('.title'+$idx+'').offset().top;
					$('body').animate({scrollTop:$top});
						

				}
			
		});
		

		//给每个商品li移入添加类
		$('.contenter').on('mouseenter','li',function(){
			$(this).addClass('hover');
			})

			.on('mouseleave','li',function(){
				$(this).removeClass('hover')
		}).on('click','button',function(){
			// data('id')
			var $list = $(this).parent().parent().data('id');
			location.href = '../html/details.html?id='+ $list;
		});




			var qfy = 1;

		var ind = 0;
		// 下面的代码是飞入购物车效果
		var $goodsList = $('.imgtu');
		var $buy = $('.buy');
		var $right = $('.right ul');
		var $title = $('.title p');
		var $idx = $('#BarCart');
		
		var setli = $right[0];
		// var getli = setli.children;
		
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
			setCookie('goodslist',JSON.stringify(goodslist));
			

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
		
		

		// console.log(goodslist);

		$right.on('click','span',function(){
			var $culist = this.parentNode;
			
		
			var guid = $culist.getAttribute('data-guid');
				
			for(var i=0;i<goodslist.length;i++){
				if(goodslist[i].guid === guid){
					
					goodslist.splice(i,1);
					setCookie('goodslist',JSON.stringify(goodslist));
					location.reload();
					break;
				}
			}

			$culist.remove();
		
		})

		var $width = $('#dialog').outerWidth();
		var $height = $('#dialog').outerHeight();

		

			var $datalist = $('.shoptable tbody');
			var $goshop;
			var $tr;


		
			
		

		
		
		var xiaoji = $('.xiaoji');
		var reduce = $('.reduce');
		var syQty;
		var jiaQty;
		var qian = $('.qian');
		var total = $('.total');
		var $total1;
		var $total2;
		reduce.on('click',function(){
			syQty = 0;
			$total1 = 0;
			var $next = $(this).next();
			// console.log($next);
			var $culist = this.parentNode.parentNode.parentNode;
			var jisuan = $culist.children;
			console.log(jisuan);
			
			var guid = $culist.getAttribute('data-id');
				for(var i=0;i<goodslist.length;i++){

					if(goodslist[i].guid === guid){
						
						goodslist[i].qty--;
						
						setCookie('goodslist',JSON.stringify(goodslist));
						$next.val(goodslist[i].qty);
						// xiaoji.html(goods.price*goodslist[i].qty)
						break;
					}
				}	

				for(var i=0;i<goodslist.length;i++){
					syQty +=goodslist[i].qty ;
					$total1+= goodslist[i].price * goodslist[i].qty;
					if(goodslist[i].qty <= 0){
						
						goodslist.splice(i,1);
						setCookie('goodslist',JSON.stringify(goodslist));
						$culist.remove();
					break;
					}
				}
				qian.html(syQty);
				total.html($total1.toFixed(2)*1);

				$idx.text(syQty);
				$topright.text(syQty);
		});
		var $right = $('.right');
		$right.html(goodslist.map(function(item){
              		
               		return `<li data-guid=${item.guid}>
								<img src="${item.imgurl}">
								<p>${item.name}</p>
								<h4>￥${item.price}&times;${item.qty}</h4>
								<span class="btn-close">&times;</span>


               		`
               		
               	}).join(''));
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
		
		})
		console.log(666)
		console.log($('.qklogins'))
		$('.qklogins').on('mouseenter','dd',function(){
			$(this).show();
		}).on('mouseleave','dd',function(){
			$(this).hide();
		})

	})
})