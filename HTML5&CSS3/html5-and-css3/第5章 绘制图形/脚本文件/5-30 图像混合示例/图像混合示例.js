function draw(id)
{
	var canvas=document.getElementById(id);
	if(canvas==null) return false;
	var context=canvas.getContext('2d');
	context.globalCompositeOperation="lighten";
	var image=new Image();
	image.src="tyl2.jpg";
	image.onload=function()
	{
		context.drawImage(image,0,0);
		var image2=new Image();
		image2.src="tyl3.jpg";
		image2.onload=function()
		{
			context.drawImage(image2,0,0);
		};
	};
}
