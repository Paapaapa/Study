function draw(id)
{
	var canvas=document.getElementById(id);
	if(canvas==null) return false;
	var context=canvas.getContext('2d');
	context.beginPath();
	context.moveTo(150,20);
	context.arcTo(150,100,50,20,30);//arcTo(控制点横坐标，控制点纵坐标，圆弧终点横坐标，圆弧终点纵坐标，圆弧半径)
	context.stroke();
}

//arcTo(控制点横坐标，控制点纵坐标，圆弧终点横坐标，圆弧终点纵坐标，圆弧横向半径，圆弧纵向半径，椭圆顺时针方向旋转角度)