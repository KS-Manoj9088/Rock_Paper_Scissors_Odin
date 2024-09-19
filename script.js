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
        console.log("Human wins");
        humanScore++;
    }
    else if(humanChoice==="rock"&&computerChoice==="paper")
    {
        console.log("Computer wins");
        computerScore++;
    }
    else if(humanChoice==="rock"&&computerChoice==="rock")
    {
        console.log("It's a tie");
    }
    else if(humanChoice==="paper"&&computerChoice==="rock")
    {
        console.log("Human wins");
        humanScore++;
    }
    else if(humanChoice==="paper"&&computerChoice==="scissor") 
    {
        console.log("Computer wins");
        computerScore++;
    }
    else if(humanChoice==="paper"&&computerChoice==="paper")
    {
        console.log("It's a tie");
    }
    else if(humanChoice==="scissor"&&computerChoice==="rock")
    {
        console.log("Computer wins");
        computerScore++;
    }
    else if(humanChoice==="scissor"&&computerChoice==="paper")
    {
        console.log("Human wins");
        humanScore++;
    }
    else if(humanChoice==="scissor"&&computerChoice==="scissor")
    {
        console.log("It's a tie");
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
            console.log("Human wins the game");
        }
        else
        {
            console.log("Computer wins the game");
        }
}

playGame()