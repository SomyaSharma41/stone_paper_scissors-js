let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices =  document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userId = document.querySelector("#username")

// let userName = prompt("Enter your username");
// userId.innerText = `${userName}`

const drawGame = () =>{
    console.log("its a draw");
    msg.innerText = "It's a Draw, Play again!";
    msg.style.backgroundColor = "#E7E3F3";
}

const gencompchoice = () =>{
    const options=["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#C8E6C9"; 
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#FAD4D4";
    }
}

const playGame = (userChoice) => {
    console.log("user clicked", userChoice);
    const compChoice = gencompchoice();
    console.log("computer chose", compChoice);

    if(userChoice === compChoice){
        //draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

