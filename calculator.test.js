const { sum, subtraction, multiplication, division } = require('../calculator-methods');

describe('calculator', () => {
  test('sum: ', () => {
    expect(sum(10, 3)).toBe(13);
  });
  test('subtraction: ', () => {
    expect(subtraction(7, 2)).toBe(5);
  });
  test('multiplication: ', () => {
    expect(multiplication(6, 2)).toBe(12);
  });

  test('division: ', () => {
    expect(division(10, 2)).toBe(5);
  });

})
