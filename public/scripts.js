function setcolors() {
//var i=Math.floor((Math.random()*4)+1);
i=1;
if (i==1) {
var rcol= new Array(); rcol[0]="rgb(0,150,255)"; rcol[1]="rgb(0,200,200)"; rcol[2]="rgb(250,250,150)";
}
else if (i==2) {
var rcol= new Array(); rcol[0]="-webkit-linear-gradient(left, rgb(0,150,150), rgb(0,255,255))"; rcol[0]="rgb(0,255,255)"; rcol[1]="rgb(255,0,150)"; rcol[2]="rgb(255,200,0)"; 
}
else if (i==3) {
var rcol= new Array(); rcol[0]="rgb(255,150,0)"; rcol[1]="rgb(150,0,255)"; rcol[2]="rgb(0,200,0)";
}
else if (i==4) {
var rcol= new Array(); rcol[0]="rgb(150,255,150)"; rcol[1]="rgb(255,100,0)"; rcol[2]="rgb(255,255,0)";
}
document.body.style.backgroundImage=rcol[3];
document.body.style.background="none";
document.getElementById("header").style.background=rcol[1];
document.getElementById("main").style.background=rcol[2];
document.body.style.color="white";
}

function showhide(hval, sval) {
document.getElementById(hval).style.display="none";
document.getElementById(sval).style.display="block";
}

function s(i,n,x,y,cval) {
document.getElementById("canvas").innerHTML+="<div class='c1' id='b"+n+"'></div>";
document.getElementById("b"+n).style.width=i+"px";
document.getElementById("b"+n).style.height=i+"px";
document.getElementById("b"+n).style.top=y+"px";
document.getElementById("b"+n).style.left=x+"px";
document.getElementById("b"+n).style.background=cval;
}

function squared() {
var w=window.innerWidth;
var z=window.innerHeight;
var x=0;
var y=0;
var n=0;
ci=(Math.floor((Math.random()*2)+1));
var cb = new Array();
cb[0]="rgb(15,140,170)";
cb[1]="rgb(0,125,155)";
if (ci==1) {
var c1=cb[0];
var c2=cb[1];
} else {
var c1=cb[1];
var c2=cb[0];
}
while (x<w) {
while (y<z) {
i=(Math.floor((Math.random()*3)+1))*50;
//i=150;
s(i,n,x+0,y+0,c2);
n++;
ti=200-i;
s(ti,n,x+0,y+i,c1);
n++;
if (i==50) {
s(i,n,x+i,y+0,c1); n++;
s(i,n,x+i*2,y+0,c2); n++;
s(i,n,x+ti,y+0,c1); n++;
s(i,n,x+ti,y+i,c2); n++;
s(i,n,x+ti,y+i*2,c1); n++;
s(i,n,x+ti,y+ti,c2); n++;
} else if (i==150) {
s(ti,n,x+ti,y+i,c2); n++;
s(ti,n,x+ti*2,y+i,c1); n++;
s(ti,n,x+i,y+0,c1); n++;
s(ti,n,x+i,y+ti,c2); n++;
s(ti,n,x+i,y+ti*2,c1); n++;
s(ti,n,x+i,y+i,c2); n++;
} else if (i==100) {
s(i,n,x+i,y+i,c2); n++;
s(i,n,x+i,y+0,c1); n++;
}
y+=200;
}
y=0;
x+=200;
}
}
