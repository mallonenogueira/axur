import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Component } from '.';

describe('Renders details page correctly', async () => {
  it('Should render the page correctly', async () => {
    render(<Component />);
    const element = await screen.queryByText('Detalhes');

    expect(element).toBeInTheDocument();
  });
});
