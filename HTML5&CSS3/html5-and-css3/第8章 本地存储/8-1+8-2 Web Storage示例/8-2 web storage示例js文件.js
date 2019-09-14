function saveStorage(id)
{  
    var target = document.getElementById(id);  
    var str = target.value;  
    sessionStorage.setItem("message",str); //临时保存，数据保存至session中，以键名加键值保存
    //或sessionStorage.message=str;//根据自定义属性保存
}  
function loadStorage(id)
{  
    var target = document.getElementById(id);  
    var msg = sessionStorage.getItem("message");//根据键名读取数据  
    //或 var msg=sessionStorage.message;//访问自定义属性获取数据
    target.innerHTML = msg;
}  
//localStorage示例 
function saveStorage(id)
{  
    var target = document.getElementById(id);  
    var str = target.value;  
    localStorage.setItem("message",str);  //永久保存，数据保存到本地，以键名加键值保存
    //或localStorage.message=str;//根据自定义属性保存
}  
function loadStorage(id)
{  
    var target = document.getElementById(id);  
    var msg = localStorage.getItem("message");//根据键名读取数据
    //或 var msg=localStorage.message;//访问自定义属性获取数据
    target.innerHTML = msg;  
}


/*
 * 不允许重复保存相同的键名，保存后可修改键值，不允许修改键名
 */