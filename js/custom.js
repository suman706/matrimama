//=======================================================================
//=======================================================================
	var photo_menu = document.getElementById("photo_menu");
	photo_menu.style.display="none";

	var phot = document.getElementById("photo_upload");
	phot.style.display="none";

	var basic_menu = document.getElementById("basic_menu");
	basic_menu.style.display="none";

	var basic_form = document.getElementById("basic_form");
	basic_form.style.display="none";

	var religion_menu = document.getElementById("religion_menu");
	religion_menu.style.display="none";

	var religion_form = document.getElementById("religion_form");
	religion_form.style.display = "none";

	var career_menu = document.getElementById("career_menu");
	career_menu.style.display = "none";

	var career_form = document.getElementById("career_form");
	career_form.style.display = "none";

	var family_menu = document.getElementById("family_menu");
	family_menu.style.display = "none";

	var family_form = document.getElementById("family_form");
	family_form.style.display = "none";
//======================================================================
//======================================================================

function next(){
	var regist = document.getElementById("register");
	regist.style.display="none";

	var regist_menu = document.getElementById("register_menu");
	regist_menu.style.display="none";

	var photo_menu = document.getElementById("photo_menu");
	photo_menu.style.display="block";

	var x = document.getElementById("photo_upload")
	x.style.display="block";
}

function register_page(){
	var regist = document.getElementById("register");
	regist.style.display="block";

	var regist_menu = document.getElementById("register_menu");
	regist_menu.style.display="block";

	var photo_meu = document.getElementById("photo_menu");
	photo_menu.style.display="none";

	var x = document.getElementById("photo_upload")
	x.style.display="none";
}

function next2(){
	var basic_menu = document.getElementById("basic_menu");
	basic_menu.style.display="block";

	var basic_form = document.getElementById("basic_form");
	basic_form.style.display="block";

	var photo_meu = document.getElementById("photo_menu");
	photo_menu.style.display="none";

	var x = document.getElementById("photo_upload")
	x.style.display="none";
}

function photoupload(){
	var basic_menu = document.getElementById("basic_menu");
	basic_menu.style.display="none";

	var basic_form = document.getElementById("basic_form");
	basic_form.style.display="none";

	var photo_meu = document.getElementById("photo_menu");
	photo_menu.style.display="block";

	var x = document.getElementById("photo_upload")
	x.style.display="block";
}

function next3(){
	var basic_menu = document.getElementById("basic_menu");
	basic_menu.style.display="none";

	var basic_form = document.getElementById("basic_form");
	basic_form.style.display="none";

	var religion_menu = document.getElementById("religion_menu");
	religion_menu.style.display="block";

	var religion_form = document.getElementById("religion_form");
	religion_form.style.display = "block";
}

function basicdetail(){
	var basic_menu = document.getElementById("basic_menu");
	basic_menu.style.display="block";

	var basic_form = document.getElementById("basic_form");
	basic_form.style.display="block";

	var religion_menu = document.getElementById("religion_menu");
	religion_menu.style.display="none";

	var religion_form = document.getElementById("religion_form");
	religion_form.style.display = "none";
}

function next4(){
	var religion_menu = document.getElementById("religion_menu");
	religion_menu.style.display="none";

	var religion_form = document.getElementById("religion_form");
	religion_form.style.display = "none";

	var career_menu = document.getElementById("career_menu");
	career_menu.style.display = "block";

	var career_form = document.getElementById("career_form");
	career_form.style.display = "block";
}

function religion_cast(){
	var religion_menu = document.getElementById("religion_menu");
	religion_menu.style.display="block";

	var religion_form = document.getElementById("religion_form");
	religion_form.style.display = "block";

	var career_menu = document.getElementById("career_menu");
	career_menu.style.display = "none";

	var career_form = document.getElementById("career_form");
	career_form.style.display = "none";
}

function next5(){
	var career_menu = document.getElementById("career_menu");
	career_menu.style.display = "none";

	var career_form = document.getElementById("career_form");
	career_form.style.display = "none";

	var family_menu = document.getElementById("family_menu");
	family_menu.style.display = "block";

	var family_form = document.getElementById("family_form");
	family_form.style.display = "block";
}

function education(){
	var career_menu = document.getElementById("career_menu");
	career_menu.style.display = "block";

	var career_form = document.getElementById("career_form");
	career_form.style.display = "block";

	var family_menu = document.getElementById("family_menu");
	family_menu.style.display = "none";

	var family_form = document.getElementById("family_form");
	family_form.style.display = "none";
}