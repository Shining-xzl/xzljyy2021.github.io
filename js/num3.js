$(document).ready(function(){
	$("#the_first").click(function(){
		$("#the_1").css("opacity","1");
		$("#the_1").css("visibility","visible");
	})
	$("#the_1").dblclick(function(){
		$("#the_1").css("opacity","0");
		$("#the_1").css("visibility","hidden");
	})
})