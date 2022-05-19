import { createMatrix } from './classes/game-of-life/create-matrix/create-matrix.js';
import { gameOfLife } from './classes/game-of-life/game-of-life/game-of-life.js';
import { renderMatrix } from './rendering/render-matrix/render-matrix.js';
// import { intro } from './rendering/intro-texts/intro.js';

export const width = 4;
const height = 4;

export const matrixStart = {
  width: 4,
  height: 3,
  minAlive: 2,
  maxAlive: 100,
  duration: 5000,
  renderingSpeed: 500,
};
export const duration = 5000; // miliseconds
const renderingSpeed = 1000; // miliseconds

export const matrix = createMatrix(matrixStart.width, matrixStart.height);
let lifeExists = true;

// TODO: IMPROVE THE WAY ALL STARTS
const fiatMatrix = () => {
  gameOfLife(matrix); // minAlive, maxAlive, duration
  // console.log('exitOption');
};

fiatMatrix();

const btn = document.querySelector('.start-btn');

const headerInfo = document.querySelector('.header-info');
const headerInfo__width = document.querySelector('.header-info__width');
const headerInfo__widthValue = document.querySelector(
  '.header-info__width--value'
);
const headerInfo__height = document.querySelector('.header-info__height');
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

const matrixContainer = document.querySelector('.container');
export const matrixContainerId = document.querySelector('#matrix-container'); // TODO: Refactor this

matrixContainerId.innerHTML = renderMatrix();
// console.log(matrixContainerId.innerHTML);

headerInfo__widthValue.innerHTML = matrixStart.width;
headerInfo__heightValue.innerHTML = matrixStart.height;
headerInfo__cellsValue.innerHTML = matrixStart.width * matrixStart.height;
headerInfo__intervalsValue.innerHTML = matrixStart.duration / 1000 + 's';
headerInfo__renderingValue.innerHTML = matrixStart.renderingSpeed + 'ms';
