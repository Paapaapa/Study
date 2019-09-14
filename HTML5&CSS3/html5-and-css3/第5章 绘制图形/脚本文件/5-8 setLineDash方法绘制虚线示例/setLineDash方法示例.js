function draw(id)
{
	var canvas=document.getElementById(id);
	if(canvas==null) return false;
	var context=canvas.getContext('2d');
	context.fillStyle="#eeeeff";
	context.beginPath();
	context.lineWidth=5;
	//context.setLineDash([5])
	//context.setLineDash([5,10])//第一个数值代表线段长度，第二个数值表示线段与线段之间的距离
	//context.setLineDash([5,10,15,20])
	context.setLineDash([5,10,15])//相当于[5,10,15,5,10,15]
	context.moveTo(20,20);
	context.lineTo(200,20);
	context.stroke();
	alert(context.getLineDash());
}

