function draw(id) 
{  
    var canvas = document.getElementById(id);  
    if (canvas == null)  
        return false;  
    var context = canvas.getContext('2d');  
   context.fillStyle="#eeeeff";
   context.fillRect(0,0,400,300);
   context.translate(200,50);
   context.fillStyle='rgba(255,0,0,0.25)';
   for(var i=0;i<50;i++)
   {
   	context.translate(25,25);//平移，向左平移25像素，向下平移25像素
   	context.scale(0.95,0.95);//扩大，（水平放大倍数，垂直放大倍数）
   	context.rotate(Math.PI/10);//旋转，正值顺时针旋转，负值逆时针旋转，旋转中心是坐标轴原点
   	context.fillRect(0,0,100,50);
   }
}
