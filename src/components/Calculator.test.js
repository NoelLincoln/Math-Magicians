import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('Calculator component renders without errors', () => {
  render(<Calculator />);
});

test('Calculator displays output correctly', () => {
  const { getByTestId } = render(<Calculator />);
  const outputElement = getByTestId('inputField');
  expect(outputElement.textContent).toBe('');
});

test('Calculator buttons trigger click events', () => {
  const { getByText } = render(<Calculator />);
  const button = getByText('7');
  fireEvent.click(button);
});
