import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    lazy: () => import('./pages/Home')
  },
  {
    path: '/detalhes/:id',
    lazy: () => import('./pages/Details')
  }
];
