function draw(id)
{
	var canvas=document.getElementById(id);
	if(canvas==null) return false;
	var context=canvas.getContext('2d');
		var path1=new Path2D("M10 10 h 80 v 80 h -80 z");
		context.fill(path1);
}

/*
 * M10 10 表示起点在（10，10）
 * h 80表示横向绘制80个像素
 * v 80表示纵向绘制80个像素
 * h-80表示横向反向绘制80个像素
 * z表示绘制到起点处
 */