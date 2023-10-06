import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import '@testing-library/jest-dom';
import Header from './Header';

test('Header component snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
