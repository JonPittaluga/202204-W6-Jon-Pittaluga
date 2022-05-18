import { consoleRender } from './console-render.js';

describe('Given a matrix passed as a parameter creates a board and prints to the console depending on the value of the isAlive boolean', () => {
  describe("When there's no matrix", () => {
    test('Shoud capture the error', () => {
      expect(() => {
        consoleRender();
      }).toThrow(TypeError);
    });
  });
  describe('Given an array with 1 alive cell', () => {
    test('A new array with one object with isAlive true', () => {
      const matrixOne = [
        { isAlive: false },
        { isAlive: false },
        { isAlive: true },
        { isAlive: false },
      ];
      const board = consoleRender(matrixOne);
      expect(board).toEqual(['  ', '  ', '<·>', '  ']); //
    });
    test("An array with all isAlive object's property = false", () => {
      const matrixOne = [
        { isAlive: false },
        { isAlive: false },
        { isAlive: false },
        { isAlive: false },
      ];
      const board = consoleRender(matrixOne);
      expect(board).toEqual(['  ', '  ', '  ', '  ']); //
    });
  });
});
