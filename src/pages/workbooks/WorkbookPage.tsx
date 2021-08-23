import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

import { workbookDB } from '@/indexDB';
import { workbookState } from '@/stores';
import { WorkbookForm, WorkbookPassedTime } from '@/containers';
import { BreadCrumb, Button, H4, Meta, OverlayLoader, P } from '@/components';
import { useDiffTime, usePageState } from '@/hooks';
interface PathParam {
  workbookID: string;
}

const WorkbookPage: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const timeoutRef = React.useRef<any>(null);
  const { workbookID } = useParams<PathParam>();
  const [workbook, setWorkbook] = useRecoilState(workbookState);
  const { loading, setLoading } = usePageState();
  const [currentTime, setCurrentTime] = React.useState(dayjs.tz(new Date()));
  const { day, hour, minute, second } = useDiffTime(
    currentTime,
    dayjs(workbook.startedAt),
  );

  React.useEffect(() => {
    (async () => {
      const storedWorkbook = await workbookDB.startWorkbookByID(
        Number(workbookID),
      );
      if (storedWorkbook) {
        setWorkbook(storedWorkbook);
      }
      setLoading(false);
    })();
  }, [workbookID]);

  React.useEffect(() => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
    timeoutRef.current = setInterval(() => {
      const now = dayjs.tz(new Date());
      setCurrentTime(now);
    }, 1000);
    return () => {
      clearInterval(timeoutRef.current);
    };
  }, [workbook]);

  const retryWorkbook = React.useCallback(async () => {
    const id = await workbookDB.addWorkbook({
      ...workbook,
      results: workbook.results.map((result) => ({
        ...result,
        chosenAnswer: '',
      })),
      startedAt: undefined,
      endedAt: undefined,
    });
    history.push(`/workbooks/${id}`);
  }, [workbook]);

  const invalidWorkbookID = workbook?.id < 0;
  const completedWorkbook = workbook?.endedAt != null;
  return (
    <>
      <Meta title={`Your Workbook ${workbookID}`} />
      <section>
        <BreadCrumb
          items={[
            {
              href: '/workbooks',
              name: 'Workbooks',
            },
            {
              href: `/workbooks/${workbook.id}`,
              name: invalidWorkbookID ? '' : `${workbook.id}`,
            },
          ]}
        />
      </section>
      <section className="mt-4">
        <OverlayLoader loading={loading}>
          {invalidWorkbookID ? (
            <div>{t('workbooks:inValid.noData')}</div>
          ) : completedWorkbook ? (
            <div>
              <H4>{t('workbooks:state.completed')}</H4>
              <P className="text-gray-500">{t('workbooks:state.retry')}</P>
              <div className="mt-2">
                <Button onClick={retryWorkbook}>{t('workbooks:retry')}</Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-right">
                <WorkbookPassedTime
                  day={day}
                  hour={hour}
                  minute={minute}
                  second={second}
                >
                  {` ${t('common:time.passed')}`}
                </WorkbookPassedTime>
              </div>
              <div className="mt-2">
                <WorkbookForm />
              </div>
            </div>
          )}
        </OverlayLoader>
      </section>
    </>
  );
};

export default WorkbookPage;
