import React from 'react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

import { WorkbookModel } from '@/models';
import { H4, Tag } from '@/components';
import { getWorkbookAnswerCount } from '@/helpers';
import { useDiffTime } from '@/hooks';

import WorkbookPassedTime from './WorkbookPassedTime';

export interface WorkbookProps {
  workbook: WorkbookModel;
}

const Workbook: React.FC<WorkbookProps> = ({ workbook }) => {
  const { t } = useTranslation();

  const { day, hour, minute, second } = useDiffTime(
    dayjs(workbook.endedAt),
    dayjs(workbook.startedAt),
  );

  const memoAnswerCount = React.useMemo(() => {
    return getWorkbookAnswerCount(workbook);
  }, [workbook]);

  const memoMissCount = React.useMemo(() => {
    return workbook.results.length - memoAnswerCount;
  }, [workbook, memoAnswerCount]);

  const memoAnswerRatio = React.useMemo(() => {
    return (memoAnswerCount / workbook.results.length) * 100;
  }, [workbook, memoAnswerCount]);

  const isFinished = workbook.endedAt;
  return (
    <div>
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
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <div className="font-bold">
            {t(`workbooks:answer`)}/{t(`workbooks:wrongAnswer`)}
          </div>
          <span>
            {isFinished ? `${memoAnswerCount}/${memoMissCount}` : ` - `}
          </span>
        </div>
        <div className="col-span-1">
          <div className="font-bold">{t(`workbooks:answerRatio`)}</div>
          <span>{isFinished ? `${memoAnswerRatio}%` : ` - `}</span>
        </div>
        <div className="col-span-2 text-right">
          <div className="font-bold">{t(`workbooks:takenTime`)}</div>
          <span>
            {isFinished ? (
              <WorkbookPassedTime
                day={day}
                hour={hour}
                minute={minute}
                second={second}
              />
            ) : (
              ` - `
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export { Workbook };
export default Workbook;
