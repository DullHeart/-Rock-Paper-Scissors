const getComputerChoice = () => {
  const choices = ['rock','paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


const getHumanChoice = () => {
  const choices = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase();
  return choices;
}


let humanScore = 0;
let computerScore = 0;

const  playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log('It\'s a tie!');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
  
}

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    console.log(`\nRound ${i + 1}`);
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
    playRound();
    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
  }
}

console.log('\nFinal Results:');
if(humanScore > computerScore) {
  console.log('You win the game!');
} else if (humanScore < computerScore) {
  console.log('You lose the game!');
}
else {
  console.log('The game is a tie!');
};

playGame();