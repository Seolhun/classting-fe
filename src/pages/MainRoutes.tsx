import React from 'react';

import { RouteModel } from '@/models';
import { RenderRoutes } from '@/containers';
import { WorkbookLayout } from '@/layouts';

import WorkbookGeneratorPage from './workbooks/WorkbookGeneratorPage';
import WorkbookListPage from './workbooks/WorkbookListPage';
import WorkbookPage from './workbooks/WorkbookPage';
import WorkbookSummaryPage from './workbooks/WorkbookSummaryPage';
import MyPage from './me/MyPage';

export const mainRoutes: RouteModel[] = [
  {
    key: 'WorkbookGeneratorPage',
    name: 'WorkbookGeneratorPage',
    path: '/',
    exact: true,
    component: WorkbookGeneratorPage,
  },
  {
    key: 'WorkbookListPage',
    name: 'Workbooks',
    path: '/workbooks',
    exact: true,
    component: WorkbookListPage,
    isNavigation: true,
    uniquePath: 'workbooks',
  },
  {
    key: 'WorkbookPage',
    name: 'WorkbookPage',
    path: '/workbooks/:workbookID',
    exact: true,
    component: WorkbookPage,
  },
  {
    key: 'WorkbookSummaryPage',
    name: 'WorkbookSummaryPage',
    path: '/workbooks/:workbookID/summary',
    exact: true,
    component: WorkbookSummaryPage,
  },
  {
    key: 'MyPage',
    name: 'Me',
    path: '/me',
    exact: true,
    component: MyPage,
    isNavigation: true,
    uniquePath: 'me',
  },
  {
    key: 'Error404',
    name: 'Error404',
    path: '*',
    component: React.lazy(() => import('./Error404')),
  },
];

const MainRoutes: React.FC = () => {
  return (
    <WorkbookLayout>
      <RenderRoutes routes={mainRoutes} />
    </WorkbookLayout>
  );
};

export { MainRoutes };
export default MainRoutes;
