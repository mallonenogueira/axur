import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { routes } from '../../routes';

const router = createMemoryRouter(routes, {
  initialEntries: ['/']
});

describe('Renders home page correctly', async () => {
  it('Should render the page correctly', async () => {
    render(<RouterProvider router={router} />);

    const element = await screen.findByText(/solicitações/i);

    expect(element).toBeInTheDocument();
  });

  //TODO warning when revalidate after save
  it.skip('Should open modal and save web inspection', async () => {
    render(<RouterProvider router={router} />);

    const button = screen.getByRole('button', {
      name: /nova solicitação/i
    });

    userEvent.click(button);

    const input = await screen.findByLabelText(/Textos da nova solicitação/i);

    userEvent.type(input, 'bicicleta');

    const saveButton = screen.getByRole('button', {
      name: /salvar/i
    });

    userEvent.click(saveButton);

    expect(await screen.findByRole('link')).toHaveAttribute(
      'href',
      '/detalhes/123456789'
    );
  });
});
