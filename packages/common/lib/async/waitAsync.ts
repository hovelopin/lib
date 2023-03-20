/**
 * setTimeout 함수를 가독성과 동기적으로 사용하기 위해 Promise로 Wrapping한 함수입니다.
 * @param time 
 * @returns {Promise<void>}
 * 이 함수는 1개의 매개변수 ( 시간 )을 인자로 받고 Promise를 반환합니다.
 */
export function waitAsync(time:number):Promise<void>{
  return new Promise((resolve) => {
    setTimeout(resolve , time);
  });
}