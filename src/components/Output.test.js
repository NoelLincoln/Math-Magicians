import React from 'react';
import { render } from '@testing-library/react';
import Output from './Output';

test('Output component snapshot', () => {
  const { asFragment } = render(<Output value="Sample Value" />);
  expect(asFragment()).toMatchSnapshot();
});

test('Output component displays the value correctly', () => {
  const { getByTestId } = render(<Output value="12345" />);
  const inputField = getByTestId('inputField');

  expect(inputField.value).toBe('12345');
});
