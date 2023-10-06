import operate from './operate';

test('operate function - addition', () => {
  expect(operate(5, 3, '+')).toBe('8');
});

test('operate function - division by zero', () => {
  expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
});

test('operate function - multiplication', () => {
  expect(operate(4, 2, 'x')).toBe('8');
});

test('operate function - modulo with divisor as zero', () => {
  expect(operate(5, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
});

test('operate function - unknown operation', () => {
  expect(() => operate(3, 9, '&')).toThrow("Unknown operation '&'");
});

test('operate function - subtraction', () => {
  expect(operate(9, 2, '-')).toBe('7');
});

test('operate function - division', () => {
  expect(operate(10, 2, '÷')).toBe('5');
});

test('operate function - modulo', () => {
  expect(operate(8, 3, '%')).toBe('2');
});
