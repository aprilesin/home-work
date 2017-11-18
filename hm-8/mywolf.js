document.addEventListener("DOMContentLoaded", ready);
	function ready() {
		var wolf = document.getElementsByClassName('wolf')[0];
		var egg1 = document.getElementsByClassName('egg1')[0];
		var egg2 = document.getElementsByClassName('egg2')[0];
		var tmp = 0;
	
	wolf.onmousedown = function(e) {
	  moveAt(e);
	  function moveAt(e) {
	    wolf.style.left = e.pageX - wolf.offsetWidth / 2 + 'px';
	  }

	  document.onmousemove = function(e) {
	    moveAt(e);
	    var coords = wolf.getBoundingClientRect();
	    var coordsegg = egg1.getBoundingClientRect();
	    var coordsegg2 = egg2.getBoundingClientRect();
	    score(coords, coordsegg);
	    score2(coords, coordsegg2);
	  };
	  wolf.onmouseup = function() {
	    document.onmousemove = null;
	    wolf.onmouseup = null;
	  };
	};

	function eggMoveD()
	{
		egg1.style.visibility = 'visible';
		egg1.style.transitionProperty = 'top';
		egg1.style.transitionDuration = '2s';
		egg1.style.top = '550px';
	}
	
	function eggCrash(){
		egg1.style.backgroundImage = 'url(eggBr.png)';
		setTimeout(clear, 500);
	}

	function score(w,e){
		if ((w.left > 250) && (e.top == 550))
		{
			eggCrash();
		}
		else if ((w.left <= 250) && (e.top == 550))
		{
			clear();
			tmp++;
			document.getElementsByClassName("score")[0].innerHTML = "Score = " + tmp;
		}
	}

	function clear()
	{
		egg1.style.visibility = 'hidden';
		egg1.style.transitionProperty = 'top';
		egg1.style.top = '-100px';
		egg1.style.backgroundImage = 'url(egg1.png)';
		setTimeout(eggMoveD, 1000);
	}

////////////////////////////////////////////////////////
	function egg2MoveD()
	{
		egg2.style.visibility = 'visible';
		egg2.style.transitionProperty = 'top';
		egg2.style.transitionDuration = '2s';
		egg2.style.top = '550px';	
	}

	function eggMiss()
	{
		egg1.style.transitionProperty = 'top';
		egg1.style.transitionDuration = '2s';
		egg1.style.top = '900px';
		eggCrash();
	}

	function egg2Crash()
	{
		egg2.style.backgroundImage = 'url(eggBr.png)';
		setTimeout(clear2, 500);
	}

	function score2(w,e)
	{
		if (((window.innerWidth - w.left) > 250) && (e.top == 550))
		{
			// console.log("SUCCES");
			egg2Crash();
		}

		else if (((window.innerWidth - w.left) <= 250) && (e.top == 550))
		{
			clear2();
			tmp++;
			document.getElementsByClassName("score")[0].innerHTML = "Score = " + tmp;
		}
		// console.log(w.left);
		// console.log(e.top);
	}
	function clear2()
	{
		egg2.style.visibility = 'hidden';
		egg2.style.transitionProperty = 'top';
		egg2.style.top = '-100px';
		egg2.style.backgroundImage = 'url(egg1.png)';
		setTimeout(egg2MoveD, 1000);
	}

	setTimeout(eggMoveD, 0);
	setTimeout(egg2MoveD, 0);
}



