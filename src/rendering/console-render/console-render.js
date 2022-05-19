export function consoleRender(matrix) {
  let board = [];
  let countAlive = 0;
  board.length = matrix.length;

  for (let i = 0; i < matrix.length; i++) {
    let target = document.getElementById(i); // to render cells

    if (matrix[i].isAlive) {
      // board[i] = 99; // to previsualize in the console
      countAlive++;
      target.style = 'background-color: rgb(125, 226, 47)';
    }

    if (!matrix[i].isAlive) {
      // board[i] = ' '; // to previsualize in the console
      target.style = 'background-color: rgb(39,41,32)';
    }
  }
  console.log(
    `${countAlive} alive cells | ${((countAlive * 100) / board.length).toFixed(
      2
    )} % of ${board.length}`
  );
  return board;
}
