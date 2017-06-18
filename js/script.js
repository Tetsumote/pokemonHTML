//Variables

var example = document.getElementsByClassName("elem");
document.getElementById("wraper").style.display = "none";
var myVar;
//window event
window.addEventListener('load',function(){
	//set interval
	function myFunction(){
	myVar = setTimeout(showPage, 2000);
	}
	myFunction();
	function showPage(){
		document.getElementById("loader").style.display = "none";
		document.getElementById("wraper").style.display = "block";

		//loop true all element with class animate
	for(var i = 0 ; i<example.length; i++){
		example[i].classList.add("animate");
	}//for
	}//show Page
	
});//event window