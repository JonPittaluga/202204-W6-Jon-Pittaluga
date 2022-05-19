// checks every item in the matrix, and, depending on the description of its position, assigns neighbours

export function getNeighbours(matrix, width) {
  for (let i = 0; i < matrix.length; i++) {
    let nw = i - 1 - width; // north-west
    let n = i - width; // north
    let ne = i - width + 1; // north-east
    let w = i - 1; // west
    let e = i + 1; // east
    let sw = i - 1 + width; // south-west
    let s = i + width; // south
    let se = i + width + 1; // south-east

    // north-west corner
    if (matrix[i].position.firstRow && matrix[i].position.firstCol) {
      matrix[i].neighbours.push(e, s, se);
    }
    // north-east corner
    else if (matrix[i].position.firstRow && matrix[i].position.lastCol) {
      matrix[i].neighbours.push(w, sw, s);
    }
    // south-west corner
    else if (matrix[i].position.lastRow && matrix[i].position.firstCol) {
      matrix[i].neighbours.push(n, ne, e);
    }
    // south-east corner
    else if (matrix[i].position.lastRow && matrix[i].position.lastCol) {
      matrix[i].neighbours.push(nw, n, w);
    }
    // first col and not a corner
    else if (matrix[i].position.firstCol) {
      matrix[i].neighbours.push(n, ne, e, s, se);
    }
    // last col and not a corner
    else if (matrix[i].position.lastCol) {
      matrix[i].neighbours.push(nw, n, w, sw, s);
    }
    // // first row and not a corner
    else if (matrix[i].position.firstRow) {
      matrix[i].neighbours.push(w, e, sw, s, se);
    }
    // // last row and not a corner
    else if (matrix[i].position.lastRow) {
      matrix[i].neighbours.push(nw, n, ne, w, e);
    }
    // standard case, is not in a border
    else matrix[i].neighbours.push(nw, n, ne, w, e, sw, s, se);
  }
}

// const matrix = [
//   {
//     x: 0,
//     y: 0,
//     neighbours: [],
//     position: {
//       firstRow: true,
//       firstCol: true,
//       lastRow: false,
//       lastCol: false,
//     },
//     isAlive: false,
//   },
//   {
//     x: 1,
//     y: 0,
//     neighbours: [],
//     position: {
//       firstRow: true,
//       firstCol: false,
//       lastRow: false,
//       lastCol: false,
//     },
//     isAlive: false,
//   },
//   {
//     x: 2,
//     y: 0,
//     neighbours: [],
//     position: {
//       firstRow: true,
//       firstCol: false,
//       lastRow: false,
//       lastCol: true,
//     },
//     isAlive: false,
//   },
//   {
//     x: 0,
//     y: 1,
//     neighbours: [],
//     position: {
//       firstRow: false,
//       firstCol: true,
//       lastRow: false,
//       lastCol: false,
//     },
//     isAlive: false,
//   },
//   {
//     x: 1,
//     y: 1,
//     neighbours: [],
//     position: {
//       firstRow: false,
//       firstCol: false,
//       lastRow: false,
//       lastCol: false,
//     },
//     isAlive: false,
//   },
//   {
//     x: 2,
//     y: 1,
//     neighbours: [],
//     position: {
//       firstRow: false,
//       firstCol: false,
//       lastRow: false,
//       lastCol: true,
//     },
//     isAlive: false,
//   },
//   {
//     x: 0,
//     y: 2,
//     neighbours: [],
//     position: {
//       firstRow: false,
//       firstCol: true,
//       lastRow: true,
//       lastCol: false,
//     },
//     isAlive: false,
//   },
//   {
//     x: 1,
//     y: 2,
//     neighbours: [],
//     position: {
//       firstRow: false,
//       firstCol: false,
//       lastRow: true,
//       lastCol: false,
//     },
//     isAlive: false,
//   },
//   {
//     x: 2,
//     y: 2,
//     neighbours: [],
//     position: {
//       firstRow: false,
//       firstCol: false,
//       lastRow: true,
//       lastCol: true,
//     },
//     isAlive: false,
//   },
// ];

// getNeighbours(matrix, 3);

// console.log(matrix);
