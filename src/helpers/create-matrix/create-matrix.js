/////////////////// createMatrix ///////////////////
class Cell {
  constructor(
    x,
    y,
    neighbours = [],
    position = {
      firstRow: false,
      firstCol: false,
      lastRow: false,
      lastCol: false,
    },
    index = null,
    isAlive = false
  ) {
    this.x = x;
    this.y = y;
    this.neighbours = neighbours;
    this.position = position;
    this.index = index;
    this.isAlive = isAlive;
  }
}

export function createMatrix(width, height) {
  const matrixArr = [];

  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      matrixArr.push(new Cell(i, j));
    }
  }

  for (let k = 0; k < matrixArr.length; k++) {
    matrixArr[k].index = k;
  }

  return matrixArr;
}
