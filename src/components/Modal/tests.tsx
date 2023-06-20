import { describe, it, expect, vi } from 'vitest';

import { Modal } from '.';
import {
  fireEvent,
  render,
  screen,
  waitFor
} from '../../tests/testing-library';

describe('Component: Modal', async () => {
  it('Should render the modal correctly', async () => {
    const { rerender } = render(
      <Modal visible={false} onClose={vi.fn()}>
        Texto do modal
      </Modal>
    );

    expect(screen.queryByText('Texto do modal')).not.toBeInTheDocument();

    rerender(
      <Modal visible onClose={vi.fn()}>
        Texto do modal
      </Modal>
    );

    expect(screen.getByText('Texto do modal')).toBeInTheDocument();
  });

  it('Should call onClose function when pressing the ESC key.', async () => {
    const handleClose = vi.fn();

    render(
      <Modal visible={true} onClose={handleClose}>
        Este teste não funcionou com userEvent
      </Modal>
    );

    fireEvent.keyUp(
      screen.getByText('Este teste não funcionou com userEvent'),
      {
        key: 'Escape',
        code: 'Escape'
      }
    );

    await waitFor(() => expect(handleClose).toBeCalled());
  });
});
