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
    isAlive = false
  ) {
    this.x = x;
    this.y = y;
    this.neighbours = neighbours;
    this.position = position;
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
  return matrixArr;
}
