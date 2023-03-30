export function arrayOf(count: number): number[] {
  return [...new Array(count).keys()];
}
