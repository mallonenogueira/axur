/* eslint-disable react-refresh/only-export-components */

import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { RenderOptions, render } from '@testing-library/react';

import { theme } from '../styles/theme';

const WithThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: WithThemeProvider, ...options });

export * from '@testing-library/react';

export { customRender as render };
