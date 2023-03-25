export function swap<T>(arr: T[], idx1: number, idx2: number) {
  return [([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])];
}
