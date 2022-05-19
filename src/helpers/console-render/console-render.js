export function consoleRender(matrix) {
  let board = [];
  let countAlive = 0;
  board.length = matrix.length;

  for (let i = 0; i < matrix.length; i++) {
    let target = document.getElementById(i); // to render cells

    if (matrix[i].isAlive) {
      // board[i] = `<·>`;
      board[i] = 99;
      countAlive++;
      target.style = 'background-color: rgb(125, 226, 47)';
    }

    if (!matrix[i].isAlive) {
      board[i] = ' ';
      target.style = 'background-color: rgb(39,41,32)';
    }
  }
  console.log('countAlive', countAlive);

  return board;
}
