onmessage=function(event){
    var intArray=new Array(100);    //随机数组
    //生成100个随机数
    for(var i=0;i<100;i++)
        intArray[i]=parseInt(Math.random()*100);
        //创建子线程
    var workers=new Worker("14-8 worker2.js");
    //把随机数组提交给子线程进行挑选工作
    workers.postMessage(JSON.stringify(intArray));
    workers.onmessage = function(event) {
        //把挑选结果返回主页面
        postMessage(event.data);
    }
}
