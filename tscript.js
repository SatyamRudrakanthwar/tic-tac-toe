let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let mgs = document.querySelector("#mgs");
let mgscontainer = document.querySelector(".mgs-container");

let turn0 = true;

const resetgame = () => {
    turn0 = true;
    enablebtn();
    mgscontainer.classList.add("hide");
}
const winpatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    ];

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if (turn0){
            box.innerText = "X";
            turn0 = false;
            // console.log("box X was clicked:");
        }else{
            box.innerText = "O";
            turn0 = true;
            // console.log("box O was clicked:");
        }
        box.disabled = true;
        checkwinner();
    
}) 
});

const disabledbtn = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};
const enablebtn = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
        mgs.innerText = `${winner} is the winner!`;
        mgscontainer.classList.remove("hide");
 
    };
const checkwinner = () => {
    // let win = false;
    for (let pattern of winpatterns){

        let pos1val1 = boxes[pattern[0]].innerText;
        let pos2val2 = boxes[pattern[1]].innerText;
        let pos3val3 = boxes[pattern[2]].innerText;


        if (pos3val3 != "" && pos3val3 != "" && pos3val3 != ""){
            if (pos1val1 === pos2val2 && pos2val2 === pos3val3){
                // win = true;
                // console.log("win", pos1val1);
                showwinner(pos1val1);
                disabledbtn();
                // break;
            }
        }
        
        
    }
    };

newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);