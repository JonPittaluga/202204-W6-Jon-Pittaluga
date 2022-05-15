import { mapCells } from './map-cells.js';

describe('Given a width, a height and an array', () => {
  describe("When there's no matrix array", () => {
    test('Shoud capture the error', () => {
      expect(() => {
        mapCells(); // Both null and undefined work as inputs;
      }).toThrow(TypeError);
    });
  });
  // describe('When we call it on an emtpy array', () => {
  //   test('Should return undefined', () => {
  //     const arr = [];
  //     const callbackFn = (element) => element === 2;
  //     const result = findMethod(arr, callbackFn);
  //     expect(result).toBe(undefined);
  //   });
  // });
  // describe("When the array has not an item which pass the callback function's condition", () => {
  //   test('Should return 1', () => {
  //     const arr = [1, 3, 5, 7];
  //     const callbackFn = (element) => element % 2 === 0;
  //     const result = findMethod(arr, callbackFn);
  //     expect(result).toBe(undefined);
  //   });
  // });
  // describe("When the array has an item which pass the callback function's condition", () => {
  //   test('Should return the first item that passes the condition', () => {
  //     const arr = [1, 3, 5, 7];
  //     const callbackFn = (element) => element % 2 === 1;
  //     const result = findMethod(arr, callbackFn);
  //     expect(result).toBe(1);
  //   });
  // });
});
