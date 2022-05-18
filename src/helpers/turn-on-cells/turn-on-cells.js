// to find some random cells and make them alive

export function turnOnCells(matrix, minAlive, maxPercentage) {
  // define how many will be alive

  const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const numberOfAliveCells = getRandomNumberBetween(
    minAlive,
    matrix.length / maxPercentage
  );

  for (let i = 0; i < numberOfAliveCells; i++) {
    const getRandomIndex = () => Math.floor(Math.random() * matrix.length);
    let random = getRandomIndex();
    matrix[random].isAlive = true;
  }
}
