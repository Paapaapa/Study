function draw(id)
{
	var canvas=document.getElementById(id);
	if(canvas==null) return false;
	var context=canvas.getContext('2d');
	var x,y;
	for(var j=1;j<50;j++)
	{
		context.save();//保存图形上下文的当前绘画状态到栈中
		context.fillStyle='#fff';
		x=75-Math.floor(Math.random()*150);
		y=75-Math.floor(Math.random()*150);
		context.translate(x,y);
		create5star(context);
		context.restore();//从栈中取出之前保存的状态，恢复图形上下文的绘画状态
	}
}
 

function create5star(context)
{
	var n=0;
	var dx=100;
	var dy=0;
	var s=50;
	context.beginPath();
	context.fillStyle='rgba(255,0,0,0.5)';
	var x=Math.sin(0);
	var y=Math.cos(0);
	var dig=Math.PI/5*4;
	for(var i=0;i<5;i++)
	{
		var x=Math.sin(i*dig);
		var y=Math.cos(i*dig);
		context.lineTo(dx+x*s,dy+y*s);
	}
	context.closePath();
}


//可以通过保存恢复机制实现
//取消裁剪区域，取消图像或图形变形，取消改变图形上下文的属性等