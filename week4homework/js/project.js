function colorChanger()

	{
		var red=document.getElementById("red").value;
		var green=document.getElementById("green").value;
		var blue=document.getElementById("blue").value;

		var colorText="rgb("+red+", "+green+", "+blue+")";
		
		document.getElementById("colorfultext").style.backgroundColor=colorText;
		document.getElementById("colorfultext").innerHTML=colorText;
		

	}


document.getElementById("colorbutton").onclick=colorChanger;	