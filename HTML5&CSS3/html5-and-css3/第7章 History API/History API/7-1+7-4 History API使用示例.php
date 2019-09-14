<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>History API使用示例</title>
	</head>
	<script>
		window.addEventListener("popstate",function(e){
			//监听浏览器窗口的popstate事件，当用户单击前进或后退按钮时触发的事件
			//读取触发事件的事件对象的state属性（pushState的第一个参数，其中保存了向浏览器历史记录添加记录时同步保存的对象）
			if(e.state)
			loadpage(e.state.userType,e.state.id);
		});
		
		function btndetail(btn,id)
		{
			var userType=btn.parentElement.parentElement.children[1].innerHTML;
			if(loadpage(userType,id))
			{
				var state=new Object();
				state.userType=userType;
				state.id=id;
				if(userType=="普通用户")
				history.pushState(state,null,"edit.php?id="+id);
				//History API的pushState方法在加载完readonly.php文件后，
				//将该文件的URL地址添加到浏览器的历史记录中
				//pushState(保存一个当用户点击浏览器后退或前进按钮时可以使用的数据的对象，
				//用于设置浏览器窗口标题的一个字符串，
				//将出现在用户点击后退或前进按钮后浏览器地址栏中的URL地址）
				else
				history.pushState(state,null,"readonly.php?id="+id);
			}
		}
		
		function loadpage(userType,id)
		{
			if(userType=="普通用户")
			{
				var req=new XMLHttpRequest();
				req.open("GET","edit.php?id="+id,false);
				req.send(null);
				if(req.status==200)
				{
					document.getElementById("sectiondetail").innerHTML=
					req.responseText;
					return true;
				}
				return false;
			}
			else
			{
				var req=new XMLHttpRequest();
				req.open("GET","readonly.php?id="+id,false);
				req.send(null);
				if(req.status==200)
				{
					document.getElementById("sectiondetail").innerHTML=
					req.responseText;
					return true;
				}
				return false;
			}
		}
	</script>
	<body>
		<section>
			<h1>用户信息一览表</h1>
			<div id="infotable">
				<table  id="datatable">
					<tr>
						<th>用户ID</th>
						<th>用户类型</th>
						<th>用户姓名</th>
						<th width="50px">&nbsp;</th>
					</tr>
					<?php
						$link=mysql_connect("localhost","root","root");
						mysql_query("SET NAMES UTF8");
						mysql_select_db("mysql");
						$result=mysql_query('select * from users',$link);
						if($result&&mysql_num_rows($result)>0)
						{
							while($obj=mysql_fetch_object($result))
							{
					?>
					<tr>
						<td><?echo $obj->id;?></td>
						<?if($obj->UserType=="0")
							{
					    ?>
					    <td>管理员</td>
							<?}else{?>
						<td>普通用户</td>		
						<?	} ?>
						<td><?echo $obj->UserName;?></td>	
						<td width="50px">
							<input type="button" value="详细" id="btndetail" onclick="btndetail(this,<?echo $obj->id;?>)"/>
						</td>
					</tr>
						<?}?>						
				</table>
				<?}?>
			</div>
		</section>
		<section id="sectiondetail">
			
		</section>
	</body>
</html>
