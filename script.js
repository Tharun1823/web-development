let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let container = document.querySelector("#container");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msg.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText ="O";
            turnO = false;
        } else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
       
    }
};
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    container.innerText = `Congratulations, winner is ${winner}`;
    msg.classList.remove("hide");
};

const checkwinner = () => {
    for(let pattern of winPatterns) {
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 = boxes[pattern[2]].innerText;

       if (pos1 != "" && pos2 != ""  && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3) {
            console.log("winner",pos1);
            showWinner(pos1);
        }

       }
    }

};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
