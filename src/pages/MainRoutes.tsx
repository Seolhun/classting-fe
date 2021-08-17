import React from 'react';

import { RouteModel } from '@/models';
import { RenderRoutes } from '@/containers';

export const mainRoutes: RouteModel[] = [
  {
    key: 'StartQuestionPage',
    name: 'StartQuestionPage',
    path: '/',
    exact: true,
    component: React.lazy(() => import('./questions/StartQuestionPage')),
  },
  {
    key: 'QuestionListPage',
    name: 'QuestionListPage',
    path: '/questions',
    exact: true,
    component: React.lazy(() => import('./questions/QuestionListPage')),
  },
  {
    key: 'QuestionPage',
    name: 'QuestionPage',
    path: '/questions/:id',
    exact: true,
    component: React.lazy(() => import('./questions/QuestionPage')),
  },
  {
    key: 'QuestionListPage',
    name: 'QuestionListPage',
    path: '/questions/:id/summary',
    exact: true,
    component: React.lazy(() => import('./questions/QuestionSummaryPage')),
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
