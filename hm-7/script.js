document.addEventListener("DOMContentLoaded", function(){
	var myBlock = document.getElementById('div-1');
	var pos = myBlock.getBoundingClientRect();
	console.log(pos.width);
	console.log(pos.height);
});