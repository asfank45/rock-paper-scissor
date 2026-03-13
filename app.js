let userScore=0;
let comScore=0;
const choices=document.querySelectorAll(".choice");
//to update user and computer score;
const userUpdate=(newValue)=>{
    let oldValue=document.getElementById("userScore");
    oldValue.innerText=newValue;
};
//to update computer score;
const comUpdate=(newValue)=>{
    let oldValue=document.getElementById("comScore");
    oldValue.innerText=newValue;
};
const comChoice=()=>{
    const arr=["rock","paper","scissor"];
    const ranInx= Math.floor(Math.random()*3);
    return arr[ranInx];
    
};
// to get id of each choice when clicked
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id"); 
        playGame(choiceId);
    })
});
// to reset the game after alert;
const gameReset=()=>{
    document.getElementById("comScore").innerText=0;
    document.getElementById("userScore").innerText=0;
    document.getElementById("msg").innerText="Play Your Move";
}
//main game logic code
const playGame=(userChoice)=>{

    console.log("choice of user is:",userChoice);
    const comtChoice=comChoice();
    console.log("computer choice is",comtChoice);
    //this is for draw printing
    if(comtChoice===userChoice){
        const msg=document.getElementById("msg");
        msg.innerText="it is a draw";

    }
    
    else{ //this is to find the who win the game,code
        let userWin=true;
        if(userChoice==="rock"){
            userWin=comtChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=comtChoice==="scissor"?false:true;
        }
        else if(userChoice==="scissor"){
            userWin=comtChoice==="rock"?false:true;
        }
        //this is user win/lose change code
        if(userWin===true){
        const msg=document.getElementById("msg");
        msg.innerText="You Winn!";
        document.querySelector(".msgContainer").style.backgroundColor="green";
        userScore++;
        userUpdate(userScore);

        }
        else{
        const msg=document.getElementById("msg");
        msg.innerText="Computer Winn!";
      document.querySelector(".msgContainer").style.backgroundColor="red";        comScore++;
        comUpdate(comScore);
        };

    };
//to alter the user abt winning or loosing
if(userScore>=10){
    alert("You winn the Game");
    gameReset();
}
else if(comScore>=10){
    alert("computer winn the Game");
    gameReset();
}
    
};

