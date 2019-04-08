a = document.getElementById("box1");
b = document.getElementById("box2");
c = document.getElementById("box3");
d = document.getElementById("box4");
e = document.getElementById("box5");
f = document.getElementById("box6");
var element = document.getElementById('open');

var isVisible = "visible";
var hidden = false;

setInterval(function(){
    document.getElementById("blink").style.visibility= hidden ? "visible" : "hidden";
    hidden = !hidden;
},500);

function newImage(el){
	if (el.src.match("images/chinese_e.png")){
	el.src = "images/chinese_s.png";

} else if (el.src.match("images/chinese_s.png")){
	el.src = "images/chinese_c.png";
 
} else if (el.src.match("images/chinese_c.png")){
	 el.src = "images/chinese_a.png";

} else if (el.src.match("images/chinese_a.png")){
	 el.src = "images/chinese_p.png";
	 
} else if (el.src.match("images/chinese_p.png")){
	 el.src = "images/chinese_e.png";
 
 }else {
	
}
}

function changeImage(el) {
	if (el.src.match("images/lock.png")){
	el.src = "images/unlock.png";

} else if (el.src.match("images/unlock.png")){
	el.src = "images/lock.png";
 
}
}

function nextPage(){
	window.location.href = 'https://kenny530.github.io/escaperoom/';
}
	
	
function checkCode(el){
	if (document.getElementById("box1").src.match("images/chinese_e.PNG") && document.getElementById("box2").src.match("images/chinese_s.PNG") && document.getElementById("box3").src.match("images/chinese_c.PNG")&& document.getElementById("box4").src.match("images/chinese_a.PNG") && document.getElementById("box5").src.match("images/chinese_p.PNG") && document.getElementById("box6").src.match("images/chinese_e.PNG")){
		window.location.href = 'https://kenny530.github.io/escaperoom/';
	} else{
	
	}
}
