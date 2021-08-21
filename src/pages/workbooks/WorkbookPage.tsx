import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

import { workbookDB } from '@/indexDB';
import { workbookState } from '@/stores';
import { WorkbookForm, WorkbookPassedTime } from '@/containers';
import { BreadCrumb, Meta, OverlayLoader } from '@/components';
import { useDiffTime, usePageState } from '@/hooks';
interface PathParam {
  workbookID: string;
}

const WorkbookPage = () => {
  const { t } = useTranslation();
  const timeoutRef = React.useRef<any>(null);
  const { workbookID } = useParams<PathParam>();
  const [workbook, setWorkbook] = useRecoilState(workbookState);
  const { loading, setLoading } = usePageState();
  const [currentTime, setCurrentTime] = React.useState(dayjs.tz(new Date()));
  const { day, hour, minute, second } = useDiffTime(
    currentTime,
    dayjs(workbook.startDate),
  );

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

  React.useEffect(() => {
    (async () => {
      const storedWorkbook = await workbookDB.startByID(Number(workbookID));
      if (storedWorkbook) {
        setWorkbook(storedWorkbook);
      }
      setLoading(false);
    })();
  }, [workbookID]);

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
              name: workbook?.id > 0 ? `${workbook.id}` : '',
            },
          ]}
        />
      </section>
      <section className="mt-4">
        <OverlayLoader loading={loading}>
          {workbook?.id > 0 ? (
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
          ) : (
            <div>{t('workbooks:inValid.noData')}</div>
          )}
        </OverlayLoader>
      </section>
    </>
  );
};

export default WorkbookPage;
