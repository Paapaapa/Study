<?php
header('Content-Type:text/event-stream');
header('Cache-Control:no-cache');//指定浏览器不缓存发送的数据，确保客户端实时显示服务器发送的数据
echo "event:test\n\n";
session_start();
if(isset($_SESSION['EVENT_ID']))
$_SESSION['EVENT_ID']=$_SESSION['EVENT_ID']+1;
else$_SESSION['EVENT_ID']=1;
echo "id:".$_SESSION['EVENT_ID']."\n\n";
if(!isset($_SESSION['data']))
$_SESSION['data']=array();
array_push($_SESSION['data'],$_SESSION['EVENT_ID']);
$headers=apache_request_headers();
//$headers=parseRequestHeaders();
foreach($headers as $header=>$value)
{
	if($header=="Last-Event-Id")
	$lastID=$value;
}
if($lastID+1==$_SESSION['EVENT_ID'])
echo "data:服务器端当前数据：".$_SESSION['EVENT_ID'."\n\n";
else{
	for($i=$lastID;$i<=$_SESSION['EVENT_ID']-1;$i++)
		{
			echo "data:服务器端当前数据：".$_SESSION['data'][$i]."\n\n";
		}
}
flush();
function parseRequestHeaders()
{
	$headers=array();
	foreach($_SERVER as $key=>$value)
	{
		if(substr($key,0,5)<>'HTTP_')
			{
				continue;
			}
			$header=str_replace(' ','-',ucwords(str_replace('_',' '.strtolower(substr($key,5)))));
			$headers[header]=$value;
	}
	return $headers;
}
?>