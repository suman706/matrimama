var menu = document.getElementsByClassName("register_process_menu");
var register = document.getElementsByClassName("register_process");
var mobile = document.getElementsByClassName("mobile_menu");

//console.log(menu[0].style.display  + "\n" + register);
function start_with_hide(){
	for(var i=0;i<register.length;i++){
		//console.log(i);
		menu[i].style.display = "none";		
		register[i].style.display = 'none';
		mobile[i].style.display = 'none';
	}
}

//calling start_with_hide first time
start_with_hide();

//displaying first blcok in starting
menu[0].style.display = "block";
register[0].style.display = "block";
mobile[0].style.display = "block";

//next button function
function next_form(counter,event){
	event.preventDefault();
	console.log(counter + "\n");
	menu[counter].style.display = "none";
	register[counter].style.display = "none";
	mobile[counter].style.display = "none";
	menu[counter + 1].style.display = "block";
	register[counter + 1].style.display = "block";
	mobile[counter + 1].style.display = "block";
	console.log(register[counter+1].style.display);
}

//prev button function
function prev_form(counter){
	menu[counter].style.display = "none";
	register[counter].style.display = "none";
	mobile[counter].style.display = "none";
	menu[counter - 1].style.display = "block";
	register[counter - 1].style.display = "block";
	mobile[counter - 1].style.display = "block";
}

//skip button function
function skip_form(counter){
	menu[counter].style.display = "none";
	register[counter].style.display = "none";
	mobile[counter].style.display = "none";
	menu[counter + 1].style.display = "block";
	register[counter + 1].style.display = "block";
	mobile[counter + 1].style.display = "block";
}