import { createMatrix } from './helpers/create-matrix/create-matrix.js';
import { mapCells } from './helpers/map-cells/map-cells.js';
import { getNeighbours } from './helpers/get-neighbours/get-neighbours.js';
import { turnOnCells } from './helpers/turn-on-cells/turn-on-cells.js';
import { removeProperties } from './helpers/remove-properties/remove-properties.js';
import { lifeStatus } from './helpers/life-status/life-status.js';
import { filterAliveCells } from './helpers/filter-alive-cells/filter-alive-cells.js';

// Step 1: Define the size of the matrix
const width = 12;
const height = 12;

// Step 2: start the matrix
const matrix = createMatrix(width, height);
// console.log('matrix init', matrix);

// Step 3: map cells to define their absolute position within the matrix -mutation-
mapCells(matrix, width, height);

// Step 4: for every cell creates an array with its neighbours -mutation-
getNeighbours(matrix, width);

// Step 5: some cells change its isAlive property to true. Accepts the mutable matrix, a min value and a maximum, being apercentage of the matrix length -mutation-
turnOnCells(matrix, 10, 0.4);

// Hardcoded checks
// matrix[0].isAlive = true;
// matrix[1].isAlive = true;

// Step 6: reduces unused properties -mutation-
removeProperties(matrix);

// the matrix is ready
// console.table(matrix, ['index', 'isAlive']);

function renderBoard() {
  let board = [];
  let countAlive = 0;
  board.length = matrix.length;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].isAlive === true) {
      // board[i] = `${matrix[i].index}`;
      board[i] = `X`;
      countAlive++;
    } else board[i] = ' ';
  }

  if (countAlive) {
    console.log('countAlive:', countAlive, board);
  }
}

function repeatCode() {
  let aliveCells = filterAliveCells(matrix);
  renderBoard();
  lifeStatus(matrix);
  if (aliveCells.length === 0) {
    console.log('NO ALIVE CELLS');
    return;
  }
}

const intervalID = setInterval(repeatCode, 1000);
// setInterval(repeatCode, 1000);

setTimeout(clearInterval, 15000, intervalID);

// renderBoard();
// lifeStatus(matrix);
// renderBoard();

// renderBoard();
// lifeStatus(matrix);

// console.log('=============');
// lifeStatus(matrix);
// renderBoard();
// console.log('=============');

// lifeStatus(matrix);
// renderBoard2();
// console.log('=============');

// lifeStatus(matrix);
// renderBoard();
// console.log('=============');
// lifeStatus(matrix);
// renderBoard();

// setTimeout(renderBoard, 3000);

// to check which ones are alive after the lifeStatus cicle
// const aliveCells = filterAliveCells(matrix);

// console.table(matrix, ['index', 'isAlive']);
// console.table(aliveCells, ['index', 'isAlive']);
