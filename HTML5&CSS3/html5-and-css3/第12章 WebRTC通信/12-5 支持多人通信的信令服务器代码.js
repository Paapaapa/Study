var port=8080;
var io=require('socket.io').listen(port);

io.sockets.on('connection',function(socket)
//进入房间
{
	socket.on('enter',function(roomname)
	{
		socket.set('roomname',roomname);
		socket.join(roomname);
	});
	
	socket.on('message',function(message)
	{
		//在message中追加发送方id（识别对方）
		message.from=socket.id;
		
		var target=message.sendto;
		if(target)
		{//已指定目标方的时候，向其发送消息
			io.sockets.socket(target).emit('message',message);
			return;
		}
		
		//未指定目标方的时候广播
		emitmessage('message',message);
	});
	socket.on('disconnect',function()
	{
		emitmessage('user disconnected');
	});
	//只向房间内广播消息
	function emitmessage(type,message)
	{
		var roomname;
		socket.get('roomname',function(err,_room)
		{
			roomname=_room;
		});
		if(roomname)
		{
			socket.broadcast.to(roomname).emit(type,message);
		}else{
			socket.broadcast.emit(type,message);
		}
	}
});
