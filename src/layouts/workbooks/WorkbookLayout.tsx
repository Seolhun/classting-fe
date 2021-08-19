import React from 'react';
import classnames from 'classnames';

export interface WorkbookLayoutProps {}

const WorkbookLayout: React.FC<WorkbookLayoutProps> = ({ children }) => {
  return (
    <main className={classnames('w-full h-full', 'max-w-screen-xl mx-auto')}>
      {children}
    </main>
  );
};

export { WorkbookLayout };
export default WorkbookLayout;
