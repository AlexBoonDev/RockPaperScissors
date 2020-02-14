
let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";
let round = 1;
const resultsDiv = document.querySelector('#resultsBox');
const score = document.createElement('p');
const roundUpdate = document.createElement('p');
const decision = document.createElement('p');

const buttons = document.querySelectorAll("button")
    buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerChoice = button.id;
        playRound();
        round++;
    });
});

function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(){
    computerChoice = computerPlay();
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore++;
        roundUpdate.textContent = "You win! Rock beats scissors.";
    }
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        computerScore++;
        roundUpdate.textContent = "You lose! Paper beats rock.";

    } 
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore++;
        roundUpdate.textContent = "You win! Scissors beats paper.";

    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++;
        roundUpdate.textContent = "You lose! Rock beats scissors.";

    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore++;
        roundUpdate.textContent = "You win! Paper beats rock.";

    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++;
        roundUpdate.textContent = "You lose! Scissors beats paper.";

    }
    else {
        roundUpdate.textContent = "It's a tie!" + " You both picked " + playerChoice + ".";
    };


    if (playerScore < 5 && computerScore < 5){
        score.textContent = 'Round ' + round + ': ' + "You: " + playerScore + "  |  Computer: " + computerScore;
        resultsDiv.appendChild(score);
        decision.textContent = "";    
    };
    
    if (computerScore == 5 && playerScore < 5){
        score.textContent = 'Round ' + round + ': ' + "You: " + playerScore + "  |  Computer: " + computerScore;
        decision.textContent = "You lose, sorry!";
        round = 0;
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore == 5 && computerScore < 5){
        score.textContent = 'Round ' + round + ': ' + "You: " + playerScore + "  |  Computer: " + computerScore;
        decision.textContent = "You win, congratulations!";
        round = 0;
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore == 4 && computerScore == 4) {
        score.textContent = 'Round ' + round +': ' + "You: " + playerScore + "  |  Computer: " + computerScore;
        decision.textContent = "Tie breaker!";
    }; 

    resultsDiv.appendChild(roundUpdate);
    resultsDiv.appendChild(score);
    resultsDiv.appendChild(decision);

};
