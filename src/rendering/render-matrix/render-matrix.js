import { matrix, matrixValues } from '../../app.js';

const renderCell = (cell) => {
  const status = cell.isAlive ? 'isAlive' : 'isDead';
  return `<div id="${cell.index}" class="cell cell--${status}"></div>`;
};

export default function renderMatrix() {
  const gridColumns = `grid-template-columns: repeat(${matrixValues.width}, 1fr)`;
  let html = `<div class="matrix" style="${gridColumns}">`;
  const getCellsRendered = matrix.map((cell) => renderCell(cell));
  html += getCellsRendered.join('');
  html += '</div>';
  // return 'hOLA';
  return html;
}
