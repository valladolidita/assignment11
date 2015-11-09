/*
Code author: Leah Bateman
Modified by: Kelly Horigan
*/

$(document).ready(function() {
//Add the attached icon image before the text in each LI element in the main
//navigation.
	$("#menu ul li a").prepend("<img src='icon.png'>&nbsp;");

//Clicking on the H1 element in the header changes the background color of the
//header DIV.
	$("#header h1").click(function(){
	$("#header").toggleClass("clickOnHeader");
	});

//Change the text color of the first LI element in one of the sub-lists in the
//sidebar.
	$("#sidebar_content_1 ul li:first-child a").css("color", "#9b539c");

//Move the position of the even “numbered” LI elements in one of the sub-lists
//in the sidebar to the right by 5 pixels.
	$("#sidebar_content_1 ul li:odd").css("padding-left", "5px");

//Clicking on one of the post titles in the main content area replaces the
//content of the content DIV (with the ID of “content”) with content you
//specify.
	$("#content h2.title").click(function(){
	$("div#content").html("<h1>New copy goes here.</h1>")
	});

//Clicking on one of the H2 elements in the sidebar toggles visibility of the
//list below it.
	$("#sidebar-content h2").click(function(){
	$(this).siblings().toggle();
	});
});
