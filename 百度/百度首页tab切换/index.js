$(function(){

	$('.right li').click(function() {
		// 获得点击的li序号
		var _index = $(this).index();
		$('.menu_content li').eq(_index+1).css({'display':'block'}).siblings('li').css({'display':'none'});
		$(".left p").removeClass('active');
		$(this).addClass('active').siblings('li').removeClass('active');
	});

	$(".left p").click(function() {
		$(".menu_content li").eq(0).css({'display':"block"}).siblings('li').css({'display':"none"});
		$(this).addClass('active');
		$(".menu li").removeClass('active');
	});
})






