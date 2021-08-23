import React from 'react';

import { WorkbookModel } from '@/models';
import { useTranslation } from 'react-i18next';

import { getWorkbookAnswerCount } from '@/helpers';

import { Workbook } from './Workbook';
import { WorkbookAnswerRatioPie } from './WorkbookAnswerRatioPie';
export interface WorkbookSummaryProps {
  workbook: WorkbookModel;
}

const WorkbookSummary: React.FC<WorkbookSummaryProps> = ({ workbook }) => {
  const { t } = useTranslation();

  const memoAnswerCount = React.useMemo(() => {
    return getWorkbookAnswerCount(workbook);
  }, [workbook]);

  const memoWrongCount = React.useMemo(() => {
    return workbook.results.length - memoAnswerCount;
  }, [workbook, memoAnswerCount]);

  return (
    <div>
      <Workbook workbook={workbook} />
      <div className="h-96">
        <WorkbookAnswerRatioPie
          data={[
            {
              id: t('workbooks:answer'),
              label: t('workbooks:answer'),
              value: memoAnswerCount,
            },
            {
              id: t('workbooks:wrongAnswer'),
              label: t('workbooks:wrongAnswer'),
              value: memoWrongCount,
            },
          ]}
        />
      </div>
    </div>
  );
};

export { WorkbookSummary };
export default WorkbookSummary;
