import React from 'react';

import { WorkbookModel } from '@/models';

export interface WorkbookListProps {
  workbooks: WorkbookModel[];
}

const WorkbookList: React.FC<WorkbookListProps> = ({ workbooks }) => {
  return (
    <div>
      {workbooks.map((workbook) => {
        <div>{workbook.results.length}</div>;
      })}
    </div>
  );
};

export { WorkbookList };
export default WorkbookList;
