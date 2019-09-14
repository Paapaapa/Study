function saveStorage(id)
{
    var data = document.getElementById(id).value;
    var time = new Date().getTime();//将时间作为键名
    localStorage.setItem(time,data);
    alert("数据已保存。");
    loadStorage('msg');
}
function loadStorage(id)
{
    var result = '<table border="1">';
    for(var i = 0;i < localStorage.length;i++)
    {
        var key = localStorage.key(i);//localStorage.key(index)：获取与索引号对应的键名，索引从0开始
        var value = localStorage.getItem(key);
        var date = new Date();
        date.setTime(key);
        var datestr = date.toGMTString();//键名本来就是时间，将键名转换为正确的时间并字符串化输出
        result += '<tr><td>' + value + '</td><td>' + datestr + '</td></tr>';
    }
    result += '</table>';
    var target = document.getElementById(id);
    target.innerHTML = result;
}
function clearStorage()
{
    localStorage.clear();//清除localstorage中全部数据
    alert("全部数据被清除。");
    loadStorage('msg');
}
