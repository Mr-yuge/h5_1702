require(['config'],function(){

	require(['jquery','gdszoom','lunbotu'],function($,gds,lbt){
		var pageNodo = 1;
		$.ajax({
			url:'../api/list.php',
			dataType:'json',
			data:{
				page:pageNodo,
				qty:10
			},
			success:function(data){
				console.log(data)

				//显示分页
				var pageQty = Math.ceil(res.totle/res.qty);

				var page_str = '';
				for(var i=0;i<pageQty;i++){
					
				}
			}
		})

	})
})