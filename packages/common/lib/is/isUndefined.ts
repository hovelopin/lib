/**
 * undefined인지 확인하는 함수 
 * @param value 
 * @returns {boolean}
 * @description 이 함수는 1개의 매개변수를 받고 boolean 값을 return 합니다.
 */

export function isUndefined(value : any):boolean{
  return typeof value === "undefined"
}