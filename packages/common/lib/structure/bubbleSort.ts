/**
 * 버블 정렬 알고리즘 => 첫번째 인덱스부터 전체를 돌면서 다음 원소와 비교해서 값이 더 크면 뒤로 보낸다. ( 최악의 경우 O(n2) )
 * @param arr
 * @returns {T[]}
 * @description 이 함수는 하나의 배열을 매개변수로 받아서 ( 보통 숫자 )
 */

export function bubbleSort<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }

  return arr;
}
