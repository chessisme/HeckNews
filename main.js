var now = new Date();
window.onload= clock();
function clock (){
	window.setInterval(function(){
	now= new Date();
	document.getElementById('clock').innerHTML = now.getHours()+':'+now.getMinutes();
	},1000);
};