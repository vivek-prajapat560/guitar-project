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