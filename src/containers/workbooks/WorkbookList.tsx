import React from 'react';
import classnames from 'classnames';

import { WorkbookModel } from '@/models';
import { H2 } from '@/components';

import Workbook from './Workbook';

export interface WorkbookListProps {
  workbooks: WorkbookModel[];
}

const WorkbookList: React.FC<WorkbookListProps> = ({ workbooks }) => {
  return (
    <div>
      <H2>{workbooks.length}</H2>
      <div
        className={classnames(
          'grid grid-cols-2 gap-4',
          'sm:grid-cols-3',
          'mt-8',
        )}
      >
        {workbooks.map((workbook, i) => (
          <div key={i} className="cursor-pointer">
            <Workbook workbook={workbook} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { WorkbookList };
export default WorkbookList;
