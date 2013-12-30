function edit(id) {
document.getElementById(id).innerHTML+='<a id="edit" href="#" onclick="toggle(\''+id+'_edit\');"></a>';
}

function news(x,y,size,num) {
var news='<div id="news" class="'+size+'"></div>';
document.body.innerHTML+=news;
document.getElementById('news').style.left=x;
document.getElementById('news').style.top=y;
document.getElementById('news').innerHTML+='<hr><a href="#" id="plink" onclick="document.getElementById(\'post\').style.display=\'block\';">Post</a>';
var i=0;
var ni=nl.length+1;
while (i<ni) {
var ti = nl.length-i;
if (nl[ti]!==undefined) {document.getElementById('news').innerHTML+=nl[ti]+"<br><hr>";} 
i++;}
}

function propic(file,x,y,size) {
var propic='<div id="propic" class="'+size+'"><img src="'+file+'"></img></div>';
document.body.innerHTML+=propic;
document.getElementById('propic').style.left=x;
document.getElementById('propic').style.top=y;
document.body.innerHTML+=propic_edit; edit("propic");
}

function about(name,bday,hobbies,blurb,x,y,size) {
var about='<div id="about" class="'+size+'"><i>'+name+'</i><br>'+bday+'<br>'+hobbies+'<br>'+blurb+'</div>';
document.body.innerHTML+=about;
document.getElementById("about").style.left=x;
document.getElementById("about").style.top=y;
document.body.innerHTML+=about_edit; edit("about");
}

function navbar() {
var navbar='<table id="navbar"><tr><td style="width:150px; text-align:center; border-left:1px solid white;" id="name">I am </td><td width="400px" id="date">It is currently </td><td></td><td width="220px"><form action="/query.php" method="POST"><input type="text" name="uname"/></form></td><td width="80px"><a href="#">Sqics</a></td><td width="100px"><a href="#" onclick="toggle(\'settings\');">Settings</a></td><td width="100px"><a href="/logout.php">Logout</a></td></tr></table>';
document.body.innerHTML+=navbar;
}

function elements() {
propic(picfile,px,py,ps);
about(name,bday,hobbies,blurb,ax,ay,sa);
navbar();
news(nx,ny,ns,"3");
settings();
}