import { lazy } from 'react';

const AppRoutes = [
  {
    path: '/',
    component: lazy(() => import('../pages/posts')),
    login: false,
    exact: true
  },
  {
    path: '/test',
    component: lazy(() => import('../pages/test')),
    login: false,
    exact: true
  },
];

export { AppRoutes };
