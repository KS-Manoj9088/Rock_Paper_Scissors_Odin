//console.log("Hello World");

let arr = ["rock","paper","scissor"];


function getComputerChoice()
{
    let random = Math.floor(Math.random()*arr.length);
    console.log(arr[random]);
    return arr[random];
}

function getHumanChoice()
{
    let humanChoice = prompt("Enter your choice (rock, paper, scissor)");
    console.log(humanChoice);
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice)
{

    if(humanChoice==="rock"&&computerChoice==="scissor")
    {
        prompt("Human wins this round");
        humanScore++;
    }
    else if(humanChoice==="rock"&&computerChoice==="paper")
    {
        prompt("Computer wins this round");
        computerScore++;
    }
    else if(humanChoice==="rock"&&computerChoice==="rock")
    {
        prompt("Tie round");
    }
    else if(humanChoice==="paper"&&computerChoice==="rock")
    {
        prompt("Human wins this round");
        humanScore++;
    }
    else if(humanChoice==="paper"&&computerChoice==="scissor") 
    {
        prompt("Computer wins this round");
        computerScore++;
    }
    else if(humanChoice==="paper"&&computerChoice==="paper")
    {
        prompt("Tie round");
    }
    else if(humanChoice==="scissor"&&computerChoice==="rock")
    {
        prompt("Computer wins this round");
        computerScore++;
    }
    else if(humanChoice==="scissor"&&computerChoice==="paper")
    {
        prompt("Human wins this round");
        humanScore++;
    }
    else if(humanChoice==="scissor"&&computerChoice==="scissor")
    {
        prompt("Tie round");
    }
}


function playGame()
{
    for(let i = 0; i < 5;i++)
    {
        playRound(getComputerChoice(),getHumanChoice())
    }

    if(humanScore>computerScore)
        {
            prompt("Human wins the game");
        }
        else
        {
            prompt("Computer wins the game");
        }
}

playGame()