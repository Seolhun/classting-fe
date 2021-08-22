import React from 'react';
import { useTranslation } from 'react-i18next';

import { WorkbookModel } from '@/models';
import { Card, H4, H6, Tag } from '@/components';
import { getWorkbookAnswerCount } from '@/helpers';

export interface WorkbookProps {
  workbook: WorkbookModel;
}

const Workbook: React.FC<WorkbookProps> = ({ workbook }) => {
  const { t } = useTranslation();

  const memoAnswerCount = React.useMemo(() => {
    return getWorkbookAnswerCount(workbook);
  }, [workbook]);

  const memoMissCount = React.useMemo(() => {
    return workbook.results.length - memoAnswerCount;
  }, [workbook, memoAnswerCount]);

  const memoAnswerRatio = React.useMemo(() => {
    return (memoAnswerCount / workbook.results.length) * 100;
  }, [workbook, memoAnswerCount]);

  return (
    <Card>
      <div>
        <Tag>
          {t(`workbooks:thingsOf`, {
            value: workbook.results.length,
          })}
        </Tag>
        {workbook?.endedAt ? (
          <Tag intent="success">{t(`workbooks:state.tags.done`)}</Tag>
        ) : (
          <Tag intent="warning">{t(`workbooks:state.tags.ing`)}</Tag>
        )}
      </div>
      <div className="mt-3">
        <H4 className="truncate">{workbook.name}</H4>
      </div>
      <div className="flex justify-between">
        <div>
          <div className="font-bold">
            {t(`workbooks:answer`)}/{t(`workbooks:wrongAnswer`)}
          </div>
          <span>{`${memoAnswerCount}/${memoMissCount}`}</span>
        </div>
        <div>
          <div className="font-bold">{t(`workbooks:answerRatio`)}</div>
          <span>{`${memoAnswerRatio}%`}</span>
        </div>
      </div>
    </Card>
  );
};

export { Workbook };
export default Workbook;
