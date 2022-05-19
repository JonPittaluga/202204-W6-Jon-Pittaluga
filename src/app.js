import { createMatrix } from './helpers/create-matrix/create-matrix.js';
import { mapCells } from './helpers/map-cells/map-cells.js';
import { getNeighbours } from './helpers/get-neighbours/get-neighbours.js';
import { turnOnCells } from './helpers/turn-on-cells/turn-on-cells.js';
import { removeProperties } from './helpers/remove-properties/remove-properties.js';
import { lifeStatus } from './helpers/life-status/life-status.js';
import { filterAliveCells } from './helpers/filter-alive-cells/filter-alive-cells.js';
import { consoleRender } from './helpers/console-render/console-render.js';

const width = 150;
const height = 100;
const matrixStart = { minAlive: 5, maxAlive: 30 };
const duration = 10000; // miliseconds
const renderingSpeed = 100; // miliseconds

const matrix = createMatrix(width, height);

const renderCell = (cell) => {
  const status = cell.isAlive ? 'isAlive' : 'isDead';
  return `<div id="${cell.index}" class="cell cell--${status}"></div>`;
};

const renderMatrix = () => {
  const gridColumns = `grid-template-columns: repeat(${width}, 1fr)`;
  let html = `<div class="matrix" style="${gridColumns}">`;
  const getCellsRendered = matrix.map((cell) => renderCell(cell));
  html += getCellsRendered.join('');
  html += '</div>';
  // return 'hOLA';
  return html;
};

function startGameOfLife(durationMili) {
  // Step 1: Define the size of the matrix
  // const width = 40; // max400
  // const height = 30; // max300

  // Step 2: start the matrix
  // Step 3: map cells to define their absolute position within the matrix -mutation-
  mapCells(matrix, width, height);

  // Step 4: for every cell creates an array with its neighbours -mutation-
  getNeighbours(matrix, width);

  // Step 5: some cells change its isAlive property to true. Accepts the mutable matrix, a min value and a maximum, being apercentage of the matrix length -mutation-
  turnOnCells(matrix, matrixStart.minAlive, matrixStart.maxAlive);

  // Hardcoded checks
  // matrix[0].isAlive = true;
  // matrix[1].isAlive = true;

  // Step 6: reduces unused properties -mutation-
  removeProperties(matrix);

  // the matrix is ready, now let's render it in the console

  let lifeExists = true;
  const ecosystemIsOver = () => {
    lifeExists = false;
  };

  function repeatCode() {
    renderMatrix();
    let aliveCells = filterAliveCells(matrix);
    consoleRender(matrix);
    lifeStatus(matrix);
    if (aliveCells.length === 0) {
      ecosystemIsOver();
      console.log('lifeExists', lifeExists);
    }
    return aliveCells.length;
  }

  let intervalID = setInterval(repeatCode, renderingSpeed); // 50ms in console works
  setTimeout(clearInterval, durationMili, intervalID);
  // const headerInfo__intervalsValue = document.querySelector(
  //   '.header-info__intervals--value'
  // );
  // headerInfo__intervalsValue.innerHTML = intervalID;
}

// TODO: IMPROVE THE WAY ALL STARTS
const fiatMatrix = () => {
  startGameOfLife(duration); // minAlive, maxAlive, duration
  console.log('exitOption');
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
const matrixContainerId = document.querySelector('#matrix-container');

matrixContainerId.innerHTML = renderMatrix();
// console.log(matrixContainerId.innerHTML);

headerInfo__widthValue.innerHTML = width;
headerInfo__heightValue.innerHTML = height;
headerInfo__cellsValue.innerHTML = width * height;
headerInfo__intervalsValue.innerHTML = duration / 1000 + 's';
headerInfo__renderingValue.innerHTML = renderingSpeed + 'ms';
