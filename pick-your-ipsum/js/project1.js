//Started in Javascript to outline the logic 

var subNumber=0; // starting point
var paragraph; //paragraph


// document.getElementById("paragraphs").onchange = generateText; //CTA is when submit value is changed then some text is generated
document.getElementById("submit").onclick = generateText;

function generateText () {

	console.log('test');

	subNumber = document.getElementById("paragraphs").value; //how do we get subNumber? By scraping out whatever VALUE is inputed in the submit box

	if (isNaN(subNumber)) { // this code is to ensure that users plug in a number as it is not clear that is what they should do
		alert("Please enter a number");
	}

	//OK here is where the conditions are defined; used the modulo (remainder) method; however wasn't sure what to do if someone 
	//plugged in the number 30  etc.... b/c``then the hipster, beer, and bacon paras would be able to download; but since pages are linked separately
	//won't worry abut that right now

	else if (subNumber % 2 == 0) { 
		paragraph = document.getElementById("hipster").innerHTML;
	}
	else if (subNumber % 3 == 0) {

		paragraph = document.getElementById("beer").innerHTML;
	}
	else if(subNumber % 5 ==0){
		paragraph = document.getElementById("bacon").innerHTML;
	}
	else if(subNumber % 7 ==0){
		paragraph = document.getElementById("lorem").innerHTML;
	}
}

		//finally assume because the id's are distinctly defined in the html pages attached and since jscript code has been linked to each html page that the
		//hipster, beer, bacon, and lorem paras will load when called. No fade ins etc. done at this point save that for jsquery.

	//JSQUERY ATTEMPT
	// $(document).ready(function(){
	// 	$("submit").onchange(function(){
	// 		var subNumber = $(this).value("body id"); //don't know how to call id associated with body tag
	// 		var count = 0;

	// 		if(subNumber % 2 == 0){
	// 			$("#hipster").onchange(function(){
	// 				$("#hipster").fadeIn("fast", 1);
	// 			}
	// 		}
	// 			// $("#hipster").mouseleave(function(){
	// 			// 	("#hipster").fadeTo("slow", 0);
	// 			// }

	// 		else if(subNumber % 3 == 0){
	// 			$("#beer").onchange(function(){
	// 				$("#beer").fadeIn("fast", 1);
	// 			}

	// 			// $("#beer").mouseleave(function(){
	// 			// 	("#beer").fadeTo("slow", 0);
	// 			// }
	// 		}

	// 		else if(subNumber % 5 == 0){
	// 			$("#bacon").onchange(function(){
	// 				$("#bacon").fadeIn("fast", 1);
	// 			}
	// 		}
	// 			// $("#bacon").mouseleave(function(){
	// 			// 	("#bacon").fadeTo("slow", 0);
	// 			// }

	// 		else if(subNumber % 7 == 0){
	// 			$("#lorem").onchange(function(){
	// 				$("#lorem").fadeIn("fast", 1);
	// 			}
	// 		}
	// 			// $("#lorem").mouseleave(function(){
	// 			// 	("#lorem").fadeTo("slow", 0)
	// 			// });
	// 	});
	// });

