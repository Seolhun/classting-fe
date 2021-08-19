import React from 'react';

import { RouteModel } from '@/models';
import { RenderRoutes } from '@/containers';

export const mainRoutes: RouteModel[] = [
  {
    key: 'WorkbookGeneratorPage',
    name: 'WorkbookGeneratorPage',
    path: '/',
    exact: true,
    component: React.lazy(() => import('./workbooks/WorkbookGeneratorPage')),
  },
  {
    key: 'WorkbookListPage',
    name: 'WorkbookListPage',
    path: '/workbooks',
    exact: true,
    component: React.lazy(() => import('./workbooks/WorkbookListPage')),
  },
  {
    key: 'WorkbookPage',
    name: 'WorkbookPage',
    path: '/workbooks/:workbookID',
    exact: true,
    component: React.lazy(() => import('./workbooks/WorkbookPage')),
  },
  {
    key: 'WorkbookSummaryPage',
    name: 'WorkbookSummaryPage',
    path: '/workbooks/:workbookID/summary',
    exact: true,
    component: React.lazy(() => import('./workbooks/WorkbookSummaryPage')),
  },
  {
    key: 'MyPage',
    name: 'MyPage',
    path: '/me',
    exact: true,
    component: React.lazy(() => import('./me/MyPage')),
  },
  {
    key: 'Error404',
    name: 'Error404',
    path: '*',
    component: React.lazy(() => import('./Error404')),
  },
];

const MainRoutes: React.FC = () => {
  return <RenderRoutes routes={mainRoutes} />;
};

export { MainRoutes };
export default MainRoutes;
