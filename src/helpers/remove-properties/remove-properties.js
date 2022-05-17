// to remove unused properties and returns the matrix with less data.

export function removeProperties(matrix) {
  const myTypeError = new TypeError();

  if (!matrix || !matrix instanceof Object) {
    myTypeError.message = `removeProperties requires an object as a parameter`;
    console.log(myTypeError);
    throw myTypeError.message;
  }

  matrix.forEach((cell) => {
    delete cell.x;
    delete cell.y;
    delete cell.position;
  });

  return matrix;
}
