var canvas = document.getElementById("myCanvas");
let total = 500;
let numaux = 1;
let i=0;
let lineas = (total/numaux);
let ctx = canvas.getContext('2d');
let num1 = 255;
let num2 = 0;
let num3 = 0;
pete(ctx,total,numaux,lineas,i,num1,num2,num3);
function pete(ctx,total,numaux,lineas,i,num1,num2,num3) 
{
	if(num1==255 && num2 <= 255 && num3 ==0)
	{ 
		num2++;
		console.log(num2);
	}
	if (num1>=0 && num2 == 255 && num3 ==0)
	{ 
		num1--;
		console.log(num1);
	}
	if (num1==0 && num2 == 255 && num3 <=255)
	{ 
		num3++;
	}
	if (num1==0 && num2 >=0 && num3 ==255)
	{ 
		num2--;
	}
	if (num1<=255 && num2 ==0 && num3 ==255)
	{ 
		num1++;
	}
	if (num1==255 && num2 ==0 && num3 >=0)
	{ 
		num3--;
	}

	ctx.strokeStyle = 'rgb(' + num1+ ', ' + num2 + ', ' + num3+')';
	ctx.beginPath();
	ctx.moveTo(0,0); // xx yy
	ctx.lineTo(numaux*(i+1),total);
	// ctx.moveTo(total,0); // xx yy
	// ctx.lineTo(0,numaux*(i+1));
	// ctx.moveTo(total,total);
	// ctx.lineTo(total-(numaux*(i+1)),0);
	// ctx.moveTo(0,total);
	// ctx.lineTo(total,total-(numaux*(i+1)));
	ctx.stroke();
	ctx.closePath();
	if(i == lineas*10)
	{
		return;
	}
	i++;
	setTimeout(function cola()
	{
		pete(ctx,total,numaux,lineas,i,num1,num2,num3);
	},5);
}
