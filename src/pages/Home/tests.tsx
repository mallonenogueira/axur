import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { HomePage } from '.';

describe('Renders home page correctly', async () => {
  it('Should render the page correctly', async () => {
    render(<HomePage />);
    const element = await screen.queryByText('Página');

    expect(element).toBeInTheDocument();
  });
});
