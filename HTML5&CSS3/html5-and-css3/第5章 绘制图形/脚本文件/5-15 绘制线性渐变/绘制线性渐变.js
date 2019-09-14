function draw(id) 
{  
    var canvas = document.getElementById(id);  
    if (canvas == null)  
        return false;  
    var context = canvas.getContext('2d');  
    var g1 = context.createLinearGradient(0,0,0,300);  //createLinearGradient(渐变起始点横坐标，渐变起始点纵坐标，渐变终点横坐标，渐变终点纵坐标)
    g1.addColorStop(0,'rgb(255,255,0)');  //addColorStop(偏移量，颜色)
    g1.addColorStop(1,'rgb(0,255,255)');  
    context.fillStyle = g1;  
    context.fillRect(0, 0, 400, 300);  
    var n = 0;  
    var g2 = context.createLinearGradient(0,0,300,0);  
    g2.addColorStop(0,'rgba(0,0,255,0.5)');  
    g2.addColorStop(1,'rgba(255,0,0,0.5)');  
    for(var i = 0; i < 10; i++) 
    {  
        context.beginPath();  
        context.fillStyle = g2;  
        context.arc(i* 25, i* 25, i* 10, 0, Math.PI * 2, true);  
        context.closePath();  
        context.fill();  
    }     
}





