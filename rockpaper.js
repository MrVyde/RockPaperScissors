console.log("Hello World")
let humanScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  let resultMessage = "";

  if (human === computer) {
    resultMessage = `It's a tie! You both chose ${human}.`;
  } else {
    const humanWins =
      (human === "rock" && computer === "scissors") ||
      (human === "paper" && computer === "rock") ||
      (human === "scissors" && computer === "paper");

    if (humanWins) {
      humanScore++;
      resultMessage = `You win! ${human} beats ${computer}.`;
    } else {
      computerScore++;
      resultMessage = `You lose! ${computer} beats ${human}.`;
    }
  }

  resultDiv.textContent = resultMessage;
  scoreDiv.textContent = `Score — You: ${humanScore}, Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5
        ? "🎉 You win the game!"
        : "🤖 Computer wins the game!";
    resultDiv.textContent = winner;
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll(".choice-btn").forEach((btn) => {
    btn.disabled = true;
  });
}