import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import { workbookState } from '@/stores';
import { usePageState } from '@/hooks';
import { workbookDB } from '@/indexDB';
import { BreadCrumb, Button, Card, Meta, OverlayLoader } from '@/components';
import { WorkbookSummary } from '@/containers';

interface PathParam {
  workbookID: string;
}

const WorkbookSummaryPage: React.FC = () => {
  const { t } = useTranslation();
  const { workbookID } = useParams<PathParam>();
  const history = useHistory();
  const [workbook, setWorkbook] = useRecoilState(workbookState);
  const { loading, setLoading } = usePageState();

  React.useEffect(() => {
    (async () => {
      const storedWorkbook = await workbookDB.getWorkbookById(
        Number(workbookID),
      );
      if (storedWorkbook) {
        setWorkbook(storedWorkbook);
      }
      setLoading(false);
    })();
  }, [workbookID]);

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

  const completedWorkbook = workbook?.endedAt != null;
  return (
    <>
      <Meta title={`Workbook Summary ${workbookID} `} />
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
            {
              href: `/workbooks/${workbook.id}/summary`,
              name: workbook?.id > 0 ? `Summary` : '',
            },
          ]}
        />
      </section>
      <section className={classnames('mt-4')}>
        <OverlayLoader loading={loading}>
          {completedWorkbook ? (
            <Card>
              <WorkbookSummary workbook={workbook} />
              <div className="mt-2 text-right">
                <Button onClick={retryWorkbook}>{t('workbooks:retry')}</Button>
              </div>
            </Card>
          ) : (
            <div>{t('workbooks:inValid.notCompleted')}</div>
          )}
        </OverlayLoader>
      </section>
    </>
  );
};

export default WorkbookSummaryPage;
