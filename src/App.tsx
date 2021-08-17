import 'tailwindcss/tailwind.css';
import './vendors';
import './assets/tailwind.css';
import './assets/app.scss';

// React
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { RecoilRoot } from 'recoil';

import i18n from './i18n';
import { ToastProvider } from './components';
import { MainRoutes } from './pages/MainRoutes';

const Root = () => {
  return (
    <RecoilRoot>
      <ToastProvider>
        <I18nextProvider i18n={i18n}>
          <HashRouter>
            <React.Suspense fallback={null}>
              <MainRoutes />
            </React.Suspense>
          </HashRouter>
        </I18nextProvider>
      </ToastProvider>
    </RecoilRoot>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
