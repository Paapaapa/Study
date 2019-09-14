function draw(id) 
{  
    var canvas = document.getElementById(id);  
    if (canvas == null)  
        return false;  
    var context = canvas.getContext('2d');  
    context.fillStyle = "#EEEEFF";  
    context.fillRect(0, 0, 400, 300);  
    var n = 0; 
    for(var i = 0; i < 10; i++) 
    {  
        context.beginPath();  //开始创建路径
        //context.arc(i * 25, i * 25, i * 10, 0, Math.PI * 2, true); //创建圆形路径
        context.ellipse(i * 25, i * 25, i * 10, i*20,30,0, Math.PI * 2, true); //创建椭圆路径 
        context.closePath();  //关闭路径
        context.fillStyle = 'rgba(255, 0, 0, 0.25)';  
        context.fill();  //绘制图形
    }     
}


 //创建椭圆路径：context.ellipse(x,y,rx,ry,tation,startangle,endangle,是否逆时针)
 
 