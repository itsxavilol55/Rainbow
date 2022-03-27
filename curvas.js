var canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
//for (var i = 1; i <100; i++)
draw(); 
function draw()
{
	
	let num1 = (Math.random()*255);
	let num2 = (Math.random()*255);
	let num3 = (Math.random()*700);
	let num4 = (Math.random()*700);
	let num5 = (Math.random()*255);
	ctx.clearRect(num4, num3, num3, num1);
	let alpha = Math.random();
	ctx.fillStyle = 'rgba(' + num1+ ', ' + num2 + ', ' + num5+ ', ' +alpha+')';
	ctx.beginPath();
	ctx.bezierCurveTo(num1*4,num1*2,num2*3,num2*2,num3+num2,num4+num1);
	ctx.fillRect(num3,num4,num1,num2);
	ctx.fill();
	ctx.closePath();
	window.requestAnimationFrame(draw);
	
}
function descargar()
{
	link = document.getElementById("downloada");
	link.href = canvas.toDataURL("image/jpeg",1);
	link.download = "imagenCanvas";
}

