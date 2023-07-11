let scoreH2= document.getElementById('score');
let timeLeftH2=document.getElementById("timeLeft");
let startNewGameButton=document.getElementById("startNewGame");
let pauseGameButton=document.getElementById("pauseGame");
let squares=document.querySelectorAll(".square");
let gameMusic= new Audio("/assets/gameMusic.mp3")
let hitMusic=new Audio("/assets/hitMusic.mp3")

let score=0;
let timeLeft=60;
let hitPosition=null;
let timerId=null;
let randomMoleid=null;

function randomMole(){
    squares.forEach(square=>{
        square.classList.remove('mole');
    })
    let randomsquare= squares[Math.floor(Math.random()*squares.length)];
    randomsquare.classList.add('mole')
    hitPosition=randomsquare.id;
}

randomMole();

function startGame(){
    score=0;
    timeLeft=60;
    scoreH2.innerHTML = "Your Score: 0";
    timeLeft.innerHTML = "Time Left: 60";
    
    pauseGameButton.innerHTML = "Pause";
     
     gameMusic.play();
   timerId= setInterval(randomMole,1000);
   randomMoleid= setInterval(countDown,800)

}
function countDown(){
    timeLeft--;
    timeLeftH2.innerHTML=`Time Left:${timeLeft}`;
    if(timeLeft===0){
        clearInterval(timerId);
        clearInterval(randomMoleid)
      
    }
}
function pauseResumeGame(){
    if(pauseGameButton.textContent==='Pause'){
        clearInterval(timerId)
        clearInterval(randomMoleid)
        gameMusic.pause()
        timerId=60;
      randomMoleid=null;
      pauseGameButton.textContent="Resume";


    }
    else{
        gameMusic.play();
        timerId = setInterval(randomMole, 1000);
        randomMoleid = setInterval(countDown, 1000);
        pauseGameButton.textContent = "Pause";
    }
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
        hitMusic.play()
        setTimeout(() => {
          hitMusic.pause();
        }, 1000);
;      score++;
      scoreH2.innerHTML=`Your Score: ${score}`;
      hitPosition = null;
    }
  });
});


startNewGameButton.addEventListener("click",startGame);
pauseGameButton.addEventListener("click",pauseResumeGame);