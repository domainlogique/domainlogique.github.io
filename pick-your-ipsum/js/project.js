// User enters a number in the form field, hits enter or clicks on Submit button.
// That number of paragraphs of the specified Ipsum are displayed, animating in with a slideDown or fadeIn animation.
// .slideDown()
// .fadeIn()

// When the user clicks back into the field, the paragraphs are hidden - .hide() - , using fadeOut or slideUp.


$(document).ready(function(){

	// FIRST PART
	// 1: User clicks '#submit' button, which triggers the function
	// 2: Grab the user's input from '#paragraphs'
	// 3: Show corresponding number of paragraphs


	// 1
	$("#submit").click(function(){
		
		// 2
		var userInput = $("#paragraphs").val();

		// 3
		// 3a - .slideDown()/.fadeIn() <div class='.ipsum'>
		// 3b - .show() the number of paragraphs equal userInput; so, if userInput = 2, .show() the first two paragraphs

		// 3a
		$(".ipsum").slideDown("fast");

		// 3b
		$(".ipsum p")

			.slice(0, userInput)
			.show();
	});


	// SECOND PART
	// 1. User click on input box 
	// 2. Input box clears
	// 3. Slide up .ipsum
	// 4. Hide paragraphs inside of .ispum

	// .focus()
	$('#paragraphs').focus(function(){
		
		$(".ipsum").slideUp("fast");
		$(".ipsum p").hide();


	});

	
});

