const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');
const reset = document.getElementById('reset');

let humanScore = 0;
let computerScore = 0;
const updateResult = (message = '') => {
  result.textContent = `Score: You ${humanScore} - Computer ${computerScore}\n${message}`;
}

const resetGame = () => {
  humanScore = 0;
  computerScore = 0;
  updateResult("Game reset. Let's play!");
}



const getComputerChoice = () => {
  const choices = ['rock','paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const getHumanChoice = () => {
  const choices = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase();
  return choices;
}

const  playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log('It\'s a tie!');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    updateResult(`You win this round! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;  
    updateResult(`You lose this round! ${computerChoice} beats ${humanChoice}`);
  }

  if (humanScore === 5) {
    updateResult(`Score: You ${humanScore} - Computer ${computerScore}\nYou Win the Game!`);
  } else if (computerScore === 5) {
    updateResult(`Score: You ${humanScore} - Computer ${computerScore}\nYou Lose the Game!`);
  }
  
  
}

const handelClick = (choice) => {
  if (humanScore >= 5 || computerScore >= 5) {
    return;
  }

  const computerChoice = getComputerChoice();
  playRound(choice, computerChoice);
}





paper.addEventListener('click',() => handelClick('paper'));

rock.addEventListener('click', () => handelClick('rock'));

scissors.addEventListener('click', () => handelClick('scissors'));

reset.addEventListener('click', resetGame);


updateResult("First to 5 wins!");

