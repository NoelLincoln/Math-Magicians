import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageNotFound from './PageNotFound';

test('PageNotFound component renders correctly', () => {
  render(<PageNotFound />);

  const pageNotFoundText = screen.getByText('Sorry, Page Not Found');
  expect(pageNotFoundText).toBeInTheDocument();
});

test('PageNotFound component matches snapshot', () => {
  const { asFragment } = render(<PageNotFound />);

  expect(asFragment()).toMatchSnapshot();
});
