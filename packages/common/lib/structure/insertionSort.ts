import { swap } from '../utils';

export function insertionSort<T>(arr: T[]) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 인덱스 j부터 1까지 1씩 감소하며 반복
      if (arr[j] < arr[j - 1]) {
        // 한칸씩 왼쪽으로 이동 , swap
        swap(arr, j, j - 1);
      } else {
        // 자기보다 작은 데이터를 만나면 멈춘다.
        break;
      }
    }
  }
}
