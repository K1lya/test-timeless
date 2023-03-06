import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { MainPage } from '../../../../pages/MainPage';

export enum AppRoutes {
  MAIN = 'main',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
};

export const routeConfig: RouteObject[] = [
  {
    path: RoutePaths.main,
    element: <MainPage />,
  },
];

export const router = createBrowserRouter(routeConfig);
