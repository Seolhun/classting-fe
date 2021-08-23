import React from 'react';
import classnames from 'classnames';

import { Meta } from '@/components';
import { WorkbookGeneratorForm } from '@/containers';

const WorkbookGeneratorPage: React.FC = () => {
  return (
    <>
      <Meta title="Build Your Workbook" />
      <div className={classnames('max-w-md', 'mx-auto')}>
        <div className={'mt-10'}>
          <WorkbookGeneratorForm />
        </div>
      </div>
    </>
  );
};

export default WorkbookGeneratorPage;
