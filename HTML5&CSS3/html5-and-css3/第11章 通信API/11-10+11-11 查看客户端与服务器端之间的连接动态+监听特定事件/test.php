<?php
header('Content-Type:text/event-stream');
header('Cache-Control:no-cache');//指定浏览器不缓存发送的数据，确保客户端实时显示服务器发送的数据
echo "event:test\n\n";//服务器端定义的事件名
echo "data:服务器端当前时间：".date('Y/m/d H:i:s')."\n\n";//定义服务器端向客户端发送的数据
flush();//向客户端发送事件流
?>

/*
echo "retry:5000\n\n"表示指定客户端每隔多长时间与服务器端建立一次连接并获取服务器端发送的事件流
echo "id:1\n\n" 表示指定事件ID，客户端可以通过事件对象 lastEventId属性获取事件ID
*/