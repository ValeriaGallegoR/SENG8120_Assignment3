import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });

test.todo("should throw an error message when the area is negative.");
test.todo("should throw an error message when the coveragePerLiter is negative.");
test.todo("should throw an error message when the coveragePerLiter is zero. Dividing by zero is not possible");
test.todo("should return expected result when the area is zero.");
});
