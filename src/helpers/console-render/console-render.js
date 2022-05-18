export function consoleRender(matrix) {
  let board = [];
  let countAlive = 0;
  board.length = matrix.length;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].isAlive === true) {
      board[i] = `<·>`;
      countAlive++;
    } else board[i] = '  ';
  }

  if (countAlive) {
    console.log('countAlive:', countAlive, board);
  }

  return board;
}
