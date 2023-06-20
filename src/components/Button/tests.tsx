import { describe, it, expect } from 'vitest';

import { Button } from '.';
import { render, screen } from '../../tests/testing-library';

describe('Component: Button', async () => {
  it('Should render the button correctly', async () => {
    render(<Button>Texto do botão</Button>);

    const element = screen.getByText('Texto do botão');

    expect(element).toBeInTheDocument();
  });
});
