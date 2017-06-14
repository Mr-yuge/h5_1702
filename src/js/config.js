require.config({
	urlArgs:'v='+ Date.now(),
	paths:{
		jquery:'../lib/jquery-3.2.1',
		gdszoom:'../lib/jquery-gdszoom/jquery.gdszoom',
		lunbotu:'../lib/jquery-lxCarousel/jquery.lxCarousel',
		common:'common'
	},
	shim:{
		gdszoom:['jquery'],
		lunbotu:['jquery']
	}
})