function draw(id)
{
	var canvas=document.getElementById(id);
	if(canvas==null) return false;
	var context=canvas.getContext('2d');
	context.fillStyle='#eeeeff';
	context.fillRect(0,0,400,300);
	var image=new Image();
	image.src="tyl3.jpg";
	image.onload=function()
	{
		drawimg(context,image);
	};
}

function drawimg(context,image)
{
	for(var i=0;i<7;i++)
	context.drawImage(image,0+i*50,0+i*25,100,100);//drawImage(图片对象，图片在画布中的起始横坐标，图片在画布中的起始纵坐标，绘制宽度，绘制高度)
}


//也可以drawImage(图片对象，图片在画布中的起始横坐标，图片在画布中的起始纵坐标)
