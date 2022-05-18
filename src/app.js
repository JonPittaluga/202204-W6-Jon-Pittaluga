import { createMatrix } from './helpers/create-matrix/create-matrix.js';
import { mapCells } from './helpers/map-cells/map-cells.js';
import { getNeighbours } from './helpers/get-neighbours/get-neighbours.js';
import { turnOnCells } from './helpers/turn-on-cells/turn-on-cells.js';
import { removeProperties } from './helpers/remove-properties/remove-properties.js';
import { lifeStatus } from './helpers/life-status/life-status.js';
import { filterAliveCells } from './helpers/filter-alive-cells/filter-alive-cells.js';
import { consoleRender } from './helpers/console-render/console-render.js';
// Step 1: Define the size of the matrix
const width = 40; // max400
const height = 30; // max300

// Step 2: start the matrix
const matrix = createMatrix(width, height);

// Step 3: map cells to define their absolute position within the matrix -mutation-
mapCells(matrix, width, height);

// Step 4: for every cell creates an array with its neighbours -mutation-
getNeighbours(matrix, width);

// Step 5: some cells change its isAlive property to true. Accepts the mutable matrix, a min value and a maximum, being apercentage of the matrix length -mutation-
turnOnCells(matrix, 10, 0.15);

// Hardcoded checks
// matrix[0].isAlive = true;
// matrix[1].isAlive = true;

// Step 6: reduces unused properties -mutation-
removeProperties(matrix);

// the matrix is ready, now let's render it in the console

function repeatCode() {
  let aliveCells = filterAliveCells(matrix);
  consoleRender(matrix);
  lifeStatus(matrix);
  if (aliveCells.length === 0) {
    console.log('NO ALIVE CELLS');
    return;
  }
}

const intervalID = setInterval(repeatCode, 150);
setTimeout(clearInterval, 15000, intervalID);
