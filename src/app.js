import { createMatrix } from './classes/game-of-life/create-matrix/create-matrix.js';
import { gameOfLife } from './classes/game-of-life/game-of-life/game-of-life.js';
import { renderMatrix } from './rendering/render-matrix/render-matrix.js';

// GLOBAL VARIABLES & DOM ELEMENTS

// to define the matrix values and its behaviour
export const matrixValues = {
  width: 120,
  height: 80,
  minAlive: 6,
  maxAlive: 10,
  duration: 3000, // miliseconds
  renderingSpeed: 50, // miliseconds
};

// to startup a matrix with the
export const matrix = createMatrix(matrixValues.width, matrixValues.height);

export const matrixContainerId = document.querySelector('#matrix-container');

const headerInfo__widthValue = document.querySelector(
  '.header-info__width--value'
);
const headerInfo__heightValue = document.querySelector(
  '.header-info__height--value'
);
const headerInfo__cellsValue = document.querySelector(
  '.header-info__cells--value'
);
const headerInfo__intervalsValue = document.querySelector(
  '.header-info__intervals--value'
);
const headerInfo__renderingValue = document.querySelector(
  '.header-info__rendering--value'
);

matrixContainerId.innerHTML = renderMatrix();
headerInfo__widthValue.innerHTML = matrixValues.width;
headerInfo__heightValue.innerHTML = matrixValues.height;
headerInfo__cellsValue.innerHTML = matrixValues.width * matrixValues.height;
headerInfo__intervalsValue.innerHTML = matrixValues.duration / 1000 + 's';
headerInfo__renderingValue.innerHTML = matrixValues.renderingSpeed + 'ms';

// starts the game of life
gameOfLife(matrix);
