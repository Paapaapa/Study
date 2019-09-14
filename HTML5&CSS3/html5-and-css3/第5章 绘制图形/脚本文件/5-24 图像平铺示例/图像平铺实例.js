function draw(id)
{
	var canvas=document.getElementById(id);
	if(canvas==null) return false;
	var context=canvas.getContext('2d');
	var image=new Image();
	image.src="tyl3.jpg";
	image.onload=function()
	{
		drawimg(canvas,context,image);
	};
}

function drawimg(canvas,context,image)
{
	var scale=5;
	var n1=image.width/scale;
	var n2=image.height/scale;
	var n3=canvas.width/n1;
	var n4=canvas.height/n2;
	for(var i=0;i<n3;i++)
	for(var j=0;j<n4;j++)
	context.drawImage(image,i*n1,j*n2,n1,n2);
}
