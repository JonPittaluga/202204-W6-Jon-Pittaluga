//////////////////// lifeSatus ////////////////////
//
// lifeStatus() works as the 'gameOfLife' algorithm and changes the life status of every cell depending on its neighbours
//
// It receives one matrixes and uses an external function to filter it:
//
// matrix > the mother one, has the all objects with the following properties:
//    .index > index
//    .isAlive > boolean
//    .neighbours > An array containing its neighbours
//
// aliveCells > Only has items with the alive property === true:
//    .index > the index from the mother matrix
//    .isAlive > true
//    .neighbours > An array containing its neighbours…
//
//////////////////// lifeSatus ////////////////////

import { filterAliveCells } from '../filter-alive-cells/filter-alive-cells.js';

// const matrix = [
//   { neighbours: [1, 5, 6], index: 0, isAlive: true },
//   { neighbours: [0, 2, 5, 6, 7], index: 1, isAlive: false },
//   { neighbours: [1, 3, 6, 7, 8], index: 2, isAlive: true },
//   { neighbours: [2, 4, 7, 8, 9], index: 3, isAlive: true },
//   { neighbours: [3, 8, 9], index: 4, isAlive: true },
//   { neighbours: [0, 1, 6, 10, 11], index: 5, isAlive: false },
//   {
//     neighbours: [0, 1, 2, 5, 7, 10, 11, 12],
//     index: 6,
//     isAlive: false,
//   },
//   {
//     neighbours: [1, 2, 3, 6, 8, 11, 12, 13],
//     index: 7,
//     isAlive: false,
//   },
//   {
//     neighbours: [2, 3, 4, 7, 9, 12, 13, 14],
//     index: 8,
//     isAlive: false,
//   },
//   { neighbours: [3, 4, 8, 13, 14], index: 9, isAlive: false },
//   { neighbours: [5, 6, 11, 15, 16], index: 10, isAlive: false },
//   {
//     neighbours: [5, 6, 7, 10, 12, 15, 16, 17],
//     index: 11,
//     isAlive: false,
//   },
//   {
//     neighbours: [6, 7, 8, 11, 13, 16, 17, 18],
//     index: 12,
//     isAlive: false,
//   },
//   {
//     neighbours: [7, 8, 9, 12, 14, 17, 18, 19],
//     index: 13,
//     isAlive: false,
//   },
//   { neighbours: [8, 9, 13, 18, 19], index: 14, isAlive: true },
//   {
//     neighbours: [10, 11, 16, 20, 21],
//     index: 15,
//     isAlive: false,
//   },
//   {
//     neighbours: [10, 11, 12, 15, 17, 20, 21, 22],
//     index: 16,
//     isAlive: true,
//   },
//   {
//     neighbours: [11, 12, 13, 16, 18, 21, 22, 23],
//     index: 17,
//     isAlive: true,
//   },
//   {
//     neighbours: [12, 13, 14, 17, 19, 22, 23, 24],
//     index: 18,
//     isAlive: false,
//   },
//   {
//     neighbours: [13, 14, 18, 23, 24],
//     index: 19,
//     isAlive: false,
//   },
//   { neighbours: [15, 16, 21], index: 20, isAlive: false },
//   {
//     neighbours: [15, 16, 17, 20, 22],
//     index: 21,
//     isAlive: false,
//   },
//   {
//     neighbours: [16, 17, 18, 21, 23],
//     index: 22,
//     isAlive: false,
//   },
//   { neighbours: [17, 18, 19, 22, 24], index: 23, isAlive: true },
//   { neighbours: [18, 19, 23], index: 24, isAlive: false },
// ];

export function lifeStatus(matrix) {
  let aliveCells = filterAliveCells(matrix);
  // console.log('aliveCells.length', aliveCells.length);
  // console.table(aliveCells, ['index', 'isAlive']);

  for (let cell of aliveCells) {
    const neighbours = cell.neighbours;
    const aliveNeighbours = [];

    for (let i = 0; i < neighbours.length; i++) {
      matrix[i].isAlive ? aliveNeighbours.push(true) : false;

      let countAliveNeighbours = aliveNeighbours.length;

      if (countAliveNeighbours < 1) {
        // console.log(`The cell ${cell.index} should die by solitude`);
        matrix[cell.index].isAlive = false;
        cell.isAlive = false;
      } else if (countAliveNeighbours > 3) {
        // console.log(`The cell ${cell.index} should dy by overpopulation`);
        matrix[cell.index].isAlive = false;
        cell.isAlive = false;
        // cell.isAlive = true;
      } else if (countAliveNeighbours >= 2 && countAliveNeighbours <= 3) {
        // console.log(`The cell ${cell.index} should stay alive`);
      }
    }
  }
  return aliveCells.length;
}

// console.table(matrix, ['index', 'isAlive']);
// lifeStatus(matrix);
// console.log('=================================');
// console.table(matrix, ['index', 'isAlive']);
