let userScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userChoice = document.getElementById("user-choice");
const updateBoard = document.getElementById("update-board");
const computerChoicedisplay = document.getElementById("computer-choice");
const computerScoreBoard = document.getElementById("computer-score");
const userScoreBoard = document.getElementById("user-score");

rock.addEventListener("click", () => runGame("Rock"));

paper.addEventListener("click", () => runGame("Paper"));

scissors.addEventListener("click", () => runGame("Scissors"));

function runGame(game) {
  const computer = generateComputerChoice();
  const gameResult = computeMatch(game, computer);
  userChoice.innerText = game;
  computerChoicedisplay.innerText = computer;
  updateScore(gameResult);
}

function updateScore(result) {
  switch (result) {
    case "win":
      updateBoard.innerText = "User Wins!";
      userScore++;
      userScoreBoard.innerText = userScore;
      break;
    case "loss":
      updateBoard.innerText = "Computer Wins!";
      computerScore++;
      computerScoreBoard.innerText = computerScore;
      break;
    case "tie":
      updateBoard.innerText = "Tie";
      break;
    default:
      break;
  }
}

function generateComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const result = choices[Math.floor(Math.random() * 3)];
  return result;
}

function computeMatch(userChoice, computerChoice) {
  const gameState = [
    {
      choice: "Rock",
      Rock: "tie",
      Paper: "loss",
      Scissors: "win",
    },
    {
      choice: "Paper",
      Rock: "win",
      Paper: "tie",
      Scissors: "loss",
    },
    {
      choice: "Scissors",
      Rock: "loss",
      Paper: "win",
      Scissors: "tie",
    },
  ];

  const gameConditions = gameState.find(({ choice }) => choice === userChoice);
  return gameConditions[computerChoice];
}
