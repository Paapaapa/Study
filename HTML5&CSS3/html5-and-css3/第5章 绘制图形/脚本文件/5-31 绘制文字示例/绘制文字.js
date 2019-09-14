function draw(id) 
{  
    var canvas = document.getElementById(id);  
    if (canvas == null)  
        return false;  
    var context=canvas.getContext('2d'); 
    context.fillStyle= '#00f';
    context.font= 'italic 30px 楷体';
    context.textBaseline = 'top';
    //填充字符串
    context.fillText  ('示例文字', 0, 0);//fillText(绘制的文字，绘制文字起点横坐标，绘制文字起点纵坐标，[显示文字的最大宽度])
    context.font='bold  30px 楷体';
    //轮廓字符串
    context.strokeText('示例文字', 0, 50);//strokeText(绘制的文字，绘制文字起点横坐标，绘制文字起点纵坐标，[显示文字的最大宽度])
}
