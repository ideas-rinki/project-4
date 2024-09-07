let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let oop=document.querySelector(".oop");
let newbtn=document.querySelector(".new-btn");
let p=document.querySelector("#msg");
let true0=true;

const winnerChecker=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];
const resetGame=()=>{
    true0=true;
    enabledboces();
    oop.classList.add("hide");


}
boxes.forEach((box)=>{
      box.addEventListener("click",()=>{
        console.log("box was clicked");
          if(true0){
            box.innerText="o";
            
            true0=false;
        }else{
              box.innerText="x";
              
              true0=true;

        }
        box.disabled=true;
        whowinner();
    });
});
const enabledboces=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disabledboces=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    p.innerText=`congratulations!!!! , Winner is ${winner}`;
    oop.classList.remove("hide");
    disabledboces();

}
const whowinner=()=>{
    for (let pattern of winnerChecker){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos2val);
                showWinner(pos2val);
            }
        }
    }
}
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);