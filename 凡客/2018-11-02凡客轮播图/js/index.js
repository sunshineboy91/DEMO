
var c=0;
function run(){
 	c++;
 	c = c==3?0:c;
 	$('.fk .imgs').eq(c).stop().fadeIn(200).siblings('img').stop().fadeOut(200);
 	$(".fk .li_").eq(c).css('background',"#a10000").siblings('li').css("background",'#333');
}
var timer = setInterval(run,1000);

$(".fk").hover(function() {
	clearInterval(timer);
}, function() {
	timer = setInterval(run,1500);
});

for(var i=0;i<$('.li_').length;i++){
	$(".li_").mouseenter(function(){
		c = $(this).index();
		$('.fk .imgs').eq(c).stop().fadeIn(200).siblings('img').stop().fadeOut(200);
 		$(".fk .li_").eq(c).css('background',"#a10000").siblings('li').css("background",'#333');
	});
}

$('.l').click(function(){
	c--;
	c=c==-1?2:c;
	$('.fk .imgs').eq(c).stop().fadeIn(200).siblings('img').stop().fadeOut(200);
 	$(".fk .li_").eq(c).css('background',"#a10000").siblings('li').css("background",'#333');
});
$('.r').click(function(){
	c++;
	c=c==3?0:c;
	$('.fk .imgs').eq(c).stop().fadeIn(200).siblings('img').stop().fadeOut(200);
 	$(".fk .li_").eq(c).css('background',"#a10000").siblings('li').css("background",'#333');
});








