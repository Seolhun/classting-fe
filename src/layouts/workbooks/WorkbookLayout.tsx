import React from 'react';
import classnames from 'classnames';

export interface WorkbookLayoutProps {}

const WorkbookLayout: React.FC<WorkbookLayoutProps> = ({ children }) => {
  return (
    <main className={classnames('px-4 py-2')}>
      <div>{children}</div>
    </main>
  );
};

export { WorkbookLayout };
export default WorkbookLayout;
