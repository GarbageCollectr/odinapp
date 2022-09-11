let win = 0;
let lose = 0;
let round = 0;

if(win >1){
    alert("Congrats, you won!")
}
if(lose >1){
    alert("Sorry, you lose.")
}


function getComputerChoice(){
    const possible = ["rock","paper","scissors"];
    let choice = Math.floor((Math.random()*3))
    return possible[choice]
}
function playRound(playerSelection, computerSelection){
    let pSel = playerSelection;
    let cSel = computerSelection;

    if(pSel == cSel){
        const result = document.createElement('div');
        result.classList.add('result');
        result.textContent = "It's a tie!"
        container.append(result)
        
    }else if(pSel == "rock" && cSel == "paper"){
        const result = document.createElement('div');
        result.classList.add('result');
        result.textContent = "You lose, Paper beats Rock"
        container.append(result)
        lose+=lose
        console.log(lose)
    }else if(pSel=="rock" && cSel == "scissors"){
        const result = document.createElement('div');
        result.classList.add('result');
        result.textContent = "You Win, Rock beats Scissors"
        container.append(result)
        win+=win
    }else if(pSel == "paper" && cSel == "scissors"){
        const result = document.createElement('div');
        result.classList.add('result');
        result.textContent = "You lose, Scissors beats Paper"
        container.append(result)
        lose+=lose
        console.log(lose)
    }else if(pSel == "paper"&& cSel == "rock"){
        const result = document.createElement('div');
        result.classList.add('result');
        result.textContent = "You Win, Paper beats Rock"
        container.append(result)
        win+=win
    }else if(pSel == "scissors" && cSel == "rock"){
        const result = document.createElement('div');
        result.classList.add('result');
        result.textContent = "You lose, Rock beats Scissors"
        container.append(result)
        lose+=lose
        console.log(lose)
    }else if(pSel == "scissors" && cSel == "paper"){
        const result = document.createElement('div');
        result.classList.add('result');
        result.textContent = "You Win, Scissors beats Paper"
        container.append(result)
        win+=win
    }else{
        
        console.log("Please enter Rock, Paper, or Scissors");
        
    }
}



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        let choice = button.id
        console.log(e);
        
        if(choice === "1"){
            const r = "rock"
            playRound(r, getComputerChoice())
        }
        if(choice === "2"){
            const p = "paper"
            playRound(p, getComputerChoice())
        }
        if(choice === "3"){
            const s = "scissors"
            playRound(s, getComputerChoice())
        }
        
    });
});

const container = document.querySelector('.game')






