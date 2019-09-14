
var host="ws://localhost:8005/socket";
var webSocket=new WebSocket(host);
var userName;
var userAge;
var successFlag;
var currentTime;
webSocket.onmessage=function(event)
{
    var DataBase=JSON.parse(event.data);
    userName= DataBase.userName;
    userAge= DataBase.userAge;
    successFlag=false;
    if(DataBase.DataType=="SQLServer")
    { 
        //在SQL Server数据库中插入数据
        successFlag=InsertSQLData();
    }
    else if(DataBase.DataType=="ORACLE")
    {
        //在ORACLE数据库中插入数据
        successFlag=InsertORACLEData();
    }
    currentTime= new Date();
    webSocket.send(JSON.stringify({
        result:successFlag,
        time: currentTime}
    ));
}

/*使用WebSocket API发送ArrayBuffer对象
var host="ws://localhost:8005/socket";
var websocket=new WebSocket(host);
var img=canvas_context.getImageData(0,0,400,320);
var binary=new Uint8Array(img.data.length);
for(var i=0;i<img.data.length;i++)
{
	binary[i]=img.data[i];
}
websocket.send(binary.buffer);
*/

/*使用WebSocket API发送Blob对象
 * var host="ws://localhost:8005/socket";
var websocket=new WebSocket(host);
var file=document.getElementById('file1').files[0];
websocket.send(file);
 */


/*使用WebSocket API接收ArrayBuffer对象和Blob对象
 * websocket.binaryType='arraybuffer';
 * websocket.onmessage=function(e)
 * {
 * 	console.log(e.data.byteLength);
 * };
 */