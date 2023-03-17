import { isArray , isBoolean, isNull, isObject } from "../is";

// Boolean 확인하는 테스트
describe('Boolean이 맞는지 테스트하는 테스트 코드', () => {
  it('true를 리턴합니다.', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  it('false를 리턴합니다.', () => {
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean([])).toBe(false);
  });
});

// Array 확인하는 테스트
describe('Array가 맞는지 테스트하는 테스트 코드', () => {
  it('true를 리턴합니다.', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([{ a: 1 , b: 2}])).toBe(true);
  })

  it('false를 리턴합니다.' , () => {
    expect(isArray(3)).toBe(false);
    expect(isArray('str')).toBe(false);
    expect(isArray(null)).toBe(false);
  })
})

// Null 확인하는 테스트
describe('Null이 맞는지 테스트하는 테스트 코드', () => {
  it('true를 리턴합니다.', () => {
    expect(isNull(null)).toBe(true);
  })

  it('false를 리턴합니다.', () => {
    expect(isNull({name : 'hp' , age : 28})).toBe(false);
    expect(isNull([1,2,3])).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull({})).toBe(false); 
    expect(isNull(undefined)).toBe(false);
  })
})

// 객체 확인하는 테스트
describe('객체가 맞는지 테스트하는 테스트 코드' , () => {
  it('true를 리턴합니다.', () => {
    expect(isObject({name : 'hp' , age : 28})).toBe(true);
    
  })

  it('false를 리턴합니다.', () => {
    expect(isObject(new Date())).toBe(false);
    expect(isObject(new Array())).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject(() => {})).toBe(false);
    expect(isObject(null)).toBe(false);
  })
})