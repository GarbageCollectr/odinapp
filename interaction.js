function getComputerChoice(){
    const possible = ["rock","paper","scissors"];
    let choice = Math.floor((Math.random()*3))
    return possible[choice]
}
function playRound(playerSelection, computerSelection){
    let pSel = playerSelection;
    let cSel = computerSelection;
    if(pSel == cSel){
        console.log("It's a tie!");
        
    }else if(pSel == "rock" && cSel == "paper"){
        console.log("You lose, Paper beats Rock");
        return -1;
    }else if(pSel=="rock" && cSel == "scissors"){
        console.log("You Win, Rock beats Scissors");
        return 1;
    }else if(pSel == "paper" && cSel == "scissors"){
        console.log("You lose, Scissors beats Paper");
        return -1;
    }else if(pSel == "paper"&& cSel == "rock"){
        console.log("You Win, Paper beats Rock");
        return 1;
    }else if(pSel == "scissors" && cSel == "rock"){
        console.log("You lose, Rock beats Scissor");
        return -1;
    }else if(pSel == "scissors" && cSel == "paper"){
        console.log("You Win, Scissors beats Paper");
        return 1;
    }else{
        console.log("Please enter Rock, Paper, or Scissors");
        
    }
}
function game(){
    let wins = 0;
    let losses = 0;
    //while(wins != 3 || losses != 3){
        for(let i = 0; i < 5; i++){
            let userInput = prompt("Please Choose Rock, Paper, or Scissors:");
            let result = playRound(userInput, getComputerChoice())
            if(result == 1){
                wins+=1;           
                
            }else if(result == -1){
                losses+=1;           
                
            }
        }
    //}
    if(wins == losses){
        console.log("It's a tie.")
    }else if(wins > losses){
        console.log("Congratulations, you win!")
    }else{
        console.log("Sorry, you lose")
    }
}

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content';

container.appendChild(content);

const ptag = document.createElement('p');
ptag.classList.add('ptag');
ptag.textContent = "Hey im red";
ptag.style.color = 'red';

container.append(ptag)

const h3tag = document.createElement('h3');
h3tag.classList.add('h3tag');
h3tag.textContent = "I'm a blue h3!"
h3tag.style.color = 'blue'

container.append(h3tag);

const newDiv = document.createElement('div');
newDiv.classList.add('newDiv');
newDiv.style.cssText = "background-color: pink; border: 1px solid black;"

const newh1 = document.createElement('h1')
const newp = document.createElement('p')
newh1.textContent = "I'm in a div!"
newp.textContent = "ME TOO!"
newDiv.append(newh1)
newDiv.append(newp)
container.append(newDiv)

const btn = document.querySelector('#btn')
btn.addEventListener('click', function (e){
    e.target.style.background = 'blue'
});
