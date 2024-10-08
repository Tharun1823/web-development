let userScore = 0;
let compScore = 0;
 
let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame = () => {
    msg.innerText = "Game was draw. try again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userchoice, compchoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win ! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lost !  ${compchoice} beats  your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }

};


const playGame = (userchoice) => {
    //generate computer choice
    const compchoice = genCompChoice();

    if (userchoice === compchoice) {
        //draw game
        drawGame();
    }else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        } else if  (userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
        } else {
            userWin = compchoice === "rock" ? false : true;
        }
        
        showWinner(userWin,userchoice,compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener(("click"), () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});