import { RouteObject } from 'react-router-dom';

import { ReactRouterLayout } from './components/Layout';
import { RootErrorLayout } from './components/RootErrorLayout';

import { routes as webInspectionRoutes } from './features/web-inspection/routes';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <ReactRouterLayout />,
    errorElement: <RootErrorLayout />,
    children: [...webInspectionRoutes]
  }
];
