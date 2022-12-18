function gallery(x){
	let show = document.getElementById("contDiv2").classList;
	show.add("showmap");

	let homehide = document.getElementById("galleryShow").classList;
	homehide.add("galleryhide");

	let about = document.getElementById("about").classList;
	about.remove("abouthide");
}
function map(x){
	let show = document.getElementById("contDiv2").classList;
	show.remove("showmap");

	let homehide = document.getElementById("galleryShow").classList;
	homehide.remove("galleryhide");

	let about = document.getElementById("about").classList;
	about.remove("abouthide");
}

function about(x){
	let about = document.getElementById("about").classList;
	about.add("abouthide");

	let homehide = document.getElementById("galleryShow").classList;
	homehide.remove("galleryhide");

	let show = document.getElementById("contDiv2").classList;
	show.add("showmap");
}