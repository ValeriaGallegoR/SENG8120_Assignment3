export default function calculateCanvasSize(
  length: number,
  width: number
) {
  return Math.sqrt(width * width + length * length);
}
