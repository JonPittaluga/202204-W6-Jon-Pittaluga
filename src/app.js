import { createMatrix } from './helpers/create-matrix/create-matrix.js';

import { mapCells } from './helpers/map-cells/map-cells.js';

import { getNeighbours } from './helpers/get-neighbours/get-neighbours.js';

// const life = true;

// start the matrix
const matrix = createMatrix(3, 3);

// map cells to define their absolute position within the matrix
mapCells(matrix, 3, 3);
getNeighbours(matrix, 3);

console.log(matrix);

// console.log('matrix after mapCells', matrix, matrix.length);

// // add indexes from the neighbours
// console.log('matrix after mapCells', matrix);
