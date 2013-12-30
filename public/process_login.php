<?php
include 'db_con.php';
include 'functions.php';
sec_session_start(); // Our custom secure way of starting a php session. 
 
if(isset($_POST['username'], $_POST['password'])) { 
   $uname = $_POST['username'];
   $password = $_POST['password']; // The hashed password.
   $password = hash('sha512', $password);
   if(login($uname, $password, $mysqli) == true) {
      // Login success
      //echo 'Success: You have been logged in!';
      header('Location: ./users');
   } else {
      // Login failed
      header('Location: ./index.php');
   }
} else { 
   // The correct POST variables were not sent to this page.
   echo 'Invalid Request';
}
?>