let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msgPara = document.querySelectorAll(" #msg ")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() *3)
    return options[randIdx]
}

const gameDraw = () => {
    
    msg.innerText = "Game was Draw. Play Again"
    msg.style.backgroundColor = "pink";

}

const showWinner = (userWin, userId, compChoice) => {
    if(userWin) {
        userScore++
        userScorePara.innerText = userScore;
      
        msg.innerText = `You Win! Your ${userId} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }else {
        compScore++
        compScorePara.innerText = compScore;
      
        msg.innerText = `You Lose COmputer ${compChoice} beats ${userId}`
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userId) => {
    console.log("User choice", userId);
    //Genrate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice", compChoice);

    if(userId === compChoice){
        //draw game
        gameDraw();
    }else {
        let userWin = true;
        if (userId === "rock") {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if (userId === "paper") {
          //rock, scissors
          userWin = compChoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userId, compChoice);
      }

    }

choices.forEach((choice) => {
    
    choice.addEventListener("click", () =>{
        const userId = choice.getAttribute("id"); 
        playGame(userId)
            
    });
});
