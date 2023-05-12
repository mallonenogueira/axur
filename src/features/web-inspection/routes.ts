import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    lazy: () => import('./pages/Home')
  },
  {
    path: '/detalhes',
    lazy: () => import('./pages/Details')
  }
];
