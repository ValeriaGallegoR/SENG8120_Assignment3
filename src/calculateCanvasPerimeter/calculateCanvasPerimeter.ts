export default function calculateCanvasPerimeter(
  length: number,
  width: number
) {
  if (length < 0 || width < 0) {
    throw new Error('Invalid input: length and width must be non-negative.');
  }
  return 2 * (length + width);
}
