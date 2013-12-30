function showhide(hval, sval) {
document.getElementById(hval).style.display="none";
document.getElementById(sval).style.display="block";
}

function toggle(val) {
var x=document.getElementById(val);
if (x.style.display=="block") {x.style.display="none";}
else {x.style.display="block";}
}

function s(i,n,x,y,cval) {
document.getElementById("canvas").innerHTML+="<div class='c1' id='b"+n+"'></div>";
document.getElementById("b"+n).style.width=i+"px";
document.getElementById("b"+n).style.height=i+"px";
document.getElementById("b"+n).style.top=y+"px";
document.getElementById("b"+n).style.left=x+"px";
document.getElementById("b"+n).style.background=cval;
}

function squared(cr,cg,cb) {
document.body.innerHTML+='<div id="canvas"></div>';
var c1="rgb("+cr+","+cg+","+cb+")";
cr+=15; cg+=15; cb+=15;
var c2="rgb("+cr+","+cg+","+cb+")";
var w=window.innerWidth;
var z=window.innerHeight;
var x=0;
var y=0;
var n=0;
ci=(Math.floor((Math.random()*2)+1));
var cb = new Array();
cb[0]=c1;
cb[1]=c2;
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
