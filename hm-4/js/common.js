var wrap = document.getElementById('wrapper');
var blocks = wrap.getElementsByTagName("div");
var turn = 0;
var tmp = 0;

wrap.onclick = function (event) {
    if (!event.target.outerText){
        event.target.innerHTML = 'X';
        setO();
    }
};

function setO() {
    do {
    a = Math.floor(Math.random() * (blocks.length - 1));
    if (!blocks[a].outerText) {
      blocks[a].innerHTML = 'O';
      tmp = 1;
      turn++;
     }
    } while (!tmp && (turn < 4))
    tmp=0;
}