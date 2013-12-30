<form id='lform' action="query.php" method="POST">
Search for user:<input type="text" name="uname"/><br>
<input type="submit"/>
</form>

<?php
include 'db_con.php';
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
if (isset($_POST['uname'])){
$uname = $_POST['uname'];
$result = mysqli_query($mysqli,"SELECT PID, Username, Email, Password FROM usq where username='$uname'");

echo "<table border='1' width='1000' height='100'>
<tr>
<th>PID</th>
<th>Username</th>
<th>Email</th>
<th>Password</th>
</tr>";

while($row = mysqli_fetch_array($result))
  {
  echo "<tr>";
  echo "<td>" . $row['PID'] . "</td>";
  echo "<td>" . $row['Username'] . "</td>";
  echo "<td>" . $row['Email'] . "</td>";
  echo "<td>" . $row['Password'] . "</td>";
  echo "</tr>";
  }
echo "</table>";

mysqli_close($mysqli);
}
?>