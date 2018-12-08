
var fk = document.getElementById('fk');
var imgs = fk.getElementsByClassName('img');
var lis = fk.getElementsByClassName('li');
var prev = fk.getElementsByClassName("prev")[0];
var next = fk.getElementsByClassName("next")[0];

var c = 0;
var i,j;

// 减少代码冗余函数
function fun(val1,val2){
	for(var val1=0;val1<imgs.length;val1++){
		imgs[val1].style.display = 'none';
		lis[val1].style.background = '#333';
	}
	imgs[val2].style.display = 'block';
	lis[val2].style.background = '#a10000';
}

// 控制轮播的函数
function run(){
	c++;
	c=c==3?0:c;
	// for(var i=0;i<imgs.length;i++){
	// 	imgs[i].style.display = 'none';
	// 	lis[i].style.background = '#333';
	// }
	// imgs[c].style.display = 'block';
	// lis[c].style.background = '#a10000';
	fun(i,c);
}

var timer = setInterval(run,1000);

// 鼠标移入事件
fk.onmouseover = function(){
	clearInterval(timer);
}
fk.onmouseout = function(){
	timer = setInterval(run,1000);
}

// 移入li事件
for(var i = 0 ;i<lis.length;i++){
	lis[i].xuhao = i;
	lis[i].onclick = function(){
		c = this.xuhao;
		// for(var j=0;j<lis.length;j++){
		// 	imgs[j].style.display = 'none';
		// 	lis[j].style.background = '#333';
		// }
		// imgs[c].style.display = 'block';
		// lis[c].style.background = '#a10000';
		fun(j,c);
	}
}

// 左右两侧的点击事件
prev.onclick = function(){
	c--;
	c=c==-1?2:c;
	// for(var j=0;j<lis.length;j++){
	// 	imgs[j].style.display = 'none';
	// 	lis[j].style.background = '#333';
	// }
	// imgs[c].style.display = 'block';
	// lis[c].style.background = '#a10000';
	fun(j,c);
}
next.onclick = function(){
	c++;
	c=c==3?0:c;
	// for(var j=0;j<lis.length;j++){
	// 	imgs[j].style.display = 'none';
	// 	lis[j].style.background = '#333';
	// }
	// imgs[c].style.display = 'block';
	// lis[c].style.background = '#a10000';
	fun(j,c);
}



