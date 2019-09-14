onconnect=function(e)
{
	var port=e.ports[0];//这是该页面中SharedWorker对象的port属性值
	port.postMessage('你好');
}
