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
	<h1>编辑用户信息</h1>
</header>
<form id="form1" action="#">
	<ul>
         <li><span>*</span><label for="name">用户姓名：</label><input id="name" type="text" required="" value="?echo $obj->UserName;?>"/></li>
         <li><label for="birth">出生年月：</label><input type="date" id="birth" value="<?echo $obj->Birthday;?>" /></li>
	</ul>
	<input type="submit">
		<input type="reset">
</form>