import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/node';

import { handlers } from './features/web-inspection/mocks/handlers';

export const server = setupServer(...handlers);

beforeAll(() => {
  const container = document.createElement('div');

  container.id = 'container-modal';

  document.body.appendChild(container);
});

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
