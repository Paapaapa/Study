<?php
$link=mysql_connect("localhost","root","root");
mysql_query("SET NAMES UTF8");
mysql_select_db("mysql");
$result=mysql_query('select * from users where id='.$_REQUEST['id'],$link);
if($result&&mysql_num_rows($result)>0)
{
	$obj=mysql_fetch_object($result);
}							
?>
<header id="div_head">
	<h1>查看用户信息</h1>
</header>
<form id="form1">
	<ul>
         <li><label>用户姓名：</label><?echo $obj->UserName;?></li>
         <li><label>出生年月：</label><?echo $obj->Birthday;?></li>
	</ul>
</form>
