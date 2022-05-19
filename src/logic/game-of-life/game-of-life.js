import { mapCells } from '../../../helpers/map-cells/map-cells.js';
import { getNeighbours } from '../../../helpers/get-neighbours/get-neighbours.js';
import { turnOnCells } from '../../../helpers/turn-on-cells/turn-on-cells.js';
import { removeProperties } from '../../../helpers/remove-properties/remove-properties.js';
import { lifeStatus } from '../life-status/life-status.js';
import { filterAliveCells } from '../../../helpers/filter-alive-cells/filter-alive-cells.js';
import { consoleRender } from '../../../rendering/console-render/console-render.js';
import { renderMatrix } from '../../../rendering/render-matrix/render-matrix.js';
import { matrixValues, isThereLife } from '../../../app.js';

export function gameOfLife(matrix) {
  // Step 1: map cells to define their absolute position within the matrix -mutation-
  mapCells(matrix, matrixValues.width, matrixValues.height);

  // Step 2: for every cell creates an array with its neighbours -mutation-
  getNeighbours(matrix, matrixValues.width);

  // Step 3: reduces unused properties -mutation-
  removeProperties(matrix);
  // Step 4: some cells change its isAlive property to true. Accepts the mutable matrix, a min value and a maximum, being apercentage of the matrix length -mutation-
  turnOnCells(matrix, matrixValues.minAlive, matrixValues.maxAlive);

  // let lifeExists = true;
  // const ecosystemIsOver = () => {
  //   lifeExists = false;
  // };

  function repeatCode() {
    renderMatrix();
    let aliveCells = filterAliveCells(matrix);
    consoleRender(matrix);
    lifeStatus(matrix);
    // if (aliveCells.length === 0) {
    //   ecosystemIsOver();
    //   console.log('lifeExists', lifeExists);
    // }
    return aliveCells.length;
  }

  let intervalID = setInterval(repeatCode, matrixValues.renderingSpeed);
  setTimeout(clearInterval, matrixValues.duration, intervalID);
}
