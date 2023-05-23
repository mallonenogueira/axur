import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Input } from '.';

describe('Component: Input', async () => {
  it('Should render the input correctly', async () => {
    render(<Input label="Test label" id="Test id" />);

    const element = screen.getByLabelText(/test label/i);

    expect(element).toBeInTheDocument();
  });
});
