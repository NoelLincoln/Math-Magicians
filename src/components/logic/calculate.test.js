import calculate from './calculate';

describe('calculate function', () => {
  it('should reset the calculator data object when AC is pressed', () => {
    const inputObject = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const result = calculate(inputObject, 'AC');

    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should add two numbers', () => {
    const inputObject = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const result = calculate(inputObject, '=');

    expect(result.total).toBe('15');
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });

  it('should subtract two numbers', () => {
    const inputObject = {
      total: '10',
      next: '5',
      operation: '-',
    };

    const result = calculate(inputObject, '=');

    expect(result.total).toBe('5');
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });

  it('should multiply two numbers', () => {
    const inputObject = {
      total: '4',
      next: '2',
      operation: 'x',
    };

    const result = calculate(inputObject, '=');

    expect(result.total).toBe('8');
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });
});
