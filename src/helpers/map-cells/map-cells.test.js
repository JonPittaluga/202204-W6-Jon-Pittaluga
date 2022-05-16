import { mapCells } from './map-cells.js';

// TODO: Improve testing with lateral cases and errors
describe('Given a matrix passed as a parameter to the mapCells function', () => {
  describe("When there's no matrix", () => {
    test('Shoud capture the error', () => {
      expect(() => {
        mapCells();
      }).toThrow(TypeError);
    });
  });
  describe('Given a 3x3 matrix', () => {
    const matrix3x3 = [
      {
        x: 0,
        y: 0,
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
        x: 1,
        y: 0,
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
        y: 0,
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
        x: 0,
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
          lastCol: false,
        },
        isAlive: false,
      },
      {
        x: 0,
        y: 2,
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
        x: 1,
        y: 2,
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
        y: 2,
        neighbours: [],
        position: {
          firstRow: false,
          firstCol: false,
          lastRow: false,
          lastCol: false,
        },
        isAlive: false,
      },
    ];
    mapCells(matrix3x3, 3, 3);
    test('i = 0 has firstRow and firstCol as true', () => {
      expect(matrix3x3[0].position).toEqual({
        firstRow: true,
        firstCol: true,
        lastRow: false,
        lastCol: false,
      }); //
    });
    test('i = 1 has firstRow true', () => {
      expect(matrix3x3[1].position).toEqual({
        firstRow: true,
        firstCol: false,
        lastRow: false,
        lastCol: false,
      }); //
    });
    test('i = 2 third item has firstRow and lastCol true', () => {
      expect(matrix3x3[2].position).toEqual({
        firstRow: true,
        firstCol: false,
        lastRow: false,
        lastCol: true,
      }); //
    });
    test('i = 3 has firstCol true', () => {
      expect(matrix3x3[3].position).toEqual({
        firstRow: false,
        firstCol: true,
        lastRow: false,
        lastCol: false,
      }); //
    });
    test('i = 4 has all false', () => {
      expect(matrix3x3[4].position).toEqual({
        firstRow: false,
        firstCol: false,
        lastRow: false,
        lastCol: false,
      }); //
    });
    test('i = 5 has lastCol true', () => {
      expect(matrix3x3[5].position).toEqual({
        firstCol: false,
        firstRow: false,
        lastRow: false,
        lastCol: true,
      }); //
    });
    test('i = 6 has firstCol and lastRow true', () => {
      expect(matrix3x3[6].position).toEqual({
        firstCol: true,
        firstRow: false,
        lastRow: true,
        lastCol: false,
      }); //
    });
    test('i = 7 has lastCol true', () => {
      expect(matrix3x3[7].position).toEqual({
        firstCol: false,
        firstRow: false,
        lastRow: true,
        lastCol: false,
      }); //
    });
    test('i = 8 has firstRow and firstCol as true', () => {
      expect(matrix3x3[8].position).toEqual({
        firstRow: false,
        firstCol: false,
        lastRow: true,
        lastCol: true,
      }); //
    });
  });
});
