import { getNeighbours } from './get-neighbours.js';

// TODO: Improve testing with lateral cases and errors
describe('Given a matrix after its cells have been mapped and a width as parameters', () => {
  describe("When there's no matrix", () => {
    test('Shoud capture the error', () => {
      expect(() => {
        getNeighbours();
      }).toThrow(TypeError);
    });
  });
  describe('Given a 3x3 matrix', () => {
    test('i = 0 has neighbours are 1, 3 and 4', () => {
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
      getNeighbours(matrix3x3, 3);
      expect(matrix3x3[0].neighbours).toEqual([1, 3, 4]); //
    });
    test('i = 1 has neighbours  0, 2, 3, 4 and 5', () => {
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
      getNeighbours(matrix3x3, 3);
      expect(matrix3x3[1].neighbours).toEqual([0, 2, 3, 4, 5]); //
    });
    test('i = 2 has neighbours 1, 4 and 5', () => {
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
      getNeighbours(matrix3x3, 3);
      expect(matrix3x3[2].neighbours).toEqual([1, 4, 5]); //
    });
    test('i = 3 has neighbours 0, 1, 4, 6, 7', () => {
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
      getNeighbours(matrix3x3, 3);
      expect(matrix3x3[3].neighbours).toEqual([0, 1, 4, 6, 7]); //
    });
    test('i = 4 has neighbours 0, 1, 2, 3, 5, 6, 7, 8', () => {
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
      getNeighbours(matrix3x3, 3);
      expect(matrix3x3[4].neighbours).toEqual([0, 1, 2, 3, 5, 6, 7, 8]); //
    });
    test('i = 5 has neighbours 1, 2, 4, 7, 8', () => {
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
      getNeighbours(matrix3x3, 3);
      expect(matrix3x3[5].neighbours).toEqual([1, 2, 4, 7, 8]); //
    });
    test('i = 6 has neighbours 3, 4, 7', () => {
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
      getNeighbours(matrix3x3, 3);
      expect(matrix3x3[6].neighbours).toEqual([3, 4, 7]); //
    });
    test('i = 7 has neighbours 3, 4, 5, 6, 8', () => {
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
      getNeighbours(matrix3x3, 3);
      expect(matrix3x3[7].neighbours).toEqual([3, 4, 5, 6, 8]); //
    });

    test('i = 8 has neighbours 4, 5, 7', () => {
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
      getNeighbours(matrix3x3, 3);
      expect(matrix3x3[8].neighbours).toEqual([4, 5, 7]); //
    });

    // test('i = 1 has firstRow true', () => {
    //   expect(matrix3x3[1].position).toEqual({
    //     firstRow: true,
    //     firstCol: false,
    //     lastRow: false,
    //     lastCol: false,
    //   }); //
    // });
    // test('i = 2 third item has firstRow and lastCol true', () => {
    //   expect(matrix3x3[2].position).toEqual({
    //     firstRow: true,
    //     firstCol: false,
    //     lastRow: false,
    //     lastCol: true,
    //   }); //
    // });
    // test('i = 3 has firstCol true', () => {
    //   expect(matrix3x3[3].position).toEqual({
    //     firstRow: false,
    //     firstCol: true,
    //     lastRow: false,
    //     lastCol: false,
    //   }); //
    // });
    // test('i = 4 has all false', () => {
    //   expect(matrix3x3[4].position).toEqual({
    //     firstRow: false,
    //     firstCol: false,
    //     lastRow: false,
    //     lastCol: false,
    //   }); //
    // });
    // test('i = 5 has lastCol true', () => {
    //   expect(matrix3x3[5].position).toEqual({
    //     firstCol: false,
    //     firstRow: false,
    //     lastRow: false,
    //     lastCol: true,
    //   }); //
    // });
    // test('i = 6 has firstCol and lastRow true', () => {
    //   expect(matrix3x3[6].position).toEqual({
    //     firstCol: true,
    //     firstRow: false,
    //     lastRow: true,
    //     lastCol: false,
    //   }); //
    // });
    // test('i = 7 has lastCol true', () => {
    //   expect(matrix3x3[7].position).toEqual({
    //     firstCol: false,
    //     firstRow: false,
    //     lastRow: true,
    //     lastCol: false,
    //   }); //
    // });
    // test('i = 8 has firstRow and firstCol as true', () => {
    //   expect(matrix3x3[8].position).toEqual({
    //     firstRow: false,
    //     firstCol: false,
    //     lastRow: true,
    //     lastCol: true,
    //   }); //
    // });
  });
});
