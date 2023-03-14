/**
 * string인지 확인하는 함수
 * @param value 
 * @returns {boolean}
 * @description 이 함수는 1개의 매개변수를 받고 boolean 값을 return 하는 함수입니다.
 */

export function isString(value: any): boolean{
  return typeof value === "string";
}