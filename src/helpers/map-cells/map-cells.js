// mapCells

export function mapCells(matrix, width, height) {
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
    if (i % width === 0) {
      matrix[i].position.firstCol = true;
    }
    // lastCol
    if ((i + 1) % width === 0) {
      matrix[i].position.lastCol = true;
    }
  }
}
