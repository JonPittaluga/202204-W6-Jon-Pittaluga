import { matrix } from '../create-matrix/create-matrix.js';

import { width, height } from '../../data/global-variables.js';

export function mapCells(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    // firstRow
    if (i < width) {
      matrix[i].position.firstRow = true;
    }
    // lastRow
    if (i >= width * (height - 1)) {
      matrix[i].position.lastRow = true;
    }
    // firstCol
    if (i === 0 || i % width === 0) {
      matrix[i].position.firstCol = true;
    }
    // lastCol
    if ((i + 1) % width === 0) {
      matrix[i].position.lastCol = true;
    }
  }
}
