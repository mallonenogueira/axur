import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe('Component: Button', async () => {
  it('Should render the button correctly', async () => {
    render(<Button>Texto do botão</Button>);

    const element = screen.getByText('Texto do botão');

    expect(element).toBeInTheDocument();
  });
});
