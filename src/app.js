import { createMatrix } from './helpers/create-matrix/create-matrix.js';
import { mapCells } from './helpers/map-cells/map-cells.js';
import { getNeighbours } from './helpers/get-neighbours/get-neighbours.js';
import { turnOnCells } from './helpers/turn-on-cells/turn-on-cells.js';
import { removeProperties } from './helpers/remove-properties/remove-properties.js';
import { lifeStatus } from './helpers/life-status/life-status.js';
import { filterAliveCells } from './helpers/filter-alive-cells/filter-alive-cells.js';

// Step 1: Define the size of the matrix
const width = 4;
const height = 4;

// Step 2: start the matrix
const matrix = createMatrix(width, height);
// console.log('matrix init', matrix);

// Step 3: map cells to define their absolute position within the matrix -mutation-
mapCells(matrix, width, height);

// Step 4: for every cell creates an array with its neighbours -mutation-
getNeighbours(matrix, width);

// Step 5: some cells change its isAlive property to true. Accepts the mutable matrix, a min value and a maximum, being apercentage of the matrix length -mutation-
// turnOnCells(matrix, 3, 0.5);

// TODO: Fake this to check

// THE ALGORITHM IS NOT WORKING.
matrix[0].isAlive = true;
matrix[1].isAlive = true;
matrix[5].isAlive = true;
matrix[10].isAlive = true;

// console.log(matrix);

// Step 6: reduces unused properties -mutation-
removeProperties(matrix);

// the matrix is ready
// console.table(matrix, ['index', 'isAlive']);

// gameOfLife logic… mutates the matrix once

// console.table(
//   matrix.filter((cell) => !cell.isAlive),
//   ['isAlive', 'neighbours']
// );
// console.table(
//   matrix.filter((cell) => cell.isAlive),
//   ['isAlive', 'neighbours']
// );

let arrWithOnlyAliveCells = filterAliveCells(matrix);

// console.log(
//   matrix.filter((cell) => cell.isAlive),
//   ['isAlive']
// );

function renderBoard() {
  let board = [];
  let countAlive = 0;
  board.length = matrix.length;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].isAlive === true) {
      board[i] = `${matrix[i].index}`;
      countAlive++;
    } else board[i] = ' ';
  }
  return console.log('countAlive:', countAlive, 'board:', board);
}

renderBoard();
lifeStatus(matrix);

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
