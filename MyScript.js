$(document).ready(function(){
	$(".text").click(function(){ 
	$(".text1").text(x = Math.floor(Math.random() * 11));
	});
	$(".img").click(function(){
	$("#theImage").attr("src", MemeSwitch[
		Math.round(Math.random()*11)])
	
	});
	
	
	$(".img").click(function(){
	$("#memeText").text(MemeCaptions[
		Math.round(Math.random()*11)])
	});
	});