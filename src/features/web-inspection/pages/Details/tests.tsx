import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../../tests/testing-library';

import { routes } from '../../routes';

const router = createMemoryRouter(routes, {
  initialEntries: ['/detalhes/123456789']
});

describe('Renders details page correctly', async () => {
  it('Should render the page correctly', async () => {
    render(<RouterProvider router={router} />);

    const element = await screen.findByRole('link', {
      name: 'Solicitações'
    });

    expect(element).toHaveAttribute('href', '/');

    expect(screen.getByText(/Detalhes: 123456789/i)).toBeInTheDocument();
    expect(screen.getByText(/Status: Concluído/i)).toBeInTheDocument();
    expect(
      screen.getByText('http://hiring.axreng.com/index2.html')
    ).toBeInTheDocument();
  });
});
