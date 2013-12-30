<?php
include($_SERVER['DOCUMENT_ROOT'].'/db_con.php');
include($_SERVER['DOCUMENT_ROOT'].'/functions.php');
sec_session_start();
if (login_check($mysqli) == true) {
$uname = $_SESSION['username'];
if (isset($_POST['ptext'])) {
$ptext=$_POST['ptext'];
$file="news.js";
$tmp = fopen($file,"r");
$content = fread($tmp, filesize($file));
fclose($tmp);
$content = preg_replace('/];/',','."\n".'"'.$ptext.'"];', $content);
$tmp = fopen($file,"w");
fwrite($tmp,$content);
fclose($tmp);
sleep(3);
header('Location: /index.php');
} } else {
header("Location: /redirect.php");
} ?>