export default function paintRequiredCalculator(
  area: number,
  coveragePerLiter: number
) {
    if (area < 0){
      throw new Error("Area should be positive");
    }
    if (coveragePerLiter <= 0){
      throw new Error("CoveragePerLiter should be greater than zero");
    }
  return area / coveragePerLiter;
}
