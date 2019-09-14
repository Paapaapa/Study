<?php
$str=file_get_contents('php:// input');
$filename='副本_'.$_REQUEST['filename'];
$fp=fopen(iconv("utf-8","gbk",$filename),"w");
fwrite($fp,$str);
fclose($fp);
?>