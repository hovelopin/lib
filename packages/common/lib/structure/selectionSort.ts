/**
 * 선택 정렬 알고리즘 => 전체를 돌면서 값을 넣고 최소값을 찾아서 현재의 index 값과 바꿔준다. ( 최악의 경우 O(n2) )
 * @param arr
 * @returns {T[]}
 * @description 이 함수는 1개의 배열을 인자로 받아서 ( 보통 숫자 ) 정렬된 return 값을 반환합니다.
 */

import { swap } from '../utils/swap';

export function selectionSort<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
}
