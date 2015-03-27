function colorChanger()
	{
		var red=document.getElementById("red").value;
		var green=document.getElementById("green").value;
		var blue=document.getElementById("blue").value;

		var colorText="rgb("+red+", "+green+", "+blue+")";
		
		document.getElementById("colorfulText").body.style.backgroundColor=colorText;
		document.getElementById("colorfulText").innerHtml=colorText
		

	}


document.getElementById("colorbutton").onclick=colorChanger;