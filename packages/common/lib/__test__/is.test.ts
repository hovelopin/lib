import { isArray , isBoolean } from "../is";

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
