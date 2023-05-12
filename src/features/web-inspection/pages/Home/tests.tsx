import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { routes } from '../../routes';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

const router = createMemoryRouter(routes, {
  initialEntries: ['/']
});

describe('Renders home page correctly', async () => {
  it('Should render the page correctly', async () => {
    render(<RouterProvider router={router} />);

    const element = await screen.findByText(/página/i);

    expect(element).toBeInTheDocument();
  });
});
