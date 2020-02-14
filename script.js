
let playerScore = 0;
let computerScore = 0;
let round = 1;
let pointsToWin = 5;

const resultsDiv = document.querySelector('#resultsBox');
const score = document.createElement('p');
const roundUpdate = document.createElement('p');
const decision = document.createElement('p');

const buttons = document.querySelectorAll("button")
    buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerChoice = button.id;
        playRound(playerChoice);
    });
});

function computerPlay(){
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function resetRound(){
    round = 0;
    playerScore = 0;
    computerScore = 0;
};

function playRound(playerChoice){
    let computerChoice = computerPlay();
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore++;
        roundUpdate.textContent = "You win! Rock beats scissors.";
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        computerScore++;
        roundUpdate.textContent = "You lose! Paper beats rock.";
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore++;
        roundUpdate.textContent = "You win! Scissors beats paper.";
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++;
        roundUpdate.textContent = "You lose! Rock beats scissors.";
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore++;
        roundUpdate.textContent = "You win! Paper beats rock.";
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++;
        roundUpdate.textContent = "You lose! Scissors beats paper.";
    } else {
        roundUpdate.textContent = "It's a tie!" + " You both picked " + playerChoice + ".";
    };


    if (playerScore < pointsToWin && computerScore < pointsToWin){
        score.textContent = 'Round ' + round + ' - You: ' + playerScore + "  |  Computer: " + computerScore;
        decision.textContent = "";    
    };
    
    if (computerScore == pointsToWin && playerScore < pointsToWin){
        score.textContent = 'Round ' + round + ' - You: ' + playerScore + "  |  Computer: " + computerScore;
        decision.textContent = "Computer wins, sorry!";
        resetRound();
    } else if (playerScore == pointsToWin && computerScore < pointsToWin){
        score.textContent = 'Round ' + round + ' - You: ' + playerScore + "  |  Computer: " + computerScore;
        decision.textContent = "You win, congratulations!";
        resetRound();
    } else if (playerScore == (pointsToWin - 1) && computerScore == (pointsToWin - 1)) {
        score.textContent = 'Round ' + round + ' - You: ' + playerScore + "  |  Computer: " + computerScore;
        decision.textContent = "Tie breaker!";
    }; 

    resultsDiv.appendChild(roundUpdate);
    resultsDiv.appendChild(score);
    resultsDiv.appendChild(decision);

    round++;
};


