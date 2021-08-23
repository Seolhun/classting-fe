import React from 'react';
import classnames from 'classnames';

import { HeaderNavigation } from '@/components';
import { mainRoutes } from '@/pages/MainRoutes';
import { Link } from 'react-router-dom';

export interface WorkbookLayoutProps {}

const WorkbookLayout: React.FC<WorkbookLayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <HeaderNavigation
          className="h-16"
          routes={mainRoutes}
          logo={
            <Link to="/">
              <img
                className="cursor-pointer"
                src="https://accounts.classting.com/assets/dist/classting-logo-520f2b007c.png"
                alt="Workflow"
              />
            </Link>
          }
        />
      </header>
      <main
        className={classnames(
          'w-full h-full',
          'max-w-screen-xl mx-auto',
          'pt-16',
        )}
      >
        <div className={classnames('w-full h-full', 'py-4 px-4')}>
          {children}
        </div>
      </main>
    </>
  );
};

export { WorkbookLayout };
export default WorkbookLayout;
