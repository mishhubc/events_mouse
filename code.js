//elements
var img = document.querySelector('img');

var button1 = document.getElementById('button1');
button1.addEventListener('mousedown', fmousedon);

function fmousedon(e) {
	console.log(e);
	console.log(e.which);
}

//mouse move
addEventListener('mousemove', fmousemove);
function fmousemove(e) {
	img.style.left = e.pageX + 'px';
	img.style.top = e.pageY + 'px';
}

//mouseup
addEventListener('mouseup', fmouseup);

function fmouseup(e) {
	var img2 = document.createElement('img');
	img2.setAttribute('src', 'ball.jpg');
	img2.setAttribute('width', '100');
	img2.setAttribute('height', '100');
	img2.style.position = 'fixed';
	document.body.appendChild(img2);
	img2.style.left = e.pageX + 'px';
	img2.style.top = e.pageY + 'px';
}
