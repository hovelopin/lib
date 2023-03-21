/**
 * 서버 환경에서 window 객체에 접근하지 못하기 때문에 서버 환경이 아닐때 localStorage에서 값을 추출하는 함수입니다.
 * @param key 
 * @returns {any}
 * @description 이 함수는 localStorage에 key를 매개변수로 넘겨주고 역직렬화된 값을 반환합니다.
 */
export function getValueFromLocalStorage(key : string){
  if(typeof window === 'undefined') return;
  const value = window.localStorage.getItem('key');
  return JSON.parse(value || 'null');
}