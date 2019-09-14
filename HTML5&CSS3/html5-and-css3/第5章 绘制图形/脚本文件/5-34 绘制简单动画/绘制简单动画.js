var context;
var width,height;
var i;
function draw(id)
{
    var canvas = document.getElementById(id);  
    if (canvas == null)  
        return false;  
    context = canvas.getContext('2d'); 
    width=canvas.width;
    height=canvas.height;
    i=0;
    setInterval(rotate,1000);         //十分之一秒,单位是毫秒，设置动画的间隔时间
}
function rotate()
{   
    context.clearRect(0,0,width,height);//擦除
    context.fillStyle = "red";
    context.fillRect(i, 0, 20, 20);
    i=i+20;
}
