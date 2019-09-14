function draw(id)
{  
    var canvas = document.getElementById(id);  
    if (canvas == null)  
        return false;  
    var context = canvas.getContext('2d'); 
    context.fillStyle = "rgb(0, 0, 255)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgb(255, 255, 0)";
    context.fillRect(10, 20, 50, 50); 
    window.location =canvas.toDataURL("image/jpeg");//用toDataURL方法八绘画状态输出到一个data URL,然后重新装载，用户可直接保存装载后的文件
}

/*
 *  Data URL给了我们一种很巧妙的将图片“嵌入”到HTML中的方法。
 * 跟传统的用img标记将服务器上的图片引用到页面中的方式不一样，
 * 在Data URL协议中，图片被转换成base64编码的字符串形式，
 * 并存储在URL中，冠以mime-type。
 */