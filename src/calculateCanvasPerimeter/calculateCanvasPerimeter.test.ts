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
    
  test.todo("should throw an error message when the width is negative and greater than length");
  test.todo("should throw an error message when the length is negative and greater than width");
});
