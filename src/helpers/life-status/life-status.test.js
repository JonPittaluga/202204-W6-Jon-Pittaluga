import { lifeStatus } from './life-status.js';

describe('Given a matrix passed as a parameter creates a board and prints to the console depending on the value of the isAlive boolean', () => {
  describe("When there's no matrix", () => {
    test('Shoud capture the error', () => {
      expect(() => {
        lifeStatus();
      }).toThrow(TypeError);
    });
  });
  // describe('Given a matrix with 1 alive cell', () => {
  //   test('Should mutate the cell isAlive to false ', () => {
  //     const matrix3x3 = [
  //       {
  //         neighbours: [12],
  //         isAlive: true,
  //       },
  //       {
  //         neighbours: [21],
  //         isAlive: false,
  //       },
  //       {
  //         neighbours: [32],
  //         isAlive: false,
  //       },
  //       {
  //         neighbours: [42],
  //         isAlive: false,
  //       },
  //       {
  //         neighbours: [1],
  //         isAlive: false,
  //       },
  //       {
  //         neighbours: [2],
  //         isAlive: false,
  //       },
  //       {
  //         neighbours: [3],
  //         isAlive: false,
  //       },
  //       {
  //         neighbours: [3],
  //         isAlive: false,
  //       },
  //       {
  //         neighbours: [33],
  //         isAlive: false,
  //       },
  //     ];
  //     lifeStatus(matrix3x3);
  //     expect(matrix3x3).toEqual([
  //       {
  //         neighbours: [12],
  //         isAlive: false,
  //       },
  //       {
  //         neighbours: [21],
  //         isAlive: false,
  //       },
  //       {
  //         neighbours: [32],
  //         isAlive: false,
  //       },
  //       {
  //         neighbours: [42],
  //         isAlive: false,
  //       },
  //       {
  //         neighbours: [1],
  //         isAlive: false,
  //       },
  //       {
  //         neighbours: [2],
  //         isAlive: false,
  //       },
  //       {
  //         neighbours: [3],
  //         isAlive: false,
  //       },
  //       {
  //         neighbours: [3],
  //         isAlive: false,
  //       },
  //       {
  //         neighbours: [33],
  //         isAlive: false,
  //       },
  //     ]); //
  //   });
  //   // test("An array with all isAlive object's property = false", () => {
  //   //   const matrixOne = [
  //   //     { isAlive: false },
  //   //     { isAlive: false },
  //   //     { isAlive: false },
  //   //     { isAlive: false },
  //   //   ];
  //   //   const board = consoleRender(matrixOne);
  //   //   expect(board).toEqual([' ', ' ', ' ', ' ']); //
  //   // });
  // });
});
