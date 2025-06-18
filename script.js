// HTML Elements
const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOverSign = document.getElementById('gameOver');

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

const createBoard = () => {
    boardSquares.forEach( (row, rowIndex) => {
      row.forEach( (column, columnndex) => {
        const squareValue = `{rowIndex}${columnndex}`;
        const squareElemnt = document.createElement('div');
        squareElemnt.setAttribute('class', 'square emptySquare');
        squareElemnt.setAttribute('id', squareValue);
        board.appendChild(squareElemnt);
        emptySquares.push(squareValue);
      } )
    })
}

const setGame = () => {
  snake = ['00', '01', '02', '03',];
  score = snake.length;
  direction = 'ArrowRight';
  boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare));
  console.log(boardSquares);
  board.innerHTML = '';
  emptySquare = [];
  createBoard();
}

const startGame = () => {
  setGame();
};

startButton.addEventListener('click', startGame);