function draw(id) {  
    var canvas = document.getElementById(id);  
    if (canvas == null)  
        return false;  
    var context = canvas.getContext('2d');  //取得上下文
    context.fillStyle = "#EEEEFF";  //填充的样式
    context.fillRect(0, 0, 400, 300); 
    context.fillStyle = "red";  
    context.strokeStyle = "blue";  //图形边框 的样式
    context.lineWidth=1;//设置图形边框的宽度
    context.fillRect(50,50,100,100);  //填充矩形 
    context.strokeRect(50,50,100,100);  //绘制矩形边框 
    context.clearRect(100,50,20,20);//将指定矩形区域中的图形擦除，使得矩形区域中颜色全部变为透明
}
