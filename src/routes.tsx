import { RouteObject } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { DetailsPage } from './pages/Details';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/detalhes',
    element: <DetailsPage />
  }
];
