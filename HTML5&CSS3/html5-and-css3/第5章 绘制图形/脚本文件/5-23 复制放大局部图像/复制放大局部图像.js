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
	var i=0;
	context.drawImage(image,0,0,100,100);
	context.drawImage(image,23,5,57,80,110,0,100,100);
}


//drawImage(图片对象，复制原图像的被复制区域在画布中的起始横坐标，复制原图像的被复制区域在画布中的起始纵坐标，
	被复制区域的宽度，被复制区域的高度，
	复制后的目标图像在画布中的起始横坐标，复制后的目标图像在画布中的起始纵坐标，
	复制后的目标图像的宽度,复制后的目标图像的高度)
