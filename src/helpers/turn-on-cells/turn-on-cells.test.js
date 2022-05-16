import { turnOnCells } from './turn-on-cells.js';

// TODO: Improve testing with lateral cases and errors
describe('Given a matrix passed as a parameter mutates it and changes some of its alive values to true', () => {
  describe("When there's no matrix", () => {
    test('Shoud capture the error', () => {
      expect(() => {
        turnOnCells();
      }).toThrow(TypeError);
    });
  });
  describe('Given a 3x3 matrix with only alive content', () => {
    const matrix = [
      {
        isAlive: false,
      },
      {
        isAlive: false,
      },
      {
        isAlive: false,
      },
      {
        isAlive: false,
      },
      {
        isAlive: false,
      },
      {
        isAlive: false,
      },
      {
        isAlive: false,
      },
      {
        isAlive: false,
      },
      {
        isAlive: false,
      },
    ];
    turnOnCells(matrix);
    test('At least 2 items are alive', () => {
      const matrixFiltered = matrix.filter((cell) => cell.isAlive);
      expect(matrixFiltered.length).toBeGreaterThanOrEqual(2); //
    });
  });
});
