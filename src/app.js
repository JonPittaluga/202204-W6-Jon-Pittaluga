import { createMatrix } from './helpers/create-matrix/create-matrix.js';
import { mapCells } from './helpers/map-cells/map-cells.js';
import { getNeighbours } from './helpers/get-neighbours/get-neighbours.js';
import { turnOnCells } from './helpers/turn-on-cells/turn-on-cells.js';
import { removeProperties } from './helpers/remove-properties/remove-properties.js';
import { lifeStatus } from './helpers/life-status/life-status.js';
import { filterAliveCells } from './helpers/filter-alive-cells/filter-alive-cells.js';

// define the size of the matrix
const width = 20;
const height = 20;

// start the matrix
const matrix = createMatrix(width, height);

// map cells to define their absolute position within the matrix -mutation-
mapCells(matrix, width, height);

// for every cell creates an array with its neighbours -mutation-
getNeighbours(matrix, width);

// some cells change its isAlive property to true. Accepts the mutable matrix and a min value -mutation-
turnOnCells(matrix, 100);

// reduces unused properties -mutation-
removeProperties(matrix);

// the matrix is ready
console.table(matrix, ['index', 'isAlive']);

// gameOfLife logic… mutates the matrix once
lifeStatus(matrix);

// to check which ones are alive after the lifeStatus cicle
const aliveCells = filterAliveCells(matrix);

console.table(matrix, ['index', 'isAlive']);
console.table(aliveCells, ['index', 'isAlive']);
