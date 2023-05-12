import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';
import GlobalStyles from './styles/GlobalStyles';

const router = createBrowserRouter(routes);

export function App() {
  return (
    <>
      <GlobalStyles />

      <RouterProvider router={router} />
    </>
  );
}
