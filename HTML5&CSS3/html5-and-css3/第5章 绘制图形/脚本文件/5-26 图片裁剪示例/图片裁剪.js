function draw(id) 
{  
    var canvas = document.getElementById(id);  
    if (canvas == null)  
        return false;  
    var context = canvas.getContext('2d');  
   var gr=context.createLinearGradient(0,400,300,0);
   gr.addColorStop(0,'rgb(255,255,0)');
   gr.addColorStop(1,'rgb(0,255,255)');
   context.fillStyle=gr;
   context.fillRect(0,0,400,300);
   image=new Image();
   image.onload=function()
   {
   	drawimg(context,image);
   };
   image.src="tyl3.jpg";
}

function drawimg(context,image)
{
	create5starclip(context);
	context.drawImage(image,-50,-150,300,300);
}

function create5starclip(context)
{
	var n=0;
	var dx=100;
	var dy=0;
	var s=150;
	context.beginPath();
	context.translate(100,150);
	var x=Math.sin(0);
	var y=Math.cos(0);
	var dig=Math.PI/5*4;
	for(var i=0;i<5;i++)
	{
		var x=Math.sin(i*dig);
		var y=Math.cos(i*dig);
		context.lineTo(dx+x*s,dy+y*s);
	}
	context.clip();//使用上下文对象的clip()方法实现图像裁剪功能
}

/*
图像裁剪功能指在画布内使用路径,只绘制该路径所包括区域内的图像,不绘制路径外部图像
裁剪区域设置好后，所有图像都可以使用
*/