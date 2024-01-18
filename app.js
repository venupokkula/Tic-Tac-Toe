let flag = 1;
let win = [[0,1,2],[0,3,6],[0,4,8],[2,4,6],[2,5,8],[1,4,7],[6,7,8],[3,4,5]]
let btn = document.querySelectorAll(".game");
let newGame = document.querySelectorAll(".restart")[0];
let reset = document.querySelectorAll(".restart")[1];
let count = 0;
for(let val of btn){
    val.addEventListener("click",() => {
        if(flag == 1 && val.innerText == ''){
            val.innerText = "X";
            val.style.color = "red";
            flag = 2;
            cnt();
        }
        if(flag == 2 && val.innerText == ''){
            val.innerText = "O";
            val.style.color = "green";
            flag = 1;
            cnt();
        }
        check();
    })
}

function cnt(){
    count = count+1;
    if(count >= 9){
        let res = document.querySelector("p");
        res.innerHTML = "You Both Are Loosers";
        document.querySelector(".result").classList.remove("hide");
        document.querySelector(".all").classList.add("visible");
        disableBtn();
    }
}

function check(){
    for(let ar of win){
        let b1 = btn[ar[0]].innerText;
        let b2 = btn[ar[1]].innerText;
        let b3 = btn[ar[2]].innerText;
        if(b1 != '' && b2 != '' && b3!= ''){
            if(b1 == b2 && b2 == b3)
                displayRes(b1);
        }
    }  
}

const displayRes = (b1) => {
    let res = document.querySelector("p");
    res.innerHTML = `Game Over,Winner is ${b1}`;
    document.querySelector(".result").classList.remove("hide");
    document.querySelector(".all").classList.add("visible");
    disableBtn();
}

const disableBtn = () => {
    for(let val of btn){
        val.disabled = true;
    }
}

const enableBtn = () => {
    for(val of btn){
        val.disabled = false;
        val.innerHTML = '';
    }
    flag = 1;
    count = 0;
}

newGame.addEventListener("click",newG);
reset.addEventListener("click",restart);

function restart(){
    enableBtn();
}

function newG() {
    document.querySelector(".result").classList.add("hide");
    document.querySelector(".all").classList.remove("visible");
    enableBtn();
}