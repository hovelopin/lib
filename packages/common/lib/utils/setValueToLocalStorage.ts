/**
 * 서버 환경에서 window 객체에 접근하지 못하기 때문에 서버 환경이 아닐때 localStorage에서 값을 설정하는 함수입니다.
 * @param key 
 * @param value 
 * @returns {void}
 * @description 이 함수는 key와 value를 매개변수로 전달받고 localStorage에 값을 설정해줍니다.
 */
export function setValueToLocalStorage(key : string , value : any):void{
  if(typeof window === 'undefined') return;
  window.localStorage.setItem(key , JSON.stringify(value));
}