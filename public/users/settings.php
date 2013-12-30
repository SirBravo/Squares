<?php
include($_SERVER['DOCUMENT_ROOT'].'/db_con.php');
include($_SERVER['DOCUMENT_ROOT'].'/functions.php');
sec_session_start();
if (login_check($mysqli) == true) {
$uname = $_SESSION['username'];
if (isset($_POST['red'])) {
$red=$_POST['red'];
$green=$_POST['green'];
$blue=$_POST['blue'];
$file="conf.js";
$tmp = fopen($file,"r");
$content = fread($tmp, filesize($file));
fclose($tmp);
$content = preg_replace('/var bcr=(.*?);/','var bcr='.$red.';', $content);
$content = preg_replace('/var bcg=(.*?);/','var bcg='.$green.';', $content);
$content = preg_replace('/var bcb=(.*?);/','var bcb='.$blue.';', $content);
$tmp = fopen($file,"w");
fwrite($tmp,$content);
fclose($tmp);
sleep(3);
header('Location: /index.php');
} } else {
header("Location: /redirect.php");
} ?>