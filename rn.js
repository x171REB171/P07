function rn() {
	var c = document.getElementById("ccc"),
	ctx=c.getContext('2d');
		if(mouse == 0){
			ctx.fillStyle="gray";
		}
		else {
			ctx.fillStyle="red";
		}
		ctx.fillRect(0,0,1000,1000);
		ctx.stroke();
		
		ctx.fillStyle="red";
		
		ctx.fillRect(0,0,160,40);
		ctx.stroke();
		
		ctx.moveTo(0, 200);
		ctx.lineTo(140, 320);
		ctx.stroke();
		
		ctx.moveTo(0, 400);
		ctx.lineTo(120, 520);
		ctx.lineTo(20, 560);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(260, 60, 60, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fill();
		
		ctx.beginPath();
		ctx.ellipse(260, 260, 70, 60, 0, 0, Math.PI*2);
		ctx.stroke();
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(200, 400);
		ctx.lineTo(320, 520);
		ctx.lineTo(220, 560);
		ctx.lineTo(250, 500);
		ctx.lineTo(200, 400);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
	}
