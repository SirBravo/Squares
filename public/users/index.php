<?php
$server=$_SERVER["DOCUMENT_ROOT"];
include $server.'/db_con.php';
include $server.'/functions.php';
sec_session_start();
if (login_check($mysqli) == true) {
$uname=$_SESSION['username'];
?>
<html>
<head>
<link rel="stylesheet" href="styles.css"/>
<script type="text/javascript" src="conf.js"></script>
<script type="text/javascript" src="scripts.js"></script>
<script type="text/javascript" src="settings.js"></script>
<script type="text/javascript" src="news.js"></script>
<script type="text/javascript" src="elements.js"></script>
<script type="text/javascript">
function loaded() {
document.getElementById('name').innerHTML+="<i><?=$uname?>.</i>"; 
document.getElementById('date').innerHTML+='<i><?php $date = date_create(); echo date_format($date, "H:i:s") . " </i>on<i> " . date_format($date, "m-d-y"); ?></i>';
}</script>
</head>
<body onload='squared(bcr,bcg,bcb); elements(); loaded();'>
</body>
</html>
<?php 
} else {
header("Location: /redirect.php");
}
?>