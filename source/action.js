function disappear(cont) {
	document.getElementById("morecontent").style.display = "none";
	document.getElementById("readmore").style.display = "block";
	document.getElementById("footer").classList.remove("moreContent");
	document.getElementById("footer").classList.add("lessContent");
}
function appear(id) {
	document.getElementById("morecontent").style.display = "block";
	document.getElementById("readmore").style.display = "none";
	document.getElementById("footer").classList.add("moreContent");
	document.getElementById("footer").classList.remove("lessContent");
}