import React from 'react';
import {
  render, screen, waitFor, act,
} from '@testing-library/react';

import '@testing-library/jest-dom';

import Quotes from './Quotes';

const mockApiResponse = [{ quote: 'Test Quote' }];

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => mockApiResponse,
  });
});

afterEach(() => {
  global.fetch.mockRestore();
});

describe('Quotes component', () => {
  it('Quotes component renders loading message initially', async () => {
    render(<Quotes />);
    const loadingMessage = await screen.findByText(
      (content, element) => element.tagName.toLowerCase() === 'p' && content === 'Loading...',
    );
    expect(loadingMessage).toBeInTheDocument();
  });

  it('fetches and displays a quote after loading', async () => {
    await act(async () => {
      render(<Quotes />);
    });

    await waitFor(() => {
      const quoteText = screen.getByText('Test Quote');
      expect(quoteText).toBeInTheDocument();
    });
  });
});
