<?php
$str=file_get_contents('php:// input');
echo '服务器接收数据：'.$str;
flush();
?>