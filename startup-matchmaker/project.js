$(document).ready{function(){
	$("hamburger").click(function(){
	$("innernav").slideToggle(500);
	});
});

$(window).resize(function(){
	if($(window).width() > 630) {
		$("#innernav").show();
	} else {
		$("#innernav").hide();
	}
});