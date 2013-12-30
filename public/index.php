<html>
<head>
<link rel="stylesheet" href="styles.css" />
<title>Squares: For those who don't fit in</title>
<script type="text/javascript" src="scripts.js"></script>
</head>
<body onload="squared();">
<div id="canvas"></div><br><br><br><Br><br>
<div id="header">
<h1 id="title">Squares</h1><hr>
<h2><i>For Those Who Don't Fit In</i></h2>
</div>
<div id="main">
<?php
include 'db_con.php';
include 'functions.php';
sec_session_start();
if (login_check($mysqli) == true) {
header("Location: ./users");
} else { ?>
<form id="login" action="process_login.php" method="POST"><br>
<input class="text" name="username" type="text" value="Username" onfocus="if (this.value=='Username') this.value='';" onblur="if(this.value == '') this.value = 'Username';" autofocus /><br>
<input class="text" name="password" type="password" value="Password" onfocus="if (this.value=='Password') this.value='';" onblur="if(this.value == '') this.value = 'Password';" /><br><br>
<input type="submit" value="Submit" /><br>
<h2>Still need a Square? Sign up <a href="register.php">here!</a></h2></form>
<?php } ?>
</div>
</body>
</html>
