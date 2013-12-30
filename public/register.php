<html>
<head>
<link rel="stylesheet" href="styles.css" />
<title>Squares: Sign Up</title>
<script type="text/javascript" src="scripts.js"></script>
</head>
<body onload="squared();">
<div id="canvas"></div><br>
<div id="header">
<h1 id="title">Sign Up</h1><hr>
<h2><i></i></h2>
</div>
<form id="login" action="register.php" method="POST">
<input type="text" name="username" id="username" value="Username" onfocus="if (this.value=='Username') this.value='';" onblur="if(this.value == '') this.value = 'Username';" autofocus><br>
<input type="text" name="email" id="email" value="Email" onfocus="if (this.value=='Email') this.value='';" onblur="if(this.value == '') this.value = 'Email';"><br>
<input type="password" name="password" id="password" value="Password" onfocus="if (this.value=='Password') this.value='';" onblur="if(this.value == '') this.value = 'Password';"><br>
<input type="password" name="pass2" id="password" value="Repeat" onfocus="if (this.value=='Repeat') this.value='';" onblur="if(this.value == '') this.value = 'Repeat';"><br><br>
<input type="submit" value="Submit"/><br>

<?php
include 'db_con.php';
include 'functions.php';
sec_session_start();
if ($_POST['username']!="" AND $_POST['email']!="" AND $_POST['password']!="" AND $_POST['pass2']!="") {
$uname = $_POST['username'];
$email = $_POST['email'];
$pass1 = $_POST['password'];
$pass2 = $_POST['pass2'];
$message = "";
$pass = hash('sha512', $pass1);

if (mysqli_connect_errno($mysqli))
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
} 
$uresult = mysqli_query($mysqli,"SELECT * FROM usq where Username='$uname'");
$num_uresults = mysqli_num_rows($uresult);
$eresult = mysqli_query($mysqli,"SELECT * FROM usq where Email='$email'");
$num_eresults = mysqli_num_rows($eresult);

if ($num_uresults>0) {
$message = "Username is already in use.";
}
if ($num_eresults>0) {
$message = $message . " Email is already in use.";
}
if ($pass1!=$pass2) {
$message = $message . " Passwords do not match.";
}

if ($message!="") {
echo "<script type='text/javascript'>
document.getElementById('username').value='" . $uname . "';
document.getElementById('email').value='" . $email . "';</script>";
echo $message;
} else {
$sql="insert into usq (Username, Email, Password) Values ('$uname', '$email', '$pass')";

if (!mysqli_query($mysqli,$sql)) {
die("Error: " . mysqli_error($mysqli));
}
mkdir("users/" . $uname, 0777);
chmod("users/" . $uname, 0777);
copy("users/default.php","users/".$uname."/conf.js");
chmod("users/".$uname."/conf.js",0777);
echo "1 record added";
   if(login($uname, $pass, $mysqli) == true) {
      header('Location: ./users');
   } else {
      echo "Internal Database Error";
   }
}
mysqli_close($mysqli);
} else {
echo "*All fields must be completed";
}
?>
<Br><br><h2>Already have your Square? Log in <a href="index.php">here!</a></h2></form></body></html>