import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const router = createBrowserRouter(routes);

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <RouterProvider router={router} />

        <div id="container-modal" />
      </ThemeProvider>
    </>
  );
}
