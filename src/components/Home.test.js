import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

test('Home component snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
