var slist='<div id="settings"><br><a onclick="showhide(\'settings\',\'colorchange\');">Background</a><br></div>';
var cols='<div class="settings" id="colorchange"><br>Customize Your Colors:<form action="settings.php" method="POST"><br><table style="margin:auto; color:white; text-align:right;"><tr><td><div style="width:100px; height:100px;" id="showcolor"></div></td><td>Red:  <input id="rs" type="range" min="0" max="255" step="1" name="red" onchange="displaycolor(\'rs\');" /><Br>Green:  <input id="gs" type="range" min="0" max="255" step="1" name="green" onchange="displaycolor(\'gs\');" /><br>Blue:  <input id="bs" type="range" min="0" max="255" step="1" name="blue" onchange="displaycolor(\'bs\');" /><br><input type="submit" value="Save Color"/></td></tr></table></form></div>';
var cpost='<div class="settings" id="post"><br>Create a Post<br><form id="posting" action="post.php" method="POST"><br><textarea form="posting" name="ptext" rows="4" columns="100">testing!</textarea><br><input type="submit" value="Post!"><br></form></div>';
var about_edit='<div class="settings" id="about_edit">Edit Your Profile Information:<br></div>';
var propic_edit='<div class="settings" id="propic_edit">Change Your Profile Picture:<br><form action="settings.php" method="POST"><input type="file"><br><input type="submit" value="Save!"></form></div>';

function colors() {
document.getElementById("showcolor").style.background="rgb("+bcr+","+bcg+","+bcb+")"; 
document.getElementById("rs").value=bcr; 
document.getElementById("gs").value=bcg; 
document.getElementById("bs").value=bcb;
}

function displaycolor(val) {
var c=document.getElementById('showcolor').style.backgroundColor;
var colors = c.substring(c.indexOf('(') + 1, c.lastIndexOf(')')).split(/,\s*/);
    var red = colors[0]*1;
    var green = colors[1]*1;
    var blue = colors[2]*1;
var cval=document.getElementById(val).value;
if (val=="rs") {red=cval;} else if (val=="gs") {green=cval;} else if (val=="bs") {blue=cval;}
document.getElementById('showcolor').style.background="rgb("+red+","+green+","+blue+")";
}

function settings() {
document.body.innerHTML+=cpost;
document.body.innerHTML+=slist;
document.body.innerHTML+=cols;
colors();
}