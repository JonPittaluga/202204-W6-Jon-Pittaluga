import { createMatrix } from './create-matrix.js';

// TODO: Improve testing with lateral cases and errors
describe('Given two values -width and height- a parameters ', () => {
  // describe("When there's no input", () => {
  //   test('Shoud capture the error', () => {
  //     expect(() => {
  //       createMatrix();
  //     }).toThrow(TypeError);
  //   });
  // });
  describe('Given both width and height', () => {
    const matrix3x3 = createMatrix(3, 3);
    test('it must have a length of 9', () => {
      expect(matrix3x3.length).toEqual(9); //
    });
    test('i = 1 has an object with a property of x', () => {
      expect(matrix3x3[1].x).toEqual(1); //
    });
    test('i = 1 has an object with a property of y', () => {
      expect(matrix3x3[1].y).toEqual(0); //
    });
    test('i = 1 has an object with a property called isAlive with a value of false', () => {
      expect(matrix3x3[1].isAlive).toBe(false); //
    });
    test('i = 1 has an object with a property called neighbours', () => {
      expect(matrix3x3[1].neighbours).toEqual([]); //
    });
    test('The position object has firstRow, firstCol, lastRow and lastCol properties', () => {
      expect(matrix3x3[2].position).toEqual({
        firstRow: false,
        firstCol: false,
        lastRow: false,
        lastCol: false,
      }); //
    });
  });
});
