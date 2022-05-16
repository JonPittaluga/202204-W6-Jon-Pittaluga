export function filterAliveCells(matrix) {
  return matrix.filter((cell) => cell.isAlive === true);
}
