import React from 'react';
import { useTranslation } from 'react-i18next';

import { WorkbookModel } from '@/models';
import { Card, Tag } from '@/components';

export interface WorkbookProps {
  workbook: WorkbookModel;
}

const Workbook: React.FC<WorkbookProps> = ({ workbook }) => {
  const { t } = useTranslation();

  return (
    <Card>
      {workbook.name && <div>{workbook.name}</div>}
      <div className="mt-1">
        <Tag>
          {t(`common:thingsOf`, {
            value: workbook.results.length,
          })}
        </Tag>
      </div>
    </Card>
  );
};

export { Workbook };
export default Workbook;
