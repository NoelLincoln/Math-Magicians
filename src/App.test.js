import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

import App from './App';

test('App component snapshot for the / route', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('App component snapshot for the /calculator route', () => {
  const { asFragment } = render(
    <MemoryRouter initialEntries={['/calculator']}>
      <App />
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('App component snapshot for the /quotes route', () => {
  const { asFragment } = render(
    <MemoryRouter initialEntries={['/quotes']}>
      <App />
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('App component snapshot for an unknown route', () => {
  const { asFragment } = render(
    <MemoryRouter initialEntries={['/unknown']}>
      <App />
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
