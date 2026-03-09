function play(human, computer){
    if(human === computer){
        return "tie";
    }
    else if(
        (human === 0 && computer === 1) ||
        (human === 1 && computer === 2) ||
        (human === 2 && computer === 0)
    ){
        return "human";
    }
    else{
        return "computer";
    }
}

function getHumanChoice(choice){
    choice = choice.toLowerCase();

    if(choice === "rock") return 0;
    if(choice === "paper") return 1;
    if(choice === "scissors") return 2;
}

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function nameChoice(num){
    if(num === 0) return "rock";
    if(num === 1) return "paper";
    return "scissors";
}

function game(){

    let humanScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++){

        let human = getHumanChoice(prompt("Round " + i + ": Enter rock, paper or scissors"));
        let computer = getComputerChoice();

        console.log("Computer chose:", nameChoice(computer));

        let result = play(human, computer);

        if(result === "human"){
            humanScore++;
            console.log("You win this round");
        }
        else if(result === "computer"){
            computerScore++;
            console.log("Computer wins this round");
        }
        else{
            console.log("Tie round");
        }
    }

    console.log("Final Score:");
    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);

    if(humanScore > computerScore){
        console.log("You are the final winner 🎉");
    }
    else if(computerScore > humanScore){
        console.log("Computer is the final winner 🤖");
    }
    else{
        console.log("Game is a tie");
    }
}

game();