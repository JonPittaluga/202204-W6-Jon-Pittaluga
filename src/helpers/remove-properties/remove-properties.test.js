import { removeProperties } from './remove-properties.js';

describe('Given a matrix as parameter the function removes specific properties', () => {
  describe("When there's no valid input parameter", () => {
    describe('When there is no input or is not an object', () => {
      test('Shoud capture the error', () => {
        expect(() => {
          removeProperties();
        }).toThrow(TypeError.message);
      });
      test('Shoud capture the error', () => {
        expect(() => {
          removeProperties(23);
        }).toThrow(TypeError.message);
      });
    });
  });

  describe("When there's an object and has the target parameters (to be deleted)", () => {
    test('Shoud return the object without x, y  and position properties', () => {
      const matrix3x3 = [
        {
          x: 0,
          y: 0,
          neighbours: [],
          position: {
            firstRow: true,
            firstCol: true,
            lastRow: false,
            lastCol: false,
          },
          isAlive: false,
        },
        {
          x: 1,
          y: 0,
          neighbours: [],
          position: {
            firstRow: true,
            firstCol: false,
            lastRow: false,
            lastCol: false,
          },
          isAlive: false,
        },
        {
          x: 2,
          y: 0,
          neighbours: [],
          position: {
            firstRow: true,
            firstCol: false,
            lastRow: false,
            lastCol: true,
          },
          isAlive: false,
        },
        {
          x: 0,
          y: 1,
          neighbours: [],
          position: {
            firstRow: false,
            firstCol: true,
            lastRow: false,
            lastCol: false,
          },
          isAlive: false,
        },
        {
          x: 1,
          y: 1,
          neighbours: [],
          position: {
            firstRow: false,
            firstCol: false,
            lastRow: false,
            lastCol: false,
          },
          isAlive: false,
        },
        {
          x: 2,
          y: 1,
          neighbours: [],
          position: {
            firstRow: false,
            firstCol: false,
            lastRow: false,
            lastCol: true,
          },
          isAlive: false,
        },
        {
          x: 0,
          y: 2,
          neighbours: [],
          position: {
            firstRow: false,
            firstCol: true,
            lastRow: true,
            lastCol: false,
          },
          isAlive: false,
        },
        {
          x: 1,
          y: 2,
          neighbours: [],
          position: {
            firstRow: false,
            firstCol: false,
            lastRow: true,
            lastCol: false,
          },
          isAlive: false,
        },
        {
          x: 2,
          y: 2,
          neighbours: [],
          position: {
            firstRow: false,
            firstCol: false,
            lastRow: true,
            lastCol: true,
          },
          isAlive: false,
        },
      ];
      removeProperties(matrix3x3);
      expect(matrix3x3[0]).toEqual({
        neighbours: [],
        isAlive: false,
      });
    });
  });
});
