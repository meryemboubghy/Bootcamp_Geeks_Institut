let board = Array(9).fill(null);
let playerSymbol = "";
let computerSymbol = "";
let currentPlayer = "player";
let gameActive = true;
let difficulty = "easy";

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function chooseSymbol(symbol) {
  playerSymbol = symbol;
  computerSymbol = symbol === "X" ? "O" : "X";
  resetGame();
}

function setDifficulty(level) {
  difficulty = level;
  resetGame();
}

function handleMove(index) {
  if (!gameActive || board[index] || !playerSymbol) return;

  makeMove(index, playerSymbol);
  if (checkGameOver(playerSymbol)) return;

  currentPlayer = "computer";
  setTimeout(() => {
    computerTurn();
    currentPlayer = "player";
  }, 400); // délai réaliste
}

function makeMove(index, symbol) {
  board[index] = symbol;
  document.getElementById(`cell-${index}`).textContent = symbol;
  document
    .getElementById(`cell-${index}`)
    .classList.add(symbol === "X" ? "text-blue-700" : "text-green-700");
}

function computerTurn() {
  let index;
  if (difficulty === "easy") {
    const empty = board.map((v, i) => (v ? null : i)).filter((i) => i !== null);
    index = empty[Math.floor(Math.random() * empty.length)];
  } else {
    // Hard mode: try to block player or win
    index = getBestMove();
  }
  if (index !== undefined && board[index] === null) {
    makeMove(index, computerSymbol);
    checkGameOver(computerSymbol);
  }
}

function getBestMove() {
  // Try to win
  for (let combo of winCombos) {
    const [a, b, c] = combo;
    const values = [board[a], board[b], board[c]];
    if (
      values.filter((v) => v === computerSymbol).length === 2 &&
      values.includes(null)
    ) {
      return combo[values.indexOf(null)];
    }
  }
  // Try to block player
  for (let combo of winCombos) {
    const [a, b, c] = combo;
    const values = [board[a], board[b], board[c]];
    if (
      values.filter((v) => v === playerSymbol).length === 2 &&
      values.includes(null)
    ) {
      return combo[values.indexOf(null)];
    }
  }
  // Else random
  const empty = board.map((v, i) => (v ? null : i)).filter((i) => i !== null);
  return empty[Math.floor(Math.random() * empty.length)];
}

function checkGameOver(symbol) {
  let win = winCombos.some((combo) =>
    combo.every((index) => board[index] === symbol)
  );
  if (win) {
    document.getElementById("result").textContent =
      symbol === playerSymbol
        ? " Vous avez gagné !"
        : " L’ordinateur a gagné !";
    gameActive = false;
    document.getElementById("resetBtn").classList.remove("hidden");
    return true;
  }

  if (board.every((cell) => cell !== null)) {
    document.getElementById("result").textContent = " Match nul !";
    gameActive = false;
    document.getElementById("resetBtn").classList.remove("hidden");
    return true;
  }

  return false;
}

function resetGame() {
  board = Array(9).fill(null);
  gameActive = true;
  currentPlayer = "player";
  document.getElementById("result").textContent = "";
  document.getElementById("resetBtn").classList.add("hidden");

  for (let i = 0; i < 9; i++) {
    let cell = document.getElementById(`cell-${i}`);
    cell.textContent = "";
    cell.classList.remove("text-blue-700", "text-green-700");
  }
}
