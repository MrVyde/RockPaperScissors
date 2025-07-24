console.log("Hello World")

// 
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);

    if (random === 0) {
        return "scissors";
    } else if (random === 1) {
        return "rock";
    } else {
        return "paper";
    };
}; console.log(getComputerChoice());

function getHumanChoice() {
    return prompt("What is your choice?");
}; console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

      // Tie condition
  if (human === computer) {
    console.log(`It's a tie! You both chose ${human}.`);
    return;
  }

  // Winning combos for human
  const humanWins =
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper");

  if (humanWins) {
    humanScore++;
    console.log(`You win! ${human} beats ${computer}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${computer} beats ${human}.`);
  }

  console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
}
// Play one round
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


//
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (human === computer) {
      console.log(`It's a tie! You both chose ${human}.`);
      return;
    }

    const humanWins =
      (human === "rock" && computer === "scissors") ||
      (human === "paper" && computer === "rock") ||
      (human === "scissors" && computer === "paper");

    if (humanWins) {
      humanScore++;
      console.log(`You win! ${human} beats ${computer}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computer} beats ${human}.`);
    }

    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
  }

  // Play 5 rounds
  for (let round = 1; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`Round ${round}:`);
    playRound(humanSelection, computerSelection);
    console.log("---");
  }

  // Declare overall winner
  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("🤖 Computer wins the game!");
  } else {
    console.log("⚖️ It's a draw!");
  }
}