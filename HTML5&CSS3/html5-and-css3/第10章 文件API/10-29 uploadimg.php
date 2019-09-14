<?php
$data=$GLOBALS['HTTP_RAW_POST.DATA'];
$file=fopen("test.jpg","w");
fwrite($file,$data);
fclose($file);
?>