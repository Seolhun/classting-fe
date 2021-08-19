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
      {workbook.name && <div>이름 : {workbook.name}</div>}
      <div className="mt-1">
        <Tag>{t(`workbooks:difficulties.${difficulty}`)}</Tag>
        <Tag>{t(`workbooks:type.${type}`)}</Tag>
      </div>
      <div>개수 : {workbook.results.length}</div>
    </Card>
  );
};

export { Workbook };
export default Workbook;
