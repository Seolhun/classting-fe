import React from 'react';

import { WorkbookModel } from '@/models';

import Workbook from './Workbook';
export interface WorkbookSummaryProps {
  workbook: WorkbookModel;
}

const WorkbookSummary: React.FC<WorkbookSummaryProps> = ({ workbook }) => {
  return (
    <div>
      <Workbook workbook={workbook} />
    </div>
  );
};

export { WorkbookSummary };
export default WorkbookSummary;
