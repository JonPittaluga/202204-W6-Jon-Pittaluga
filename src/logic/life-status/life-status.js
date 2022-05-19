//////////////////// lifeSatus ////////////////////
//
// lifeStatus() works as the 'gameOfLife' algorithm and changes the life status of every cell depending on its neighbours

import { filterAliveCells } from '../../helpers/filter-alive-cells/filter-alive-cells.js';

export function lifeStatus(matrix) {
  let temporaryMatrix = matrix.map((cell) => {
    return { ...cell };
  });

  let aliveCells = filterAliveCells(temporaryMatrix);
  let locals = []; // to store neighbours of neighbours

  for (let cell of aliveCells) {
    const neighbourIndexes = cell.neighbours;

    let aliveNeighbours = [];

    locals.push(neighbourIndexes);

    for (let index of neighbourIndexes) {
      temporaryMatrix[index].isAlive ? aliveNeighbours.push(index) : '';
    }

    if (aliveNeighbours.length < 2) {
      // console.log('death by solitude', matrix[cell.index].index);
      matrix[cell.index].isAlive = false;
    }

    if (aliveNeighbours.length > 3) {
      // console.log('death by overpopulation', matrix[cell.index].index);
      matrix[cell.index].isAlive = false;
    }
  }

  locals = [].concat(...locals); // to flatten the array into one dimension
  locals = [...new Set(locals)].sort((a, b) => a - b); // to get only unique values and sort them

  for (let index of locals) {
    const neighbourIndexes = temporaryMatrix[index].neighbours;

    let aliveNeighbours = [];

    for (let index of neighbourIndexes) {
      temporaryMatrix[index].isAlive ? aliveNeighbours.push(index) : '';
    }

    if (aliveNeighbours.length === 2 && !matrix[index].isAlive) {
      // console.log('FIAT LUX', matrix[index].index);
      matrix[index].isAlive = true;
    }
  }
}
