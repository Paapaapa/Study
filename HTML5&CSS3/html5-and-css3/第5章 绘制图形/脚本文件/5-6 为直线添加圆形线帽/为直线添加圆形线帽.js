function draw(id)
{
	var canvas=document.getElementById(id);
	if(canvas==null) return false;
	var context=canvas.getContext('2d');
	context.fillStyle="#eeeeff";
	context.beginPath();
	context.lineWidth=10;
	context.lineCap="round";
	context.moveTo(20,20);
	context.lineTo(20,200);
	context.stroke();
}

//butt:默认属性值，不为直线添加线帽
//round:添加圆形线帽
//square:添加正方形线帽