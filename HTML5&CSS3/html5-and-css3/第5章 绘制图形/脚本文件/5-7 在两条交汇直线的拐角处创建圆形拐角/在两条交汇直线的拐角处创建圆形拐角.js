function draw(id)
{
	var canvas=document.getElementById(id);
	if(canvas==null) return false;
	var context=canvas.getContext('2d');
	context.fillStyle="#eeeeff";
	context.beginPath();
	context.lineWidth=10;
	context.lineJoin="round";
	context.moveTo(20,20);
	context.lineTo(20,200);
	context.lineTo(200,200);
	context.stroke();
}

/*
 * miter 默认值，创建尖角拐角
 * round 创建圆形拐角
 * bevel 创建斜角拐角
 */