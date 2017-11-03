var blocks = document.getElementsByClassName('block');
console.log(blocks.length);
var turn = 0;
var tmp = 0;

document.getElementById('wrapper').onclick = function (event) {
    if ((event.target.className === 'block') && (event.target.outerText !== 'X') && (event.target.outerText !== 'O')){
            event.target.innerHTML = 'X';
            setO(Math.floor(Math.random() * (blocks.length - 1)));
    }
};

function setO(a) {
    for (a; a < blocks.length - 1; a ++){
       if ((blocks[a].outerText !== 'X') && (blocks[a].outerText !== 'O')) {
           blocks[a].innerHTML = 'O';
           a = blocks.length - 1;
           tmp = 1; 
           turn++;
       }
      if ((a == blocks.length - 2) && (tmp == 0) && (turn < 4))
       {
          a = 0;
       }
      tmp=0;
    }
}