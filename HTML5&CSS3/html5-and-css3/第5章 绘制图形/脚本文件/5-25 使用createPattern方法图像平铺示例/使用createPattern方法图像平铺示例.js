function draw(id)
{
	var canvas=document.getElementById(id);
	if(canvas==null) return false;
	var context=canvas.getContext('2d');
	var image=new Image();
	image.src="tyl3.jpg";
	image.onload=function()
	{
		var ptrn=context.createPattern(image,'repeat');//createPattern(image,'repeat'或'no-repeat'或'repeat-x'或'repeat-y')
		context.fillStyle=ptrn;
		context.fillRect(0,0,400,300);
	};
}