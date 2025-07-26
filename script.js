// HTML Elements
const board = document.getElementById("board");
const scoreBoard = document.getElementById("scoreBoard");
const startButton = document.getElementById("start");
const gameOverSign = document.getElementById("gameOver");

//Game Senttings
const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
  emptySquare: 0,
  snakeSquare: 1,
  foodSquare: 2,
};

const directions = {
  ArrowUp: -10,
  ArrowDown: 10,
  ArrowRight: 1,
  ArrowLeft: -1,
};

//Game variables
let snake;
let score;
let direction;
let boardSquares;
let emptySquare;
let moveInterval;

const drawSnake = () => {
    snake.forEach (square => drawSquare(square, 'snakeSquare'));
}



const drawSquare = (square, type) => {
  const [row, column] = square.split('');
  boardSquares[row] [column] = squareTypes[type];
  const squareElemnt = document.getElementById(square);
  squareElemnt.setAttribute('class', `square ${type}`);
  
  if(type === 'emptySquare') {
    emptySquare.push(square);
  } else {
      if(emptySquare.indexOf (square) !== -1){
          emptySquare.splice(emptySquare.indexOf (square), 1);
      }
  }

};

const moveSnake = () => {
  const newSquare = String(
    Number(snake[snake.length -1]) + directions[direction])
  .padStart(2, '0');
  const [row, column] = newSquare.split('');
}

const setDirection = newDirection => {
  direction = newDirection
    
}

const directionEvent = key => {
  switch (key.code) {
    case 'ArrowUp':
      direction != 'ArrowDown' && setDirection(key.code)
      break;
      case 'ArrowDown':
        direction != 'ArrowUp' && setDirection(key.code)
        break
        case 'ArrowUp':
          direction != 'ArrowRight' && setDirection(key.code)
          break
          case 'ArrowRight':
            direction != 'Arrowleft' && setDirection(key.code)
            break;
  }
}



const createRandomFood = () => {
  const randomEmptysquare = emptySquare[Math.floor(Math.random() * emptySquare.length)];
  drawSquare(randomEmptysquare, 'foodSquare');
}


const updateScore = () =>{
   scoreBoard.innerText = score;
}

const createBoard = () => {
  boardSquares.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      const squareValue = `${rowIndex}${columnIndex}`;
      const squareElemnt = document.createElement("div");
      squareElemnt.setAttribute("class", "square emptySquare");
      squareElemnt.setAttribute("id", squareValue);
      board.appendChild(squareElemnt);
      emptySquare.push(squareValue);
    });
  });
};

const setGame = () => {
  snake = ["00", "01", "02", "03"];
  score = snake.length;
  direction = "ArrowRight";
  boardSquares = Array.from(Array(boardSize), () =>
    new Array(boardSize).fill(squareTypes.emptySquare)
  );
  console.log(boardSquares);
  board.innerHTML = "";
  emptySquare = [];
  createBoard();
};

const startGame = () => {
  setGame();
  gameOverSign.style.display = "none";
  startButton.disabled = true;
  drawSnake();
  updateScore();
  createRandomFood();
  document.addEventListener('keydown', directionEvent);
  moveInterval = setInterval( () => moveSnake(), gameSpeed);
};

startButton.addEventListener("click", startGame);
