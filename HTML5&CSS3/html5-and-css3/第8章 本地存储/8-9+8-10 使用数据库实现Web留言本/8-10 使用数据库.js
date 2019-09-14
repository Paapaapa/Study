var datatable = null;  //定义表格
var db = openDatabase('MyData', '', 'My Database', 102400); 
//openDatabase(数据库名，版本号，数据库描述，数据库大小)
function init()
{  
    datatable = document.getElementById("datatable");  
    showAllData();  
}  
function removeAllData()
{  
    for (var i =datatable.childNodes.length-1; i>=0; i--) 
    {  
        datatable.removeChild(datatable.childNodes[i]);  
    }  
    var tr = document.createElement('tr');  
    var th1 = document.createElement('th');  
    var th2 = document.createElement('th');  
    var th3 = document.createElement('th');  
    th1.innerHTML = '姓名';  
    th2.innerHTML = '留言';  
    th3.innerHTML = '时间';  
    tr.appendChild(th1);  
    tr.appendChild(th2);  
    tr.appendChild(th3);  
    datatable.appendChild(tr);  
}  
function showData(row) 
{  
    var tr = document.createElement('tr');  
    var td1 = document.createElement('td');  
    td1.innerHTML = row.name;  
    var td2 = document.createElement('td');  
    td2.innerHTML = row.message;  
    var td3 = document.createElement('td');  
    var t = new Date();  
    t.setTime(row.time);  
    td3.innerHTML=t.toLocaleDateString()+" "+t.toLocaleTimeString();  
    tr.appendChild(td1);  
    tr.appendChild(td2);  
    tr.appendChild(td3);  
    datatable.appendChild(tr);    
}  
function showAllData() 
{  //执行事务处理，防止访问数据库或执行相关操作时受到打扰
    db.transaction(function(tx) 
    {  //tx.executeSql(执行的SQL语句，语句中使用到的参数数组，执行语句成功后回调函数，执行语句出错的回调函数)
        tx.executeSql('CREATE TABLE IF NOT EXISTS MsgData(name TEXT, message TEXT, time INTEGER)',[]);  
        tx.executeSql('SELECT * FROM MsgData', [], function(tx, rs) 
        {  //function(transaction对象，执行查询操作返回的结果数据集对象)
            removeAllData();  
            for(var i = 0; i < rs.rows.length; i++) //rows属性保存了查询到的每条记录
            {  
                showData(rs.rows[i]);  //可采用rows[index]或rows.item(index)依次取出每条数据
            }  
        });  
    });  
}  
function addData(name, message, time) 
{  

    db.transaction(function(tx) 
    {  //tx.executeSql(执行的SQL语句，语句中使用到的参数数组，执行语句成功后回调函数，执行语句出错的回调函数)
        tx.executeSql('INSERT INTO MsgData VALUES(?, ?, ?)',[name, message, time],function(tx, rs) 
        {  //function(transaction对象，执行查询操作返回的结果数据集对象)
            alert("成功保存数据!");  
        },  
        function(tx, error) 
        {  //function(transaction对象，出错时的错误文字信息)
            alert(error.source + "::" + error.message);  
        });  
    });  
}  
function saveData()
{  
    var name = document.getElementById('name').value;  
    var memo = document.getElementById('memo').value;  
    var time = new Date().getTime();  
    addData(name,memo,time);  
    showAllData();  
}
