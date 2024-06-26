let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn"); 
let newBtn = document.querySelector("#new-btn"); 
let msgContainer = document.querySelector(".msg-container"); 
let msg = document.querySelector("#msg"); 

let turn = true; //playerX or playerO
let count = 0;

const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
            if(turn){
                box.innerText = "X";
                turn = false;
            }else{
                box.innerText = "O";
                turn = true;
            }
            count++;
            box.disabled = true;
            checkWinner();
            if(count === 9){
                showDraw();
            }
    });
});

const resetGame = ()=>{
    turn = true;
    count = 0;
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide");
    });
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is Player ${winner}`;
    msgContainer.classList.remove("hide");
    boxes.forEach((box)=>{
        box.disabled = true;
    });
}

const showDraw = ()=>{
    msg.innerText = `Game Draw`;
    msgContainer.classList.remove("hide");
}

const checkWinner = ()=>{
    for(let pattern of winningPatterns){
        let pv1 = boxes[pattern[0]].innerText;
        let pv2 = boxes[pattern[1]].innerText;
        let pv3 = boxes[pattern[2]].innerText;

        if(pv1 != "" && pv2 != "" && pv3 != ""){
            if(pv1 === pv2 && pv2 === pv3){
                console.log("Winner is", pv1);
                showWinner(pv1);
            }
        }

    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
