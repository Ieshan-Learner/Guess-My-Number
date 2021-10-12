'use strict';
var userInput;
var highScore =0;
var Score = 20;
const randomNumber = Math.floor((Math.random(1,21) * 20) + 1);
  console.log(randomNumber);
document.querySelector('.check').addEventListener("click", 
  function(){
    
      userInput=document.querySelector('.guess').value;
      if(randomNumber==userInput){
      document.querySelector('.message').textContent="You Won!!"
      document.querySelector('.number').textContent= userInput;
      if(highScore<Score){
          highScore=Score;
          document.querySelector('.highscore').textContent = highScore;
          document.querySelector("body").style.backgroundColor = "green";
      }
      }
      else if(randomNumber<userInput){
        document.querySelector('.message').textContent="Too High!!";
        Score = Score -1;
        document.querySelector('.score').textContent=Score;
      }
      else{
        document.querySelector('.message').textContent="Too Low!!";
        Score = Score -1;
        document.querySelector('.score').textContent=Score;
      }
  });
  
console.log(document.querySelector('.message').textContent);

document.querySelector('.again').addEventListener('click', 
function(){
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = "?";
    Score = 20;
    document.querySelector('.score').textContent = Score;
    document.querySelector('.guess').value = "";
});