import { mapCells } from '../../helpers/map-cells/map-cells.js';
import { getNeighbours } from '../../helpers/get-neighbours/get-neighbours.js';
import { turnOnCells } from '../../helpers/turn-on-cells/turn-on-cells.js';
import { removeProperties } from '../../helpers/remove-properties/remove-properties.js';
import { lifeStatus } from '../../helpers/life-status/life-status.js';
import { filterAliveCells } from '../../helpers/filter-alive-cells/filter-alive-cells.js';
import { consoleRender } from '../../helpers/console-render/console-render.js';
import { renderMatrix } from '../../rendering/render-matrix/render-matrix.js';

// import { rep}

import { matrixStart } from '../../app.js';

export function gameOfLife(matrix) {
  // Step 1: Define the size of the matrix
  // const width = 40; // max400
  // const height = 30; // max300

  // Step 2: start the matrix >> REFACTORED
  // Step 3: map cells to define their absolute position within the matrix -mutation-
  mapCells(matrix, matrixStart.width, matrixStart.height);

  // Step 4: for every cell creates an array with its neighbours -mutation-
  getNeighbours(matrix, matrixStart.width);

  // Step 5: some cells change its isAlive property to true. Accepts the mutable matrix, a min value and a maximum, being apercentage of the matrix length -mutation-
  turnOnCells(matrix, matrixStart.minAlive, matrixStart.maxAlive);

  // Step 6: reduces unused properties -mutation-
  removeProperties(matrix);

  let lifeExists = true;
  const ecosystemIsOver = () => {
    lifeExists = false;
  };

  function repeatCode() {
    renderMatrix();
    let aliveCells = filterAliveCells(matrix);
    consoleRender(matrix);
    lifeStatus(matrix);
    if (aliveCells.length === 0) {
      ecosystemIsOver();
      console.log('lifeExists', lifeExists);
    }
    return aliveCells.length;
  }

  let intervalID = setInterval(repeatCode, matrixStart.renderingSpeed);
  setTimeout(clearInterval, matrixStart.duration, intervalID);
}
