function draw(id) 
{  
    var canvas = document.getElementById(id);  
    if (canvas == null)  
        return false;  
    var context = canvas.getContext('2d');  
   context.fillStyle="#eeeeff";
   context.fillRect(0,0,400,300);
   context.translate(200,50);
   for(var i=0;i<50;i++)
   {
   	context.translate(25,25);//平移，向左平移25像素，向下平移25像素
   	context.scale(0.95,0.95);//扩大，（水平放大倍数，垂直放大倍数）
   	context.rotate(Math.PI/10);//旋转，正值顺时针旋转，负值逆时针旋转，旋转中心是坐标轴原点
   	create5star(context);
   	context.fill();
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
