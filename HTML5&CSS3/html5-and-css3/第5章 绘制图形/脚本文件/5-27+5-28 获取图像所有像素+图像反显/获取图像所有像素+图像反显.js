function draw(id) 
{  
    var canvas = document.getElementById(id);  
    if (canvas == null)  
        return false;  
    var context = canvas.getContext('2d');  
   image=new Image();
    image.src="tyl3.jpg";
   image.onload=function()
   {
   	  context.drawImage(image,0,0);
   	  var imgdata=context.getImageData(0,0,image.width,image.height);//获取图像中像素，getImageData(获取区域的起点横坐标，获取区域的起点纵坐标，获取区域的宽度，获取区域的高度)
   	  for(var i=0,n=imgdata.data.length;i<n;i+=4)
   	  {//imgdata变量是一个CanvasPixelArray对象，有height,width,data等属性
   	  	//data属性是一个保存像素数据的数组，内容如【r1,g1,b1,a1,r2,g2,b2,a2,r3,g3,b3,a3,···】
   	  	imgdata.data[i+0]=255-imgdata.data[i+0];//red
   	  	imgdata.data[i+1]=255-imgdata.data[i+1];//green
   	  	imgdata.data[i+2]=255-imgdata.data[i+2];//blue
   	  }
   	  context.putImageData(imgdata,0,0);
   	  //把处理过的图像重新绘制到画布上去，putImageData(像素数组，重新绘制图像的起点横坐标，重新绘制图像的起点纵坐标[,给出一个矩形的起点横坐标，纵坐标，宽度，高度])
   	  //如果使用后四个参数，表示只绘制像素数组中在这个矩形范围内的图像
   };
}
