let userScore = 0;
let computerScore = 0;
let drawScore = 0;
function playGame(userChoice){
  const choice = ["Rock","Paper","Scissors"];
  const computerChoice = 
  choice[Math.floor(Math.random()*3)];
  let result = "";
  if(userChoice === computerChoice){
    result = "Drow!";
  }
  else if(
    (userChoice ==="Rock" &&
       computerChoice==="Scissors")||
       (userChoice==="Paper" &&
       computerChoice==="Rock)"||
       (userChoice==="Scissors" &&
        computerChoice==="Paper")
       )
      ){
        result = "You Win!";
      }
      else{
        resule = "Computer Win!";
      }
      document.getElementById("result").innerHTML 
      =
      `You: ${userChoice}<br>
      Computer: ${computerChoice}<br>
      ${result}`;
}
if(user === computer){
    drawScore++;
    document.getElementById("drawScore").innerText = drawScore;
}
else if(
(user==="Rock" && computer==="Scissors") ||
(user==="Paper" && computer==="Rock") ||
(user==="Scissors" && computer==="Paper")
){
    userScore++;
    document.getElementById("userScore").innerText = userScore;
}
else{
    computerScore++;
    document.getElementById("computerScore").innerText = computerScore;
}
function resetGame(){
    userScore = 0;
    computerScore = 0;
    drawScore = 0;

    document.getElementById("userScore").innerText = 0;
    document.getElementById("computerScore").innerText = 0;
    document.getElementById("drawScore").innerText = 0;
}