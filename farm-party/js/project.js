//Set a background color and / or image. (perhaps clouds.gif).

//Create a div for the ground/grass with green background and appropriate height - position it at the bottom with

//position: fixed; and width: 100%; and bottom: 0;

//Create an h1 and display FARM PARTY!. For a bonus, use a fun custom font (like from Google Web Fonts).

//For each of the characters you want to animate, create an <img> for it on the page. Give each an id.

//Position each of the <img> elements with position: absolute; and top/left, bottom/right within the CSS.

//Add animations to each of the <img> elements within the JS.

//Make this as simple or complex as you wish to. Experiment with queueing, delaying, callback functions.

//Maybe experiment with what happens if you add click on a character? Or the user's mouse leaves the page? Maybe

//you want to generate new characters with a button? Have fun! After all, it's a party! ;)project.js


$(document).ready(function(){


$("#rooster").show().delay(1000).animate({
    left: "70%"
},1000);

$("#varken").show().delay(3000).animate({
    right: "20%"
},1000);

$("#cow1").show().delay(5000).animate({
    top: "50%"
},1000);

})