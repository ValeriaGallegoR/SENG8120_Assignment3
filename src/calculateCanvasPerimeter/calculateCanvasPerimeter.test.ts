import calculateCanvasPerimeter from "./calculateCanvasPerimeter";

describe("calculateCanvasPerimeter", () => {
  test("should returns correct result", () => {
    const result = calculateCanvasPerimeter(10, 100);
    expect(result).toEqual(220);
  })

  test("should returns correct result when length and width are zero.", () => {
      const result = calculateCanvasPerimeter(0, 0);
      expect(result).toEqual(0);
    });

  test("should throw an error message when the width is negative and greater than length.", () => {
      expect(() => calculateCanvasPerimeter(10, -50)).toThrow("Invalid input: length and width must be non-negative.");
    });

  test("should throw an error message when the length is negative and greater than width.", () => {
    expect(() => calculateCanvasPerimeter(-50, 10)).toThrow("Invalid input: length and width must be non-negative.");
  });
});
