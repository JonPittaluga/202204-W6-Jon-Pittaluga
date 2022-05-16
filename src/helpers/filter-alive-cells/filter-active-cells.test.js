import { filterAliveCells } from './filter-alive-cells.js';

// TODO: Improve testing with lateral cases and errors
describe('Given a matrix passed as a parameter returns a filtered array only with alive cells', () => {
  describe("When there's no matrix", () => {
    test('Shoud capture the error', () => {
      expect(() => {
        filterAliveCells();
      }).toThrow(TypeError);
    });
  });
  describe('Given an array with 1 alive cell', () => {
    test('A new array with one item', () => {
      const matrixOne = [
        {
          index: 0,
          isAlive: false,
        },
        {
          index: 1,
          isAlive: false,
        },
        {
          index: 2,
          isAlive: true,
        },
        {
          index: 3,
          isAlive: false,
        },
      ];
      const filteredMatrix = filterAliveCells(matrixOne);
      console.log(filteredMatrix);
      expect(filteredMatrix).toEqual([
        {
          index: 2,
          isAlive: true,
        },
      ]); //
    });
  });
  describe('Given an array with 5 alive cell', () => {
    test('Expect a new array with 5 items', () => {
      const matrix = [
        {
          index: 0,
          isAlive: false,
        },
        {
          index: 1,
          isAlive: false,
        },
        {
          index: 2,
          isAlive: true,
        },
        {
          index: 3,
          isAlive: true,
        },
        {
          index: 4,
          isAlive: true,
        },
        {
          index: 5,
          isAlive: true,
        },
        {
          index: 6,
          isAlive: true,
        },
        {
          index: 7,
          isAlive: false,
        },
      ];
      const filteredMatrix = filterAliveCells(matrix);
      console.log(filteredMatrix);
      expect(filteredMatrix).toEqual([
        {
          index: 2,
          isAlive: true,
        },
        {
          index: 3,
          isAlive: true,
        },
        {
          index: 4,
          isAlive: true,
        },
        {
          index: 5,
          isAlive: true,
        },
        {
          index: 6,
          isAlive: true,
        },
      ]); //
    });
  });
});
