// import { width, height } from '../../data/global-variables.js';

// let width = 4;
// let height = 3;

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

const matrix = [
  {
    x: 0,
    y: 0,
    neighbours: [],
    position: {
      firstRow: false,
      firstCol: false,
      lastRow: false,
      lastCol: false,
    },
    isAlive: false,
  },
  {
    x: 1,
    y: 0,
    neighbours: [],
    position: {
      firstRow: false,
      firstCol: false,
      lastRow: false,
      lastCol: false,
    },
    isAlive: false,
  },
  {
    x: 2,
    y: 0,
    neighbours: [],
    position: {
      firstRow: false,
      firstCol: false,
      lastRow: false,
      lastCol: false,
    },
    isAlive: false,
  },
  {
    x: 0,
    y: 1,
    neighbours: [],
    position: {
      firstRow: false,
      firstCol: false,
      lastRow: false,
      lastCol: false,
    },
    isAlive: false,
  },
  {
    x: 1,
    y: 1,
    neighbours: [],
    position: {
      firstRow: false,
      firstCol: false,
      lastRow: false,
      lastCol: false,
    },
    isAlive: false,
  },
  {
    x: 2,
    y: 1,
    neighbours: [],
    position: {
      firstRow: false,
      firstCol: false,
      lastRow: false,
      lastCol: false,
    },
    isAlive: false,
  },
  {
    x: 0,
    y: 2,
    neighbours: [],
    position: {
      firstRow: false,
      firstCol: false,
      lastRow: false,
      lastCol: false,
    },
    isAlive: false,
  },
  {
    x: 1,
    y: 2,
    neighbours: [],
    position: {
      firstRow: false,
      firstCol: false,
      lastRow: false,
      lastCol: false,
    },
    isAlive: false,
  },
  {
    x: 2,
    y: 2,
    neighbours: [],
    position: {
      firstRow: false,
      firstCol: false,
      lastRow: false,
      lastCol: false,
    },
    isAlive: false,
  },
];
