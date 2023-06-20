import { describe, it, expect } from 'vitest';

import { Input } from '.';
import { render, screen } from '../../tests/testing-library';

describe('Component: Input', async () => {
  it('Should render the input correctly', async () => {
    render(<Input label="Test label" id="Test id" />);

    const element = screen.getByLabelText(/test label/i);

    expect(element).toBeInTheDocument();
  });
});
