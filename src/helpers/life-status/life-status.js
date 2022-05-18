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

export function lifeStatus(matrix) {
  let aliveCells = filterAliveCells(matrix);

  for (let cell of aliveCells) {
    // looping the smaller matrix, only alive

    // console.log('cell.index', cell.index);

    const neighbourIndexes = cell.neighbours;

    let aliveNeighbours = [];
    let locals = []; // to store neighbours of neighbours

    for (let index of neighbourIndexes) {
      matrix[index].isAlive ? aliveNeighbours.push(index) : false;
    }
    console.log('aliveNeighbours', aliveNeighbours);

    if (aliveNeighbours.length >= 2 && aliveNeighbours.length <= 3) {
      console.log('stay alive', matrix[cell.index].index);
      // matrix[cell.index].isAlive = true;
    }

    if (aliveNeighbours.length < 2) {
      console.log('death by solitude', matrix[cell.index].index);
      // matrix[cell.index].isAlive = false;
    }
  }

  console.table(aliveCells, ['isAlive', 'index']);
  console.table(matrix, ['isAlive', 'index']);

  // return aliveNeighbours.length;

  // for (let cell of aliveCells) {
  //   counterAlive++;

  //   const neighbours = cell.neighbours;

  //   const aliveNeighbours = []; // to count how many alive has a cell
  //   let countAliveNeighbours = aliveNeighbours.length;

  //   // console.log(`external loop: ${cell.index}`);
  //   const locals2d = [];

  //   for (let i = 0; i < neighbours.length; i++) {
  //     // counterNeighbour++;
  //     // console.log('counterNeighbour', counterNeighbour);
  //     // console.log(`internal loop. Index: ${matrix[i].neighbours}`);

  //     locals2d.push(matrix[i].neighbours); // pushes arrays

  //     if (matrix[i].isAlive) {
  //       aliveNeighbours.push(matrix[i]);
  //       if (countAliveNeighbours < 2) {
  //         // console.log(`The cell ${cell.index} should die by solitude`);
  //         matrix[cell.index].isAlive = false;
  //         cell.isAlive = false;
  //       } else if (countAliveNeighbours > 3) {
  //         // console.log(`The cell ${cell.index} should dy by overpopulation`);
  //         matrix[cell.index].isAlive = false;
  //         cell.isAlive = false;
  //         // cell.isAlive = true;
  //       } else if (countAliveNeighbours >= 2 && countAliveNeighbours <= 3) {
  //         // console.log(`The cell ${cell.index} should stay alive`);
  //       }
  //     } // !matrix[i].isAlive

  //     const locals1d = [].concat(...locals2d);
  //     locals = [...new Set(locals1d)];
  //     // console.log('locals', locals);
  //   }
  // }
  // TODO: PREVIOUS VERSION DISABLED - 1623 for (let cell of aliveCells) {
  //   counterAlive++;

  //   const neighbours = cell.neighbours;

  //   const aliveNeighbours = []; // to count how many alive has a cell
  //   let countAliveNeighbours = aliveNeighbours.length;

  //   // console.log(`external loop: ${cell.index}`);
  //   const locals2d = [];

  //   for (let i = 0; i < neighbours.length; i++) {
  //     // counterNeighbour++;
  //     // console.log('counterNeighbour', counterNeighbour);
  //     // console.log(`internal loop. Index: ${matrix[i].neighbours}`);

  //     locals2d.push(matrix[i].neighbours); // pushes arrays

  //     if (matrix[i].isAlive) {
  //       aliveNeighbours.push(matrix[i]);
  //       if (countAliveNeighbours < 2) {
  //         // console.log(`The cell ${cell.index} should die by solitude`);
  //         matrix[cell.index].isAlive = false;
  //         cell.isAlive = false;
  //       } else if (countAliveNeighbours > 3) {
  //         // console.log(`The cell ${cell.index} should dy by overpopulation`);
  //         matrix[cell.index].isAlive = false;
  //         cell.isAlive = false;
  //         // cell.isAlive = true;
  //       } else if (countAliveNeighbours >= 2 && countAliveNeighbours <= 3) {
  //         // console.log(`The cell ${cell.index} should stay alive`);
  //       }
  //     } // !matrix[i].isAlive

  //     const locals1d = [].concat(...locals2d);
  //     locals = [...new Set(locals1d)];
  //     // console.log('locals', locals);
  //   }
  // }

  // for (let cell of locals) {
  //   const neighbours = matrix[cell].neighbours;
  //   const aliveNeighbours = []; // to count how many alive has a cell
  //   let countAliveNeighbours = aliveNeighbours.length;
  //   for (let i = 0; i < neighbours.length; i++) {
  //     console.log(`locals internal loop. Index: ${matrix[i].neighbours}`);
  //     if (matrix[i].isAlive) {
  //       aliveNeighbours.push(matrix[i]);
  //       if (countAliveNeighbours === 3) {
  //         matrix[cell.index].isAlive = true;
  //         cell.isAlive = true;
  //       }
  //     }
  //   }
  // }

  // Quiero iterar sobre matrix y, si matrix[i].index está incluido en locals, guardarlo

  // // FIXME:

  //   let localCells = matrix.filter((cell) => locals.includes(cell.index));

  //   // console.log('localCells', localCells);

  //   for (let cell of localCells) {
  //     const neighbours = cell.neighbours;
  //     const aliveNeighbours = []; // to count how many alive has a cell
  //     let countAliveNeighbours = aliveNeighbours.length;

  //     for (let i = 0; i < neighbours.length; i++) {
  //       // console.log(`locals internal loop. Index: ${matrix[i].neighbours}`);
  //       if (cell.isAlive) {
  //         aliveNeighbours.push(matrix[i]);
  //       }
  //     }

  //     if (countAliveNeighbours === 3) {
  //       matrix[cell.index].isAlive = true;
  //       cell.isAlive = true;
  //     }
  //   }
}

// console.table(matrix, ['index', 'isAlive']);
// lifeStatus(matrix);
// console.log('=================================');
// console.table(matrix, ['index', 'isAlive']);
