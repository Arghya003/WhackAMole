let scoreH2= document.getElementById('score');
let timeLeft=document.getElementById("timeLeft");
let startNewGameButton=document.getElementById("startNewGame");
let pauseGameButton=document.getElementById("pauseGame");
let squares=document.querySelectorAll(".square");


function randomMole(){
    squares.forEach(square=>{
        square.classList.remove('mole');
    })
    let hitPosition= Math.floor(Math.random()*squares.length);
    squares[hitPosition].classList.add('mole')
}

randomMole();

function startGame(){
    score=0;
    timeLeft=0;
    setInterval(randomMole,1000);

}


startNewGameButton.addEventListener("click",startGame);