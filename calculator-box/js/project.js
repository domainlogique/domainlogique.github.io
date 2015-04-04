
//number buttons = a10, a20, a30 n10, n20, n30
//color buttons = red & blue

//first build functions for changing numerical value of center buttons when click on numbers

var total = 0;
var red;
var blue;



document.getElementById("a10").onclick = clickTen;

function clickTen() {

	total = total +10;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("a20").onclick = clickTwenty;

function clickTwenty() {

total = total + 20;

document.getElementById("out").innerHTML = total;

}

document.getElementById("a30").onclick = clickThirty;

function clickThirty() {

total = total + 30;

document.getElementById("out").innerHTML = total;

}

document.getElementById("n10").onclick = clickNTen;

function clickNTen () {

total = total - 10;

document.getElementById("out").innerHTML = total;


}

document.getElementById("n20").onclick = clickNTwenty;

function clickNTwenty () {
 
  total = total - 20;

  document.getElementById("out").innerHTML = total;

}

document.getElementById("n30").onclick = clickNThirty;

function clickNThirty () {

total = total - 30;

document.getElementById("out").innerHTML = total;

}


//Second build functions for changing color of center button when click on colors

document.getElementById("red").onclick = clickRed;

function clickRed ()  {

red = document.getElementById("red").value;
document.getElementById("out").style.backgroundColor = red;

}

document.getElementById("blue").onclick = clickBlue;

function clickBlue () {

blue = document.getElementById("blue").value;

document.getElementById("out").style.backgroundColor = blue;

}


document.getElementById("out").onclick = resetColorWhite

function resetColorWhite() {

document.getElementById("out").style.backgroundColor = white


}
