var http=require('http');
var fs=require('fs');
var server=http.createServer(functio(req,res)
{
	if(req.url!=="favicon.ico")
	{
		req.on('data',function(data)
		{
			console.log('服务器端接收到数据：'+data);
		});
	}
	res.end();
}).listen(8020,"127.0.0.1");
