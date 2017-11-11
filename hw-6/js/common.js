window.addEventListener("DOMContentLoaded", function () {

var login = document.getElementById('login');
login.addEventListener('submit', function(e){
	e.preventDefault();
	
	var email = document.getElementById('email');
	console.log(email.value);
	var pswrd = document.getElementById('pswrd');
	console.log(pswrd.value);
	
	var resultEmail = email.value.match(/\w+\.?\-?\w+@\w+\.\w+/g);
	console.log(resultEmail);
	var resultPswrd = pswrd.value.match(/[a-zA-Z0-9{4,}][^\W]/);
	console.log(resultPswrd);

	if(resultEmail == null || resultPswrd == null){
		var error = document.querySelector('#login .error');
		error.innerHTML = 'you input error';
		error.style.color = '#f00';
		error.style.fontSize = '30px';
	}
	// window.location.href = login.action;
});

window.addEventListener("beforeunload", function(){
	var bodyColor = document.getElementById('body');
  bodyColor.style.backgroundColor = '#f00';
  bodyColor.onclick = function(){
  	bodyColor.style.backgroundColor = '#f00';
  };
});

function fib(n)
{
    if (n == 1 || n == 2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(fib(10));


});