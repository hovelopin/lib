/**
 * null 값을 체크하는 함수
 * @param {number} value
 * @returns {boolean}
 * @description 이 함수는 1개의 매개변수를 받고 boolean 값을 return 하는 함수입니다.
 */

export function isNull(value : any):boolean{
  return Object.is(value , null);
}